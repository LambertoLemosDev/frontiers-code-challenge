export default interface QuoteBaseRepository<T> {
  getResource(): Promise<T>
}
