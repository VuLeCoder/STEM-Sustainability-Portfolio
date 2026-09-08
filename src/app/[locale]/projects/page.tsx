import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SelectedProjects } from "@/components/selected-projects";
import { createLocalizedMetadata } from "@/lib/site-metadata";
import { projectsPageContent, siteContent } from "@/constants/content";
import { isLocale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const selectedLocale = locale;
  return createLocalizedMetadata({
    locale: selectedLocale,
    path: "/projects",
    title:
      projectsPageContent.title[selectedLocale] +
      " | " +
      siteContent.seo.siteName,
    description: projectsPageContent.description[selectedLocale],
    image: siteContent.projects[0].coverImage,
  });
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const selectedLocale = locale;
  const featuredProjects = [
    ...siteContent.projects.filter((project) => project.featured),
    ...siteContent.projects.filter((project) => !project.featured),
  ].slice(0, 5);

  return (
    <main className="projects-page">
      <header className="projects-intro projects-shell">
        <p className="editorial-label">
          {projectsPageContent.eyebrow[selectedLocale]}
        </p>
        <div className="projects-intro-grid">
          <h1>{projectsPageContent.title[selectedLocale]}</h1>
          <p>{projectsPageContent.description[selectedLocale]}</p>
        </div>
      </header>

      <section className="projects-featured projects-shell">
        <div className="projects-section-heading">
          <p className="editorial-label">
            {projectsPageContent.featuredLabel[selectedLocale]}
          </p>
          <h2>{projectsPageContent.featuredTitle[selectedLocale]}</h2>
        </div>
        <SelectedProjects
          locale={selectedLocale}
          projects={featuredProjects}
          otherProjectsLabel={projectsPageContent.otherProjectsLabel[selectedLocale]}
          viewProjectLabel={projectsPageContent.viewProject[selectedLocale]}
          viewAllLabel={projectsPageContent.viewAllLabel[selectedLocale]}
        />
      </section>

      <section className="projects-index projects-shell">
        <div className="projects-section-heading">
          <p className="editorial-label">
            {projectsPageContent.allProjectsLabel[selectedLocale]}
          </p>
          <h2>{projectsPageContent.allProjectsTitle[selectedLocale]}</h2>
        </div>
        <ol className="projects-index-list">
        {siteContent.projects.map((project, index) => {
          const projectHref = `/${selectedLocale}/projects/${project.slug}`;
          const projectNumber = String(index + 1).padStart(2, "0");

          return (
            <li key={project.slug}>
              <Link href={projectHref}>
                <span className="projects-index-number">{projectNumber}</span>
                <span className="projects-index-main">
                  <small>
                    {[project.year, project.category[selectedLocale]]
                      .filter(Boolean)
                      .join(" · ")}
                  </small>
                  <strong>{project.title}</strong>
                </span>
                <span className="projects-index-fields">
                  {project.fields[selectedLocale].join(" · ")}
                </span>
                <span className="projects-index-arrow" aria-hidden="true">↗</span>
              </Link>
            </li>
          );
        })}
        </ol>
      </section>
    </main>
  );
}
