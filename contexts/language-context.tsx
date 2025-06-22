"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

// Define available languages
export type Language = "en" | "es" | "pt"

// Define the context type
type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

// Create the context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (key) => key,
})

// Translations
const translations = {
  en: {
    // Navigation
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.certifications": "Certifications",
    "nav.education": "Education",
    "nav.contact": "Contact",

    // Hero section
    "hero.title": "Álifi Ralph Dias Faria",
    "hero.subtitle": "AWS Cloud Engineer, Solutions Architect",
    "hero.experience": "1+ years of experience in solutions AWS.",
    "hero.cta.contact": "Get in Touch",
    "hero.cta.experience": "View Experience",

    // About section
    "about.title": "About Me",
    "about.p1":
      "I'm a Cloud Solutions Architect focused on AWS and DevOps, focused about designing scalable, secure, and cost-efficient architectures. I help transform businesses through cloud solutions and automation. Currently transitioning my career, I combine hands-on learning with real-world problem-solving in cloud computing.p2":
      "My expertise includes infrastructure automation, containerization with Kubernetes, and implementing data processing pipelines using AWS services like Glue, Athena, and S3.",

    // Experience section
    "experience.title": "Professional Experience",
    "experience.vxcase.title": "AWS Cloud and DevOps Engineer",
    "experience.vxcase.company": "VX Case",
    "experience.vxcase.p1": "Led the migration of company infrastructure to AWS EKS (Elastic Kubernetes Service).",
    "experience.vxcase.p2": "Achieved 91% reduction in data storage costs through implementation of AWS S3 and Athena.",
    "experience.vxcase.p3":
      "Led migration of 1 TB daily data using AWS Glue with Spark backend for automated data processing pipelines.",
    "experience.vxcase.p4":
      "Communicated complex technical concepts to non-technical stakeholders, ensuring alignment of cloud initiatives.",

    "experience.ru.title": "Junior Solutions Architect",
    "experience.ru.company": "RU Contabilidade",
    "experience.ru.p1": "Implemented Python scripts to automate repetitive tasks, increasing operational efficiency.",
    "experience.ru.p2":
      "Achieved 94% reduction in processing time by automating Excel spreadsheet tasks (from 3 hours to 10 minutes daily).",
    "experience.ru.p3":
      "Managed SQL queries to extract and manipulate data from MySQL database, ensuring data integrity.",

    // Skills section
    "skills.title": "Technical Skills",
    "skills.aws": "AWS Services",
    "skills.cloud": "Cloud & DevOps",
    "skills.data": "Data Science",
    "skills.other": "Other Skills",

    // Certifications section
    "certifications.title": "Certifications",
    "certifications.additional": "Additional Courses & Certificates",

    // Education section
    "education.title": "Education",

    // Languages section
    "languages.title": "Languages",
    "languages.portuguese": "Portuguese",
    "languages.english": "English",
    "languages.spanish": "Spanish",
    "languages.native": "Native",
    "languages.advanced": "Advanced",
    "languages.basic": "Basic",

    // Contact section
    "contact.title": "Get In Touch",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.location": "Location",
    "contact.message": "I'm always open to discussing new projects, opportunities, or partnerships.",

    // Footer
    "footer.rights": "All rights reserved.",

    // Language selector
    "language.en": "English",
    "language.es": "Spanish",
    "language.pt": "Portuguese",
  },
  es: {
    // Navigation
    "nav.about": "Sobre Mí",
    "nav.experience": "Experiencia",
    "nav.skills": "Habilidades",
    "nav.certifications": "Certificaciones",
    "nav.education": "Educación",
    "nav.contact": "Contacto",

    // Hero section
    "hero.title": "Álifi Ralph Dias Faria",
    "hero.subtitle": "Ingeniero de Nube AWS, Arquitecto de Soluciones",
    "hero.experience": "Más de 1 año de experiencia en soluciones AWS.",
    "hero.cta.contact": "Contactar",
    "hero.cta.experience": "Ver Experiencia",

    // About section
    "about.title": "Sobre Mí",
    "about.p1":
      "Soy arquitecto de soluciones en la nube centrado en AWS y DevOps, y me dedico a diseñar arquitecturas escalables, seguras y rentables. Ayudo a transformar empresas mediante soluciones en la nube y de automatización. Actualmente, en plena transición profesional, combino el aprendizaje práctico con la resolución de problemas reales en la computación en la nube.p2":
      "Mi experiencia incluye automatización de infraestructura, contenedorización con Kubernetes e implementación de canales de procesamiento de datos utilizando servicios AWS como Glue, Athena y S3.",

    // Experience section
    "experience.title": "Experiencia Profesional",
    "experience.vxcase.title": "Ingeniero de Nube AWS y DevOps",
    "experience.vxcase.company": "VX Case",
    "experience.vxcase.p1":
      "Dirigí la migración de la infraestructura de la empresa a AWS EKS (Elastic Kubernetes Service).",
    "experience.vxcase.p2":
      "Logré una reducción del 91% en los costos de almacenamiento de datos mediante la implementación de AWS S3 y Athena.",
    "experience.vxcase.p3":
      "Dirigí la migración de 1 TB de datos diarios utilizando AWS Glue con backend Spark para canales automatizados de procesamiento de datos.",
    "experience.vxcase.p4":
      "Comuniqué conceptos técnicos complejos a partes interesadas no técnicas, asegurando la alineación de iniciativas en la nube.",

    "experience.ru.title": "Arquitecto de Soluciones Junior",
    "experience.ru.company": "RU Contabilidade",
    "experience.ru.p1":
      "Implementé scripts de Python para automatizar tareas repetitivas, aumentando la eficiencia operativa.",
    "experience.ru.p2":
      "Logré una reducción del 94% en el tiempo de procesamiento al automatizar tareas de hojas de cálculo Excel (de 3 horas a 10 minutos diarios).",
    "experience.ru.p3":
      "Gestioné consultas SQL para extraer y manipular datos de la base de datos MySQL, garantizando la integridad de los datos.",

    // Skills section
    "skills.title": "Habilidades Técnicas",
    "skills.aws": "Servicios AWS",
    "skills.cloud": "Nube y DevOps",
    "skills.data": "Ciencia de Datos",
    "skills.other": "Otras Habilidades",

    // Certifications section
    "certifications.title": "Certificaciones",
    "certifications.additional": "Cursos y Certificados Adicionales",

    // Education section
    "education.title": "Educación",

    // Languages section
    "languages.title": "Idiomas",
    "languages.portuguese": "Portugués",
    "languages.english": "Inglés",
    "languages.spanish": "Español",
    "languages.native": "Nativo",
    "languages.advanced": "Avanzado",
    "languages.basic": "Básico",

    // Contact section
    "contact.title": "Contacto",
    "contact.phone": "Teléfono",
    "contact.email": "Correo",
    "contact.location": "Ubicación",
    "contact.message": "Siempre estoy abierto a discutir nuevos proyectos, oportunidades o colaboraciones.",

    // Footer
    "footer.rights": "Todos los derechos reservados.",

    // Language selector
    "language.en": "Inglés",
    "language.es": "Español",
    "language.pt": "Portugués",
  },
  pt: {
    // Navigation
    "nav.about": "Sobre",
    "nav.experience": "Experiência",
    "nav.skills": "Habilidades",
    "nav.certifications": "Certificações",
    "nav.education": "Educação",
    "nav.contact": "Contato",

    // Hero section
    "hero.title": "Álifi Ralph Dias Faria",
    "hero.subtitle": "Engenheiro de Nuvem AWS, Arquiteto de Soluções",
    "hero.experience": "Mais de 1 ano de experiência em soluções AWS.",
    "hero.cta.contact": "Entre em Contato",
    "hero.cta.experience": "Ver Experiência",

    // About section
    "about.title": "Sobre Mim",
    "about.p1":
      "Sou Arquiteto de Soluções Cloud, com foco em AWS e práticas DevOps, focado em criar arquiteturas escaláveis, seguras e de baixo custo. Ajudo empresas a se transformarem através da nuvem e da automação. Atualmente estou em transição de carreira, unindo aprendizado prático com a resolução de problemas reais na computação em nuvem.",
    "about.p2":
      "Minha expertise inclui automação de infraestrutura, conteinerização com Kubernetes e implementação de pipelines de processamento de dados usando serviços AWS como Glue, Athena e S3.",

    // Experience section
    "experience.title": "Experiência Profissional",
    "experience.vxcase.title": "Engenheiro de Nuvem AWS e DevOps",
    "experience.vxcase.company": "VX Case",
    "experience.vxcase.p1":
      "Liderei a migração da infraestrutura da empresa para AWS EKS (Elastic Kubernetes Service).",
    "experience.vxcase.p2":
      "Alcancei redução de 91% nos custos de armazenamento de dados através da implementação de AWS S3 e Athena.",
    "experience.vxcase.p3":
      "Liderei a migração de 1 TB de dados diários usando AWS Glue com backend Spark para pipelines automatizados de processamento de dados.",
    "experience.vxcase.p4":
      "Comuniquei conceitos técnicos complexos para stakeholders não técnicos, garantindo alinhamento das iniciativas de nuvem.",

    "experience.ru.title": "Arquiteto de Soluções Júnior",
    "experience.ru.company": "RU Contabilidade",
    "experience.ru.p1":
      "Implementei scripts Python para automatizar tarefas repetitivas, aumentando a eficiência operacional.",
    "experience.ru.p2":
      "Alcancei redução de 94% no tempo de processamento ao automatizar tarefas de planilhas Excel (de 3 horas para 10 minutos diários).",
    "experience.ru.p3":
      "Gerenciei consultas SQL para extrair e manipular dados do banco de dados MySQL, garantindo a integridade dos dados.",

    // Skills section
    "skills.title": "Habilidades Técnicas",
    "skills.aws": "Serviços AWS",
    "skills.cloud": "Nuvem e DevOps",
    "skills.data": "Ciência de Dados",
    "skills.other": "Outras Habilidades",

    // Certifications section
    "certifications.title": "Certificações",
    "certifications.additional": "Cursos e Certificados Adicionais",

    // Education section
    "education.title": "Educação",

    // Languages section
    "languages.title": "Idiomas",
    "languages.portuguese": "Português",
    "languages.english": "Inglês",
    "languages.spanish": "Espanhol",
    "languages.native": "Nativo",
    "languages.advanced": "Avançado",
    "languages.basic": "Básico",

    // Contact section
    "contact.title": "Entre em Contato",
    "contact.phone": "Telefone",
    "contact.email": "Email",
    "contact.location": "Localização",
    "contact.message": "Estou sempre aberto a discutir novos projetos, oportunidades ou parcerias.",

    // Footer
    "footer.rights": "Todos os direitos reservados.",

    // Language selector
    "language.en": "Inglês",
    "language.es": "Espanhol",
    "language.pt": "Português",
  },
}

// Create the provider component
export function LanguageProvider({ children }: { children: ReactNode }) {
  // Initialize with default language or from localStorage
  const [language, setLanguageState] = useState<Language>("en")

  // Load saved language from localStorage on component mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && ["en", "es", "pt"].includes(savedLanguage)) {
      setLanguageState(savedLanguage)
    }
  }, [])

  // Save language to localStorage when it changes
  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage)
    localStorage.setItem("language", newLanguage)
  }

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

// Custom hook to use the language context
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
