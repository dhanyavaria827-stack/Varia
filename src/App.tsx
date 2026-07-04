import { Home, Search, Bell, Settings, User } from "lucide-react";
import NavbarFloating from "@/components/ruixen/navbar-floating";
import { ArcRevealHero } from "@/components/ruixen/arc-reveal-hero";
import { TrustedClientsShowcase } from "@/components/ruixen/trusted-clients-showcase";
import { FeatureHighlights } from "@/components/ruixen/feature-highlights";
import { SplitFeatureShowcase } from "@/components/ruixen/split-feature-showcase";
import FeaturedPortraitTestimonial, {
  type FeaturedPortraitItem,
} from "@/components/ruixen/featured-portrait-testimonial";
import { CardStack, type CardStackItem } from "@/components/ruixen/card-stack";
import { MagneticTabs } from "@/components/ruixen/magnetic-tabs";
import { BannerAnnouncement } from "@/components/ruixen/banner-announcement";
import { GooeyDock } from "@/components/ruixen/gooey-dock";
import { AnimatedThemeToggler } from "@/components/ruixen/animated-theme-toggler";
import { BlurredStagger } from "@/components/ui/blurred-stagger-text";
import PricingCardsTooltip from "@/components/ruixen/pricing-cards-tooltip";
import AccordionEditorial from "@/components/ruixen/accordion-editorial";
import SearchableAccordion from "@/components/SearchableAccordion";
import FooterPro from "@/components/ruixen/footer-pro";
import { Button } from "@/components/ui/button";

function portrait(hue: number, initial: string) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="240" height="288">
    <rect width="240" height="288" fill="hsl(${hue} 45% 82%)" />
    <text x="120" y="160" font-family="ui-sans-serif,system-ui" font-size="96" fill="hsl(${hue} 35% 40%)" text-anchor="middle">${initial}</text>
  </svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

function cardImage(hueA: number, hueB: number, label: string) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="520" height="320">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="hsl(${hueA} 70% 55%)" />
        <stop offset="1" stop-color="hsl(${hueB} 70% 45%)" />
      </linearGradient>
    </defs>
    <rect width="520" height="320" fill="url(#g)" />
    <text x="260" y="170" font-family="ui-sans-serif,system-ui" font-size="28" fill="white" fill-opacity="0.85" text-anchor="middle">${label}</text>
  </svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

const testimonials: FeaturedPortraitItem[] = [
  {
    id: "mira",
    quote:
      "We replaced four different libraries with one design system. Shipping velocity roughly doubled within a quarter.",
    author: { name: "Mira Chen", role: "Head of Design, Loop" },
    portraitUrl: portrait(265, "M"),
    favorites: [
      { icon: "⚡", label: "Fast" },
      { icon: "🎯", label: "Accessible" },
    ],
  },
  {
    id: "daniel",
    quote:
      "The motion feels intentional instead of decorative. Nothing moves unless it's telling you something.",
    author: { name: "Daniel Osei", role: "Founder, Northwind" },
    portraitUrl: portrait(20, "D"),
    favorites: [{ icon: "✨", label: "Polished" }],
  },
  {
    id: "priya",
    quote:
      "Our support team stopped hearing 'this looks templated.' That alone paid for the migration.",
    author: { name: "Priya Nair", role: "Product Lead, Fern" },
    portraitUrl: portrait(150, "P"),
    favorites: [
      { icon: "🧩", label: "Composable" },
      { icon: "🌓", label: "Themeable" },
    ],
  },
];

const caseStudies: CardStackItem[] = [
  {
    id: "loop",
    title: "Loop — unified design system",
    description: "Four libraries became one. Shipping velocity doubled.",
    imageSrc: cardImage(265, 290, "Loop"),
    href: "#",
  },
  {
    id: "northwind",
    title: "Northwind — motion as meaning",
    description: "Every animation now signals state, never decoration.",
    imageSrc: cardImage(20, 350, "Northwind"),
    href: "#",
  },
  {
    id: "fern",
    title: "Fern — themeable by default",
    description: "Dark mode shipped in a day, not a quarter.",
    imageSrc: cardImage(150, 190, "Fern"),
    href: "#",
  },
];

const dockItems = [
  { icon: <Home className="size-5" />, label: "Home" },
  { icon: <Search className="size-5" />, label: "Search" },
  { icon: <Bell className="size-5" />, label: "Notifications" },
  { icon: <Settings className="size-5" />, label: "Settings" },
  { icon: <User className="size-5" />, label: "Account" },
];

export default function App() {
  return (
    <div className="min-h-screen">
      <BannerAnnouncement
        badge="New"
        action={{ label: "See what's new", href: "#" }}
      >
        Six new sections ported from Ruixen UI this week.
      </BannerAnnouncement>

      <NavbarFloating
        actions={
          <div className="flex items-center gap-1">
            <AnimatedThemeToggler />
            <Button size="sm" className="rounded-full">
              Get Started
            </Button>
          </div>
        }
      />

      <ArcRevealHero storageKey="varia-hero-intro">
        <section className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 py-28 text-center sm:py-36">
          <span className="rounded-full border border-border/60 bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground">
            Ported from Ruixen UI
          </span>
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
            Interfaces that feel considered, not generated.
          </h1>
          <p className="max-w-xl text-balance text-muted-foreground sm:text-lg">
            A small kit of accordions, navigation, testimonials, and pricing
            sections built on Radix primitives and real motion — not
            boilerplate.
          </p>
          <div className="flex items-center gap-3">
            <Button size="lg" className="rounded-full">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="rounded-full">
              View Components
            </Button>
          </div>
        </section>
      </ArcRevealHero>

      <TrustedClientsShowcase />

      <FeatureHighlights />

      <SplitFeatureShowcase />

      <FeaturedPortraitTestimonial
        items={testimonials}
        eyebrow="Loved by teams"
        heading="What people are saying"
        description="A sample of the testimonial carousel — keyboard navigable, crossfades on select."
      />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-10 text-center">
          <p className="text-sm font-medium uppercase text-muted-foreground">
            Case studies
          </p>
          <div className="mt-2 flex justify-center">
            <BlurredStagger text="Real teams, real interfaces." />
          </div>
        </div>
        <CardStack items={caseStudies} />
      </section>

      <section className="mx-auto flex max-w-3xl flex-col items-center gap-8 px-6 py-16">
        <h2 className="text-sm font-medium uppercase text-muted-foreground">
          Magnetic tabs
        </h2>
        <MagneticTabs />
      </section>

      <section className="mx-auto flex max-w-3xl flex-col items-center gap-8 px-6 py-16">
        <h2 className="text-sm font-medium uppercase text-muted-foreground">
          Gooey dock
        </h2>
        <GooeyDock items={dockItems} sound={false} />
      </section>

      <PricingCardsTooltip />

      <section className="mx-auto flex max-w-3xl flex-col gap-16 px-6 py-16">
        <div>
          <h2 className="mb-6 text-sm font-medium uppercase text-muted-foreground">
            Editorial accordion
          </h2>
          <AccordionEditorial />
        </div>

        <div>
          <h2 className="mb-6 text-sm font-medium uppercase text-muted-foreground">
            Searchable accordion
          </h2>
          <SearchableAccordion />
        </div>
      </section>

      <FooterPro />
    </div>
  );
}
