import type QuoteBaseRepository from '@/features/quotes/domain/QuoteBaseRepository.ts'
import type Quote from '@/features/quotes/domain/Quote.ts'

export default class QuoteHttpRepository implements QuoteBaseRepository<Quote> {
  private readonly HEADERS: HeadersInit = {
    Accept: 'application/json',
    'Cache-Control': 'no-store',
    Pragma: 'no-cache',
  } as const

  async getResource(): Promise<Quote> {
    try {
      const response = await fetch(import.meta.env.VITE_QUOTES_RANDOM_ENDPOINT, {
        method: 'GET',
        headers: this.HEADERS,
        cache: 'no-store',
      })

      if (!response?.ok) {
        const body = await response.text().catch(() => '')
        throw new Error(`There was an error asking for quotes (${response.status}). ${body}`)
      }

      const data: unknown = await response.json()

      if (
        !data ||
        typeof data !== 'object' ||
        typeof (data as { _id: unknown})._id !== 'string' ||
        typeof (data as { author: unknown}).author !== 'string' ||
        typeof (data as { content: unknown}).content !== 'string'
      ) {
        throw new Error('Unexpected response shape from Quotable')
      }

      const { _id, author, content } = data as { _id: string; author: string; content: string }

      return { id: _id, author, content }
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : String(err))
    }
  }
}
