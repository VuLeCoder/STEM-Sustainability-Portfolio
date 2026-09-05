import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/button-link";
import { AboutSection } from "@/components/about-section";
import { locales, siteContent, type Locale } from "@/constants/content";

const contactIcons = ["@", "◌", "⌖"] as const;

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const selectedLocale = locale as Locale;
  const { profile, contact, home } = siteContent;
  const phoneNumber = contact.phone.replace(/[^+\d]/g, "");
  const heroContact = [
    { label: home.contactHero.emailLabel[selectedLocale], value: contact.email, href: "mailto:" + contact.email },
    { label: home.contactHero.phoneLabel[selectedLocale], value: contact.phone, href: phoneNumber ? "tel:" + phoneNumber : undefined },
    { label: home.contactHero.locationLabel[selectedLocale], value: contact.location[selectedLocale] },
  ];

  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-[var(--border)]">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-70 [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:42px_42px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-8 -z-10 size-[28rem] rounded-full bg-[var(--primary)]/15 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -left-24 bottom-0 -z-10 size-80 rounded-full bg-[var(--accent)]/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-16 lg:py-28">
          <div>
            <p className="font-mono text-xs font-semibold tracking-[0.18em] text-[var(--primary)] uppercase">{home.eyebrow[selectedLocale]}</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.045em] text-balance sm:text-6xl lg:text-7xl">{profile.name}</h1>
            <p className="mt-6 max-w-2xl text-xl font-medium leading-8 tracking-tight sm:text-2xl">{profile.positioning[selectedLocale]}</p>
            <p className="mt-5 max-w-2xl leading-7 text-[var(--muted)]">{profile.introduction[selectedLocale]}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={"/" + selectedLocale + "/projects"}>{home.primaryCta[selectedLocale]}</ButtonLink>
              <ButtonLink href="#my-story" variant="secondary">{home.contactHero.storyCta[selectedLocale]}</ButtonLink>
            </div>
          </div>

          <aside className="relative overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface-raised)] p-6 shadow-[var(--shadow)] sm:p-8">
            <div aria-hidden="true" className="absolute right-0 top-0 size-36 translate-x-8 -translate-y-8 rounded-full border-[20px] border-[var(--primary)]/20" />
            <div className="relative">
              <div className="flex items-start justify-between gap-4 border-b border-[var(--border)] pb-6">
                <div className="flex items-center gap-4">
                  <span className="grid size-14 place-items-center rounded-2xl bg-[var(--primary)] text-lg font-bold text-[#06221d] shadow-lg">{profile.initials}</span>
                  <div>
                    <p className="font-mono text-[0.68rem] font-semibold tracking-[0.15em] text-[var(--primary)] uppercase">{home.contactHero.profileLabel[selectedLocale]}</p>
                    <p className="mt-1 text-sm font-medium text-[var(--muted)]">{profile.location[selectedLocale]}</p>
                  </div>
                </div>
                <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 font-mono text-[0.65rem] font-semibold tracking-[0.12em] text-[var(--muted)] uppercase">{home.contactHero.contactLabel[selectedLocale]}</span>
              </div>
              <dl className="mt-5 space-y-1">
                {heroContact.map((item, index) => (
                  <div key={item.label} className="grid grid-cols-[2rem_minmax(0,1fr)] items-start gap-3 rounded-xl px-2 py-3 transition-colors hover:bg-[var(--surface)]">
                    <span aria-hidden="true" className="grid size-8 place-items-center rounded-lg bg-[var(--surface)] font-mono text-sm text-[var(--primary)]">{contactIcons[index]}</span>
                    <div className="min-w-0">
                      <dt className="font-mono text-[0.65rem] font-semibold tracking-[0.13em] text-[var(--muted)] uppercase">{item.label}</dt>
                      {item.href ? <dd className="mt-0.5 truncate text-sm font-medium text-[var(--foreground)]"><a href={item.href} className="hover:text-[var(--primary)] hover:underline">{item.value}</a></dd> : <dd className="mt-0.5 text-sm font-medium text-[var(--foreground)]">{item.value}</dd>}
                    </div>
                  </div>
                ))}
              </dl>
              <div className="mt-5 flex flex-wrap gap-2 border-t border-[var(--border)] pt-5">
                <a href={contact.cvFile} className="inline-flex items-center rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-[#06221d] transition hover:brightness-110">{home.contactHero.cvLabel[selectedLocale]} <span aria-hidden="true" className="ml-2">↗</span></a>
                {contact.socialLinks.map((link) => <a key={link.label} href={link.href} className="inline-flex items-center rounded-full border border-[var(--border)] px-4 py-2 text-sm font-semibold transition hover:border-[var(--primary)] hover:text-[var(--primary)]">{link.label} <span aria-hidden="true" className="ml-2">↗</span></a>)}
              </div>
            </div>
          </aside>
        </div>
      </section>
      <AboutSection locale={selectedLocale} />
    </>
  );
}
