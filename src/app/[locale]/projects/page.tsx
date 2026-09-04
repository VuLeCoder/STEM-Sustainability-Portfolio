import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionHeading } from "@/components/section-heading";
import { locales, projectsPageContent, siteContent, type Locale } from "@/constants/content";

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const selectedLocale = locale as Locale;

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
      <SectionHeading eyebrow={projectsPageContent.eyebrow[selectedLocale]} title={projectsPageContent.title[selectedLocale]} description={projectsPageContent.description[selectedLocale]} />
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {siteContent.projects.map((project) => (
          <article key={project.slug} className="flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-7">
            <p className="font-mono text-xs font-semibold tracking-[0.14em] text-[var(--primary)] uppercase">{project.category[selectedLocale]}</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight">{project.title}</h2>
            <p className="mt-3 flex-1 leading-7 text-[var(--muted)]">{project.summary[selectedLocale]}</p>
            <Link className="mt-6 w-fit rounded-full border border-[var(--border)] px-4 py-2 text-sm font-semibold transition-colors hover:bg-[var(--background)]" href={`/${selectedLocale}/projects/${project.slug}`}>
              {projectsPageContent.viewProject[selectedLocale]}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
