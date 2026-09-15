"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/constants/common";
import type { JourneyItem } from "@/constants/journey";

const labels = {
  view: { vi: "Xem hình ảnh", en: "View photos" },
  evidence: { vi: "Xem hình ảnh", en: "View photos" },
  pdf: { vi: "Mở minh chứng PDF", en: "Open PDF evidence" },
  close: { vi: "Đóng", en: "Close" },
  previous: { vi: "Ảnh trước", en: "Previous image" },
  next: { vi: "Ảnh tiếp theo", en: "Next image" },
  zoom: { vi: "Phóng to", en: "Zoom in" },
  reset: { vi: "Thu nhỏ", en: "Zoom out" },
  photos: { vi: "ảnh", en: "photos" },
};

export function JourneyMedia({ item, locale }: { item: JourneyItem; locale: Locale }) {
  const images = item.images ?? [];
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState(false);
  const opened = index !== null;
  const title = item.type === "award" ? labels.evidence[locale] : labels.view[locale];

  useEffect(() => {
    if (!opened) return;
    const element = dialog.current;
    if (!element) return;
    const overflow = document.body.style.overflow;
    element.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element.close();
      document.body.style.overflow = overflow;
      trigger.current?.focus({ preventScroll: true });
    };
  }, [opened]);

  function move(delta: number) {
    setIndex((current) => current === null ? null : (current + delta + images.length) % images.length);
    setZoom(false);
    viewport.current?.scrollTo(0, 0);
  }

  if (!images.length && !item.evidencePdf) return null;
  const current = index === null ? null : images[index];
  return (
    <div className="journey-media" data-award={item.type === "award"}>
      {images.length > 0 && <>
        <div className="journey-media__previews" data-count={Math.min(images.length, 3)}>
          {images.slice(0, 3).map((image, position) => (
            <button type="button" className="journey-media__thumbnail" key={`${image.src}-${position}`}
              aria-label={`${title}: ${image.alt[locale]} (${position + 1}/${images.length})`}
              onClick={(event) => { trigger.current = event.currentTarget; setZoom(false); setIndex(position); }}>
              <Image src={image.src} alt={image.alt[locale]} fill sizes="(max-width: 767px) 80vw, 320px" />
              {position === 2 && images.length > 3 && <span className="journey-media__more">+{images.length - 3} {labels.photos[locale]}</span>}
            </button>
          ))}
        </div>
        <button type="button" className="journey-media__link" onClick={(event) => {
          trigger.current = event.currentTarget; setZoom(false); setIndex(0);
        }}>{title} <span aria-hidden="true">↗</span></button>
      </>}
      {item.evidencePdf && <a className="journey-media__link" href={item.evidencePdf} target="_blank" rel="noopener noreferrer">{labels.pdf[locale]} ↗</a>}
      <dialog ref={dialog} className="journey-lightbox" aria-label={`${title} — ${item.title[locale]}`}
        onCancel={(event) => { event.preventDefault(); setIndex(null); }}
        onClick={(event) => { if (event.target === event.currentTarget) setIndex(null); }}
        onKeyDown={(event) => {
          if (zoom || images.length < 2) return;
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault(); move(event.key === "ArrowLeft" ? -1 : 1);
          }
        }}>
        {current && <div className="journey-lightbox__content">
          <header className="journey-lightbox__toolbar">
            <strong>{item.title[locale]}</strong>
            <button type="button" onClick={() => setZoom(!zoom)} aria-pressed={zoom}>{zoom ? labels.reset[locale] : labels.zoom[locale]}</button>
            <button type="button" autoFocus onClick={() => setIndex(null)}>{labels.close[locale]} ×</button>
          </header>
          <div ref={viewport} className="journey-lightbox__viewport" data-zoom={zoom}>
            <div className="journey-lightbox__image">
              <Image key={current.src} src={current.src} alt={current.alt[locale]} fill sizes={zoom ? "200vw" : "100vw"} />
            </div>
          </div>
          <footer className="journey-lightbox__footer">
            {images.length > 1 && <button type="button" onClick={() => move(-1)} aria-label={labels.previous[locale]}>←</button>}
            <div aria-live="polite"><span>{(index ?? 0) + 1} / {images.length}</span><p>{current.caption?.[locale] ?? current.alt[locale]}</p></div>
            {images.length > 1 && <button type="button" onClick={() => move(1)} aria-label={labels.next[locale]}>→</button>}
          </footer>
        </div>}
      </dialog>
    </div>
  );
}
