"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { navLinks, site } from "@/lib/content";
import { duration, ease } from "@/lib/motion";

/**
 * Fixed top bar. Tablet and up: brand + three links spread across the bar
 * over a 1px rule. Phone: brand + menu button; the bar expands into a dark
 * panel with the links (focus is trapped while open, Escape closes it).
 */
export function Nav() {
  const pathname = usePathname();
  // The menu remembers which route it was opened on, so it closes itself on navigation.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const setOpen = useCallback(
    (next: boolean | ((v: boolean) => boolean)) =>
      setOpenOn((cur) => {
        const value = typeof next === "function" ? next(cur === pathname) : next;
        return value ? pathname : null;
      }),
    [pathname],
  );
  const navRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const close = useCallback((restoreFocus = false) => {
    setOpen(false);
    if (restoreFocus) buttonRef.current?.focus();
  }, [setOpen]);

  // Close the menu when the viewport grows past phone size.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 810px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [setOpen]);

  // Escape closes; Tab is kept inside the open menu.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close(true);
        return;
      }
      if (e.key !== "Tab" || !navRef.current) return;
      const items = [...navRef.current.querySelectorAll<HTMLElement>("a[href], button")].filter(
        (el) => el.offsetParent !== null,
      );
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.nav
        ref={navRef}
        aria-label="Main"
        className="container-x pt-4"
        initial={false}
        style={{ borderBottomWidth: 1, borderBottomStyle: "solid" }}
        animate={{
          backgroundColor: open ? "rgb(30 30 30 / 1)" : "rgb(30 30 30 / 0)",
          borderBottomColor: open ? "rgb(255 255 255 / 1)" : "rgb(255 255 255 / 0)",
        }}
        transition={{ duration: duration.menu, ease: ease.out }}
      >
        <div
          className={`flex items-center justify-between border-b pb-2 transition-colors duration-300 ${
            open ? "border-transparent" : "border-border"
          }`}
        >
          <Link href="/" className="t-nav link-dim hit-44" aria-current={pathname === "/" ? "page" : undefined}>
            {site.shortName}
          </Link>

          {/* Tablet and up */}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="t-nav link-dim hit-44 hidden tablet:inline-flex"
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}

          {/* Phone */}
          <button
            ref={buttonRef}
            type="button"
            className="hit-44 -my-1 grid size-6 place-items-center tablet:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <MenuIcon open={open} />
          </button>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id="mobile-menu"
              key="menu"
              className="overflow-hidden tablet:hidden"
              initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
              animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
              exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
              transition={{ duration: duration.menu, ease: ease.out }}
            >
              <ul className="flex flex-col gap-[29px] px-[26px] pb-[47px] pt-[76px]">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: duration.menu, ease: ease.out, delay: 0.05 + i * 0.06 }}
                  >
                    <Link
                      href={link.href}
                      className="t-nav link-dim hit-44"
                      aria-current={pathname === link.href ? "page" : undefined}
                      onClick={() => close()}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  const t = { duration: duration.menu, ease: ease.out };
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <motion.line x1="3" x2="21" initial={false} animate={open ? { y1: 4, y2: 20 } : { y1: 6, y2: 6 }} transition={t} />
      <motion.line x1="3" x2="21" y1="12" y2="12" initial={false} animate={{ opacity: open ? 0 : 1 }} transition={t} />
      <motion.line x1="3" x2="21" initial={false} animate={open ? { y1: 20, y2: 4 } : { y1: 18, y2: 18 }} transition={t} />
    </svg>
  );
}
