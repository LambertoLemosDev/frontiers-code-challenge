import QuoteHttpRepository from '@/features/quotes/services/QuoteHttpRepository.ts'

describe('QuoteHttpRepository', () => {
  const okResp = { _id: '1', author: 'Jon Doe', content: 'Foo' }

  it('Should map external response to domain response', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => okResp,
    })
    const repo = new QuoteHttpRepository()
    const q = await repo.getResource()
    expect(q).toEqual({ id: '1', author: 'Jon Doe', content: 'Foo' })
  })

  it('Should throws if fetch fails', async () => {
    global.fetch = vi.fn().mockResolvedValue({ ok: false, text: async () => 'err', status: 500 })
    const repo = new QuoteHttpRepository()
    await expect(repo.getResource()).rejects.toThrow()
  })
})
