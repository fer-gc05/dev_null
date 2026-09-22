import { ref, watch } from 'vue'

const STORAGE_KEY = 'devnull-visited'

function loadVisited(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as string[]) : []
  } catch {
    return []
  }
}

const visited = ref<string[]>(loadVisited())

watch(
  visited,
  (value) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
  },
  { deep: true }
)

export function useProgress() {
  const markVisited = (id: string) => {
    if (!visited.value.includes(id)) {
      visited.value.push(id)
    }
  }

  const isVisited = (id: string) => visited.value.includes(id)

  return { visited, markVisited, isVisited }
}
