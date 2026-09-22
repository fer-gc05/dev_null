<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    default: false
  },
  accent: {
    type: String,
    default: 'green'
  }
})

defineEmits(['select'])
</script>

<template>
  <div
    class="item"
    :class="[`accent-${accent}`, { active: isActive }]"
    role="button"
    tabindex="0"
    @click="$emit('select')"
    @keydown.enter="$emit('select')"
  >
    {{ title }}
  </div>
</template>
