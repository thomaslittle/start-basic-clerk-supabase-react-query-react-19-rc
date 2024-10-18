export function getCssVariableColor(variableName: string): string {
  if (typeof window === 'undefined') return '#000000' // Fallback for SSR
  const color = getComputedStyle(document.documentElement)
    .getPropertyValue(variableName)
    .trim()
  if (color.startsWith('#')) return color
  const rgb = color.match(/\d+/g)
  if (rgb && rgb.length === 3) {
    return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
  }
  return '#000000' // Fallback
}
