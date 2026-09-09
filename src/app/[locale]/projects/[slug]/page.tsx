import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { locales, siteContent } from "@/constants/common";
import { projectDetailContent, type Project } from "@/constants/project";
import { isLocale } from "@/lib/i18n";
import { ProjectCaseStudySection } from "@/components/project-case-study-section";
import { createLocalizedMetadata } from "@/lib/site-metadata";

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
  if (!isLocale(locale)) return {};

  const project = siteContent.projects.find((item) => item.slug === slug);
  if (!project) return {};

  const selectedLocale = locale;
  return createLocalizedMetadata({
    locale: selectedLocale,
    path: "/projects/" + project.slug,
    title: project.title + " | " + siteContent.seo.siteName,
    description: project.summary[selectedLocale],
    image: project.coverImage,
  });
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const selectedLocale = locale;
  const projectIndex = siteContent.projects.findIndex(
    (item) => item.slug === slug,
  );
  if (projectIndex === -1) notFound();

  const project: Project = siteContent.projects[projectIndex];
  const previousProject =
    siteContent.projects[
      (projectIndex - 1 + siteContent.projects.length) %
        siteContent.projects.length
    ];
  const nextProject =
    siteContent.projects[(projectIndex + 1) % siteContent.projects.length];
  const index = String(projectIndex + 1).padStart(2, "0");
  const sectionCandidates: Array<{ title: string; content: string } | null> = [
    project.problem
      ? {
          title: projectDetailContent.problemLabel[selectedLocale],
          content: project.problem[selectedLocale],
        }
      : null,
    project.details?.objective
      ? {
          title: projectDetailContent.objectiveLabel[selectedLocale],
          content: project.details.objective[selectedLocale],
        }
      : null,
    project.details?.evidence
      ? {
          title: projectDetailContent.evidenceLabel[selectedLocale],
          content: project.details.evidence[selectedLocale],
        }
      : null,
    project.details?.solution
      ? {
          title: projectDetailContent.solutionLabel[selectedLocale],
          content: project.details.solution[selectedLocale],
        }
      : null,
    project.details?.process
      ? {
          title: projectDetailContent.processLabel[selectedLocale],
          content: project.details.process[selectedLocale],
        }
      : null,
    {
      title: projectDetailContent.resultLabel[selectedLocale],
      content: project.result[selectedLocale],
    },
    project.details?.lessons
      ? {
          title: projectDetailContent.lessonsLabel[selectedLocale],
          content: project.details.lessons[selectedLocale],
        }
      : null,
    project.details?.futureWork
      ? {
          title: projectDetailContent.futureWorkLabel[selectedLocale],
          content: project.details.futureWork[selectedLocale],
        }
      : null,
  ];
  const sections = sectionCandidates.filter((section) => section !== null);

  return (
    <main className="project-detail-page">
      <header className="project-detail-hero project-detail-shell">
        <Link
          className="project-detail-back"
          href={`/${selectedLocale}/projects`}
        >
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

      <div data-reveal className="project-detail-cover project-detail-shell">
        <Image
          src={project.coverImage}
          alt={`${project.title} — ${project.category[selectedLocale]}`}
          fill
          priority
          sizes="(min-width: 1440px) 1376px, calc(100vw - 40px)"
        />
      </div>

      <div data-reveal className="project-detail-body project-detail-shell">
        {sections.map((section, sectionIndex) => (
          <ProjectCaseStudySection
            content={section.content}
            index={sectionIndex + 1}
            key={section.title}
            title={section.title}
          />
        ))}
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
        aria-label={projectDetailContent.projectNavigationLabel[selectedLocale]}
        className="project-detail-navigation project-detail-shell"
      >
        <Link
          className="project-detail-navigation-link project-detail-navigation-link--previous"
          href={`/${selectedLocale}/projects/${previousProject.slug}`}
        >
          <span className="project-detail-navigation-label">
            <span aria-hidden="true">←</span>{" "}
            {projectDetailContent.previousProjectLabel[selectedLocale]}
          </span>
          <span className="project-detail-navigation-title">
            {previousProject.title}
          </span>
        </Link>
        <Link
          className="project-detail-navigation-link project-detail-navigation-link--next"
          href={`/${selectedLocale}/projects/${nextProject.slug}`}
        >
          <span className="project-detail-navigation-label">
            {projectDetailContent.nextProjectLabel[selectedLocale]}{" "}
            <span aria-hidden="true">→</span>
          </span>
          <span className="project-detail-navigation-title">
            {nextProject.title}
          </span>
        </Link>
      </nav>
    </main>
  );
}
