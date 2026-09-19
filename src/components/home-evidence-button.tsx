"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import type { Locale } from "@/constants/common";

export function HomeEvidenceButton({ locale, title, imageSrc, children }: {
  locale: Locale;
  title: string;
  imageSrc?: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [failed, setFailed] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const vi = locale === "vi";

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
      aria-label={`${vi ? "Xem minh chứng" : "View evidence"}: ${title}`}
      onClick={() => { setFailed(false); setOpen(true); }}>
      <span className="home-evidence-copy">{children}</span>
      <span className="home-evidence-arrow" aria-hidden="true">↗</span>
    </button>
    <dialog ref={dialog} className="home-evidence-dialog" aria-label={title}
      onCancel={(event) => { event.preventDefault(); setOpen(false); }}
      onClick={(event) => { if (event.target === event.currentTarget) setOpen(false); }}>
      {open && <>
        <header><h3>{title}</h3><button type="button" autoFocus onClick={() => setOpen(false)}>{vi ? "Đóng" : "Close"} ×</button></header>
        {imageSrc && !failed ? <div className="home-evidence-image">
          <Image src={imageSrc} alt={`${vi ? "Minh chứng" : "Evidence"}: ${title}`} fill sizes="(max-width: 960px) 90vw, 912px" onError={() => setFailed(true)} />
        </div> : <p className="home-evidence-pending">{failed ? (vi ? "Không tải được ảnh minh chứng." : "Unable to load this image.") : (vi ? "Ảnh minh chứng đang được cập nhật." : "Evidence image coming soon.")}</p>}
      </>}
    </dialog>
  </>;
}
