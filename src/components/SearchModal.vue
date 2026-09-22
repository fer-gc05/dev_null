<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { searchIndex } from '../data/search-index'
import type { SearchIndexItem } from '../data/types'

const props = defineProps<{ isOpen: boolean }>()
const emit = defineEmits<{ close: [] }>()

const router = useRouter()
const searchInput = ref<HTMLInputElement | null>(null)
const query = ref('')
const highlightedIndex = ref(0)

const filteredResults = computed<SearchIndexItem[]>(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return searchIndex.slice(0, 8)
  return searchIndex
    .filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.section.toLowerCase().includes(q) ||
        item.keywords.some((k) => k.toLowerCase().includes(q))
    )
    .slice(0, 10)
})

watch(
  () => props.isOpen,
  async (open) => {
    if (open) {
      query.value = ''
      highlightedIndex.value = 0
      await nextTick()
      searchInput.value?.focus()
    }
  }
)

watch(filteredResults, () => {
  highlightedIndex.value = 0
})

const highlightNext = () => {
  if (highlightedIndex.value < filteredResults.value.length - 1) {
    highlightedIndex.value++
  }
}

const highlightPrev = () => {
  if (highlightedIndex.value > 0) {
    highlightedIndex.value--
  }
}

const goToResult = () => {
  const result = filteredResults.value[highlightedIndex.value]
  if (result) {
    router.push(result.path)
    emit('close')
  }
}

const onKeyDown = (e: KeyboardEvent) => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault()
    if (props.isOpen) {
      emit('close')
    } else {
      // parent handles open
    }
  }
}

onMounted(() => {
  document.addEventListener('keydown', onKeyDown)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeyDown)
})
</script>

<template>
  <Teleport to="body">
    <div v-if="isOpen" class="search-overlay" @click.self="emit('close')">
      <div class="search-modal" role="dialog" aria-modal="true" aria-label="Búsqueda">
        <div class="search-input-row">
          <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            ref="searchInput"
            v-model="query"
            type="text"
            placeholder="Buscar comando o concepto..."
            @keydown.escape="emit('close')"
            @keydown.down.prevent="highlightNext"
            @keydown.up.prevent="highlightPrev"
            @keydown.enter.prevent="goToResult"
          />
        </div>
        <div class="search-results">
          <button
            v-for="(result, index) in filteredResults"
            :key="result.id"
            class="search-result"
            :class="{ highlighted: index === highlightedIndex }"
            type="button"
            @click="
              router.push(result.path);
              emit('close')
            "
            @mouseenter="highlightedIndex = index"
          >
            <span class="result-section">{{ result.section }}</span>
            <span class="result-title">{{ result.title }}</span>
          </button>
          <div v-if="filteredResults.length === 0" class="search-empty">
            Sin resultados para "{{ query }}"
          </div>
        </div>
        <div class="search-hint">
          <kbd>↑↓</kbd> navegar · <kbd>↵</kbd> ir · <kbd>esc</kbd> cerrar
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.search-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  z-index: 1000;
  display: flex;
  justify-content: center;
  padding-top: 15vh;
}

.search-modal {
  width: min(560px, calc(100vw - 32px));
  background: var(--panel-bg);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  max-height: 70vh;
  display: flex;
  flex-direction: column;
}

.search-input-row {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 16px;
  border-bottom: 1px solid var(--border-color);
}

.input-icon {
  width: 18px;
  height: 18px;
  color: var(--muted);
  flex-shrink: 0;
}

.search-input-row input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: var(--text-main);
  font-family: var(--font-ui);
  font-size: 1rem;
}

.search-input-row input::placeholder {
  color: var(--muted);
}

.search-results {
  overflow-y: auto;
  padding: 8px;
  flex: 1;
}

.search-result {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 10px 12px;
  background: transparent;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  transition: background 0.15s ease;
}

.search-result.highlighted {
  background: rgba(46, 160, 67, 0.12);
}

.result-section {
  font-size: 0.75rem;
  color: var(--muted);
  background: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  padding: 2px 8px;
  flex-shrink: 0;
}

.result-title {
  color: var(--text-main);
  font-size: 0.95rem;
  font-family: var(--font-code);
}

.search-empty {
  padding: 24px;
  text-align: center;
  color: var(--muted);
  font-size: 0.9rem;
}

.search-hint {
  padding: 10px 16px;
  border-top: 1px solid var(--border-color);
  color: var(--muted);
  font-size: 0.75rem;
  text-align: center;
}

.search-hint kbd {
  font-family: var(--font-code);
  background: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: 3px;
  padding: 1px 5px;
  font-size: 0.7rem;
}
</style>
