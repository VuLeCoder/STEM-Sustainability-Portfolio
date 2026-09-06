import Image from "next/image";
import { notFound } from "next/navigation";
import {
  locales,
  projectsPageContent,
  siteContent,
  type Locale,
} from "@/constants/content";

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
          const externalLink = project.externalLinks[0];
          const hasExternalLink = Boolean(externalLink);

          return (
            <article className="project-showcase" key={project.slug}>
              <div className="project-showcase-visual">
                <Image
                  src={project.coverImage}
                  alt={`${project.title} — ${project.category[selectedLocale]}`}
                  fill
                  sizes="(min-width: 768px) 55vw, 100vw"
                />
                <span aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {hasExternalLink ? (
                  <a
                    className="project-showcase-visual-link"
                    href={externalLink.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${projectsPageContent.externalLinkLabel[selectedLocale]}: ${project.title}`}
                  />
                ) : null}
              </div>

              <div className="project-showcase-copy">
                <div className="project-showcase-kicker">
                  <span>
                    {projectsPageContent.indexLabel[selectedLocale]} /{" "}
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{project.category[selectedLocale]}</span>
                </div>
                <h2>
                  {hasExternalLink ? (
                    <a href={externalLink.href} target="_blank" rel="noreferrer">
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h2>
                <p className="project-showcase-summary">
                  {project.summary[selectedLocale]}
                </p>

                <dl className="project-showcase-details">
                  {project.problem ? (
                    <div>
                      <dt>
                        {projectsPageContent.sections.problem[selectedLocale]}
                      </dt>
                      <dd>{project.problem[selectedLocale]}</dd>
                    </div>
                  ) : null}
                  <div>
                    <dt>{projectsPageContent.roleLabel[selectedLocale]}</dt>
                    <dd>{project.role[selectedLocale]}</dd>
                  </div>
                  <div>
                    <dt>{projectsPageContent.fieldsLabel[selectedLocale]}</dt>
                    <dd className="project-fields">
                      {project.fields[selectedLocale].join(" · ")}
                    </dd>
                  </div>
                  <div className="project-result">
                    <dt>{projectsPageContent.resultLabel[selectedLocale]}</dt>
                    <dd>{project.result[selectedLocale]}</dd>
                  </div>
                </dl>

                {hasExternalLink ? (
                  <a
                    className="project-external-link"
                    href={externalLink.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {projectsPageContent.externalLinkLabel[selectedLocale]}{" "}
                    <span aria-hidden="true">↗</span>
                  </a>
                ) : null}
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
