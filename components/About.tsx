"use client";

import { siteContent } from "@/constants/content";
import { FadeIn } from "@/components/FadeIn";

export function About() {
  const { about } = siteContent;

  return (
    <section
      id={about.id}
      className="border-b border-zinc-200/80 bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="grid gap-10 md:grid-cols-2 md:gap-16 lg:gap-24">
            <div>
              <p className="text-sm font-medium tracking-wide text-teal-700">
                {about.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
                {about.title}
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-zinc-600 sm:text-lg">
              {about.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
