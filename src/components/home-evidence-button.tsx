"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import type { Locale } from "@/constants/common";

export function HomeEvidenceButton({ locale, title, imageSrc, photos, children }: {
  locale: Locale;
  title: string;
  imageSrc?: string;
  photos?: { src: string; caption: string }[];
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [failed, setFailed] = useState(false);
  const [index, setIndex] = useState(0);
  const touch = useRef<{ x: number; y: number } | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const vi = locale === "vi";
  const images = photos ?? (imageSrc ? [{ src: imageSrc, caption: title }] : []);
  const current = images[index];
  const select = (next: number) => { setIndex(next); setFailed(false); };
  const move = (direction: number) => {
    if (images.length > 1) select((index + direction + images.length) % images.length);
  };

  useEffect(() => {
    if (!open || !dialog.current) return;
    const element = dialog.current;
    const button = trigger.current;
    const overflow = document.body.style.overflow;
    element.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element.close();
      document.body.style.overflow = overflow;
      button?.focus({ preventScroll: true });
    };
  }, [open]);

  return <>
    <button ref={trigger} type="button" className="home-evidence-button" aria-haspopup="dialog"
      aria-label={`${photos ? (vi ? "Xem album" : "View album") : (vi ? "Xem minh chứng" : "View evidence")}: ${title}${photos ? ` · ${images.length} ${vi ? "ảnh" : "photos"}` : ""}`}
      onClick={() => { select(0); setOpen(true); }}>
      <span className="home-evidence-copy">{children}</span>
      {photos ? <span className="home-album-count" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8" cy="8" r="1.5"/><path d="m3 17 6-6 4 4 3-3 5 5"/></svg>{images.length ? `${images.length} ${vi ? "ảnh" : "photos"}` : (vi ? "Đang cập nhật" : "Coming soon")}</span> : <span className="home-evidence-arrow" aria-hidden="true">↗</span>}
    </button>
    <dialog ref={dialog} className={`home-evidence-dialog${photos ? " home-album-dialog" : ""}`} aria-label={title}
      onKeyDown={event => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault(); move(event.key === "ArrowLeft" ? -1 : 1);
        }
      }}
      onCancel={(event) => { event.preventDefault(); setOpen(false); }}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const rect = event.currentTarget.getBoundingClientRect();
        if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) setOpen(false);
      }}>
      {open && <>
        <header><h3>{title}</h3><button type="button" autoFocus onClick={() => setOpen(false)}>{vi ? "Đóng" : "Close"} ×</button></header>
        <div onTouchStart={event => { const point = event.touches[0]; touch.current = { x: point.clientX, y: point.clientY }; }}
          onTouchCancel={() => { touch.current = null; }}
          onTouchEnd={event => {
            if (!touch.current) return;
            const point = event.changedTouches[0];
            const dx = point.clientX - touch.current.x;
            const dy = point.clientY - touch.current.y;
            if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) move(dx < 0 ? 1 : -1);
            touch.current = null;
          }}>
          {current && !failed ? <div className="home-evidence-image">
            <Image key={current.src} src={current.src} alt={current.caption} fill sizes="(max-width: 960px) 90vw, 912px" onError={() => setFailed(true)} />
          </div> : <p className="home-evidence-pending">{failed ? (vi ? "Không tải được ảnh minh chứng." : "Unable to load this image.") : (vi ? "Ảnh minh chứng đang được cập nhật." : "Evidence image coming soon.")}</p>}
        </div>
        {photos && current && <>
          <div className="home-album-navigation">
            <button type="button" disabled={images.length < 2} aria-label={vi ? "Ảnh trước" : "Previous photo"} onClick={() => move(-1)}>←</button>
            <span aria-live="polite" aria-atomic="true">{index + 1} / {images.length}</span>
            <button type="button" disabled={images.length < 2} aria-label={vi ? "Ảnh tiếp theo" : "Next photo"} onClick={() => move(1)}>→</button>
          </div>
          <p className="home-album-caption">{current.caption}</p>
          {images.length > 1 && <div className="home-album-thumbnails" role="group" aria-label={vi ? "Chọn ảnh" : "Choose photo"}>
            {images.map((photo, photoIndex) => <button key={photo.src} type="button" aria-label={`${vi ? "Ảnh" : "Photo"} ${photoIndex + 1}: ${photo.caption}`} aria-pressed={index === photoIndex} onClick={() => select(photoIndex)}>
              <Image src={photo.src} alt="" width={80} height={56} />
            </button>)}
          </div>}
        </>}
      </>}
    </dialog>
  </>;
}
