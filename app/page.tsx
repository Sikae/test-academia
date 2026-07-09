import Image from "next/image";
import type { Metadata } from "next";
import { getCopy, resolveLang, type Lang } from "@/content/portfolio";

type PageProps = {
  searchParams: Promise<{ lang?: string | string[] }>;
};

function langHref(lang: Lang) {
  return `/?lang=${lang}`;
}

export async function generateMetadata({
  searchParams,
}: PageProps): Promise<Metadata> {
  const params = await searchParams;
  const lang = resolveLang(params.lang);
  const copy = getCopy(lang);
  return {
    title: copy.meta.title,
    description: copy.meta.description,
  };
}

export default async function Home({ searchParams }: PageProps) {
  const params = await searchParams;
  const lang = resolveLang(params.lang);
  const t = getCopy(lang);

  return (
    <div className="relative min-h-dvh overflow-x-hidden bg-paper text-ink">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(ellipse_80%_55%_at_15%_0%,rgba(27,107,110,0.12),transparent_55%),radial-gradient(ellipse_60%_45%_at_90%_10%,rgba(176,137,104,0.14),transparent_50%),linear-gradient(180deg,#eef3f5_0%,#f7fafb_70%)]"
        aria-hidden
      />

      <header className="relative z-20 border-b border-line/70 bg-paper/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
          <a
            href="#inicio"
            className="font-display text-sm font-semibold tracking-tight text-ink sm:text-base"
          >
            {t.hero.name.split(",")[0]}
          </a>

          <nav
            className="site-nav hidden items-center gap-5 text-sm text-ink-soft md:flex"
            aria-label={lang === "es" ? "Secciones" : "Sections"}
          >
            <a href="#sobre" className="hover:text-teal-deep">
              {t.nav.about}
            </a>
            <a href="#investigacion" className="hover:text-teal-deep">
              {t.nav.research}
            </a>
            <a href="#publicaciones" className="hover:text-teal-deep">
              {t.nav.publications}
            </a>
            <a href="#docencia" className="hover:text-teal-deep">
              {t.nav.teaching}
            </a>
            <a href="#contacto" className="hover:text-teal-deep">
              {t.nav.contact}
            </a>
          </nav>

          <div
            className="lang-switch inline-flex rounded-full border border-line bg-surface p-1 text-xs shadow-sm sm:text-sm"
            role="group"
            aria-label={t.nav.langLabel}
          >
            <a
              href={langHref("en")}
              className={`rounded-full px-2.5 py-1.5 transition ${
                lang === "en"
                  ? "bg-teal text-white"
                  : "text-ink-soft hover:text-ink"
              }`}
              aria-current={lang === "en" ? "page" : undefined}
              hrefLang="en"
            >
              <span aria-hidden>🇺🇸</span> {t.nav.english}
            </a>
            <a
              href={langHref("es")}
              className={`rounded-full px-2.5 py-1.5 transition ${
                lang === "es"
                  ? "bg-teal text-white"
                  : "text-ink-soft hover:text-ink"
              }`}
              aria-current={lang === "es" ? "page" : undefined}
              hrefLang="es"
            >
              <span aria-hidden>🇪🇸</span> {t.nav.spanish}
            </a>
          </div>
        </div>
      </header>

      <main>
        <section
          id="inicio"
          aria-labelledby="hero-name"
          className="relative z-10"
        >
          <div className="relative min-h-[calc(100svh-4.25rem)] overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="/martina-portrait.jpg"
                alt={t.hero.photoAlt}
                fill
                priority
                sizes="100vw"
                className="object-cover object-[center_20%] sm:object-[center_18%]"
              />
              <div
                className="absolute inset-0 bg-gradient-to-r from-[#0f1c22]/88 via-[#0f1c22]/62 to-[#0f1c22]/25 sm:via-[#0f1c22]/55 sm:to-transparent"
                aria-hidden
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#0f1c22]/55 via-transparent to-[#0f1c22]/20"
                aria-hidden
              />
            </div>

            <div className="relative mx-auto flex min-h-[calc(100svh-4.25rem)] max-w-6xl items-end px-5 pb-14 pt-20 sm:items-center sm:px-8 sm:pb-20 sm:pt-16">
              <div className="motion-fade-up max-w-xl text-white">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/75">
                  {t.hero.focusLabel}
                </p>
                <h1
                  id="hero-name"
                  className="font-display text-4xl leading-[1.08] font-semibold tracking-tight sm:text-5xl lg:text-6xl"
                >
                  {t.hero.name}
                </h1>
                <p className="motion-fade-up motion-delay-1 mt-4 text-lg text-white/90 sm:text-xl">
                  {t.hero.role}
                </p>
                <p className="motion-fade-up motion-delay-2 mt-2 text-base text-teal-soft sm:text-lg">
                  {t.hero.focus}
                </p>
                <p className="motion-fade-up motion-delay-2 mt-5 max-w-md text-base leading-relaxed text-white/80 sm:text-lg">
                  {t.hero.tagline}
                </p>
                <div className="motion-fade-up motion-delay-3 mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href={t.hero.ctaHref}
                    className="cta inline-flex items-center rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-12px_rgba(27,107,110,0.9)] transition hover:bg-teal-deep"
                  >
                    {t.hero.cta}
                  </a>
                  <a
                    href="#contacto"
                    className="cta text-sm font-medium text-white/85 underline-offset-4 hover:underline"
                  >
                    {t.nav.contact}
                  </a>
                </div>
                <p className="mt-8 max-w-sm text-xs leading-relaxed text-white/55">
                  <span className="mr-2 inline-block rounded-full border border-white/25 px-2 py-0.5 text-[0.65rem] uppercase tracking-wide text-white/70">
                    {t.hero.photoExampleNote}
                  </span>
                  {t.hero.photoCredit}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="sobre"
          aria-labelledby="about-title"
          className="relative z-10 border-b border-line bg-surface"
        >
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-[0.9fr_1.4fr] md:gap-14">
            <div>
              <h2
                id="about-title"
                className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
              >
                {t.about.title}
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
              {t.about.body}
            </p>
          </div>
        </section>

        <section
          id="investigacion"
          aria-labelledby="research-title"
          className="relative z-10 bg-mist/60"
        >
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
            <div className="max-w-2xl">
              <h2
                id="research-title"
                className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
              >
                {t.research.title}
              </h2>
              <p className="mt-3 text-base text-ink-soft sm:text-lg">
                {t.research.subtitle}
              </p>
            </div>

            <ul className="motion-stagger mt-10 grid gap-4 sm:grid-cols-2">
              {t.research.items.map((item) => (
                <li
                  key={item.title}
                  className="research-card rounded-2xl border border-line bg-surface p-6 sm:p-7"
                >
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-ink-soft">
                    {item.summary}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="publicaciones"
          aria-labelledby="publications-title"
          className="relative z-10 border-y border-line bg-surface"
        >
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
            <div className="max-w-2xl">
              <h2
                id="publications-title"
                className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
              >
                {t.publications.title}
              </h2>
              <p className="mt-3 text-base text-ink-soft sm:text-lg">
                {t.publications.subtitle}
              </p>
            </div>

            <ul className="mt-10 divide-y divide-line border-y border-line">
              {t.publications.items.map((item) => (
                <li
                  key={item.title}
                  className="flex flex-col gap-2 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-ink sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-ink-soft">{item.detail}</p>
                  </div>
                  {item.example ? (
                    <span className="shrink-0 self-start rounded-full bg-teal-soft px-3 py-1 text-xs font-semibold tracking-wide text-teal-deep uppercase">
                      {t.publications.exampleLabel}
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="docencia"
          aria-labelledby="teaching-title"
          className="relative z-10 bg-paper"
        >
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
            <div className="max-w-2xl">
              <h2
                id="teaching-title"
                className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
              >
                {t.teaching.title}
              </h2>
              <p className="mt-3 text-base text-ink-soft sm:text-lg">
                {t.teaching.subtitle}
              </p>
            </div>

            <ul className="mt-10 space-y-4">
              {t.teaching.courses.map((course) => (
                <li
                  key={course.title}
                  className="rounded-2xl border border-line bg-surface px-6 py-6 sm:px-8"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                      {course.title}
                    </h3>
                    {course.example ? (
                      <span className="rounded-full bg-teal-soft px-3 py-1 text-xs font-semibold tracking-wide text-teal-deep uppercase">
                        {t.teaching.exampleLabel}
                      </span>
                    ) : null}
                  </div>
                  {course.original ? (
                    <p className="mt-2 text-sm text-ink-soft italic">
                      {course.original}
                    </p>
                  ) : null}
                  <p className="mt-3 text-base text-ink-soft">{course.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="contacto"
          aria-labelledby="contact-title"
          className="relative z-10 overflow-hidden bg-ink text-white"
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_10%_0%,rgba(27,107,110,0.35),transparent_55%),radial-gradient(ellipse_50%_40%_at_90%_100%,rgba(176,137,104,0.2),transparent_50%)]"
            aria-hidden
          />
          <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <div>
              <h2
                id="contact-title"
                className="font-display text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                {t.contact.title}
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                {t.contact.subtitle}
              </p>
              <a
                href={t.contact.ctaHref}
                className="cta mt-8 inline-flex items-center rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-deep"
              >
                {t.contact.cta}
              </a>
            </div>

            <dl className="space-y-6 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-white/55">
                  {t.contact.emailLabel}
                </dt>
                <dd className="mt-2">
                  <a
                    href={`mailto:${t.contact.email}`}
                    className="contact-link text-lg text-white underline-offset-4 hover:underline"
                  >
                    {t.contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-white/55">
                  {t.contact.profileLabel}
                </dt>
                <dd className="mt-2">
                  <a
                    href={t.contact.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link text-lg text-white underline-offset-4 hover:underline"
                  >
                    {t.contact.profileText}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-paper">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-ink-soft sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>{t.footer.note}</p>
          <p>{t.hero.focus}</p>
        </div>
      </footer>
    </div>
  );
}
