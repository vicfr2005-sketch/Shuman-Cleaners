import { SiteShell } from "@/components/site/site-shell"
import { Footer, Services, Story, Visit } from "@/components/site/sections"
import { hours, site } from "@/lib/site"

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "DryCleaningOrLaundry",
  name: site.name,
  foundingDate: String(site.founded),
  telephone: `+1-${site.phone}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.street,
    addressLocality: site.city,
    addressRegion: site.region,
    addressCountry: "US",
  },
  openingHoursSpecification: hours.flatMap((h) =>
    "opens" in h
      ? [{ "@type": "OpeningHoursSpecification", dayOfWeek: h.dayOfWeek, opens: h.opens, closes: h.closes }]
      : []
  ),
  sameAs: [site.facebook],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <SiteShell>
        <main>
          <Services />
          <Story />
          <Visit />
        </main>
        <Footer />
      </SiteShell>
    </>
  )
}
