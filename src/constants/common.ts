/** Kiểu dữ liệu, điều hướng, giao diện chung và điểm ghép nội dung website.
 * Chỉnh nội dung theo lĩnh vực tại profile.ts, project.ts hoặc journey.ts.
 * Bản EN phải giữ nguyên ý nghĩa và dữ kiện của bản VI.
 */
import { profile,contact,seo,about,narrative,profileChrome,profileHome } from "./profile";
import { projects,projectHome } from "./project";
import { journeyHome } from "./journey";

export const locales=["vi","en"] as const;

export type Locale=(typeof locales)[number];

export type Localized<T>=Record<Locale,T>;

export const siteContent={
  sidebar: {
    label: { vi: "Điều hướng nhanh",en: "Quick navigation" },
    collapse: { vi: "Thu gọn thanh điều hướng",en: "Collapse sidebar" },
    expand: { vi: "Mở thanh điều hướng",en: "Expand sidebar" },
  },
  navigation: {
    home: { vi: "Trang chủ",en: "Home" },
    about: { vi: "Về tôi",en: "About" },
    journey: { vi: "Hành trình",en: "Journey" },
    projects: { vi: "Dự án",en: "Projects" },
    contact: { vi: "Liên hệ",en: "Contact" },
    activities: { vi: "Hoạt động",en: "Activities" },
  },
  ui: {
    menu: { vi: "Menu điều hướng",en: "Navigation menu" },
    footerNavigation: { vi: "Điều hướng cuối trang",en: "Footer navigation" },
    language: { vi: "Chọn ngôn ngữ",en: "Choose language" },
    openMenu: { vi: "Mở menu",en: "Open menu" },
    closeMenu: { vi: "Đóng menu",en: "Close menu" },
    portfolioLabel: { vi: "Hồ sơ học thuật",en: "Academic portfolio" },
    allRightsReserved: { vi: "Bản quyền thuộc về",en: "All rights reserved" },
  },
  chrome: {
    ...profileChrome,
    footerBackground: "/images/placeholders/footer-background.svg",
    footerBackgroundLabel: { vi: "[Ảnh nền footer]",en: "[Footer Background]" },
    explore: { vi: "Khám phá",en: "Explore" },
    contact: { vi: "Liên hệ",en: "Contact" },
    pending: { vi: "Chưa cập nhật",en: "Coming soon" },
    rights: { vi: "Mọi quyền được bảo lưu.",en: "All rights reserved." }
  },
  profile,contact,seo,about,narrative,projects,
  home: { ...profileHome,...projectHome,...journeyHome },
} as const;

export function getLocalized<T>(value: Localized<T>,locale: Locale): T {
  return value[locale];
}
