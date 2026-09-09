import type { Metadata } from "next";
import Image from "next/image";
import { ProjectGalleryList } from "@/components/project-gallery-list";
import { notFound } from "next/navigation";
import { createLocalizedMetadata } from "@/lib/site-metadata";
import { projectsPageContent } from "@/constants/project";
import { siteContent } from "@/constants/common";
import { isLocale } from "@/lib/i18n";
import "./projects.css";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return createLocalizedMetadata({
    locale,
    path: "/projects",
    title: projectsPageContent.title[locale] + " | " + siteContent.seo.siteName,
    description: projectsPageContent.description[locale],
    image: siteContent.projects[0].coverImage,
  });
}

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = projectsPageContent;
  const labels = siteContent.home.featuredProjects;

  return (
    <main className="project-gallery">
      <div className="project-gallery__shell">
        <header className="project-gallery__header">
          <span className="project-gallery__label">{content.eyebrow[locale]}</span>
          <h1>{content.title[locale]}</h1>
          <p>{content.description[locale]}</p>
        </header>
        <section aria-label={content.allProjectsLabel[locale]}>
          <ProjectGalleryList moreLabel={content.showMore[locale]} lessLabel={content.showLess[locale]}>
            {siteContent.projects.map((project, index) => {
              const externalLink = project.externalLinks.find((link) => /^https?:\/\//.test(link.href));
              const placeholder = !project.coverImage || project.coverImage.includes("/placeholders/");
              return (
                <li key={project.slug}>
                  <article className="project-gallery__card" aria-labelledby={`project-${project.slug}`}>
                    <div className="project-gallery__image">
                      {placeholder ? (
                        <div className="project-gallery__placeholder">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
                            <rect x="3" y="3" width="18" height="18" rx="3" />
                            <circle cx="8" cy="8" r="1.5" />
                            <path d="m3 17 5-5 4 4 4-6 5 7" />
                          </svg>
                          <span>{labels.imagePlaceholder[locale]}</span>
                        </div>
                      ) : (
                        <Image src={project.coverImage} alt={project.title} fill sizes="(min-width: 1280px) 384px, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
                      )}
                      <span className="project-gallery__number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <div className="project-gallery__body">
                      <div className="project-gallery__meta">
                        <span>{project.category[locale]}</span>
                        {project.year && <time>{project.year}</time>}
                      </div>
                      <h2 id={`project-${project.slug}`} title={project.title}>{project.title}</h2>
                      <p title={project.summary[locale]}>{project.summary[locale]}</p>
                      <div className="project-gallery__footer">
                        {externalLink ? (
                          <a href={externalLink.href} target="_blank" rel="noopener noreferrer" aria-label={`${labels.openProject[locale]}: ${project.title}`}>
                            {labels.openProject[locale]} <span aria-hidden="true">↗</span>
                          </a>
                        ) : <span className="project-gallery__pending">{labels.pendingLink[locale]}</span>}
                      </div>
                    </div>
                  </article>
                </li>
              );
            })}
          </ProjectGalleryList>
        </section>
      </div>
    </main>
  );
}
