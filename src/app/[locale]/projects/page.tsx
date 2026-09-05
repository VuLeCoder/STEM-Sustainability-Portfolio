import { notFound } from "next/navigation";
import { HomeProjectCard } from "@/components/home-project-card";
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
        {siteContent.projects.map((project) => <HomeProjectCard key={project.slug} locale={selectedLocale} project={project} actionLabel={projectsPageContent.viewProject[selectedLocale]} />)}      </div>
    </section>
  );
}
