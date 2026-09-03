import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nguyen Cao Xuan Phuc | STEM & Sustainability Portfolio",
  description: "An academic portfolio on research, technology, and social impact.",
};

const themeScript = `
  try {
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    document.documentElement.dataset.theme = savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : systemTheme;
  } catch { document.documentElement.dataset.theme = 'light'; }
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
