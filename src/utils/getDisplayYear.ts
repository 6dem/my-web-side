export function getDisplayYear(startYear: number, useNowLabel = false): string {
  const currentYear: number = new Date().getFullYear()
  const startLabel = useNowLabel ? `${currentYear} ⟶` : `${currentYear}`

  return currentYear === startYear
    ? `${startLabel}`
    : `${startYear} - ${currentYear}`
}