export type Lang = "es" | "en";

export const defaultLang: Lang = "es";

export function isLang(value: string | string[] | undefined): value is Lang {
  return value === "es" || value === "en";
}

export function resolveLang(
  value: string | string[] | undefined,
): Lang {
  const raw = Array.isArray(value) ? value[0] : value;
  return isLang(raw) ? raw : defaultLang;
}

const portfolio = {
  meta: {
    es: {
      title: "Martina Guzman Sanchez, MD — Portafolio académico",
      description:
        "Profesora universitaria en computación cuántica. Investigación, publicaciones, docencia y contacto.",
    },
    en: {
      title: "Martina Guzman Sanchez, MD — Academic portfolio",
      description:
        "University professor in quantum computing. Research, publications, teaching, and contact.",
    },
  },
  nav: {
    es: {
      about: "Sobre mi trabajo",
      research: "Investigación",
      publications: "Publicaciones",
      teaching: "Docencia",
      contact: "Contacto",
      langLabel: "Idioma",
      english: "English",
      spanish: "Español",
    },
    en: {
      about: "About my work",
      research: "Research",
      publications: "Publications",
      teaching: "Teaching",
      contact: "Contact",
      langLabel: "Language",
      english: "English",
      spanish: "Español",
    },
  },
  hero: {
    es: {
      name: "Martina Guzman Sanchez, MD",
      role: "Boss of Every body",
      focusLabel: "Área de investigación",
      focus: "Computación cuántica",
      tagline: "Hago todo",
      cta: "Únete a mi laboratorio",
      ctaHref: "mailto:thebest@martina.com?subject=Únete%20a%20mi%20laboratorio",
      photoAlt:
        "Retrato de ejemplo de Martina Guzman Sanchez. Reemplázalo con tu foto profesional.",
      photoCredit: "Foto de ejemplo (Unsplash / WOCinTech Chat). Reemplázala con tu propia imagen.",
      photoExampleNote: "Ejemplo",
    },
    en: {
      name: "Martina Guzman Sanchez, MD",
      role: "Boss of Every body",
      focusLabel: "Research focus",
      focus: "Quantum computing",
      tagline: "I do everything",
      cta: "Join my lab",
      ctaHref: "mailto:thebest@martina.com?subject=Join%20my%20lab",
      photoAlt:
        "Example portrait of Martina Guzman Sanchez. Replace it with your professional photo.",
      photoCredit: "Example photo (Unsplash / WOCinTech Chat). Replace it with your own image.",
      photoExampleNote: "Example",
    },
  },
  about: {
    es: {
      title: "Sobre mi trabajo",
      body: "Soy Martina Guzman Sanchez, MD. Dirijo un laboratorio donde la computación cuántica se cruza con preguntas grandes: el espacio, la mente, la salud pública y la biología. Trabajo con estudiantes, colegas y colaboradores para convertir ideas difíciles en proyectos claros y útiles.",
    },
    en: {
      title: "About my work",
      body: "I am Martina Guzman Sanchez, MD. I lead a lab where quantum computing meets big questions: space, the mind, public health, and biology. I work with students, colleagues, and collaborators to turn hard ideas into clear, useful projects.",
    },
  },
  research: {
    es: {
      title: "Líneas de investigación",
      subtitle: "Proyectos actuales en los que estoy trabajando.",
      items: [
        {
          title: "Exploración espacial",
          summary:
            "Aplico ideas de computación cuántica a problemas de exploración y sistemas complejos en el espacio.",
        },
        {
          title: "Filosofía de la mente",
          summary:
            "Exploro cómo los modelos computacionales ayudan a pensar la conciencia, la decisión y el conocimiento.",
        },
        {
          title: "Vacunas",
          summary:
            "Conecto modelado y datos para apoyar estrategias de vacunación más amplias y equitativas.",
        },
        {
          title: "Biología canina",
          summary:
            "Estudio patrones biológicos en perros para entender salud, comportamiento y sistemas vivos.",
        },
      ],
    },
    en: {
      title: "Research lines",
      subtitle: "Current projects I am working on.",
      items: [
        {
          title: "Space exploration",
          summary:
            "I apply quantum computing ideas to exploration problems and complex systems in space.",
        },
        {
          title: "Philosophy of mind",
          summary:
            "I explore how computational models help us think about consciousness, decision-making, and knowledge.",
        },
        {
          title: "Vaccines",
          summary:
            "I connect modeling and data to support broader, more equitable vaccination strategies.",
        },
        {
          title: "Dog biology",
          summary:
            "I study biological patterns in dogs to understand health, behavior, and living systems.",
        },
      ],
    },
  },
  publications: {
    es: {
      title: "Publicaciones",
      subtitle: "Una selección de trabajos recientes.",
      items: [
        {
          title: "Simulaciones de suerte frente a talento",
          detail: "Artículo · ejemplo editable",
          example: true,
        },
        {
          title: "Vacunas para todas las enfermedades",
          detail: "Artículo · ejemplo editable",
          example: true,
        },
      ],
      exampleLabel: "Ejemplo",
    },
    en: {
      title: "Publications",
      subtitle: "A selection of recent work.",
      items: [
        {
          title: "Simulations of luck vs talent",
          detail: "Article · editable example",
          example: true,
        },
        {
          title: "Vaccines for all diseases",
          detail: "Article · editable example",
          example: true,
        },
      ],
      exampleLabel: "Example",
    },
  },
  teaching: {
    es: {
      title: "Docencia",
      subtitle: "Cursos que imparto.",
      courses: [
        {
          title: "Cómo dejar de fallar y ser genial en su lugar",
          original: "How to stop sucking and be awesome instead",
          note: "Curso universitario · ejemplo editable",
          example: true,
        },
      ],
      exampleLabel: "Ejemplo",
    },
    en: {
      title: "Teaching",
      subtitle: "Courses I teach.",
      courses: [
        {
          title: "How to stop sucking and be awesome instead",
          original: null,
          note: "University course · editable example",
          example: true,
        },
      ],
      exampleLabel: "Example",
    },
  },
  contact: {
    es: {
      title: "Contacto",
      subtitle: "Escríbeme si eres estudiante, colega, periodista o posible colaborador(a).",
      emailLabel: "Correo",
      email: "thebest@martina.com",
      profileLabel: "Sitio y perfil",
      profileUrl: "https://www.martina.com",
      profileText: "www.martina.com",
      cta: "Únete a mi laboratorio",
      ctaHref: "mailto:thebest@martina.com?subject=Únete%20a%20mi%20laboratorio",
    },
    en: {
      title: "Contact",
      subtitle: "Write if you are a student, colleague, journalist, or possible collaborator.",
      emailLabel: "Email",
      email: "thebest@martina.com",
      profileLabel: "Website and profile",
      profileUrl: "https://www.martina.com",
      profileText: "www.martina.com",
      cta: "Join my lab",
      ctaHref: "mailto:thebest@martina.com?subject=Join%20my%20lab",
    },
  },
  footer: {
    es: {
      note: "Portafolio académico de Martina Guzman Sanchez, MD.",
    },
    en: {
      note: "Academic portfolio of Martina Guzman Sanchez, MD.",
    },
  },
} as const;

export type PortfolioCopy = {
  meta: { title: string; description: string };
  nav: {
    about: string;
    research: string;
    publications: string;
    teaching: string;
    contact: string;
    langLabel: string;
    english: string;
    spanish: string;
  };
  hero: {
    name: string;
    role: string;
    focusLabel: string;
    focus: string;
    tagline: string;
    cta: string;
    ctaHref: string;
    photoAlt: string;
    photoCredit: string;
    photoExampleNote: string;
  };
  about: { title: string; body: string };
  research: {
    title: string;
    subtitle: string;
    items: ReadonlyArray<{ title: string; summary: string }>;
  };
  publications: {
    title: string;
    subtitle: string;
    exampleLabel: string;
    items: ReadonlyArray<{ title: string; detail: string; example: boolean }>;
  };
  teaching: {
    title: string;
    subtitle: string;
    exampleLabel: string;
    courses: ReadonlyArray<{
      title: string;
      original: string | null;
      note: string;
      example: boolean;
    }>;
  };
  contact: {
    title: string;
    subtitle: string;
    emailLabel: string;
    email: string;
    profileLabel: string;
    profileUrl: string;
    profileText: string;
    cta: string;
    ctaHref: string;
  };
  footer: { note: string };
};

export function getCopy(lang: Lang): PortfolioCopy {
  return {
    meta: portfolio.meta[lang],
    nav: portfolio.nav[lang],
    hero: portfolio.hero[lang],
    about: portfolio.about[lang],
    research: portfolio.research[lang],
    publications: portfolio.publications[lang],
    teaching: portfolio.teaching[lang],
    contact: portfolio.contact[lang],
    footer: portfolio.footer[lang],
  };
}

export default portfolio;
