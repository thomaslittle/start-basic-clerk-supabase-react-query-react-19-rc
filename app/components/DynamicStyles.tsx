import React from 'react'
import { useThemeStore } from '@/store/themeStore'

export function DynamicStyles() {
  const { colors } = useThemeStore()

  const colorVariables = React.useMemo(() => {
    return Object.entries(colors)
      .map(([key, value]) => `--${key}:${value};`)
      .join('')
  }, [colors])

  React.useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `:root {${colorVariables}}`
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [colorVariables])

  return null
}
