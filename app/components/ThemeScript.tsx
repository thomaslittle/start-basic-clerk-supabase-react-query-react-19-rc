import React from 'react'
import { useThemeStore } from '@/store/themeStore'

export function ThemeScript() {
  const { theme } = useThemeStore()

  React.useEffect(() => {
    const isDark =
      theme === 'dark' ||
      (theme === 'system' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    document.documentElement.classList.toggle('dark', isDark)
  }, [theme])

  return null
}
