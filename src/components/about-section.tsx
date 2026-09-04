import { SectionHeading } from "@/components/section-heading";
import {
  aboutPageContent,
  siteContent,
  type Locale,
} from "@/constants/content";

export function AboutSection({
  locale: selectedLocale,
}: {
  locale: Locale;
}) {
  const about = siteContent.about;

  return (
    <>
      <section id="about" className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
        <div>
          <p className="font-mono text-xs font-semibold tracking-[0.16em] text-[var(--primary)] uppercase">
            {aboutPageContent.eyebrow[selectedLocale]}
          </p>
          <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
            {aboutPageContent.title[selectedLocale]}
          </h2>
          <div className="mt-8 max-w-2xl border-l-2 border-[var(--accent)] pl-5">
            <p className="font-mono text-xs font-semibold tracking-[0.14em] text-[var(--muted)] uppercase">
              {aboutPageContent.storyLabel[selectedLocale]}
            </p>
            <p className="mt-3 leading-8 text-[var(--muted)]">
              {about.story[selectedLocale]}
            </p>
          </div>
        </div>
        <div className="relative isolate min-h-80 overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-7 shadow-[var(--shadow)] sm:min-h-96 sm:p-10">
          <div className="absolute -right-10 top-8 size-44 rounded-full border-[24px] border-[var(--primary)]/20" />
          <div className="absolute -bottom-16 -left-8 size-52 rounded-full bg-[var(--accent)]/30" />
          <div className="relative flex h-full min-h-64 flex-col justify-between">
            <span className="grid size-16 place-items-center rounded-2xl bg-[var(--primary)] text-xl font-bold text-white">
              {siteContent.profile.initials}
            </span>
            <div className="max-w-sm rounded-2xl border border-[var(--border)] bg-[color:var(--background)]/80 p-5 backdrop-blur">
              <p className="font-mono text-[0.68rem] font-semibold tracking-[0.14em] text-[var(--primary)] uppercase">
                {siteContent.profile.positioning[selectedLocale]}
              </p>
              <p className="mt-3 text-xl font-semibold leading-8 tracking-tight">
                {about.values[selectedLocale]}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight">
                {aboutPageContent.academicInterestsLabel[selectedLocale]}
              </h2>
              <ul className="mt-6 space-y-4">
                {about.academicInterests.map((interest, index) => (
                  <li
                    key={interest.en}
                    className="flex gap-4 leading-7 text-[var(--muted)]"
                  >
                    <span className="font-mono text-sm font-semibold text-[var(--accent)]">
                      0{index + 1}
                    </span>
                    <span>{interest[selectedLocale]}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight">
                {aboutPageContent.strengthsLabel[selectedLocale]}
              </h2>
              <ul className="mt-6 space-y-4">
                {about.strengths.map((strength, index) => (
                  <li
                    key={strength.en}
                    className="flex gap-4 leading-7 text-[var(--muted)]"
                  >
                    <span className="font-mono text-sm font-semibold text-[var(--primary)]">
                      0{index + 1}
                    </span>
                    <span>{strength[selectedLocale]}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow={aboutPageContent.valuesLabel[selectedLocale]}
          title={about.values[selectedLocale]}
        />
        <div className="mt-8 max-w-3xl rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
          <p className="font-mono text-xs font-semibold tracking-[0.14em] text-[var(--primary)] uppercase">
            {aboutPageContent.futureGoalLabel[selectedLocale]}
          </p>
          <p className="mt-4 text-lg leading-8 text-[var(--muted)]">
            {about.futureGoal[selectedLocale]}
          </p>
        </div>
      </section>
    </>
  );
}
