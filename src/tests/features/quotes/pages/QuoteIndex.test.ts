import { render, screen, fireEvent } from '@testing-library/vue'
import QuoteIndex from '@/features/quotes/pages/QuoteIndex.vue'
import { STATUS } from '@/features/quotes/domain/QuoteStates.ts'

const fetchQuoteMock = vi.fn()

vi.mock('@/features/quotes/composables/useQuote', () => {
  return {
    default: () => ({
      state: {
        status: STATUS.OK,
        quote: { id: '1', author: 'Jon Doe', content: 'Hi' },
        errMessage: '',
      },
      fetchQuote: fetchQuoteMock,
    }),
  }
})

describe('QuoteIndex', () => {
  it('should render button with "ask for a quote" as text', async () => {
    render(QuoteIndex)
    const btn: HTMLElement = await screen.findByRole('button', { name: /ask for a quote/i })
    expect(btn).toBeInTheDocument()
  })
  it('should emit "retry" when user clicks button with "ask for a quote" as text', async () => {
    render(QuoteIndex)

    fetchQuoteMock.mockClear()

    const btn = await screen.findByRole('button', { name: /ask for a quote/i })
    await fireEvent.click(btn)

    expect(fetchQuoteMock).toHaveBeenCalledTimes(1)
  })
})
