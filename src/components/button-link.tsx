import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "text";
  className?: string;
};

const variants = {
  primary: "bg-[var(--primary)] text-white shadow-[var(--shadow)] hover:brightness-95",
  secondary: "border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] hover:border-[var(--primary)]",
  text: "px-0 text-[var(--primary)] hover:underline",
} as const;

export function ButtonLink({ children, href, variant = "primary", className = "" }: ButtonLinkProps) {
  return (
    <Link href={href} className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
