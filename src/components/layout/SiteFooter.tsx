import Link from 'next/link'
import { Flex, SiteFooter as DSSiteFooter } from '@adamarant/ds-react'
import { siteConfig } from '@/config/site'

/* Thin wrapper over the SiteKit footer — the block this layout used to
   hand-roll (and 19 projects copied). Slots only, zero local layout. */
export function SiteFooter() {
  return (
    <DSSiteFooter
      brand={siteConfig.name}
      nav={
        <Flex gap="6" className="ds-flex-wrap" role="navigation">
          {siteConfig.siteNav.map((item) => (
            <Link key={item.href} href={item.href} className="ds-text-secondary">
              {item.label}
            </Link>
          ))}
        </Flex>
      }
      legal={`© 2026 ${siteConfig.name}. All rights reserved.`}
      meta={<a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>}
    />
  )
}
