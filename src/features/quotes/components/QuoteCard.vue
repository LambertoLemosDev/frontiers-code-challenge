<script lang="ts" setup>
import type Quote from '@/features/quotes/domain/Quote.ts'
import GlassBaseCard from '@/ui/components/GlassBaseCard.vue'

const { quote } = defineProps<{
  quote: Quote
}>()
</script>
<template>
  <GlassBaseCard>
    <blockquote class="quote-card__content">
      <p class="font-quote quote-card__text-wrapper">
        <span class="quote-card__quote-mark--open" aria-hidden="true">"</span>
        <span class="quote-card__text font-quote">{{ quote.content }}</span>
        <span class="quote-card__quote-mark--close" aria-hidden="true">"</span>
      </p>

      <footer class="quote-card__footer">
        <cite class="quote-card__author font-ui">— {{ quote.author }}</cite>
      </footer>
    </blockquote>
  </GlassBaseCard>
</template>

<style lang="css" scoped>
.quote-card__content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.quote-card__text-wrapper {
  position: relative;
}

.quote-card__text {
  font-size: 1.5rem;
  line-height: 1.6;
  color: hsl(var(--foreground));
  position: relative;
  z-index: 10;
}

.quote-card__quote-mark--open {
  font-size: 3rem;
  color: hsl(var(--accent) / 0.6);
  position: absolute;
  top: -1.5rem;
  left: -0.5rem;
}

.quote-card__quote-mark--close {
  font-size: 3rem;
  color: hsl(var(--accent) / 0.6);
  margin-left: 0.25rem;
}

.quote-card__footer {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.quote-card__author {
  font-size: 1.125rem;
  color: hsl(var(--foreground) / 0.9);
  font-weight: 500;
  font-style: normal;
}

@media (min-width: 640px) {
  .quote-card {
    padding: 2.5rem;
  }

  .quote-card__text {
    font-size: 1.8rem;
  }

  .quote-card__quote-mark--open {
    font-size: 3.75rem;
    left: -1rem;
  }

  .quote-card__quote-mark--close {
    font-size: 3.75rem;
  }

  .quote-card__author {
    font-size: 1.25rem;
  }
}

@media (min-width: 1024px) {
  .quote-card__text {
    font-size: 2.25rem;
  }
}
</style>
