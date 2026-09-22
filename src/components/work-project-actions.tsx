"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import type { Locale } from "@/constants/common";
import type { WorkItem } from "@/constants/works";
import { workCaseStudies, workPhotos } from "@/constants/work-case-studies";

export function WorkProjectActions({ item, locale }: { item: WorkItem; locale: Locale }) {
  const vi = locale === "vi";
  const research = item.type === "research";
  const requestHref = item.href.startsWith("/") ? `/${locale}${item.href}` : item.href;
  const dialog = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const [mode, setMode] = useState<"study" | "photos" | null>(null);
  const [photo, setPhoto] = useState(0);
  const sections = workCaseStudies[item.slug] ?? [];
  const photos = workPhotos[item.slug] ?? [];
  const externalHref = /^https?:\/\//.test(item.href) ? item.href : null;

  useEffect(() => {
    if (!mode) return;
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    element?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element?.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [mode]);

  return <>
    <div className="works-project-actions">
      {sections.length > 0 && <button type="button" className="works-action works-action--primary" onClick={() => setMode("study")} aria-haspopup="dialog">Case study <span aria-hidden="true">↗</span></button>}
      {photos.length > 0 && <button type="button" className="works-action" onClick={() => { setPhoto(0); setMode("photos"); }} aria-haspopup="dialog">{vi ? "Ảnh" : "Photos"} <span>{photos.length}</span></button>}
      {research ? <Link className="works-action" href={requestHref} target={item.external ? "_blank" : undefined} rel={item.external ? "noopener noreferrer" : undefined} aria-label={`${item.cta[locale]}: ${item.title[locale]}`}>{item.cta[locale]} <span aria-hidden="true">{item.external ? "↗" : "→"}</span></Link> : externalHref && <a className="works-action" href={externalHref} target="_blank" rel="noopener noreferrer">{vi ? "Link ngoài" : "External link"} <span aria-hidden="true">↗</span></a>}
    </div>
    <dialog ref={dialog} className={`works-dialog${mode === "photos" ? " works-dialog--photos" : ""}`} aria-labelledby={titleId} onCancel={() => setMode(null)} onClose={() => setMode(null)} onClick={event => { if (event.target === event.currentTarget) { const rect = event.currentTarget.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) setMode(null); } }}>
      <div className="works-dialog__bar"><>{mode === "photos" ? <h2 id={titleId} className="works-dialog__photo-title"><strong>{item.title[locale]}</strong><span> - Photo gallery</span></h2> : <span>Case study</span>}</><button type="button" onClick={() => setMode(null)} aria-label={vi ? "Đóng popup" : "Close dialog"}>{vi ? "Đóng" : "Close"} <span aria-hidden="true">×</span></button></div>
      <div className="works-dialog__content">
        {mode === "study" && <header className="works-dialog__header"><p className="works-kicker">{item.type === "research" ? (vi ? "Nghiên cứu" : "Research") : (vi ? "Dự án" : "Project")}{item.year ? ` · ${item.year}` : ""}</p><h2 id={titleId}>{item.title[locale]}</h2>{mode === "study" && <p>{item.description[locale]}</p>}</header>}
        {mode === "study" && <div className="works-study">{sections.map((section, index) => <section key={index} className="works-study__section"><span className="works-study__number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><div><h3>{section.title[locale]}</h3><p>{section.body[locale]}</p></div></section>)}</div>}
        {mode === "photos" && photos.length > 0 && <div className="works-gallery"><div className="works-gallery__image"><Image src={photos[photo]} alt={`${item.title[locale]} — ${vi ? "ảnh" : "photo"} ${photo + 1}`} fill sizes="(max-width: 767px) 90vw, 800px" style={{ objectFit: "contain" }} /></div><div className="works-gallery__controls"><button type="button" disabled={photo === 0} onClick={() => setPhoto(value => value - 1)} aria-label={vi ? "Ảnh trước" : "Previous photo"}>←</button><p role="status" aria-live="polite">{photo + 1} / {photos.length}</p><button type="button" disabled={photo === photos.length - 1} onClick={() => setPhoto(value => value + 1)} aria-label={vi ? "Ảnh tiếp theo" : "Next photo"}>→</button></div></div>}
      </div>
    </dialog>
  </>;
}
