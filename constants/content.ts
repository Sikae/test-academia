// ACTUALIZA TU INFO AQUÍ — todo el texto y enlaces del sitio viven en este archivo.

export const siteContent = {
  // ACTUALIZA TU INFO AQUÍ
  brand: {
    name: "Martina Tech",
    tagline: "Tecnología que hace crecer a los negocios locales",
  },

  // ACTUALIZA TU INFO AQUÍ
  contact: {
    email: "sikabarca@gmail.com",
    whatsapp: {
      display: "+593 98 765 4321",
      // Formato internacional sin + ni espacios (Ecuador +593, sin el 0 inicial)
      href: "https://wa.me/593987654321",
    },
    social: {
      x: {
        handle: "@martina",
        href: "https://x.com/martina",
      },
    },
  },

  // ACTUALIZA TU INFO AQUÍ
  nav: {
    ctaLabel: "Contáctame",
    ctaHref: "#contacto",
  },

  // ACTUALIZA TU INFO AQUÍ
  hero: {
    headline: "Software a medida para negocios locales que quieren escalar",
    headlineAccent: "escalar",
    subtitle:
      "Diseñamos y entregamos productos digitales en fintech, salud animal y legal tech — claros, confiables y listos para vender.",
    primaryCta: {
      label: "Contáctame",
      href: "#contacto",
    },
    secondaryCta: {
      label: "Ver servicios",
      href: "#servicios",
    },
  },

  // ACTUALIZA TU INFO AQUÍ
  about: {
    id: "acerca",
    eyebrow: "Acerca de",
    title: "Una startup tech enfocada en resultados reales",
    body: [
      "Martina Tech ayuda a negocios locales a digitalizar procesos críticos sin fricción. Trabajamos codo a codo con dueños y equipos para lanzar productos que se entienden, se usan y generan ingresos.",
      "Desde pagos y cumplimiento hasta experiencias de salud animal, construimos software sobrio, seguro y orientado a conversión.",
    ],
  },

  // ACTUALIZA TU INFO AQUÍ
  services: {
    id: "servicios",
    eyebrow: "Servicios",
    title: "Tres líneas de producto, un mismo estándar",
    subtitle:
      "Soluciones especializadas para verticales donde la confianza y la claridad importan tanto como la tecnología.",
    items: [
      {
        icon: "Wallet" as const,
        title: "Fintech",
        description:
          "Flujos de pago, onboarding y paneles financieros pensados para comercios y pymes locales que necesitan cobrar y conciliar sin complicaciones.",
      },
      {
        icon: "PawPrint" as const,
        title: "Pet health services",
        description:
          "Plataformas para clínicas y servicios de salud animal: citas, historiales y seguimiento que mejoran la experiencia del cliente y la operación del negocio.",
      },
      {
        icon: "Scale" as const,
        title: "Legal Tech",
        description:
          "Herramientas digitales para estudios y servicios legales: gestión de casos, documentos y comunicación con clientes de forma ordenada y segura.",
      },
    ],
  },

  // ACTUALIZA TU INFO AQUÍ
  finalCta: {
    id: "contacto",
    title: "¿Listo para llevar tu negocio al siguiente nivel?",
    subtitle:
      "Cuéntame qué necesitas. Te respondo con un plan claro y el siguiente paso concreto.",
    buttonLabel: "Contáctame",
    buttonHref: "mailto:sikabarca@gmail.com",
  },

  // ACTUALIZA TU INFO AQUÍ
  footer: {
    copyright: `© ${new Date().getFullYear()} Martina Tech. Todos los derechos reservados.`,
  },
} as const;

export type SiteContent = typeof siteContent;
