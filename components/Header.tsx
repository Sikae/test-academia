"use client";

import { siteContent } from "@/constants/content";

export function Header() {
  const { brand, nav } = siteContent;

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/75 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#inicio"
          className="text-base font-semibold tracking-tight text-zinc-900 transition-opacity hover:opacity-70"
        >
          {brand.name}
        </a>
        <a
          href={nav.ctaHref}
          className="inline-flex items-center rounded-lg bg-teal-700 px-4 py-2 text-sm font-medium text-white shadow-sm transition-transform duration-200 hover:scale-[1.03] hover:bg-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
        >
          {nav.ctaLabel}
        </a>
      </div>
    </header>
  );
}
