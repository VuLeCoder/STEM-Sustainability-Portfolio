import type { Locale } from "@/constants/content";
import { activitiesPageContent } from "@/constants/content";

type ActivityTimelineProps = {
  locale: Locale;
  activities: ReadonlyArray<{
    year: string;
    entries: ReadonlyArray<{
      type: keyof typeof activitiesPageContent.types;
      title: Record<Locale, string>;
      description: Record<Locale, string>;
    }>;
  }>;
};

export function ActivityTimeline({ locale, activities }: ActivityTimelineProps) {
  return (
    <div className="relative mt-12 space-y-10 before:absolute before:bottom-8 before:left-5 before:top-8 before:w-px before:bg-[var(--border)] sm:before:left-[8.25rem]">
      {activities.map((year) => (
        <section key={year.year} className="relative grid gap-5 sm:grid-cols-[8.25rem_minmax(0,1fr)] sm:gap-8">
          <div className="relative z-10 flex items-center gap-3 sm:block">
            <span aria-hidden="true" className="grid size-10 shrink-0 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface-raised)] font-mono text-sm font-bold text-[var(--primary)]">{year.year.slice(-2)}</span>
            <h2 className="font-mono text-2xl font-semibold tracking-tight text-[var(--foreground)]">{year.year}</h2>
          </div>
          <div className="grid gap-4">
            {year.entries.map((entry) => (
              <article key={entry.title[locale]} className="rounded-2xl border border-[var(--border)] bg-[var(--surface-raised)] p-5 shadow-[var(--shadow)] transition-transform duration-200 hover:-translate-y-0.5 sm:p-6">
                <span className="inline-flex rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 font-mono text-[0.65rem] font-semibold tracking-[0.12em] text-[var(--primary)] uppercase">{activitiesPageContent.types[entry.type][locale]}</span>
                <h3 className="mt-4 text-lg font-semibold leading-7 tracking-tight sm:text-xl">{entry.title[locale]}</h3>
                <p className="mt-2 leading-7 text-[var(--muted)]">{entry.description[locale]}</p>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
