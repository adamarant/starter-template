import { ROUTES } from './routes'

export const siteConfig = {
  name: 'My App',
  title: 'My App — Website + Dashboard starter',
  description:
    'A modern website and dashboard starter built with Next.js and the Adamarant design system.',
  url: 'https://myapp.com',
  email: 'hello@myapp.com',

  social: {
    github: 'https://github.com',
    twitter: 'https://x.com',
    linkedin: 'https://linkedin.com',
  },

  // Public marketing-site nav — desktop bar + fullscreen mobile overlay.
  siteNav: [
    { label: 'Features', href: ROUTES.features },
    { label: 'Pricing', href: ROUTES.pricing },
    { label: 'About', href: ROUTES.about },
    { label: 'Contact', href: ROUTES.contact },
  ],

  // Dashboard sidebar nav.
  dashboardNav: [
    { label: 'Dashboard', href: ROUTES.dashboard, icon: 'LayoutDashboard' },
    { label: 'Projects', href: ROUTES.projects, icon: 'FolderKanban' },
    { label: 'Team', href: ROUTES.team, icon: 'Users' },
    { label: 'Analytics', href: ROUTES.analytics, icon: 'BarChart3' },
    { label: 'Settings', href: ROUTES.settings, icon: 'Settings' },
  ],
} as const
