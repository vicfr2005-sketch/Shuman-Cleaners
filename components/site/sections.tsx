import Image, { type StaticImageData } from "next/image"
import { ArrowRight, ArrowUpRight, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { perks, serviceGroups, site, timeline } from "@/lib/site"

import van from "@/public/images/delivery-van.jpg"
import storefront from "@/public/images/storefront-team.jpg"
import truck from "@/public/images/archive-truck.jpg"
import portrait from "@/public/images/archive-portrait.jpg"
import press from "@/public/images/archive-press.png"
import yumion from "@/public/images/yumion-ad.jpg"
import logoLight from "@/public/images/shuman-logo-light.png"
import logoDark from "@/public/images/shuman-logo-dark.png"

/* ── small shared pieces ─────────────────────────────────────────────── */

function Heading({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h2
      className={cn(
        "text-[clamp(36px,4.6vw,72px)] leading-[0.95] font-medium tracking-[-0.04em] text-balance",
        className
      )}
    >
      {children}
    </h2>
  )
}

function Accent({ children }: { children: React.ReactNode }) {
  return <span className="font-serif font-normal italic tracking-[-0.02em] text-brand">{children}</span>
}

function Photo({
  src,
  alt,
  className,
  sizes,
  top,
}: {
  src: StaticImageData
  alt: string
  className?: string
  sizes: string
  /** anchor the crop to the top edge (keeps a headline in frame) */
  top?: boolean
}) {
  return (
    <div className={cn("group relative overflow-hidden bg-surface", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        placeholder="blur"
        className={cn(
          "object-cover transition-transform duration-700 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.03] motion-reduce:transition-none",
          top && "object-top"
        )}
      />
    </div>
  )
}

function CallButton({ className }: { className?: string }) {
  return (
    <a
      href={site.phoneHref}
      className={cn(
        "group inline-flex h-12 items-center gap-2.5 rounded-full bg-primary px-6 text-[15px] font-medium tracking-[-0.01em] text-primary-foreground transition-transform duration-300 ease-[cubic-bezier(.2,.7,.2,1)] hover:-translate-y-px active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground",
        className
      )}
    >
      <Phone className="size-4" aria-hidden="true" />
      Call {site.phone}
    </a>
  )
}

function TextLink({
  href,
  children,
  external,
}: {
  href: string
  children: React.ReactNode
  external?: boolean
}) {
  const Icon = external ? ArrowUpRight : ArrowRight
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group inline-flex items-center gap-2 border-b border-foreground/30 py-1 text-[15px] font-medium tracking-[-0.01em] transition-colors hover:border-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
    >
      {children}
      <Icon
        className="size-3.5 transition-transform duration-300 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:translate-x-[3px]"
        aria-hidden="true"
      />
    </a>
  )
}

const sectionClass = "wrap border-t border-border py-[clamp(72px,9vw,136px)] scroll-mt-0"

/* ── Services ────────────────────────────────────────────────────────── */

export function Services() {
  return (
    <section id="services" className={sectionClass} aria-labelledby="services-title">
      <div className="grid gap-x-[clamp(24px,4vw,72px)] gap-y-14 lg:grid-cols-12">
        <div className="flex flex-col lg:col-span-5">
          <p className="eyebrow mb-6">Services</p>
          <Heading>
            <span id="services-title">
              Dry cleaning, alterations <Accent>and gown care</Accent>
            </span>
          </Heading>
          <p className="mt-6 max-w-[42ch] text-[17px] leading-relaxed text-muted-foreground text-pretty">
            Bring it to the counter on Main Street, or call and we&apos;ll collect it from your business at
            no charge.
          </p>
          <Photo
            src={van}
            alt="The white Shuman Cleaners van, lettered in red with the phone number and Established in 1926"
            className="mt-10 aspect-[5/3] w-full lg:mt-auto"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>

        <div className="flex flex-col gap-12 lg:col-span-6 lg:col-start-7">
          {serviceGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-[13px] font-medium tracking-[0.12em] text-muted-foreground uppercase">
                {group.title}
              </h3>
              <ul className="mt-3 border-t border-border">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-b border-border py-4 text-[clamp(18px,1.6vw,22px)] leading-snug tracking-[-0.015em]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <ul className="mt-[clamp(56px,7vw,104px)] grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
        {perks.map((perk) => (
          <li key={perk.title} className="bg-background p-[clamp(22px,2.4vw,36px)]">
            <p className="text-[19px] font-medium tracking-[-0.02em]">{perk.title}</p>
            <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground text-pretty">{perk.body}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

/* ── Story ───────────────────────────────────────────────────────────── */

export function Story() {
  return (
    <section id="story" className={sectionClass} aria-labelledby="story-title">
      <div className="grid gap-x-[clamp(24px,4vw,72px)] gap-y-14 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="eyebrow mb-6">Our story</p>
          <Heading>
            <span id="story-title">
              Three generations of the <Accent>Shuman family</Accent>
            </span>
          </Heading>

          <ol className="mt-12 border-t border-border">
            {timeline.map((entry) => (
              <li
                key={entry.year}
                className="grid grid-cols-[88px_1fr] gap-x-6 border-b border-border py-5 sm:grid-cols-[112px_1fr]"
              >
                <span className="font-serif text-[clamp(26px,2.2vw,32px)] leading-none italic text-brand">
                  {entry.year}
                </span>
                <p className="text-[16px] leading-relaxed text-pretty">{entry.text}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="grid grid-cols-2 content-start gap-3 sm:gap-4 lg:col-span-6 lg:col-start-7 lg:mt-[calc(12px+1.5rem)]">
          <Photo
            src={truck}
            alt="Archive photo: a dog sitting on the hood of an early Shuman's delivery truck"
            className="aspect-square"
            sizes="(min-width: 1024px) 24vw, 50vw"
          />
          <Photo
            src={portrait}
            alt="Archive portrait of a man in a dark suit and round glasses, from the Shuman family photographs"
            className="aspect-square"
            sizes="(min-width: 1024px) 24vw, 50vw"
          />
          <Photo
            src={press}
            alt="Archive newspaper photo of the Shuman cleaning business, a woman at a pressing machine"
            className="aspect-[3/5]"
            sizes="(min-width: 1024px) 24vw, 50vw"
          />
          <Photo
            src={yumion}
            alt="Vintage Shuman ad with the Vidalia onion mascot: Yup. We clean his suit, too."
            className="aspect-[3/5]"
            top
            sizes="(min-width: 1024px) 24vw, 50vw"
          />
        </div>
      </div>
    </section>
  )
}

/* ── Visit ───────────────────────────────────────────────────────────── */

export function Visit() {
  return (
    <section id="visit" className={sectionClass} aria-labelledby="visit-title">
      <p className="eyebrow mb-6">Visit</p>
      <h2
        id="visit-title"
        className="text-[clamp(44px,8.4vw,152px)] leading-[0.9] font-medium tracking-[-0.05em] text-balance"
      >
        {site.street}
        <span className="mt-2 block font-serif text-[0.62em] font-normal tracking-[-0.02em] italic text-brand">
          {site.city}, {site.regionLong}
        </span>
      </h2>

      <div className="mt-[clamp(48px,6vw,88px)] grid gap-x-[clamp(24px,4vw,72px)] gap-y-12 lg:grid-cols-12">
        <div className="flex flex-col gap-10 lg:col-span-5">
          <dl className="grid gap-6 border-t border-border pt-6 text-[17px]">
            <div>
              <dt className="text-[13px] tracking-[0.12em] text-muted-foreground uppercase">Phone</dt>
              <dd className="mt-1.5">
                <a
                  href={site.phoneHref}
                  className="text-[clamp(24px,2.2vw,30px)] font-medium tracking-[-0.02em] underline decoration-foreground/25 underline-offset-[6px] transition-colors hover:decoration-foreground"
                >
                  {site.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[13px] tracking-[0.12em] text-muted-foreground uppercase">
                Pick-up and delivery
              </dt>
              <dd className="mt-1.5 max-w-[40ch] leading-relaxed text-pretty">
                Free for local businesses. Call to set up a collection.
              </dd>
            </div>
          </dl>
          <div className="flex flex-wrap items-center gap-x-7 gap-y-5">
            <CallButton />
            <TextLink href={site.directions} external>
              Get directions
            </TextLink>
          </div>
        </div>

        <Photo
          src={storefront}
          alt="A group of customers and staff standing outside the Shuman Cleaners storefront"
          className="aspect-[5/3] lg:col-span-7"
          sizes="(min-width: 1024px) 56vw, 100vw"
        />
      </div>
    </section>
  )
}

/* ── Footer ──────────────────────────────────────────────────────────── */

export function Footer() {
  return (
    <footer className="wrap border-t border-border pt-12 pb-28 sm:pb-12">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <a href="#" className="block w-[92px]" aria-label={`${site.name}, back to top`}>
          <Image src={logoLight} alt="" className="hidden h-auto w-full dark:block" sizes="92px" />
          <Image src={logoDark} alt="" className="block h-auto w-full dark:hidden" sizes="92px" />
        </a>
        <div className="flex flex-col gap-2 text-[14px] text-muted-foreground sm:items-end sm:text-right">
          <p>
            {site.street} · {site.city}, {site.region} ·{" "}
            <a href={site.phoneHref} className="text-foreground hover:underline underline-offset-4">
              {site.phone}
            </a>
          </p>
          <p>
            © 2026 {site.name} ·{" "}
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:underline underline-offset-4"
            >
              Facebook
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
