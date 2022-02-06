export const isTextNotEmpty = (value: string | undefined | null): boolean => {
  return !(typeof value !== 'string' || value.trim() === '')
}
