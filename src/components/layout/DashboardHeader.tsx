'use client'

import { Menu } from 'lucide-react'
import { Avatar, Flex, IconBtn } from '@adamarant/ds-react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

interface DashboardHeaderProps {
  onMenuClick: () => void
}

export function DashboardHeader({ onMenuClick }: DashboardHeaderProps) {
  return (
    <header className="ds-admin__header">
      <div className="ds-admin__header-inner">
        <Flex align="center" gap="3">
          <IconBtn
            aria-label="Open menu"
            onClick={onMenuClick}
            className="ds-lg:hidden"
          >
            <Menu size={18} />
          </IconBtn>
          <h1 className="ds-text-lg">Dashboard</h1>
        </Flex>

        <Flex align="center" gap="2">
          <ThemeToggle />
          <Avatar size="sm">U</Avatar>
        </Flex>
      </div>
    </header>
  )
}
