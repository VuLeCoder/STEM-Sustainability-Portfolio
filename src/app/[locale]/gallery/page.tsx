import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GalleryCollection } from "@/components/gallery-collection";
import { isLocale } from "@/lib/i18n";
import { createLocalizedMetadata } from "@/lib/site-metadata";
import "../activities/activities.css";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return createLocalizedMetadata({
    locale,
    path: "/gallery",
    title: locale === "vi" ? "Bộ sưu tập | Nguyễn Cao Xuân Phúc" : "Gallery | Nguyen Cao Xuan Phuc",
    description: locale === "vi"
      ? "Bộ sưu tập hình ảnh về giải thưởng, ghi nhận và hoạt động cộng đồng của Nguyễn Cao Xuân Phúc."
      : "A visual gallery of Nguyen Cao Xuan Phuc's awards, recognition, and community activities.",
  });
}

export default async function GalleryPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return <main className="activities-page">
    <div className="activities-shell">
      <GalleryCollection locale={locale} />
    </div>
  </main>;
}
