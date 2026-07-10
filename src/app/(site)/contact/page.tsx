import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = { title: 'Contact' }

export default function ContactPage() {
  return (
    <section className="ds-section ds-pt-16">
      <div className="ds-container ds-flex ds-flex-col ds-gap-6 ds-max-w-3xl">
        <p className="ds-overline">Contact</p>
        <h1 className="ds-section-title">Get in touch.</h1>
        <p className="ds-editorial-lede">
          Swap this for a form or your preferred contact method.
        </p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="ds-btn ds-btn--pill ds-btn--lg ds-self-start"
        >
          {siteConfig.email}
        </a>
      </div>
    </section>
  )
}
