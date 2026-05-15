"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/gallery", label: "Gallery" },
  { href: "/pricing", label: "Pricing" },
  { href: "/technology", label: "Technology" },
  { href: "/investors", label: "Investors" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#080a13]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-6">
        <div className="flex min-w-0 items-center gap-4">
          <Link href="/" className="text-xl font-semibold tracking-tight" onClick={() => setOpen(false)}>
            <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-rose-300 bg-clip-text text-transparent">
              HackerzArt
            </span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-white/65 md:flex" aria-label="Primary">
            <div className="hidden h-6 w-px bg-white/20 lg:block" />
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="hidden rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-white/50 sm:inline-flex"
            onClick={() => setOpen(false)}
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="rounded-full bg-gradient-to-r from-orange-400 to-rose-400 px-3 py-2 text-xs font-semibold text-black transition hover:opacity-90 sm:px-5 sm:text-sm"
            onClick={() => setOpen(false)}
          >
            Start Creating
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white md:hidden"
            aria-expanded={open}
            aria-controls="hackerzart-mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden>{open ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="hackerzart-mobile-nav"
          className="mx-auto flex max-w-7xl flex-col gap-2 border-t border-white/10 px-6 py-4 md:hidden"
          aria-label="Mobile"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl px-3 py-3 text-sm text-white/80 hover:bg-white/5"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/dashboard" className="rounded-xl px-3 py-3 text-sm text-cyan-200" onClick={() => setOpen(false)}>
            Dashboard
          </Link>
        </nav>
      )}
    </header>
  );
}
