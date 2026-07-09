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
      path: "Trayectoria",
      teaching: "Docencia",
      talks: "Charlas",
      voices: "Voces",
      faq: "Preguntas",
      contact: "Contacto",
      langLabel: "Idioma",
      english: "English",
      spanish: "Español",
      sections: "Secciones",
    },
    en: {
      about: "About my work",
      research: "Research",
      publications: "Publications",
      path: "Path",
      teaching: "Teaching",
      talks: "Talks",
      voices: "Voices",
      faq: "FAQ",
      contact: "Contact",
      langLabel: "Language",
      english: "English",
      spanish: "Español",
      sections: "Sections",
    },
  },
  hero: {
    es: {
      name: "Martina Guzman Sanchez, MD",
      role: "Boss of Every body",
      focusLabel: "Campo",
      focus: "Computación cuántica",
      tagline: "Hago todo",
      thesis:
        "Uso la computación cuántica para conectar preguntas difíciles —espacio, mente, salud y biología— con proyectos claros y útiles.",
      cta: "Únete a mi laboratorio",
      ctaHref: "mailto:thebest@martina.com?subject=Únete%20a%20mi%20laboratorio",
      photoAlt:
        "Retrato de ejemplo de Martina Guzman Sanchez. Reemplázalo con tu foto profesional.",
      photoCredit:
        "Foto de ejemplo (Unsplash / WOCinTech Chat). Reemplázala con tu propia imagen.",
      photoExampleNote: "Ejemplo",
    },
    en: {
      name: "Martina Guzman Sanchez, MD",
      role: "Boss of Every body",
      focusLabel: "Field",
      focus: "Quantum computing",
      tagline: "I do everything",
      thesis:
        "I use quantum computing to connect hard questions —space, mind, health, and biology— with clear, useful projects.",
      cta: "Join my lab",
      ctaHref: "mailto:thebest@martina.com?subject=Join%20my%20lab",
      photoAlt:
        "Example portrait of Martina Guzman Sanchez. Replace it with your professional photo.",
      photoCredit:
        "Example photo (Unsplash / WOCinTech Chat). Replace it with your own image.",
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
      subtitle: "Cuatro frentes activos. El primero es el eje principal del laboratorio.",
      items: [
        {
          title: "Exploración espacial",
          summary:
            "Aplico ideas de computación cuántica a problemas de exploración y sistemas complejos en el espacio.",
          featured: true,
        },
        {
          title: "Filosofía de la mente",
          summary:
            "Exploro cómo los modelos computacionales ayudan a pensar la conciencia, la decisión y el conocimiento.",
          featured: false,
        },
        {
          title: "Vacunas",
          summary:
            "Conecto modelado y datos para apoyar estrategias de vacunación más amplias y equitativas.",
          featured: false,
        },
        {
          title: "Biología canina",
          summary:
            "Estudio patrones biológicos en perros para entender salud, comportamiento y sistemas vivos.",
          featured: false,
        },
      ],
    },
    en: {
      title: "Research lines",
      subtitle: "Four active fronts. The first is the lab’s main axis.",
      items: [
        {
          title: "Space exploration",
          summary:
            "I apply quantum computing ideas to exploration problems and complex systems in space.",
          featured: true,
        },
        {
          title: "Philosophy of mind",
          summary:
            "I explore how computational models help us think about consciousness, decision-making, and knowledge.",
          featured: false,
        },
        {
          title: "Vaccines",
          summary:
            "I connect modeling and data to support broader, more equitable vaccination strategies.",
          featured: false,
        },
        {
          title: "Dog biology",
          summary:
            "I study biological patterns in dogs to understand health, behavior, and living systems.",
          featured: false,
        },
      ],
    },
  },
  publications: {
    es: {
      title: "Publicaciones",
      subtitle: "Una selección breve. Los títulos más importantes van primero.",
      exampleLabel: "Ejemplo",
      items: [
        {
          title: "Simulaciones de suerte frente a talento",
          detail: "Artículo · modelado y decisión",
          venue: "Preprint · 2025",
          example: true,
          featured: true,
        },
        {
          title: "Vacunas para todas las enfermedades",
          detail: "Artículo · salud pública y datos",
          venue: "En revisión · 2024",
          example: true,
          featured: false,
        },
      ],
    },
    en: {
      title: "Publications",
      subtitle: "A short selection. The most important titles come first.",
      exampleLabel: "Example",
      items: [
        {
          title: "Simulations of luck vs talent",
          detail: "Article · modeling and decision-making",
          venue: "Preprint · 2025",
          example: true,
          featured: true,
        },
        {
          title: "Vaccines for all diseases",
          detail: "Article · public health and data",
          venue: "Under review · 2024",
          example: true,
          featured: false,
        },
      ],
    },
  },
  path: {
    es: {
      title: "Trayectoria académica",
      subtitle: "Momentos que marcan cómo llegué hasta aquí.",
      exampleLabel: "Ejemplo",
      items: [
        {
          year: "2024",
          title: "Directora de laboratorio",
          detail: "Liderazgo del grupo en computación cuántica aplicada.",
          example: true,
        },
        {
          year: "2021",
          title: "Profesora universitaria",
          detail: "Inicio de la línea docente y de mentoría de tesis.",
          example: true,
        },
        {
          year: "2018",
          title: "Doctorado / formación médica",
          detail: "Formación que une ciencia clínica y pensamiento computacional.",
          example: true,
        },
        {
          year: "2015",
          title: "Primer proyecto interdisciplinario",
          detail: "Puente temprano entre modelado, salud y sistemas complejos.",
          example: true,
        },
      ],
    },
    en: {
      title: "Academic path",
      subtitle: "Moments that show how I got here.",
      exampleLabel: "Example",
      items: [
        {
          year: "2024",
          title: "Lab director",
          detail: "Leading the applied quantum computing group.",
          example: true,
        },
        {
          year: "2021",
          title: "University professor",
          detail: "Started teaching and thesis mentorship.",
          example: true,
        },
        {
          year: "2018",
          title: "Doctorate / medical training",
          detail: "Training that joins clinical science and computational thinking.",
          example: true,
        },
        {
          year: "2015",
          title: "First interdisciplinary project",
          detail: "An early bridge between modeling, health, and complex systems.",
          example: true,
        },
      ],
    },
  },
  teaching: {
    es: {
      title: "Docencia",
      subtitle: "Cursos que imparto.",
      exampleLabel: "Ejemplo",
      courses: [
        {
          title: "Cómo dejar de fallar y ser genial en su lugar",
          original: "How to stop sucking and be awesome instead",
          note: "Curso universitario · ejemplo editable",
          example: true,
        },
      ],
    },
    en: {
      title: "Teaching",
      subtitle: "Courses I teach.",
      exampleLabel: "Example",
      courses: [
        {
          title: "How to stop sucking and be awesome instead",
          original: null,
          note: "University course · editable example",
          example: true,
        },
      ],
    },
  },
  talks: {
    es: {
      title: "Charlas y medios",
      subtitle: "Conferencias, entrevistas y menciones recientes.",
      exampleLabel: "Ejemplo",
      items: [
        {
          title: "Cuando la computación cuántica sale del laboratorio",
          detail: "Conferencia invitada · foro de ciencia abierta",
          year: "2025",
          example: true,
        },
        {
          title: "Entrevista: modelar lo imposible",
          detail: "Podcast de divulgación científica",
          year: "2024",
          example: true,
        },
        {
          title: "Nota de prensa sobre vacunas y datos",
          detail: "Medio universitario",
          year: "2024",
          example: true,
        },
      ],
    },
    en: {
      title: "Talks and media",
      subtitle: "Recent lectures, interviews, and mentions.",
      exampleLabel: "Example",
      items: [
        {
          title: "When quantum computing leaves the lab",
          detail: "Invited talk · open science forum",
          year: "2025",
          example: true,
        },
        {
          title: "Interview: modeling the impossible",
          detail: "Science communication podcast",
          year: "2024",
          example: true,
        },
        {
          title: "Press note on vaccines and data",
          detail: "University media",
          year: "2024",
          example: true,
        },
      ],
    },
  },
  voices: {
    es: {
      title: "Frases de estudiantes y colaboradores",
      subtitle: "Palabras de quienes trabajan o estudian conmigo.",
      exampleLabel: "Ejemplo",
      items: [
        {
          quote:
            "Martina explica lo difícil sin hacerlo pequeño. Salí de su clase queriendo hacer preguntas mejores.",
          name: "Ana R.",
          role: "Estudiante de posgrado",
          example: true,
        },
        {
          quote:
            "Colaborar con ella es intenso y claro: siempre hay una pregunta central y un siguiente paso concreto.",
          name: "Luis M.",
          role: "Colaborador de investigación",
          example: true,
        },
      ],
    },
    en: {
      title: "Notes from students and collaborators",
      subtitle: "Words from people who work or study with me.",
      exampleLabel: "Example",
      items: [
        {
          quote:
            "Martina explains hard things without shrinking them. I left her class wanting to ask better questions.",
          name: "Ana R.",
          role: "Graduate student",
          example: true,
        },
        {
          quote:
            "Working with her is intense and clear: there is always a central question and a concrete next step.",
          name: "Luis M.",
          role: "Research collaborator",
          example: true,
        },
      ],
    },
  },
  faq: {
    es: {
      title: "Preguntas para estudiantes",
      subtitle: "Respuestas breves si te interesa un curso, una tesis o el laboratorio.",
      exampleLabel: "Ejemplo",
      items: [
        {
          question: "¿Puedo unirme al laboratorio sin experiencia en computación cuántica?",
          answer:
            "Sí, si traes curiosidad seria y ganas de aprender. Empezamos con bases claras y un proyecto pequeño.",
          example: true,
        },
        {
          question: "¿Ofreces dirección de tesis?",
          answer:
            "Sí. Escribo con estudiantes que tienen una pregunta concreta y pueden trabajar de forma constante.",
          example: true,
        },
        {
          question: "¿Cómo te contacto para una clase o una visita?",
          answer:
            "Escríbeme a thebest@martina.com con una frase sobre quién eres y qué te interesa.",
          example: true,
        },
      ],
    },
    en: {
      title: "Questions for students",
      subtitle: "Short answers if you are interested in a course, a thesis, or the lab.",
      exampleLabel: "Example",
      items: [
        {
          question: "Can I join the lab without quantum computing experience?",
          answer:
            "Yes, if you bring serious curiosity and a will to learn. We start with clear foundations and a small project.",
          example: true,
        },
        {
          question: "Do you supervise theses?",
          answer:
            "Yes. I work with students who have a concrete question and can work steadily.",
          example: true,
        },
        {
          question: "How should I contact you about a class or a visit?",
          answer:
            "Email thebest@martina.com with one sentence about who you are and what interests you.",
          example: true,
        },
      ],
    },
  },
  contact: {
    es: {
      title: "Contacto",
      subtitle:
        "Escríbeme si eres estudiante, colega, periodista o posible colaborador(a).",
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
      subtitle:
        "Write if you are a student, colleague, journalist, or possible collaborator.",
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
    path: string;
    teaching: string;
    talks: string;
    voices: string;
    faq: string;
    contact: string;
    langLabel: string;
    english: string;
    spanish: string;
    sections: string;
  };
  hero: {
    name: string;
    role: string;
    focusLabel: string;
    focus: string;
    tagline: string;
    thesis: string;
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
    items: ReadonlyArray<{
      title: string;
      summary: string;
      featured: boolean;
    }>;
  };
  publications: {
    title: string;
    subtitle: string;
    exampleLabel: string;
    items: ReadonlyArray<{
      title: string;
      detail: string;
      venue: string;
      example: boolean;
      featured: boolean;
    }>;
  };
  path: {
    title: string;
    subtitle: string;
    exampleLabel: string;
    items: ReadonlyArray<{
      year: string;
      title: string;
      detail: string;
      example: boolean;
    }>;
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
  talks: {
    title: string;
    subtitle: string;
    exampleLabel: string;
    items: ReadonlyArray<{
      title: string;
      detail: string;
      year: string;
      example: boolean;
    }>;
  };
  voices: {
    title: string;
    subtitle: string;
    exampleLabel: string;
    items: ReadonlyArray<{
      quote: string;
      name: string;
      role: string;
      example: boolean;
    }>;
  };
  faq: {
    title: string;
    subtitle: string;
    exampleLabel: string;
    items: ReadonlyArray<{
      question: string;
      answer: string;
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
    path: portfolio.path[lang],
    teaching: portfolio.teaching[lang],
    talks: portfolio.talks[lang],
    voices: portfolio.voices[lang],
    faq: portfolio.faq[lang],
    contact: portfolio.contact[lang],
    footer: portfolio.footer[lang],
  };
}

export default portfolio;
