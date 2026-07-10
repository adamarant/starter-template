import Link from 'next/link'
import { siteConfig } from '@/config/site'

export function SiteFooter() {
  return (
    <footer className="ds-section ds-border-t">
      <div className="ds-container ds-flex ds-flex-col ds-gap-8">
        <div className="ds-flex ds-flex-wrap ds-justify-between ds-gap-6">
          <p className="ds-heading-ui">{siteConfig.name}</p>
          <nav className="ds-flex ds-flex-wrap ds-gap-6">
            {siteConfig.siteNav.map((item) => (
              <Link key={item.href} href={item.href} className="ds-text-secondary">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="ds-divider" />
        <div className="ds-flex ds-flex-wrap ds-justify-between ds-gap-3">
          <p className="ds-text-tertiary">
            © 2026 {siteConfig.name}. All rights reserved.
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="ds-text-tertiary"
          >
            {siteConfig.email}
          </a>
        </div>
      </div>
    </footer>
  )
}
