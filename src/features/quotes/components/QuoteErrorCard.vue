<script lang="ts" setup>
import GlassBaseCard from '@/ui/components/GlassBaseCard.vue'

interface Props {
  message: string
}

defineProps<Props>()

const emit = defineEmits<{
  (e: 'retry'): void
}>()

const retry = () => {
  emit('retry')
}

defineOptions({
  name: 'QuoteErrorCard',
})
</script>

<template>
  <GlassBaseCard>
    <div class="quote-error-card">
      <div
        class="quote-error-card__icon"
        role="img"
        aria-label="Error"
        data-test="error-icon-think"
      >
        🤔
      </div>
      <h2 class="font-quote quote-error-card__title">Well, this is awkward...</h2>
      <p class="font-ui quote-error-card__message">
        {{ message }}
      </p>
      <button @click="retry" class="glass quote-error-card__button font-ui">
        Give it another shot
      </button>
    </div>
  </GlassBaseCard>
</template>

<style lang="css" scoped>
.quote-error-card {
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
}

.quote-error-card__icon {
  font-size: 3.75rem;
  margin-bottom: 1rem;
}

.quote-error-card__title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: hsl(var(--foreground));
}

.quote-error-card__message {
  font-size: 1.125rem;
  color: hsl(var(--foreground) / 0.8);
  margin-bottom: 1.5rem;
}

.quote-error-card__button {
  border-radius: 0.75rem;
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  color: hsl(var(--foreground));
  transition: transform 0.2s;
  cursor: pointer;
  border: none;
  background: none;
}

.quote-error-card__button:hover {
  transform: scale(1.05);
}

.quote-error-card__button:active {
  transform: scale(0.95);
}

.quote-error-card__button:focus-visible {
  outline: 2px solid hsl(var(--ring));
  outline-offset: 2px;
}

@media (min-width: 640px) {
  .quote-error-card {
    padding: 2.5rem;
  }

  .quote-error-card__title {
    font-size: 1.8rem;
  }
}

@media (min-width: 1024px) {
  .quote-error-card {
    padding: 3rem;
  }
}
</style>
