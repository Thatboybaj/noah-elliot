import Link from "next/link";
import type { ReactNode } from "react";
import type { LinkItem } from "@/lib/content";

type Props = {
  link: LinkItem;
  /** "underline": bordered link whose rule fades on hover. "dim": fades to 60 % on hover. */
  variant?: "underline" | "dim";
  className?: string;
  children?: ReactNode;
};

const isInternal = (href: string) => href.startsWith("/") || href.startsWith("#");

export function TextLink({ link, variant = "underline", className = "", children }: Props) {
  const cls = `${variant === "underline" ? "link-underline" : "link-dim"} hit-44 ${className}`;
  const content = children ?? link.label;
  if (isInternal(link.href)) {
    return (
      <Link href={link.href} className={cls}>
        {content}
      </Link>
    );
  }
  return (
    <a
      href={link.href}
      className={cls}
      {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {content}
      {link.external && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}
