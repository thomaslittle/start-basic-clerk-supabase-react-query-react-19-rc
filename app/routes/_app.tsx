import React from 'react'
import { Outlet, createFileRoute } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ClientWrapper } from '@/components/ClientWrapper'
import { Toaster } from 'sonner'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { useThemeStore } from '@/store/themeStore'

export const Route = createFileRoute('/_app')({
  component: LayoutComponent,
})

export const queryClient = new QueryClient()

function LayoutComponent() {
  const { theme } = useThemeStore()

  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ClientWrapper>
          <Navigation />
          <Outlet />
          <Toaster theme={theme === 'system' ? undefined : theme} />
          <Footer />
        </ClientWrapper>
      </QueryClientProvider>
    </React.StrictMode>
  )
}
