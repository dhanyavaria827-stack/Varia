import { useMemo, useState } from "react";
import { SearchIcon } from "lucide-react";
import AccordionIndexed, {
  defaultItems,
  type AccordionIndexedItem,
} from "@/components/ruixen/accordion-indexed";
import { cn } from "@/lib/utils";

export interface SearchableAccordionProps {
  items?: AccordionIndexedItem[];
  placeholder?: string;
  className?: string;
}

export default function SearchableAccordion({
  items,
  placeholder = "Search…",
  className,
}: SearchableAccordionProps) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const source = items ?? defaultItems;
    const q = query.trim().toLowerCase();
    if (!q) return source;
    return source.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.content.toLowerCase().includes(q),
    );
  }, [items, query]);

  return (
    <div className={cn("mx-auto w-full max-w-lg", className)}>
      <div className="relative mb-6">
        <SearchIcon className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={placeholder}
          className="focus-visible:border-ring focus-visible:ring-ring/50 w-full rounded-md border bg-transparent py-2 pr-3 pl-9 text-sm outline-none transition-colors focus-visible:ring-[3px]"
        />
      </div>

      {filtered && filtered.length === 0 ? (
        <p className="py-6 text-center text-sm text-muted-foreground">
          No results for “{query}”.
        </p>
      ) : (
        <AccordionIndexed items={filtered} />
      )}
    </div>
  );
}
