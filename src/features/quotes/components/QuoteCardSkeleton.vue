<script lang="ts" setup>
import GlassBaseCard from '@/ui/components/GlassBaseCard.vue'

defineOptions({
  name: 'QuoteCardSkeleton',
})
</script>

<template>
  <GlassBaseCard>
    <div class="quote-card-skeleton animate-pulse">
      <div class="quote-card-skeleton__lines">
        <div class="quote-card-skeleton__line quote-card-skeleton__line--full glass shimmer"></div>
        <div class="quote-card-skeleton__line quote-card-skeleton__line--11-12 glass shimmer"></div>
        <div class="quote-card-skeleton__line quote-card-skeleton__line--4-5 glass shimmer"></div>
      </div>

      <div class="quote-card-skeleton__author glass shimmer"></div>
    </div>
  </GlassBaseCard>
</template>

<style lang="css" scoped>
.quote-card-skeleton {
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.quote-card-skeleton__lines {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.quote-card-skeleton__line {
  height: 2rem;
  border-radius: 0.5rem;
}

.quote-card-skeleton__line--full {
  width: 100%;
}

.quote-card-skeleton__line--11-12 {
  width: 91%;
}

.quote-card-skeleton__line--4-5 {
  width: 80%;
}

.quote-card-skeleton__author {
  height: 1.5rem;
  border-radius: 0.5rem;
  width: 12rem;
}

@media (min-width: 640px) {
  .quote-card-skeleton {
    padding: 2.5rem;
  }
}

@media (min-width: 1024px) {
  .quote-card-skeleton {
    padding: 3rem;
  }
}
</style>
