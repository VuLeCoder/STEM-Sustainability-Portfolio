import { siteContent, type Locale, type Localized } from "@/constants/content";

type HomeProject = {
  slug: string;
  title: string;
  category: Localized<string>;
  summary: Localized<string>;
  role: Localized<string>;
  result: Localized<string>;
};

export function HomeProjectCard({ locale, project, actionLabel }: { locale: Locale; project: HomeProject; actionLabel?: string }) {
  const isBloomWatch = project.slug === "bloomwatch";

  return (
    <article className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--background)] shadow-[var(--shadow)]">
      <div className={`relative min-h-56 overflow-hidden p-6 sm:p-8 ${isBloomWatch ? "bg-[#33486a]" : "bg-[#1f6b4f]"}`}>
        <div className={`absolute -right-8 -top-10 size-44 rounded-full border-[18px] ${isBloomWatch ? "border-[#d5b05f]" : "border-[#a7d9a9]"}`} />
        <div className={`absolute -bottom-16 left-8 size-44 rounded-full ${isBloomWatch ? "bg-[#647a9c]" : "bg-[#3e8a68]"}`} />
        <div className={`absolute bottom-9 right-11 size-6 rounded-full ${isBloomWatch ? "bg-[#e6c36c]" : "bg-[#e2b857]"}`} />
        <div className="relative flex h-full min-h-40 flex-col justify-between">
          <span className="w-fit rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-white backdrop-blur">{project.category[locale]}</span>
          <p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{project.title}</p>
        </div>
      </div>
      <div className="p-6 sm:p-8">
        <p className="text-base leading-7 text-[var(--foreground)]">{project.summary[locale]}</p>
        <dl className="mt-7 grid gap-5 border-t border-[var(--border)] pt-5 sm:grid-cols-2">
          <div>
            <dt className="font-mono text-[0.7rem] font-semibold tracking-[0.14em] text-[var(--primary)] uppercase">{siteContent.home.projectRoleLabel[locale]}</dt>
            <dd className="mt-2 text-sm leading-6 text-[var(--muted)]">{project.role[locale]}</dd>
          </div>
          <div>
            <dt className="font-mono text-[0.7rem] font-semibold tracking-[0.14em] text-[var(--primary)] uppercase">{siteContent.home.projectHighlightLabel[locale]}</dt>
            <dd className="mt-2 text-sm leading-6 text-[var(--muted)]">{project.result[locale]}</dd>
          </div>
        </dl>
        {actionLabel ? <a href="#" className="mt-7 inline-flex rounded-full border border-[var(--border)] px-4 py-2 text-sm font-semibold transition-colors hover:border-[var(--primary)] hover:bg-[var(--surface)] hover:text-[var(--primary)]">{actionLabel}</a> : null}
      </div>
    </article>
  );
}
