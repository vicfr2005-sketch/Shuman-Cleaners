"use client"

import * as React from "react"
import { Phone } from "lucide-react"
import SculptureHero from "@/components/ui/liquid-sculpture-hero"
import { site } from "@/lib/site"

type Mode = "light" | "dark"

const FONT_SANS = "var(--font-geist-sans), 'Helvetica Neue', Arial, sans-serif"
const FONT_SERIF = "var(--font-instrument-serif), 'Times New Roman', serif"

/**
 * Holds the light/dark state for the whole page: the hero owns the switch,
 * this keeps the sections below (and <html class="dark">) in step with it.
 */
export function SiteShell({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = React.useState<Mode>("dark")
  const [pastHero, setPastHero] = React.useState(false)

  const changeTheme = React.useCallback((next: Mode) => {
    setMode(next)
    document.documentElement.classList.toggle("dark", next === "dark")
  }, [])

  // the phone bar appears once the hero (and its own call button) has scrolled away
  React.useEffect(() => {
    let raf = 0
    const check = () => {
      raf = 0
      setPastHero(window.scrollY > window.innerHeight * 0.85)
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(check)
    }
    check()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  return (
    <>
      <SculptureHero
        theme={mode}
        onThemeChange={changeTheme}
        src="/images/shuman-logo-dark.png"
        darkSrc="/images/shuman-logo-light.png"
        mobileSrc="/images/shuman-logo-dark.png"
        mobileDarkSrc="/images/shuman-logo-light.png"
        imageAlt="Shuman Cleaners logo: a coat hanger drawn over the Shuman name"
        brand={site.name}
        navLinks={[
          { label: "Services", href: "#services" },
          { label: "Our story", href: "#story" },
          { label: "Visit", href: "#visit" },
        ]}
        navCta={{ label: "Call us", href: site.phoneHref }}
        eyebrow="Family owned — three generations"
        headline={"Vidalia's dry cleaners\nsince 1926."}
        headlineAccent="since 1926."
        body="Dry cleaning, expert alterations and wedding gown preservation on South West Main Street. Free pick-up and delivery for local businesses."
        primaryCta={{ label: `Call ${site.phone}`, href: site.phoneHref }}
        secondaryCta={{ label: "Get directions", href: site.directions }}
        hint="Move across the logo"
        hintTouch="Touch the logo"
        backdropText="1926"
        accentColor={mode === "dark" ? "#EF6352" : "#B8302A"}
        headingFont={FONT_SANS}
        bodyFont={FONT_SANS}
        accentFont={FONT_SERIF}
        loadFonts={false}
        sculptureScale={0.92}
        mobileSculptureScale={0.5}
      />
      {children}

      <a
        href={site.phoneHref}
        aria-hidden={!pastHero}
        tabIndex={pastHero ? 0 : -1}
        data-shown={pastHero}
        className="fixed inset-x-4 bottom-4 z-50 flex h-13 items-center justify-center gap-2.5 rounded-full bg-primary text-[15px] font-medium text-primary-foreground shadow-[0_10px_30px_-10px_rgb(0_0_0/0.5)] transition-[translate,opacity,scale] duration-300 ease-out data-[shown=false]:pointer-events-none data-[shown=false]:translate-y-[calc(100%+24px)] data-[shown=false]:opacity-0 active:scale-[0.98] sm:hidden"
      >
        <Phone className="size-4" aria-hidden="true" />
        Call {site.phone}
      </a>
    </>
  )
}
