<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  accentColor: {
    type: String,
    default: 'var(--green)'
  }
})
</script>

<template>
  <div class="info-panel">
    <h2 :style="{ color: accentColor }">{{ title }}</h2>
    <slot />
  </div>
</template>
