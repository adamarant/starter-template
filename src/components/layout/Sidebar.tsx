import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { DashboardNav } from './DashboardNav'

/* Desktop-only: `.ds-admin__sidebar` is hidden under 1024px by the DS.
   The mobile menu is a Drawer, mounted by DashboardShell — that is the
   documented admin-layout contract (admin-layout.css header notes). */
export function Sidebar() {
  return (
    <aside className="ds-admin__sidebar">
      <div className="ds-admin__sidebar-header">
        <Link href="/" className="ds-heading-ui ds-text-lg ds-text-primary">
          {siteConfig.name}
        </Link>
      </div>
      <DashboardNav />
    </aside>
  )
}
