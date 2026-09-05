import { SectionHeading } from "@/components/section-heading";
import { siteContent, type Locale } from "@/constants/content";

const storySymbols = ["01", "02", "03", "04"] as const;
const interestSymbols = ["⌬", "◈", "↗"] as const;

export function AboutSection({ locale: selectedLocale }: { locale: Locale }) {
  const { about, home } = siteContent;

  return (
    <>
      <section id="my-story" className="relative overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute right-0 top-20 h-px w-1/2 bg-[var(--border)]" />
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <SectionHeading eyebrow={home.story.eyebrow[selectedLocale]} title={home.story.title[selectedLocale]} />
          <div className="mt-10 grid gap-5 lg:grid-cols-[0.78fr_1.22fr] lg:gap-10">
            <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
              <p className="font-mono text-xs font-semibold tracking-[0.14em] text-[var(--primary)] uppercase">{home.story.eyebrow[selectedLocale]}</p>
              <p className="mt-5 leading-8 text-[var(--muted)]">{about.story[selectedLocale]}</p>
              <div className="mt-8 h-px w-full bg-[var(--border)]" />
              <p className="mt-5 font-mono text-xs font-semibold tracking-[0.13em] text-[var(--accent)] uppercase">{home.story.pathLabel[selectedLocale]}</p>
            </div>
            <ol className="grid gap-3 sm:grid-cols-2">
              {home.story.milestones.map((milestone, index) => (
                <li key={milestone.title.en} className="group relative rounded-[1.35rem] border border-[var(--border)] bg-[var(--surface-raised)] p-6 shadow-[var(--shadow)] transition duration-200 hover:-translate-y-1 hover:border-[var(--primary)]">
                  <span className="font-mono text-xs font-semibold tracking-[0.14em] text-[var(--primary)]">{storySymbols[index]}</span>
                  <h3 className="mt-8 text-xl font-semibold tracking-tight">{milestone.title[selectedLocale]}</h3>
                  <p className="mt-3 leading-7 text-[var(--muted)]">{milestone.description[selectedLocale]}</p>
                  {index < home.story.milestones.length - 1 ? <span aria-hidden="true" className="absolute -right-3 top-1/2 hidden size-6 rounded-full border border-[var(--border)] bg-[var(--background)] text-center font-mono text-xs leading-6 text-[var(--primary)] lg:block">+</span> : null}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <SectionHeading eyebrow={home.interests.eyebrow[selectedLocale]} title={home.interests.title[selectedLocale]} />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {home.interests.cards.map((card, index) => (
              <article key={card.title.en} className="group rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface-raised)] p-7 shadow-[var(--shadow)] transition duration-200 hover:-translate-y-1 hover:border-[var(--primary)] hover:shadow-[0_24px_56px_rgb(7_67_69_/_16%)]">
                <span aria-hidden="true" className="grid size-12 place-items-center rounded-2xl bg-[var(--primary)]/15 text-xl text-[var(--primary)] transition group-hover:bg-[var(--primary)] group-hover:text-[#06221d]">{interestSymbols[index]}</span>
                <h3 className="mt-8 text-2xl font-semibold tracking-tight">{card.title[selectedLocale]}</h3>
                <p className="mt-4 leading-7 text-[var(--muted)]">{card.description[selectedLocale]}</p>
                <span aria-hidden="true" className="mt-8 block h-px w-12 bg-[var(--accent)] transition-all group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-[linear-gradient(135deg,var(--primary)_-80%,transparent_48%)] opacity-10" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <SectionHeading eyebrow={home.valuesFuture.eyebrow[selectedLocale]} title={about.values[selectedLocale]} />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <article className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface-raised)] p-7 shadow-[var(--shadow)] sm:p-8">
              <p className="font-mono text-xs font-semibold tracking-[0.14em] text-[var(--primary)] uppercase">{home.valuesFuture.valuesLabel[selectedLocale]}</p>
              <p className="mt-5 text-xl font-semibold leading-8 tracking-tight">{about.values[selectedLocale]}</p>
            </article>
            <article className="rounded-[1.5rem] border border-dashed border-[var(--border)] bg-[var(--surface)] p-7 sm:p-8">
              <p className="font-mono text-xs font-semibold tracking-[0.14em] text-[var(--accent)] uppercase">{home.valuesFuture.futureLabel[selectedLocale]}</p>
              <p className="mt-5 text-lg leading-8 text-[var(--muted)]">{about.futureGoal[selectedLocale]}</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
