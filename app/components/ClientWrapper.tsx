import React from 'react'
import { ThemeProvider } from './ThemeProvider'
import { useThemeStore } from '@/store/themeStore'
import { useHydration } from '@/hooks/useHydration'
import { ThemeScript } from './ThemeScript'
import { DynamicStyles } from './DynamicStyles'

interface ClientWrapperProps {
  children: React.ReactNode
}

export function ClientWrapper({ children }: ClientWrapperProps) {
  const { theme } = useThemeStore()
  const isHydrated = useHydration()

  if (!isHydrated) {
    return null
  }

  return (
    <ThemeProvider defaultTheme={theme}>
      <ThemeScript />
      <DynamicStyles />
      {children}
    </ThemeProvider>
  )
}
