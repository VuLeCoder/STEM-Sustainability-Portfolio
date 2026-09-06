import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  locales,
  projectDetailContent,
  siteContent,
  type Locale,
} from "@/constants/content";

type ProjectDetailPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    siteContent.projects.map((project) => ({ locale, slug: project.slug })),
  );
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!locales.includes(locale as Locale)) return {};

  const project = siteContent.projects.find((item) => item.slug === slug);
  if (!project) return {};

  const selectedLocale = locale as Locale;
  return {
    title: `${project.title} | ${siteContent.seo.siteName}`,
    description: project.summary[selectedLocale],
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { locale, slug } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  const selectedLocale = locale as Locale;
  const projectIndex = siteContent.projects.findIndex(
    (item) => item.slug === slug,
  );
  if (projectIndex === -1) notFound();

  const project = siteContent.projects[projectIndex];
  const nextProject =
    siteContent.projects[(projectIndex + 1) % siteContent.projects.length];
  const index = String(projectIndex + 1).padStart(2, "0");

  return (
    <main className="project-detail-page">
      <header className="project-detail-hero project-detail-shell">
        <Link className="project-detail-back" href={`/${selectedLocale}/projects`}>
          <span aria-hidden="true">←</span>{" "}
          {projectDetailContent.backToProjects[selectedLocale]}
        </Link>

        <p className="editorial-label">
          {projectDetailContent.projectLabel[selectedLocale]} / {index}
        </p>
        <h1>{project.title}</h1>
        <p className="project-detail-summary">
          {project.summary[selectedLocale]}
        </p>

        <dl className="project-detail-meta">
          <div>
            <dt>{projectDetailContent.roleLabel[selectedLocale]}</dt>
            <dd>{project.role[selectedLocale]}</dd>
          </div>
          {project.year ? (
            <div>
              <dt>{projectDetailContent.yearLabel[selectedLocale]}</dt>
              <dd>{project.year}</dd>
            </div>
          ) : null}
          <div>
            <dt>{projectDetailContent.fieldsLabel[selectedLocale]}</dt>
            <dd>{project.fields[selectedLocale].join(" · ")}</dd>
          </div>
        </dl>
      </header>

      <div className="project-detail-cover project-detail-shell">
        <Image
          src={project.coverImage}
          alt={`${project.title} — ${project.category[selectedLocale]}`}
          fill
          priority
          sizes="(min-width: 1440px) 1376px, calc(100vw - 40px)"
        />
      </div>

      <div className="project-detail-body project-detail-shell">
        {project.problem ? (
          <section className="project-detail-section">
            <p className="project-detail-section-index">01</p>
            <div>
              <h2>{projectDetailContent.problemLabel[selectedLocale]}</h2>
              <p>{project.problem[selectedLocale]}</p>
            </div>
          </section>
        ) : null}

        <section className="project-detail-section">
          <p className="project-detail-section-index">
            {project.problem ? "02" : "01"}
          </p>
          <div>
            <h2>{projectDetailContent.resultLabel[selectedLocale]}</h2>
            <p>{project.result[selectedLocale]}</p>
          </div>
        </section>

        {project.externalLinks.length > 0 ? (
          <section className="project-detail-links">
            <h2>{projectDetailContent.externalLinksLabel[selectedLocale]}</h2>
            <div>
              {project.externalLinks.map((link) => (
                <a
                  href={link.href}
                  key={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label[selectedLocale]} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </section>
        ) : null}
      </div>

      <nav
        aria-label={projectDetailContent.nextProjectLabel[selectedLocale]}
        className="project-detail-next project-detail-shell"
      >
        <p>{projectDetailContent.nextProjectLabel[selectedLocale]}</p>
        <Link href={`/${selectedLocale}/projects/${nextProject.slug}`}>
          <span>{nextProject.title}</span>
          <span aria-hidden="true">→</span>
        </Link>
      </nav>
    </main>
  );
}
