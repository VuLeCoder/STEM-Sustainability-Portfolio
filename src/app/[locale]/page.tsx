import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/button-link";
import { HomeProjectCard } from "@/components/home-project-card";
import { SectionHeading } from "@/components/section-heading";
import { locales, siteContent, type Locale } from "@/constants/content";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const selectedLocale = locale as Locale;
  return (
    <>
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
        <div>
          <p className="font-mono text-xs font-semibold tracking-[0.16em] text-[var(--primary)] uppercase">{siteContent.home.eyebrow[selectedLocale]}</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">{siteContent.profile.name}</h1>
          <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-[var(--foreground)]">{siteContent.profile.positioning[selectedLocale]}</p>
          <p className="mt-5 max-w-2xl leading-7 text-[var(--muted)]">{siteContent.profile.introduction[selectedLocale]}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="#featured-projects">{siteContent.home.primaryCta[selectedLocale]}</ButtonLink>
            <ButtonLink href="#approach" variant="secondary">{siteContent.home.secondaryCta[selectedLocale]}</ButtonLink>
          </div>
        </div>
        <div className="relative isolate min-h-80 overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-7 shadow-[var(--shadow)] sm:min-h-96 sm:p-10">
          <div className="absolute -right-16 -top-12 size-64 rounded-full border-[32px] border-[var(--primary)]/20" />
          <div className="absolute -bottom-20 -left-10 size-64 rounded-full bg-[var(--accent)]/35" />
          <div className="relative flex h-full min-h-64 flex-col justify-between">
            <div className="flex items-center gap-3">
              <span className="grid size-14 place-items-center rounded-2xl bg-[var(--primary)] text-lg font-bold text-white">{siteContent.profile.initials}</span>
              <span className="font-mono text-xs font-semibold tracking-[0.12em] text-[var(--muted)] uppercase">{siteContent.profile.location[selectedLocale]}</span>
            </div>
            <div className="max-w-sm rounded-2xl border border-[var(--border)] bg-[color:var(--background)]/80 p-5 backdrop-blur">
              <p className="font-mono text-[0.68rem] font-semibold tracking-[0.14em] text-[var(--primary)] uppercase">{siteContent.home.visualLabel}</p>
              <p className="mt-3 text-xl font-semibold leading-8 tracking-tight">{siteContent.about.values[selectedLocale]}</p>
            </div>
          </div>
        </div>
      </section>
      <section id="approach" className="border-y border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <SectionHeading eyebrow={siteContent.home.approach.eyebrow[selectedLocale]} title={siteContent.home.approach.title[selectedLocale]} description={siteContent.home.approach.description[selectedLocale]} />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {siteContent.narrative.map((item, index) => (
              <article key={item.key} className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6">
                <span className="font-mono text-xs font-semibold tracking-[0.14em] text-[var(--accent)]">0{index + 1}</span>
                <h3 className="mt-7 text-2xl font-semibold tracking-tight">{item.title[selectedLocale]}</h3>
                <p className="mt-3 leading-7 text-[var(--muted)]">{item.description[selectedLocale]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="featured-projects" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading eyebrow={siteContent.home.featuredProjects.eyebrow[selectedLocale]} title={siteContent.home.featuredProjects.title[selectedLocale]} description={siteContent.home.featuredProjects.description[selectedLocale]} />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {siteContent.projects.filter((project) => project.featured).map((project) => <HomeProjectCard key={project.slug} locale={selectedLocale} project={project} />)}
        </div>
      </section>
    </>
  );
}
