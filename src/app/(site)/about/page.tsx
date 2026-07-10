import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'About' }

export default function AboutPage() {
  return (
    <section className="ds-section ds-pt-16">
      <div className="ds-container ds-flex ds-flex-col ds-gap-6 ds-max-w-3xl">
        <p className="ds-overline">About</p>
        <h1 className="ds-section-title">One place to start every project.</h1>
        <p className="ds-editorial-lede">
          Replace this copy with your story. This page is a placeholder that shows
          the site shell — header, content, footer — on an inner route.
        </p>
      </div>
    </section>
  )
}
