import type Quote from '@/features/quotes/domain/Quote.ts'

export const STATUS = {
  LOADING: 'loading',
  OK: 'ok',
  ERROR: 'error',
} as const

export type LoadingState = { status: typeof STATUS.LOADING; reqId: number }
export type OkState = { status: typeof STATUS.OK; reqId: number; quote: Quote }
export type ErrorState = {
  status: typeof STATUS.ERROR
  reqId: number
  error: Error
  errMessage: string
}
