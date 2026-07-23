'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import {
  LayoutDashboard,
  FolderKanban,
  Users,
  BarChart3,
  Settings,
} from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  LayoutDashboard,
  FolderKanban,
  Users,
  BarChart3,
  Settings,
}

/* Shared between the desktop sidebar and the mobile drawer, so the two
   surfaces can never drift. `.ds-admin__nav` owns padding and rhythm. */
export function DashboardNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname()

  return (
    <nav className="ds-admin__nav">
      {siteConfig.dashboardNav.map((item) => {
        const Icon = iconMap[item.icon] ?? LayoutDashboard
        const isActive = pathname === item.href

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={cn(
              'ds-admin__nav-item',
              isActive && 'ds-admin__nav-item--active'
            )}
          >
            <Icon size={18} />
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}
