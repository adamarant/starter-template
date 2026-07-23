import Link from 'next/link'
import { SiteFooter as DSSiteFooter } from '@adamarant/ds-react'
import { siteConfig } from '@/config/site'

/* Thin data-driven wrapper over the SiteKit footer (ds-react 1.8.0). The
   footer the seed used to hand-roll (and every clone copied) is now one
   component: brand + nav column + credits. */
export function SiteFooter() {
  return (
    <DSSiteFooter
      LinkComponent={Link}
      brand={siteConfig.name}
      columns={[
        {
          links: siteConfig.siteNav.map((item) => ({
            label: item.label,
            href: item.href,
          })),
        },
      ]}
      copyright={`© 2026 ${siteConfig.name}. All rights reserved.`}
      legal={[
        { label: siteConfig.email, href: `mailto:${siteConfig.email}`, external: true },
      ]}
    />
  )
}
