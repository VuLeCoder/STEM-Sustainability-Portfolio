import {
  activitiesPageContent,
  type Locale,
} from "@/constants/content";

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

export function ActivityTimeline({
  locale,
  activities,
}: ActivityTimelineProps) {
  return (
    <div className="journey-timeline">
      {activities.map((year) => (
        <section key={year.year} className="journey-year">
          <header className="journey-year-heading">
            <h2>{year.year}</h2>
            <span aria-hidden="true" />
          </header>
          <ol className="journey-entries">
            {year.entries.map((entry, index) => (
              <li key={entry.title[locale]}>
                <article>
                  <div className="journey-entry-meta">
                    <span>
                      {activitiesPageContent.types[entry.type][locale]}
                    </span>
                    <span aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3>{entry.title[locale]}</h3>
                  <p>{entry.description[locale]}</p>
                </article>
                <span className="journey-marker" aria-hidden="true" />
              </li>
            ))}
          </ol>
        </section>
      ))}
    </div>
  );
}
