'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { Drawer, DrawerBody, DrawerContent, DrawerHeader } from '@adamarant/ds-react'
import { IconBtn } from '@adamarant/ds-react'
import { siteConfig } from '@/config/site'
import { Sidebar } from './Sidebar'
import { DashboardNav } from './DashboardNav'
import { DashboardHeader } from './DashboardHeader'

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const close = () => setSidebarOpen(false)

  return (
    <div className="ds-admin ds-admin--expanded">
      <Sidebar />

      {/* Mobile menu — the documented admin-layout contract is a drawer. */}
      <Drawer open={sidebarOpen} onClose={close} className="ds-lg:hidden">
        <DrawerContent>
          <DrawerHeader>
            <span className="ds-heading-ui">{siteConfig.name}</span>
            <IconBtn aria-label="Close menu" onClick={close}>
              <X size={18} />
            </IconBtn>
          </DrawerHeader>
          <DrawerBody className="ds-p-0">
            <DashboardNav onNavigate={close} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <div className="ds-admin__main">
        <DashboardHeader onMenuClick={() => setSidebarOpen(true)} />
        <main className="ds-admin__content">{children}</main>
      </div>
    </div>
  )
}
