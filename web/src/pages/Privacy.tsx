import { Reveal } from "@/components/Reveal";
import { ADMISSIONS_EMAIL } from "@/data/content";
import { useDocumentTitle } from "@/lib/useDocumentTitle";

export function Privacy() {
  useDocumentTitle("Privacy");

  return (
    <div className="mx-auto max-w-2xl px-5 py-16">
      <Reveal>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-camel-600 dark:text-brass-300">
          Good to know
        </span>
        <h1 className="mt-3 font-display text-3xl font-medium text-ink sm:text-4xl">
          Privacy
        </h1>
        <p className="mt-4 text-ink-soft">
          This page says plainly what happens with your information on this
          site, in the same spirit as the rest of it — nothing hidden behind
          legal wording.
        </p>
      </Reveal>

      <Reveal delay={0.06} className="mt-10 space-y-8">
        <section>
          <h2 className="font-display text-xl font-medium text-ink">
            The contact form
          </h2>
          <p className="mt-2 text-ink-soft">
            This site has no server of its own — it's a set of static pages.
            When you fill in the enquiry form and press "Send via WhatsApp,"
            your message is typed straight into a WhatsApp chat opened on
            your own device. It goes to WhatsApp and to the Gurukulam
            Parivar member you're messaging, the same as any WhatsApp
            message you'd send yourself. This site never receives, stores,
            or sees what you typed.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-medium text-ink">
            Cookies and local storage
          </h2>
          <p className="mt-2 text-ink-soft">
            The only thing this site saves in your browser is your light or
            dark mode preference, so it's remembered on your next visit.
            That's stored on your device only — it isn't sent anywhere, and
            it isn't used to track you.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-medium text-ink">
            Analytics and tracking
          </h2>
          <p className="mt-2 text-ink-soft">
            None. This site doesn't run Google Analytics, ad pixels, or any
            other visitor-tracking script.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-medium text-ink">
            Outside services this site loads
          </h2>
          <p className="mt-2 text-ink-soft">
            A couple of pages embed content from other companies, each
            governed by their own privacy policy rather than this one:
          </p>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-ink-soft">
            <li>Google Fonts, to display this site's typefaces.</li>
            <li>
              A Google Maps embed on the Contact page, to show our location.
            </li>
          </ul>
          <p className="mt-3 text-ink-soft">
            The videos elsewhere on this site are hosted directly with the
            rest of the site's files — nothing is loaded from YouTube or any
            other video platform.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-medium text-ink">
            Questions
          </h2>
          <p className="mt-2 text-ink-soft">
            If anything here is unclear, write to{" "}
            <a
              href={`mailto:${ADMISSIONS_EMAIL}`}
              className="font-medium text-ink underline decoration-brass-500/50 underline-offset-2 transition hover:text-camel-600 dark:hover:text-brass-300"
            >
              {ADMISSIONS_EMAIL}
            </a>
            .
          </p>
        </section>
      </Reveal>
    </div>
  );
}
