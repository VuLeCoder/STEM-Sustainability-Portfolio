import { notFound } from "next/navigation";
import { SectionHeading } from "@/components/section-heading";
import { locales, projectsPageContent, siteContent, type Locale } from "@/constants/content";

export function generateStaticParams() {
  return locales.flatMap((locale) => siteContent.projects.map((project) => ({ locale, slug: project.slug })));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const selectedLocale = locale as Locale;
  const project = siteContent.projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const sections = [
    ["problem", project.problem],
    ["idea", project.details.solution],
    ["process", project.details.process],
    ["result", project.result],
    ["lessons", project.details.lessons],
  ] as const;

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading eyebrow={project.category[selectedLocale]} title={project.title} description={project.summary[selectedLocale]} />
      </section>
      <section className="border-y border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-16 sm:px-8 sm:py-24 md:grid-cols-2">
          {sections.map(([key, content]) => (
            <article key={key} className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6 sm:p-8">
              <h2 className="text-xl font-semibold tracking-tight">{projectsPageContent.sections[key][selectedLocale]}</h2>
              <p className="mt-4 leading-7 text-[var(--muted)]">{content[selectedLocale]}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
