import { type Ref, ref } from 'vue'
import QuoteHttpRepository from '@/features/quotes/services/QuoteHttpRepository.ts'
import type { ErrorState, LoadingState, OkState } from '@/features/quotes/domain/QuoteStates.ts'
import { STATUS } from '@/features/quotes/domain/QuoteStates.ts'
import { getRandomErrorMessage } from '@/utils/ErrorMessages.ts'

type ViewState = LoadingState | OkState | ErrorState

export default function useQuote(repo: QuoteHttpRepository) {
  const state: Ref<ViewState> = ref<ViewState>({ status: STATUS.LOADING, reqId: 0 })

  const fetchQuote = async () => {
    const id = state.value.reqId + 1
    state.value = { status: STATUS.LOADING, reqId: id }
    try {
      const newQuote = await repo.getResource()
      if (id !== state.value.reqId) return
      state.value = { status: STATUS.OK, reqId: id, quote: newQuote }
    } catch (e: unknown) {
      if (id !== state.value.reqId) return
      state.value = {
        status: STATUS.ERROR,
        reqId: id,
        error: e as Error,
        errMessage: getRandomErrorMessage(),
      }
    }
  }

  return { state, fetchQuote }
}
