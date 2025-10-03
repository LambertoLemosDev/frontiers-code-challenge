const ERROR_MESSAGES = [
  'Oops, my muse went for coffee. Try again.',
  '404: Inspiration not found. Ask again?',
  'Server is overthinking. One more try?',
  'The wisdom library is napping. Retry?',
  'Quotes went on vacation. Bring them back?',
] as const

export const getRandomErrorMessage = (): string => {
  const randomIndex = Math.floor(Math.random() * ERROR_MESSAGES.length)
  return ERROR_MESSAGES[randomIndex] ?? ERROR_MESSAGES[0]
}
