import {
  Outlet,
  ScrollRestoration,
  createRootRouteWithContext,
} from '@tanstack/react-router'
import {
  Body,
  Head,
  Html,
  Meta,
  Scripts,
  createServerFn,
} from '@tanstack/start'
import * as React from 'react'
import type { QueryClient } from '@tanstack/react-query'
import { DefaultCatchBoundary } from '@/components/DefaultCatchBoundary'
import { NotFound } from '@/components/NotFound'
import { seo } from '@/utils/seo'
import { getAuth } from '@clerk/tanstack-start/server'
import { ClerkProvider } from '@clerk/tanstack-start'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import appCss from '@/styles/app.css?url'
import globalCss from '@/styles/global.css?url'
import { useThemeStore } from '@/store/themeStore'
import { DynamicStyles } from '@/components/DynamicStyles'

const fetchClerkAuth = createServerFn('GET', async (_, ctx) => {
  const user = await getAuth(ctx.request)

  return {
    user,
  }
})

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  meta: () => [
    { charSet: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ...seo({
      title: 'start-basic-clerk-supabase-react-query-react-19-rc',
      description: '',
    }),
  ],
  links: () => [
    { rel: 'stylesheet', href: globalCss },
    { rel: 'stylesheet', href: appCss },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    { rel: 'manifest', href: '/site.webmanifest', color: '#fffff' },
    { rel: 'icon', href: '/favicon.ico' },
  ],
  beforeLoad: async () => {
    const { user } = await fetchClerkAuth()

    return {
      user,
    }
  },
  errorComponent: (props) => (
    <RootDocument>
      <DefaultCatchBoundary {...props} />
    </RootDocument>
  ),
  notFoundComponent: () => <NotFound />,
  component: RootComponent,
})

function RootComponent() {
  const { theme, colors } = useThemeStore()
  console.log('Theme:', theme)
  console.log('Colors:', colors)

  const clerkTheme = React.useMemo(
    () => ({
      variables: {
        // colorPrimary: colors.primary,
        colorTextOnPrimaryBackground: colors.foreground,
        // colorText: colors.foreground,
        // colorTextSecondary: colors.mutedForeground,
        colorBackground: colors.background,
        // colorInputBackground: colors.input,
        // colorInputText: colors.foreground,
        // colorDanger: colors.destructive,
      },
      elements: {
        // card: 'background dark:background',
        // headerTitle: 'text-foreground dark:text-foreground',
        // headerSubtitle: 'text-muted-foreground dark:text-muted-foreground',
        // socialButtonsBlockButton:
        //   'border-border text-foreground hover:bg-muted dark:border-border dark:text-foreground dark:hover:bg-muted',
        // footerActionLink:
        //   'text-primary hover:text-primary/90 dark:text-primary dark:hover:text-primary/90',
        // formButtonPrimary:
        //   'bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90',
        // formButtonReset:
        //   'bg-destructive text-destructive-foreground hover:bg-destructive/90 dark:bg-destructive dark:text-destructive-foreground dark:hover:bg-destructive/90',
        // formFieldLabel: 'text-foreground dark:text-foreground',
        // formFieldInput:
        //   'bg-input border border-border dark:bg-input dark:border dark:border-border',
        // formFieldErrorText: 'text-destructive dark:text-destructive',
        // dividerLine: 'bg-border dark:bg-white/10',
        // dividerText: 'text-muted-foreground dark:text-muted-foreground',
        // navbar: 'bg-background dark:bg-background',
        // navbarButton:
        //   'text-primary hover:text-primary/90 dark:text-primary dark:hover:text-primary/90',
        // avatarBox: 'bg-muted dark:bg-muted',
        // avatarImage: 'border-border dark:border-border',
        // userPreviewMainIdentifier: 'text-foreground dark:text-foreground',
        // userPreviewSecondaryIdentifier:
        //   'text-muted-foreground dark:text-muted-foreground',
        // formFieldSuccessText: 'text-success dark:text-success',
        // formFieldInfoText: 'text-muted-foreground dark:text-muted-foreground',
        // identityPreviewEditButton:
        //   'text-primary hover:text-primary/90 dark:text-primary dark:hover:text-primary/90',
        // pageScrollBox: 'bg-background dark:bg-background',
      },
    }),
    [colors],
  )

  return (
    <ClerkProvider
      appearance={{
        variables: clerkTheme.variables,
        elements: clerkTheme.elements,
      }}
    >
      <RootDocument>
        <DynamicStyles />
        <Outlet />
      </RootDocument>
    </ClerkProvider>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <Html lang="en">
      <Head>
        <Meta />
      </Head>
      <Body>
        {children}
        <ScrollRestoration />
        <TanStackRouterDevtools position="bottom-right" />
        <ReactQueryDevtools
          buttonPosition="bottom-left"
          initialIsOpen={false}
        />
        <Scripts />
      </Body>
    </Html>
  )
}
