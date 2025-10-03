import useQuote from '@/features/quotes/composables/UseQuote.ts'
import { type ErrorState, type OkState, STATUS } from '@/features/quotes/domain/QuoteStates.ts'
import { expect } from 'vitest'
import type QuoteHttpRepository from '@/features/quotes/services/QuoteHttpRepository.ts'

describe('useQuote', () => {
  describe('when fetchQuote is called', () => {
    it('should return state with status equal to STATUS.OK and Quote defined', async () => {
      const fakeRepo = {
        getResource: vi.fn().mockResolvedValue({ id: '1', author: 'Jon Doe', content: 'Hello' }),
      }
      const { state, fetchQuote } = useQuote(fakeRepo as unknown as QuoteHttpRepository)

      await fetchQuote()

      expect(state.value.status).toBe(STATUS.OK)
      expect((state.value as OkState).quote.author).toBe('Jon Doe')
    })

    it('should handle error properly returning and status equal to STATUS.ERROR with error and errMessage', async () => {
      const fakeRepo = { getResource: vi.fn().mockRejectedValue(new Error('fail')) }
      const { state, fetchQuote } = useQuote(fakeRepo as unknown as QuoteHttpRepository)
      const getRandomErrorMessageSpy = vi.spyOn(
        await import('@/utils/ErrorMessages.ts'),
        'getRandomErrorMessage',
      )

      await fetchQuote()

      expect(state.value.status).toBe(STATUS.ERROR)
      expect(getRandomErrorMessageSpy).toBeCalled()
      expect((state.value as ErrorState).errMessage).toBeDefined()
      expect((state.value as ErrorState).error).toBeDefined()
    })

    it('should call getRandomErrorMessage when fetchQuote fails', async () => {
      const getRandomErrorMessageSpy = vi.spyOn(
        await import('@/utils/ErrorMessages.ts'),
        'getRandomErrorMessage',
      )
      const fakeRepo = { getResource: vi.fn().mockRejectedValue(new Error('fail')) }
      const { fetchQuote } = useQuote(fakeRepo as unknown as QuoteHttpRepository)

      await fetchQuote()

      expect(getRandomErrorMessageSpy).toBeCalled()
    })
  })
})
