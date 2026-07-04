import AccordionEditorial from "@/components/ruixen/accordion-editorial";
import SearchableAccordion from "@/components/SearchableAccordion";

export default function App() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col gap-16 px-6 py-16">
      <header>
        <h1 className="text-2xl font-semibold tracking-tight">Varia</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Accordion components, ported from Ruixen UI.
        </p>
      </header>

      <section>
        <h2 className="mb-6 text-sm font-medium text-muted-foreground uppercase">
          Editorial
        </h2>
        <AccordionEditorial />
      </section>

      <section>
        <h2 className="mb-6 text-sm font-medium text-muted-foreground uppercase">
          Searchable
        </h2>
        <SearchableAccordion />
      </section>
    </main>
  );
}
