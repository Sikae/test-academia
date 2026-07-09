"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteContent } from "@/constants/content";

export function Hero() {
  const { brand, hero } = siteContent;
  const reduceMotion = useReducedMotion();

  const accentIndex = hero.headline.indexOf(hero.headlineAccent);
  const before =
    accentIndex >= 0 ? hero.headline.slice(0, accentIndex) : hero.headline;
  const accent =
    accentIndex >= 0 ? hero.headlineAccent : "";
  const after =
    accentIndex >= 0
      ? hero.headline.slice(accentIndex + hero.headlineAccent.length)
      : "";

  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-zinc-200/80 bg-zinc-50"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(15,118,110,0.08),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-5 text-sm font-medium tracking-wide text-teal-700">
            {brand.name}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl lg:leading-[1.08]">
            {before}
            {accent ? (
              <span className="bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent">
                {accent}
              </span>
            ) : null}
            {after}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
            {hero.subtitle}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href={hero.primaryCta.href}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-teal-700 px-6 py-3 text-sm font-medium text-white shadow-sm transition-transform duration-200 hover:scale-[1.03] hover:bg-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 sm:w-auto"
            >
              {hero.primaryCta.label}
              <ArrowRight className="size-4" aria-hidden />
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex w-full items-center justify-center rounded-lg border border-zinc-300 bg-white/80 px-6 py-3 text-sm font-medium text-zinc-800 transition-colors hover:border-zinc-400 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 sm:w-auto"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
