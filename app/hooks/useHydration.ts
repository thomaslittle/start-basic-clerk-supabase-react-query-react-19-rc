import { useEffect, useState } from 'react'
import { useThemeStore } from '@/store/themeStore'

export const useHydration = () => {
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    const unsubFinishHydration = useThemeStore.persist.onFinishHydration(() =>
      setHydrated(true),
    )

    // Check if already hydrated
    if (useThemeStore.persist.hasHydrated()) {
      setHydrated(true)
    }

    return () => {
      unsubFinishHydration()
    }
  }, [])

  return hydrated
}
