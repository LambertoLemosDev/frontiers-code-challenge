<script setup lang="ts">
import QuoteCard from '@/features/quotes/components/QuoteCard.vue'
import QuoteErrorCard from '@/features/quotes/components/QuoteErrorCard.vue'
import QuoteCardSkeleton from '@/features/quotes/components/QuoteCardSkeleton.vue'
import PrimaryButton from '@/ui/components/PrimaryButton.vue'
import { onMounted } from 'vue'
import useQuote from '@/features/quotes/composables/UseQuote.ts'
import { STATUS } from '@/features/quotes/domain/QuoteStates.ts'
import QuoteHttpRepository from '@/features/quotes/services/QuoteHttpRepository.ts'

const quoteRepo = new QuoteHttpRepository()
const { state, fetchQuote } = useQuote(quoteRepo)

onMounted(fetchQuote)
</script>

<template>
  <main class="quote-index-page">
    <div class="quote-index-page__content">
      <header class="quote-index-page__header">
        <h1 class="quote-index-page__title font-quote">Quotable</h1>
        <p class="quote-index-page__subtitle font-ui">Discover through timeless knowledge</p>
      </header>
      <div aria-live="polite" class="index-quote-slot" aria-atomic="true">
        <Transition name="quote-transition" mode="out-in">
          <QuoteCard v-if="state.status === STATUS.OK" :quote="state.quote" key="quote-card" />
          <QuoteErrorCard
            v-else-if="state.status === STATUS.ERROR"
            :message="state.errMessage"
            key="error"
            @retry="fetchQuote"
          />
          <QuoteCardSkeleton v-else-if="state.status === STATUS.LOADING" key="skeleton" />
        </Transition>
      </div>

      <Transition name="button-fade">
        <div class="quote-index-page__buton-container" v-show="state.status !== STATUS.ERROR">
          <PrimaryButton
            @onClick="fetchQuote"
            :disabled="state.status === STATUS.LOADING"
            :text="'Ask for a quote'"
          />
        </div>
      </Transition>
    </div>
  </main>
</template>
<style scoped>
.quote-index-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;
}

.quote-index-page__content {
  width: 100%;
  max-width: 42rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.quote-index-page__header {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.quote-index-page__title {
  font-size: 2.25rem;
  font-weight: 700;
  color: hsl(var(--foreground));
}

.quote-index-page__subtitle {
  font-size: 1.125rem;
  color: hsl(var(--foreground) / 0.8);
}

.index-quote-slot {
  min-height: 340px;
}

@media (min-width: 640px) {
  .quote-index-page {
    padding: 3rem 1.5rem;
  }

  .quote-index-page__title {
    font-size: 3rem;
  }
}

@media (min-width: 1024px) {
  .quote-index-page {
    padding: 3rem 2rem;
  }

  .quote-index-page__content {
    max-width: 48rem;
  }

  .quote-index-page__title {
    font-size: 3.75rem;
  }
}

.quote-index-page__buton-container {
  display: flex;
  justify-content: center;
}

.quote-transition-enter-active {
  transition: all 0.4s ease-out;
}

.quote-transition-leave-active {
  transition: all 0.3s ease-in;
}

.quote-transition-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.quote-transition-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.button-fade-enter-active {
  transition: all 0.3s ease-out;
  transition-delay: 0.2s;
}

.button-fade-leave-active {
  transition: all 0.2s ease-in;
}

.button-fade-enter-from,
.button-fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
