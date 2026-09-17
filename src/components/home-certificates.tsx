"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { siteContent, type Locale } from "@/constants/common";
import { homeCertificates, homeNarrative } from "@/constants/home";

export function HomeCertificates({ locale }: { locale: Locale }) {
  const content = siteContent.home.aboutMe;
  const [selected, setSelected] = useState<number | null>(null);
  const [imageFailed, setImageFailed] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const course = selected === null ? null : homeCertificates.courses[selected];
  const opened = selected !== null;

  useEffect(() => {
    if (!opened || !dialog.current) return;
    const element = dialog.current;
    const overflow = document.body.style.overflow;
    element.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element.close();
      document.body.style.overflow = overflow;
      trigger.current?.focus({ preventScroll: true });
    };
  }, [opened]);

  return (
    <section id="certificates" className="home-content-section" aria-labelledby="home-certificates-title">
      <div className="home-shell">
        <div className="home-content-section-heading" data-reveal>
          <div>
            <p className="home-about-label">{homeNarrative.navigation.certificates[locale]}</p>
            <h2 id="home-certificates-title">{homeCertificates.title[locale]}</h2>
          </div>
          <p>{homeCertificates.description[locale]}</p>
        </div>
        <div className="home-about-academics" data-reveal>
          <h3>{content.credentialsLabel[locale]}</h3>
          <dl>
            {content.credentials.map((credential) => (
              <div key={credential.label.en}>
                <dt>{credential.label[locale]}</dt>
                <dd>{credential.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="home-certificates-grid" data-reveal>
          {homeCertificates.courses.map((course, index) => (
            <button type="button" key={course.title} className="home-certificate-card"
              aria-haspopup="dialog" aria-controls="home-certificate-dialog"
              onClick={(event) => {
                trigger.current = event.currentTarget;
                setImageFailed(false);
                setSelected(index);
              }}>
              <span className="home-about-label">{homeCertificates.status[locale]}</span>
              <strong>{course.title}</strong>
              <span className="home-certificate-link">
                {locale === "vi" ? "Xem chứng chỉ" : "View certificate"} <span aria-hidden="true">↗</span>
              </span>
            </button>
          ))}
        </div>
        <dialog ref={dialog} id="home-certificate-dialog" className="home-certificate-dialog"
          aria-labelledby="home-certificate-dialog-title"
          onCancel={(event) => { event.preventDefault(); setSelected(null); }}
          onClick={(event) => { if (event.target === event.currentTarget) setSelected(null); }}>
          {course && <div className="home-certificate-preview">
            <header>
              <h3 id="home-certificate-dialog-title">{course.title}</h3>
              <button type="button" autoFocus onClick={() => setSelected(null)}>
                {locale === "vi" ? "Đóng" : "Close"} ×
              </button>
            </header>
            {course.imageSrc && !imageFailed ? (
              <div className="home-certificate-image">
                <Image src={course.imageSrc} alt={`${locale === "vi" ? "Chứng chỉ" : "Certificate"}: ${course.title}`}
                  fill sizes="(max-width: 900px) 90vw, 900px" onError={() => setImageFailed(true)} />
              </div>
            ) : (
              <p className="home-certificate-placeholder">
                {locale === "vi" ? "Ảnh chứng chỉ sẽ được cập nhật sớm." : "Certificate image coming soon."}
              </p>
            )}
          </div>}
        </dialog>
      </div>
    </section>
  );
}
