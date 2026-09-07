import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createLocalizedMetadata } from "@/lib/site-metadata";
import {
  locales,
  projectsPageContent,
  siteContent,
  type Locale,
} from "@/constants/content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};
  const selectedLocale = locale as Locale;
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
  if (!locales.includes(locale as Locale)) notFound();
  const selectedLocale = locale as Locale;

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

      <section
        className="projects-showcases projects-shell"
        aria-label={projectsPageContent.eyebrow[selectedLocale]}
      >
        {siteContent.projects.map((project, index) => {
          const projectHref = `/${selectedLocale}/projects/${project.slug}`;
          const projectNumber = String(index + 1).padStart(2, "0");

          return (
            <article className="project-showcase" key={project.slug}>
              <Link
                className="project-showcase-visual"
                href={projectHref}
                aria-label={`${projectsPageContent.viewProject[selectedLocale]}: ${project.title}`}
              >
                <Image
                  src={project.coverImage}
                  alt=""
                  fill
                  sizes="(min-width: 960px) 50vw, 100vw"
                />
                <span aria-hidden="true">{projectNumber}</span>
              </Link>

              <div className="project-showcase-copy">
                <p className="project-showcase-kicker">
                  <span>{projectNumber}</span>
                  <span aria-hidden="true">/</span>
                  <span>{project.category[selectedLocale]}</span>
                </p>

                <h2>
                  <Link href={projectHref}>{project.title}</Link>
                </h2>

                <p className="project-showcase-summary">
                  {project.summary[selectedLocale]}
                </p>

                <p className="project-showcase-fields">
                  {project.fields[selectedLocale].join(" · ")}
                </p>

                {project.achievementShort ? (
                  <p className="project-showcase-achievement">
                    {project.achievementShort[selectedLocale]}
                  </p>
                ) : null}

                <Link className="project-showcase-cta" href={projectHref}>
                  <span>{projectsPageContent.viewProject[selectedLocale]}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
