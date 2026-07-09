import type { Metadata } from "next";
import { headers } from "next/headers";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { defaultLang, resolveLang, type Lang } from "@/content/portfolio";
import { getCopy } from "@/content/portfolio";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined);

async function getRequestLang(): Promise<Lang> {
  const headerStore = await headers();
  return resolveLang(headerStore.get("x-portfolio-lang") ?? defaultLang);
}

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getRequestLang();
  const copy = getCopy(lang);

  return {
    ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
    title: copy.meta.title,
    description: copy.meta.description,
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      ],
      apple: "/apple-touch-icon.png",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang = await getRequestLang();

  return (
    <html
      lang={lang}
      className={`${sourceSans.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
