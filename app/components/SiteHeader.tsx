"use client";

import { useCallback, useEffect, useId, useState } from "react";

export type NavLink = { label: string; href: string };

export function SiteHeader({ links }: { links: NavLink[] }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const panelId = useId();

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen, closeMenu]);

  return (
    <header className="sticky top-0 z-50 border-b border-[#d8c1ab] bg-[#fff7ee]/95 pt-[env(safe-area-inset-top)] backdrop-blur supports-backdrop-filter:bg-[#fff7ee]/90">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 md:px-8"
        aria-label="Primary"
      >
        <a
          href="#home"
          className="min-h-11 min-w-0 shrink truncate py-2 text-base font-semibold leading-none text-[#4c3225] sm:text-lg"
        >
          TBD Art Club
        </a>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-lg border border-[#d8c1ab] bg-white/80 text-[#4c3225] shadow-sm md:hidden"
          aria-expanded={menuOpen}
          aria-controls={panelId}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        <ul className="hidden items-center gap-2 text-sm font-medium text-[#6b4b39] md:flex md:flex-wrap md:justify-end md:gap-4 lg:gap-5">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="inline-block rounded-md px-1 py-2 transition-colors hover:text-[#3f2b20] md:py-1"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div
        id={panelId}
        className={`border-t border-[#d8c1ab] bg-[#fff7ee] md:hidden ${menuOpen ? "block" : "hidden"}`}
      >
        <ul className="mx-auto max-w-6xl px-4 pb-4 pt-1 sm:px-6">
          {links.map((link) => (
            <li key={link.href} className="border-b border-[#e5d2bf]/80 last:border-b-0">
              <a
                href={link.href}
                className="flex min-h-12 items-center py-1 text-base font-medium text-[#4c3225] active:bg-[#f3e7d8]/80"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

function MenuIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}
