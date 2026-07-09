"use client";

import { Mail, MessageCircle } from "lucide-react";
import { siteContent } from "@/constants/content";
import { FadeIn } from "@/components/FadeIn";

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={className}
      fill="currentColor"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.913L1.25 2.25h7.08l4.263 5.685L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z" />
    </svg>
  );
}

export function Footer() {
  const { brand, contact, finalCta, footer } = siteContent;

  return (
    <>
      <section
        id={finalCta.id}
        className="bg-zinc-950 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {finalCta.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
                {finalCta.subtitle}
              </p>
              <a
                href={finalCta.buttonHref}
                className="mt-10 inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3 text-sm font-medium text-white shadow-sm transition-transform duration-200 hover:scale-[1.03] hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500"
              >
                {finalCta.buttonLabel}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <footer className="border-t border-zinc-800 bg-zinc-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-sm font-semibold text-white">{brand.name}</p>
            <p className="mt-1 text-sm text-zinc-500">{footer.copyright}</p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
            >
              <Mail className="size-4 shrink-0" aria-hidden />
              <span>{contact.email}</span>
            </a>
            <a
              href={contact.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
            >
              <MessageCircle className="size-4 shrink-0" aria-hidden />
              <span>WhatsApp {contact.whatsapp.display}</span>
            </a>
            <a
              href={contact.social.x.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
              aria-label={`X ${contact.social.x.handle}`}
            >
              <XIcon className="size-4 shrink-0" />
              <span>{contact.social.x.handle}</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
