"use client";

import { PawPrint, Scale, Wallet, type LucideIcon } from "lucide-react";
import { siteContent } from "@/constants/content";
import { FadeIn } from "@/components/FadeIn";

const iconMap: Record<(typeof siteContent.services.items)[number]["icon"], LucideIcon> = {
  Wallet,
  PawPrint,
  Scale,
};

export function Services() {
  const { services } = siteContent;

  return (
    <section
      id={services.id}
      className="border-b border-zinc-200/80 bg-zinc-50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium tracking-wide text-teal-700">
              {services.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              {services.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg">
              {services.subtitle}
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.items.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <FadeIn key={item.title} delay={0.08 * index}>
                <article className="group h-full rounded-2xl border border-zinc-200/90 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-700/25 hover:shadow-md">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700 ring-1 ring-teal-700/10 transition-colors group-hover:bg-teal-100">
                    <Icon className="size-5" aria-hidden />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-zinc-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-[0.95rem]">
                    {item.description}
                  </p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
