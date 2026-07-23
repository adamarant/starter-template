import Link from 'next/link'
import { Flex } from '@adamarant/ds-react'
import { siteConfig } from '@/config/site'

export function SiteFooter() {
  return (
    <footer className="ds-section ds-section--bordered">
      <Flex direction="col" gap="8" className="ds-container">
        <Flex justify="between" gap="6" className="ds-flex-wrap">
          <p className="ds-heading-ui">{siteConfig.name}</p>
          <Flex gap="6" className="ds-flex-wrap" role="navigation">
            {siteConfig.siteNav.map((item) => (
              <Link key={item.href} href={item.href} className="ds-text-secondary">
                {item.label}
              </Link>
            ))}
          </Flex>
        </Flex>
        <div className="ds-divider" />
        <Flex justify="between" gap="3" className="ds-flex-wrap">
          <p className="ds-text-tertiary">
            © 2026 {siteConfig.name}. All rights reserved.
          </p>
          <a href={`mailto:${siteConfig.email}`} className="ds-text-tertiary">
            {siteConfig.email}
          </a>
        </Flex>
      </Flex>
    </footer>
  )
}
