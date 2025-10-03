<script setup lang="ts">

const emit = defineEmits<{
  (e: 'onClick'): void
}>()
const handleClick = () => {
  emit('onClick')
}
const { text } = defineProps<{
  text: string
  disabled: boolean
}>()
defineOptions({
  name: 'PrimaryButton',
})
</script>

<template>
  <div class="primary-button-container">
    <button
      @click="handleClick"
      :class="{ 'primary-button--disabled': disabled }"
      :disabled="disabled"
      class="primary-button glass font-ui"
    >
      {{ text }}
    </button>
  </div>
</template>

<style scoped>
.primary-button {
  border-radius: 0.75rem;
  padding: 1rem 2rem;
  font-size: 1.125rem;
  font-weight: 600;
  color: hsl(var(--foreground));
  transition: all 0.2s;
  cursor: pointer;
  border: none;
}

.primary-button:hover {
  transform: scale(1.05);
}

.primary-button:active {
  transform: scale(0.95);
}

.primary-button:focus-visible {
  outline: 2px solid hsl(var(--ring));
  outline-offset: 2px;
}

.primary-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

.primary-button--disabled:hover {
  transform: scale(1);
}

.primary-button-container {
  display: flex;
  justify-content: center;
}
</style>
