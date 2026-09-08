const translations = {
  es: {
    navWork: "Trabajo",
    navServices: "Servicios",
    navAbout: "Sobre Erik",
    location: "Santa Cruz, Bolivia",
    role: "Fotografía · Video · Dirección visual",
    intro: "Contenido visual para marcas, personas y proyectos en movimiento.",
    viewWork: "Ver trabajo",
    contact: "Contactar",
    selectedWork: "Trabajo seleccionado",
    workNote: "Esta versión está preparada para incorporar la selección final de fotografías y videos.",
    all: "Todo",
    automotive: "Automotriz",
    portrait: "Retrato",
    product: "Producto",
    events: "Eventos",
    projectPending: "Proyecto por seleccionar",
    videoPending: "Video por seleccionar",
    services: "Servicios",
    photoTitle: "Fotografía",
    photoText: "Automotriz, retrato, producto, lifestyle y cobertura de eventos.",
    videoTitle: "Video",
    videoText: "Piezas comerciales, reels verticales y contenido para redes sociales.",
    brandTitle: "Contenido para marcas",
    brandText: "Concepto, producción visual y entregables adaptados a cada campaña.",
    aboutEyebrow: "Sobre Erik",
    aboutTitle: "Fotógrafo y videógrafo con base en Santa Cruz.",
    aboutText: "Erik crea contenido visual para marcas, personas y redes sociales. Su trabajo combina precisión técnica, movimiento y una mirada comercial contemporánea.",
    availability: "Disponible para proyectos en Santa Cruz y colaboraciones remotas desde Bolivia.",
    contactEyebrow: "Contacto directo",
    contactTitle: "Conversemos sobre tu próximo proyecto.",
    contactNote: "Próximamente añadiremos el WhatsApp y correo profesional de Erik."
  },
  en: {
    navWork: "Work",
    navServices: "Services",
    navAbout: "About Erik",
    location: "Santa Cruz, Bolivia",
    role: "Photography · Film · Visual direction",
    intro: "Visual content for brands, people and projects in motion.",
    viewWork: "View work",
    contact: "Contact",
    selectedWork: "Selected work",
    workNote: "This version is ready for the final selection of photographs and films.",
    all: "All",
    automotive: "Automotive",
    portrait: "Portrait",
    product: "Product",
    events: "Events",
    projectPending: "Project to be selected",
    videoPending: "Film to be selected",
    services: "Services",
    photoTitle: "Photography",
    photoText: "Automotive, portrait, product, lifestyle and event coverage.",
    videoTitle: "Film",
    videoText: "Commercial pieces, vertical reels and social media content.",
    brandTitle: "Brand content",
    brandText: "Concept, visual production and deliverables tailored to each campaign.",
    aboutEyebrow: "About Erik",
    aboutTitle: "Photographer and filmmaker based in Santa Cruz.",
    aboutText: "Erik creates visual content for brands, people and social media. His work combines technical precision, movement and a contemporary commercial perspective.",
    availability: "Available for projects in Santa Cruz and remote collaborations from Bolivia.",
    contactEyebrow: "Direct contact",
    contactTitle: "Let’s talk about your next project.",
    contactNote: "Erik’s professional WhatsApp and email will be added soon."
  }
};

let language = "es";
const languageToggle = document.querySelector(".language-toggle");

languageToggle.addEventListener("click", () => {
  language = language === "es" ? "en" : "es";
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = translations[language][key];
  });
  languageToggle.innerHTML =
    language === "es"
      ? '<span class="language-active">ES</span><span>/</span><span>EN</span>'
      : '<span>ES</span><span>/</span><span class="language-active">EN</span>';
  languageToggle.setAttribute(
    "aria-label",
    language === "es" ? "Cambiar a inglés" : "Switch to Spanish"
  );
});

const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project");

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    const selected = button.dataset.filter;

    projects.forEach((project) => {
      project.hidden = selected !== "all" && project.dataset.category !== selected;
    });
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
