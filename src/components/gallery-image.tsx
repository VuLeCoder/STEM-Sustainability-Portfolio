"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import type { Locale } from "@/constants/common";

export type GalleryMedia = { src: string; alt: string; caption?: string };

export function GalleryImage({ src, alt, title, locale, compact = false, images }: {
  src: string; alt: string; title: string; locale: Locale; compact?: boolean; images?: GalleryMedia[];
}) {
  const [open, setOpen] = useState(false);
  const [failed, setFailed] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const vi = locale === "vi";
  const media = images?.length ? images : [{ src, alt }];
  const active = media[activeIndex] ?? media[0];

  const selectImage = (index: number) => {
    setFailed(false);
    setActiveIndex((index + media.length) % media.length);
  };

  useEffect(() => {
    if (!open) return;
    const element = dialog.current;
    const button = trigger.current;
    const overflow = document.body.style.overflow;
    element?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element?.close();
      document.body.style.overflow = overflow;
      button?.focus({ preventScroll: true });
    };
  }, [open]);

  return <>
    <button ref={trigger} type="button" className="activities-card__image" aria-haspopup="dialog"
      aria-label={`${vi ? "Xem hình ảnh" : "View images"}: ${title}${media.length > 1 ? ` (${media.length})` : ""}`}
      onClick={() => { selectImage(0); setOpen(true); }}>
      <Image src={src} alt={alt} fill sizes={compact ? "100px" : "(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"} />
      {media.length > 1 && <strong className="gallery-image-count">{media.length} {vi ? "ảnh" : "images"}</strong>}
      <span aria-hidden="true">↗</span>
    </button>
    <dialog ref={dialog} className="activities-lightbox" aria-labelledby={titleId}
      onCancel={event => { event.preventDefault(); setOpen(false); }}
      onClose={() => setOpen(false)}
      onKeyDown={event => {
        if (media.length < 2) return;
        if (event.key === "ArrowLeft") selectImage(activeIndex - 1);
        if (event.key === "ArrowRight") selectImage(activeIndex + 1);
      }}
      onClick={event => {
        if (event.target !== event.currentTarget) return;
        const rect = event.currentTarget.getBoundingClientRect();
        if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) setOpen(false);
      }}>
      {open && <>
        <header><h2 id={titleId}>{title}</h2><button autoFocus type="button" onClick={() => setOpen(false)}>{vi ? "Đóng" : "Close"} ×</button></header>
        {failed ? <p role="status">{vi ? "Không tải được ảnh. Bạn có thể mở ảnh gốc bên dưới." : "Unable to load this image. You can open the original below."}</p> :
          <div className="activities-lightbox__image"><Image src={active.src} alt={active.alt} fill sizes="(max-width: 1000px) 95vw, 1000px" onError={() => setFailed(true)} /></div>}
        {media.length > 1 && <div className="activities-lightbox__controls">
          <button type="button" onClick={() => selectImage(activeIndex - 1)} aria-label={vi ? "Ảnh trước" : "Previous image"}>←</button>
          <p aria-live="polite">{activeIndex + 1} / {media.length}{active.caption ? ` · ${active.caption}` : ""}</p>
          <button type="button" onClick={() => selectImage(activeIndex + 1)} aria-label={vi ? "Ảnh tiếp theo" : "Next image"}>→</button>
        </div>}
        <a href={active.src} target="_blank" rel="noopener noreferrer">{vi ? "Mở ảnh gốc trong tab mới" : "Open original in a new tab"} ↗</a>
      </>}
    </dialog>
  </>;
}
