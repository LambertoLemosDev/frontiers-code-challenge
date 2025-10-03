<script lang="ts" setup>
import { defineOptions } from 'vue'

defineOptions({ name: 'GlassBaseCard' })
</script>

<template>
  <div class="glass-base-card glass" data-test="glass-base-card">
    <slot />
  </div>
</template>

<style scoped>
.glass-base-card {
  border-radius: 1rem;
  padding: 2rem;
  min-height: 340px;
}

@media (min-width: 640px) {
  .glass-base-card {
    padding: 2.5rem;
  }
}

@media (min-width: 1024px) {
  .card {
    padding: 3rem;
  }
}
</style>
