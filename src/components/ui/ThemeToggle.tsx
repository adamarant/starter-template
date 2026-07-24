'use client'

import { useTheme } from 'next-themes'
import { ThemeToggle as DSThemeToggle, useHydrated } from '@adamarant/ds-react'

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const mounted = useHydrated()

  // Before mount next-themes hasn't resolved the theme; render inert at the
  // provider default (dark) — both icons are always visible, only the thumb
  // settles once mounted.
  const theme = mounted ? (resolvedTheme === 'light' ? 'light' : 'dark') : 'dark'

  return (
    <DSThemeToggle
      size="lg"
      theme={theme}
      onThemeChange={(next) => setTheme(next)}
      disabled={!mounted}
    />
  )
}
