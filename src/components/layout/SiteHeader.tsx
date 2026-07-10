'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { ROUTES } from '@/config/routes'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)

  // Lock body scroll + close on Escape while the fullscreen menu is open.
  useEffect(() => {
    if (!mobileOpen) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [mobileOpen])

  return (
    <>
      {/* Floating top bar (.site-header is the flex row — no container). */}
      <header className="site-header">
        <Link href={ROUTES.home} className="ds-heading-ui ds-text-primary">
          {siteConfig.name}
        </Link>

        {/* Desktop: nav · theme · CTA (furthest right) */}
        <div className="ds-hidden ds-items-center ds-gap-8 ds-md:flex">
          <nav className="ds-flex ds-items-center ds-gap-6">
            {siteConfig.siteNav.map((item) => (
              <Link key={item.href} href={item.href} className="site-nav-link">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="ds-flex ds-items-center ds-gap-3">
            <ThemeToggle />
            <Link
              href={ROUTES.dashboard}
              className="ds-btn ds-btn--pill ds-btn--sm"
            >
              Dashboard
            </Link>
          </div>
        </div>

        {/* Mobile controls */}
        <div className="ds-flex ds-items-center ds-gap-2 ds-md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="ds-icon-btn"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span className={cn('burger', mobileOpen && 'is-open')} aria-hidden="true">
              <span className="burger__line" />
              <span className="burger__line" />
            </span>
          </button>
        </div>
      </header>

      {/* Fullscreen mobile overlay — sibling of <header> so the header keeps its
          own stacking context above the overlay and the burger stays clickable. */}
      <nav
        className={cn('site-nav-overlay ds-md:hidden', mobileOpen && 'is-open')}
        aria-label="Mobile"
        aria-hidden={!mobileOpen}
      >
        {siteConfig.siteNav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setMobileOpen(false)}
            className="site-nav-overlay__link"
          >
            {item.label}
          </Link>
        ))}
        <Link
          href={ROUTES.dashboard}
          onClick={() => setMobileOpen(false)}
          className="ds-btn ds-btn--pill ds-btn--lg ds-mt-6"
        >
          Dashboard
        </Link>
      </nav>
    </>
  )
}
