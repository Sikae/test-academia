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
      <header className="relative z-30 border-b border-line/80 bg-paper/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
          <a
            href="#inicio"
            className="font-display text-sm font-semibold tracking-tight text-ink sm:text-base"
          >
            {t.hero.name.split(",")[0]}
          </a>

          <nav
            className="site-nav hidden items-center gap-4 text-[0.8125rem] text-ink-soft lg:flex xl:gap-5"
            aria-label={t.nav.sections}
          >
            <a href="#sobre" className="hover:text-signal-deep">
              {t.nav.about}
            </a>
            <a href="#investigacion" className="hover:text-signal-deep">
              {t.nav.research}
            </a>
            <a href="#publicaciones" className="hover:text-signal-deep">
              {t.nav.publications}
            </a>
            <a href="#trayectoria" className="hover:text-signal-deep">
              {t.nav.path}
            </a>
            <a href="#docencia" className="hover:text-signal-deep">
              {t.nav.teaching}
            </a>
            <a href="#contacto" className="hover:text-signal-deep">
              {t.nav.contact}
            </a>
          </nav>

          <div
            className="lang-switch inline-flex rounded-md border border-line bg-surface p-0.5 text-xs sm:text-sm"
            role="group"
            aria-label={t.nav.langLabel}
          >
            <a
              href={langHref("en")}
              className={`rounded-sm px-2.5 py-1.5 transition ${
                lang === "en"
                  ? "bg-void text-white"
                  : "text-ink-soft hover:text-ink"
              }`}
              aria-current={lang === "en" ? "page" : undefined}
              hrefLang="en"
            >
              <span aria-hidden>🇺🇸</span> {t.nav.english}
            </a>
            <a
              href={langHref("es")}
              className={`rounded-sm px-2.5 py-1.5 transition ${
                lang === "es"
                  ? "bg-void text-white"
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
          <div className="relative min-h-[calc(100svh-3.75rem)] overflow-hidden bg-void">
            <div className="absolute inset-0">
              <Image
                src="/martina-portrait.jpg"
                alt={t.hero.photoAlt}
                fill
                priority
                sizes="100vw"
                className="object-cover object-[center_18%] opacity-55 sm:object-[68%_20%] sm:opacity-70"
              />
              <div
                className="absolute inset-0 bg-gradient-to-r from-void via-void/88 to-void/35 sm:via-void/78 sm:to-void/15"
                aria-hidden
              />
              <div
                className="interference absolute inset-0 mix-blend-screen"
                aria-hidden
              />
              <div
                className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-void to-transparent"
                aria-hidden
              />
            </div>

            <div className="relative mx-auto flex min-h-[calc(100svh-3.75rem)] max-w-6xl items-end px-5 pb-14 pt-24 sm:items-center sm:px-8 sm:pb-20">
              <div className="motion-fade-up max-w-2xl text-white">
                <p className="mb-4 inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.22em] text-orbit uppercase">
                  <span
                    className="inline-block h-px w-8 bg-orbit/80"
                    aria-hidden
                  />
                  {t.hero.focusLabel}: {t.hero.focus}
                </p>
                <h1
                  id="hero-name"
                  className="font-display text-[2.45rem] leading-[1.05] font-semibold tracking-tight sm:text-5xl lg:text-6xl"
                >
                  {t.hero.name}
                </h1>
                <p className="motion-fade-up motion-delay-1 mt-4 text-base text-white/75 sm:text-lg">
                  {t.hero.role}
                </p>
                <p className="motion-fade-up motion-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl">
                  {t.hero.thesis}
                </p>
                <p className="motion-fade-up motion-delay-2 mt-3 font-display text-sm tracking-wide text-plasma/90">
                  {t.hero.tagline}
                </p>
                <div className="motion-fade-up motion-delay-3 mt-9 flex flex-wrap items-center gap-4">
                  <a
                    href={t.hero.ctaHref}
                    className="cta inline-flex min-h-11 items-center rounded-md bg-signal px-6 py-3 text-sm font-semibold text-white hover:bg-signal-deep"
                  >
                    {t.hero.cta}
                  </a>
                  <a
                    href="#contacto"
                    className="cta inline-flex min-h-11 items-center border-b border-white/35 text-sm font-medium text-white/85 hover:border-white hover:text-white"
                  >
                    {t.nav.contact}
                  </a>
                </div>
                <p className="mt-10 max-w-md text-xs leading-relaxed text-white/50">
                  <span className="example-chip mr-2 border-white/20 bg-white/10 text-white/75">
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
          className="relative z-10 bg-surface"
        >
          <div className="section-rule" aria-hidden />
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 sm:py-24 md:grid-cols-[0.85fr_1.35fr] md:gap-16">
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
          className="relative z-10 overflow-hidden bg-paper"
        >
          <div
            className="interference-soft pointer-events-none absolute inset-0"
            aria-hidden
          />
          <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
            <div className="max-w-2xl">
              <h2
                id="research-title"
                className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
              >
                {t.research.title}
              </h2>
              <p className="mt-4 text-base text-ink-soft sm:text-lg">
                {t.research.subtitle}
              </p>
            </div>

            <ul className="motion-stagger mt-12 space-y-3">
              {t.research.items.map((item) => (
                <li
                  key={item.title}
                  className={`research-row border border-line bg-surface/90 px-5 py-6 sm:px-7 sm:py-7 ${
                    item.featured
                      ? "border-l-[3px] border-l-signal sm:grid sm:grid-cols-[1.1fr_1.4fr] sm:gap-10"
                      : "sm:grid sm:grid-cols-[1.1fr_1.4fr] sm:gap-10"
                  }`}
                >
                  <h3
                    className={`font-display font-semibold tracking-tight text-ink ${
                      item.featured ? "text-2xl sm:text-3xl" : "text-xl"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-ink-soft sm:mt-0 sm:text-[1.05rem]">
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
          className="relative z-10 bg-surface"
        >
          <div className="section-rule" aria-hidden />
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
            <div className="max-w-2xl">
              <h2
                id="publications-title"
                className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
              >
                {t.publications.title}
              </h2>
              <p className="mt-4 text-base text-ink-soft sm:text-lg">
                {t.publications.subtitle}
              </p>
            </div>

            <ul className="mt-12 space-y-8">
              {t.publications.items.map((item) => (
                <li
                  key={item.title}
                  className={
                    item.featured
                      ? "border-t border-signal/30 pt-8"
                      : "border-t border-line pt-8"
                  }
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="font-display text-xs font-semibold tracking-[0.16em] text-signal uppercase">
                      {item.venue}
                    </p>
                    {item.example ? (
                      <span className="example-chip">
                        {t.publications.exampleLabel}
                      </span>
                    ) : null}
                  </div>
                  <h3
                    className={`mt-3 font-display font-semibold tracking-tight text-ink ${
                      item.featured
                        ? "text-2xl sm:text-3xl"
                        : "text-xl sm:text-2xl"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base text-ink-soft">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="trayectoria"
          aria-labelledby="path-title"
          className="relative z-10 bg-void text-white"
        >
          <div
            className="interference pointer-events-none absolute inset-0 opacity-70"
            aria-hidden
          />
          <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
            <div className="max-w-2xl">
              <h2
                id="path-title"
                className="font-display text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                {t.path.title}
              </h2>
              <p className="mt-4 text-base text-white/70 sm:text-lg">
                {t.path.subtitle}
              </p>
            </div>

            <ol className="relative mt-14 space-y-0 border-l border-white/15 pl-8 sm:pl-10">
              {t.path.items.map((item) => (
                <li key={`${item.year}-${item.title}`} className="relative pb-12 last:pb-0">
                  <span
                    className="timeline-dot absolute top-1.5 -left-[2.15rem] h-2.5 w-2.5 rounded-full bg-orbit sm:-left-[2.65rem]"
                    aria-hidden
                  />
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="font-display text-sm font-semibold tracking-[0.14em] text-orbit uppercase">
                      {item.year}
                    </p>
                    {item.example ? (
                      <span className="example-chip border-white/20 bg-white/10 text-white/80">
                        {t.path.exampleLabel}
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mt-2 font-display text-xl font-semibold sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-base leading-relaxed text-white/70">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="docencia"
          aria-labelledby="teaching-title"
          className="relative z-10 bg-paper"
        >
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
            <div className="max-w-2xl">
              <h2
                id="teaching-title"
                className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
              >
                {t.teaching.title}
              </h2>
              <p className="mt-4 text-base text-ink-soft sm:text-lg">
                {t.teaching.subtitle}
              </p>
            </div>

            <ul className="mt-12 space-y-6">
              {t.teaching.courses.map((course) => (
                <li
                  key={course.title}
                  className="border-l-[3px] border-signal bg-surface px-6 py-7 sm:px-8"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                      {course.title}
                    </h3>
                    {course.example ? (
                      <span className="example-chip">
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
          id="charlas"
          aria-labelledby="talks-title"
          className="relative z-10 bg-surface"
        >
          <div className="section-rule" aria-hidden />
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
            <div className="max-w-2xl">
              <h2
                id="talks-title"
                className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
              >
                {t.talks.title}
              </h2>
              <p className="mt-4 text-base text-ink-soft sm:text-lg">
                {t.talks.subtitle}
              </p>
            </div>

            <ul className="mt-12 divide-y divide-line border-y border-line">
              {t.talks.items.map((item) => (
                <li
                  key={item.title}
                  className="grid gap-2 py-6 sm:grid-cols-[5rem_1fr_auto] sm:items-baseline sm:gap-8"
                >
                  <p className="font-display text-sm font-semibold tracking-wide text-signal">
                    {item.year}
                  </p>
                  <div>
                    <h3 className="text-lg font-semibold text-ink sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-ink-soft">{item.detail}</p>
                  </div>
                  {item.example ? (
                    <span className="example-chip self-start">
                      {t.talks.exampleLabel}
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="voces"
          aria-labelledby="voices-title"
          className="relative z-10 overflow-hidden bg-paper"
        >
          <div
            className="interference-soft pointer-events-none absolute inset-0"
            aria-hidden
          />
          <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
            <div className="max-w-2xl">
              <h2
                id="voices-title"
                className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
              >
                {t.voices.title}
              </h2>
              <p className="mt-4 text-base text-ink-soft sm:text-lg">
                {t.voices.subtitle}
              </p>
            </div>

            <ul className="mt-12 grid gap-10 md:grid-cols-2">
              {t.voices.items.map((item) => (
                <li key={item.name} className="relative">
                  <span
                    className="font-display text-5xl leading-none text-signal/25 select-none"
                    aria-hidden
                  >
                    “
                  </span>
                  <blockquote className="-mt-4">
                    <p className="text-lg leading-relaxed text-ink sm:text-xl">
                      {item.quote}
                    </p>
                    <footer className="mt-5 flex flex-wrap items-center gap-3">
                      <div>
                        <p className="font-semibold text-ink">{item.name}</p>
                        <p className="text-sm text-ink-soft">{item.role}</p>
                      </div>
                      {item.example ? (
                        <span className="example-chip">
                          {t.voices.exampleLabel}
                        </span>
                      ) : null}
                    </footer>
                  </blockquote>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="preguntas"
          aria-labelledby="faq-title"
          className="relative z-10 bg-surface"
        >
          <div className="section-rule" aria-hidden />
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
            <div className="max-w-2xl">
              <h2
                id="faq-title"
                className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
              >
                {t.faq.title}
              </h2>
              <p className="mt-4 text-base text-ink-soft sm:text-lg">
                {t.faq.subtitle}
              </p>
            </div>

            <div className="mt-12 max-w-3xl space-y-3">
              {t.faq.items.map((item) => (
                <details
                  key={item.question}
                  className="faq-item group border border-line bg-paper open:border-signal/30 open:bg-signal-soft/40"
                >
                  <summary className="flex min-h-12 items-start justify-between gap-4 px-5 py-4 text-left sm:px-6">
                    <span className="font-display text-base font-semibold text-ink sm:text-lg">
                      {item.question}
                    </span>
                    <span className="mt-1 shrink-0 text-signal" aria-hidden>
                      +
                    </span>
                  </summary>
                  <div className="border-t border-line/70 px-5 pb-5 sm:px-6">
                    <div className="flex flex-wrap items-center gap-2 pt-4">
                      {item.example ? (
                        <span className="example-chip">
                          {t.faq.exampleLabel}
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-3 text-base leading-relaxed text-ink-soft">
                      {item.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contacto"
          aria-labelledby="contact-title"
          className="relative z-10 overflow-hidden bg-void text-white"
        >
          <div
            className="interference pointer-events-none absolute inset-0"
            aria-hidden
          />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-24 md:grid-cols-[1.15fr_0.85fr] md:items-end">
            <div>
              <h2
                id="contact-title"
                className="font-display text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                {t.contact.title}
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
                {t.contact.subtitle}
              </p>
              <a
                href={t.contact.ctaHref}
                className="cta mt-8 inline-flex min-h-11 items-center rounded-md bg-signal px-6 py-3 text-sm font-semibold text-white hover:bg-signal-deep"
              >
                {t.contact.cta}
              </a>
            </div>

            <dl className="space-y-7 border border-white/12 bg-white/5 p-6 sm:p-8">
              <div>
                <dt className="text-xs font-semibold tracking-[0.14em] text-orbit uppercase">
                  {t.contact.emailLabel}
                </dt>
                <dd className="mt-2">
                  <a
                    href={`mailto:${t.contact.email}`}
                    className="contact-link text-lg text-white underline-offset-4 hover:text-orbit hover:underline"
                  >
                    {t.contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-[0.14em] text-orbit uppercase">
                  {t.contact.profileLabel}
                </dt>
                <dd className="mt-2">
                  <a
                    href={t.contact.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link text-lg text-white underline-offset-4 hover:text-orbit hover:underline"
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
          <p className="font-display tracking-wide text-signal">
            {t.hero.focus}
          </p>
        </div>
      </footer>
    </div>
  );
}
