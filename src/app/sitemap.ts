import type { MetadataRoute } from "next";
import { locales, siteContent } from "@/constants/common";
import { siteUrl } from "@/lib/site-metadata";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/home",
    "/about",
    "/journey",
    "/projects",
    "/contact",
    ...siteContent.projects.map((project) => "/projects/" + project.slug),
  ];

  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: new URL("/" + locale + path, siteUrl).toString(),
      alternates: {
        languages: {
          vi: new URL("/vi" + path, siteUrl).toString(),
          en: new URL("/en" + path, siteUrl).toString(),
        },
      },
    })),
  );
}
