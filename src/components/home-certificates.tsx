"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { siteContent, type Locale } from "@/constants/common";
import { homeAcademicAwards, homeCertificates, homeNarrative } from "@/constants/home";

type Preview = { title: string; imageSrc: string };

export function HomeCertificates({ locale }: { locale: Locale }) {
  const content = siteContent.home.aboutMe;
  const [selected, setSelected] = useState<Preview | null>(null);
  const [imageFailed, setImageFailed] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const opened = selected !== null;
  const vi = locale === "vi";
  const scores = [
    { label: vi ? "GPA lớp 10" : "Grade 10 GPA", value: "9.1", scale: "/ 10" },
    { label: vi ? "GPA lớp 11" : "Grade 11 GPA", value: "9.2", scale: "/ 10" },
    ...content.credentials.map((item) => ({
      label: item.label[locale], value: item.value,
      scale: item.label.en === "SAT" ? "/ 1600" : item.label.en === "IELTS Academic" ? "/ 9" : "",
    })),
  ];

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

  function openPreview(button: HTMLButtonElement, preview: Preview) {
    trigger.current = button;
    setImageFailed(false);
    setSelected(preview);
  }

  return (
    <section id="certificates" className="home-content-section home-academic" aria-labelledby="home-certificates-title">
      <div className="home-shell">
        <div className="home-content-section-heading" data-reveal>
          <div>
            <p className="home-about-label">{homeNarrative.navigation.certificates[locale]}</p>
            <h2 id="home-certificates-title">{homeCertificates.title[locale]}</h2>
          </div>
          <p>{homeCertificates.description[locale]}</p>
        </div>

        <div className="home-academic-foundation" data-reveal>
          <div className="home-academic-school">
            <span className="home-academic-subtitle">{vi ? "Nền tảng giáo dục" : "Education"}</span>
            <h3>{vi ? "THPT chuyên Nguyễn Huệ" : "Nguyen Hue High School for the Gifted"}</h3>
            <p>{vi ? "Chuyên Vật lý · Hà Nội, Việt Nam" : "Specialized Physics Program · Hanoi, Vietnam"}</p>
          </div>
          <dl className="home-academic-scores">
            {scores.map((score) => (
              <div key={score.label}>
                <dt>{score.label}</dt>
                <dd>{score.value}<span>{score.scale}</span></dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="home-academic-group" data-reveal>
          <div className="home-academic-group-heading">
            <h3>{vi ? "Giải thưởng học thuật" : "Academic recognition"}</h3>
            <p>{vi ? "Thành tích và chứng nhận từ các kỳ thi quốc tế." : "Achievements and certificates from international competitions."}</p>
          </div>
          <div className="home-academic-awards">
            {homeAcademicAwards.map((award) => (
              <button type="button" key={award.id} className="home-academic-award"
                aria-haspopup="dialog" aria-controls="home-certificate-dialog"
                onClick={(event) => openPreview(event.currentTarget, {
                  title: award.title[locale], imageSrc: `/images/academic/full/${award.id}.webp`,
                })}>
                <span className="home-academic-thumbnail">
                  <Image src={`/images/academic/thumbs/${award.id}.webp`} alt="" fill
                    sizes="(max-width: 639px) 90vw, (max-width: 1023px) 45vw, 30vw" />
                </span>
                <span className="home-academic-award-copy">
                  <strong>{award.title[locale]}</strong>
                  <span>{award.description[locale]}</span>
                  <span className="home-certificate-link">{vi ? "Xem chứng nhận" : "View certificate"} <span aria-hidden="true">↗</span></span>
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="home-academic-group" data-reveal>
          <div className="home-academic-group-heading">
            <h3>{vi ? "Học tập mở rộng" : "Continued learning"}</h3>
            <p>{vi ? "Các khóa học Coursera đã hoàn thành về AI, dữ liệu và lập trình." : "Completed Coursera courses in AI, data analysis, and programming."}</p>
          </div>
          <div className="home-certificates-grid">
            {homeCertificates.courses.map((course, index) => {
              const copy = <><span className="home-academic-course-number" aria-hidden="true">0{index + 1}</span>
                <span className="home-about-label">{homeCertificates.status[locale]}</span>
                <strong>{course.title}</strong></>;
              return course.imageSrc ? (
                <button type="button" key={course.title} className="home-certificate-card"
                  aria-haspopup="dialog" aria-controls="home-certificate-dialog"
                  onClick={(event) => openPreview(event.currentTarget, course)}>
                  {copy}<span className="home-certificate-link">{vi ? "Xem chứng chỉ" : "View certificate"} ↗</span>
                </button>
              ) : <article key={course.title} className="home-certificate-card">{copy}</article>;
            })}
          </div>
        </div>

        <dialog ref={dialog} id="home-certificate-dialog" className="home-certificate-dialog"
          aria-labelledby="home-certificate-dialog-title"
          onCancel={(event) => { event.preventDefault(); setSelected(null); }}
          onClick={(event) => { if (event.target === event.currentTarget) setSelected(null); }}>
          {selected && <div className="home-certificate-preview">
            <header>
              <h3 id="home-certificate-dialog-title">{selected.title}</h3>
              <button type="button" autoFocus onClick={() => setSelected(null)}>{vi ? "Đóng" : "Close"} ×</button>
            </header>
            {!imageFailed ? (
              <div className="home-certificate-image">
                <Image src={selected.imageSrc} alt={`${vi ? "Chứng nhận" : "Certificate"}: ${selected.title}`}
                  fill sizes="(max-width: 900px) 90vw, 900px" onError={() => setImageFailed(true)} />
              </div>
            ) : <p className="home-certificate-placeholder">{vi ? "Không tải được ảnh. Bạn có thể mở bản gốc bên dưới." : "The image could not load. Open the original below."}</p>}
            <a className="home-academic-original" href={selected.imageSrc} target="_blank" rel="noopener noreferrer">
              {vi ? "Mở ảnh gốc" : "Open original image"} ↗
            </a>
          </div>}
        </dialog>
      </div>
    </section>
  );
}
