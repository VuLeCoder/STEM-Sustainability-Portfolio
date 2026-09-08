import type { Metadata } from "next";
import "./globals.css";
import { siteUrl } from "@/lib/site-metadata";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: "Nguyen Cao Xuan Phuc | STEM & Sustainability Portfolio",
  description:
    "An academic portfolio on research, technology, and social impact.",
};

const localeScript = `
  try {
    const locale = window.location.pathname.match(/^\/(vi|en)(?=\/|(?!.))/)?.[1];
    if (locale) document.documentElement.lang = locale;
  } catch {}
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: localeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
