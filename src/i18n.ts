export const locales = ["en", "zh", "hi", "es", "ar", "fr", "bn", "pt", "ru", "id"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const languages: Record<Locale, string> = {
  en: "English",
  zh: "中文",
  hi: "हिन्दी",
  es: "Español",
  ar: "العربية",
  fr: "Français",
  bn: "বাংলা",
  pt: "Português",
  ru: "Русский",
  id: "Indonesia"
};

export const pageSlugs = ["store", "about", "compliance", "contact", "terms", "privacy"] as const;

export type PageSlug = (typeof pageSlugs)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function dir(locale: Locale) {
  return locale === "ar" ? "rtl" : "ltr";
}

export type HomeCopy = {
  meta: { title: string; description: string };
  nav: Record<PageSlug, string> & { home: string };
  hero: { eyebrow: string; title: string; body: string; primary: string; secondary: string; store: string };
  mission: { title: string; body: string };
  cta: { title: string; body: string; email: string };
  footer: string;
  pages: Record<PageSlug, { eyebrow: string; title: string; body: string; bullets: string[] }>;
};

const en: HomeCopy = {
  meta: {
    title: "Kaliplay | Traceable digital inventory",
    description: "Kaliplay procures, validates, and distributes documented digital inventory with clear rights, regions, platform rules, and operational traceability."
  },
  nav: {
    home: "Home",
    store: "Store",
    about: "Vision",
    compliance: "Compliance",
    contact: "Contact",
    terms: "Terms",
    privacy: "Privacy"
  },
  hero: {
    eyebrow: "Traceable digital inventory",
    title: "Verified digital assets.",
    body: "We procure, validate and distribute traceable digital inventory",
    primary: "Talk to Kaliplay",
    secondary: "Store",
    store: ""
  },
  mission: {
    title: "Make digital asset commerce cleaner, faster, and safer.",
    body: "Kaliplay turns fragmented digital supply into a controlled distribution operation: verified sources, transparent regions, auditable inventory, and customer-ready delivery."
  },
  cta: {
    title: "Bring documented inventory to market.",
    body: "For suppliers, publishers, marketplaces, and commercial partners, Kaliplay reviews origin, rights, regions, pricing, and delivery readiness before inventory reaches buyers.",
    email: "info@kaliplay.com"
  },
  footer: "Documented digital inventory for marketplace distribution.",
  pages: {
    store: {
      eyebrow: "Store",
      title: "Private store access.",
      body: "Kaliplay store access is reviewed before any buyer, supplier, or partner can enter.",
      bullets: ["No public checkout is active.", "Access starts with contact review.", "Inventory remains gated until rights, regions, and delivery are validated."]
    },
    about: {
      eyebrow: "Vision",
      title: "A cleaner operating layer for digital asset commerce.",
      body: "Kaliplay is building a digital asset distribution business from Argentina with a conservative, compliance-first launch plan.",
      bullets: ["Broader than games: documented digital goods.", "Traceable supply before scale.", "Storefront, admin system, and pricing intelligence roadmap."]
    },
    compliance: {
      eyebrow: "Compliance",
      title: "No unclear rights. No accounts. No undocumented supply.",
      body: "Every asset category must have a documented source, clear resale permission or commercial path, region/platform clarity, and supportable delivery.",
      bullets: ["Invoice and origin checks.", "Region, platform, and rights validation.", "Manual review before buying or publishing."]
    },
    contact: {
      eyebrow: "Contact",
      title: "Talk to Kaliplay.",
      body: "For suppliers, marketplaces, digital asset partners, and compliance review, use the primary contact channel.",
      bullets: ["General: info@kaliplay.com", "Procurement: procurement@kaliplay.com", "Sales: sales@kaliplay.com"]
    },
    terms: {
      eyebrow: "Terms",
      title: "Terms draft.",
      body: "This website is an informational commercial presence. Direct consumer checkout is not active at this stage.",
      bullets: ["No public cart is available.", "Marketplace terms apply where listings are published.", "Final legal text will be reviewed before direct sales."]
    },
    privacy: {
      eyebrow: "Privacy",
      title: "Privacy draft.",
      body: "Kaliplay collects only the information needed to respond to business inquiries and operate supplier or marketplace conversations.",
      bullets: ["Business contact details may be stored.", "No payment data is collected on this website.", "Privacy text will be finalized before public checkout."]
    }
  }
};

const translations: Record<Exclude<Locale, "en">, Partial<HomeCopy>> = {
  zh: {
    meta: { title: "Kaliplay | 可追踪数字库存", description: "Kaliplay 采购、验证并分发有记录的数字库存，关注权利、区域、平台规则和可追踪运营。" },
    nav: { home: "首页", store: "商店", about: "愿景", compliance: "合规", contact: "联系", terms: "条款", privacy: "隐私" },
    hero: { eyebrow: "可追踪数字库存", title: "已验证的数字资产。", body: "We procure, validate and distribute traceable digital inventory", primary: "联系 Kaliplay", secondary: "Store", store: "" }
  },
  hi: {
    meta: { title: "Kaliplay | traceable digital inventory", description: "Kaliplay documented digital inventory को procure, validate और distribute करता है।" },
    nav: { home: "होम", store: "स्टोर", about: "विजन", compliance: "अनुपालन", contact: "संपर्क", terms: "शर्तें", privacy: "गोपनीयता" },
    hero: { eyebrow: "Traceable digital inventory", title: "सत्यापित डिजिटल एसेट्स।", body: "We procure, validate and distribute traceable digital inventory", primary: "Kaliplay से बात करें", secondary: "Store", store: "" }
  },
  es: {
    meta: { title: "Kaliplay | Inventario digital trazable", description: "Kaliplay procura, valida y distribuye inventario digital documentado con derechos, regiones, reglas de plataforma y operación trazable." },
    nav: { home: "Inicio", store: "Store", about: "Visión", compliance: "Compliance", contact: "Contacto", terms: "Términos", privacy: "Privacidad" },
    hero: { eyebrow: "Inventario digital trazable", title: "Activos digitales verificados.", body: "Procuramos, validamos y distribuimos inventario digital trazable", primary: "Hablar con Kaliplay", secondary: "Store", store: "" },
    mission: { title: "Hacer el comercio de activos digitales más limpio, rápido y seguro.", body: "Kaliplay convierte supply digital fragmentado en una operación controlada: fuentes verificadas, regiones transparentes, inventario auditable y entrega lista para clientes." },
    cta: { title: "Llevemos inventario documentado al mercado.", body: "Para proveedores, publishers, marketplaces y partners comerciales, Kaliplay revisa origen, derechos, regiones, pricing y readiness operativo antes de llevar inventario a compradores.", email: "info@kaliplay.com" },
    footer: "Inventario digital documentado para distribución en marketplaces."
  },
  ar: {
    meta: { title: "Kaliplay | مخزون رقمي قابل للتتبع", description: "Kaliplay يشتري ويتحقق ويوزع مخزونا رقميا موثقا مع حقوق ومناطق وقواعد منصة واضحة." },
    nav: { home: "الرئيسية", store: "المتجر", about: "الرؤية", compliance: "الامتثال", contact: "اتصال", terms: "الشروط", privacy: "الخصوصية" },
    hero: { eyebrow: "مخزون رقمي قابل للتتبع", title: "أصول رقمية موثقة.", body: "We procure, validate and distribute traceable digital inventory", primary: "تواصل مع Kaliplay", secondary: "Store", store: "" }
  },
  fr: {
    meta: { title: "Kaliplay | Inventaire numérique traçable", description: "Kaliplay procure, valide et distribue un inventaire numérique documenté avec droits, régions, règles plateforme et traçabilité." },
    nav: { home: "Accueil", store: "Store", about: "Vision", compliance: "Conformité", contact: "Contact", terms: "Conditions", privacy: "Confidentialité" },
    hero: { eyebrow: "Inventaire numérique traçable", title: "Actifs numériques vérifiés.", body: "We procure, validate and distribute traceable digital inventory", primary: "Contacter Kaliplay", secondary: "Store", store: "" }
  },
  bn: {
    meta: { title: "Kaliplay | Traceable digital inventory", description: "Kaliplay documented digital inventory procure, validate এবং distribute করে।" },
    nav: { home: "হোম", store: "স্টোর", about: "ভিশন", compliance: "কমপ্লায়েন্স", contact: "যোগাযোগ", terms: "শর্তাবলি", privacy: "গোপনীয়তা" },
    hero: { eyebrow: "Traceable digital inventory", title: "যাচাইকৃত ডিজিটাল অ্যাসেট।", body: "We procure, validate and distribute traceable digital inventory", primary: "Kaliplay-এ কথা বলুন", secondary: "Store", store: "" }
  },
  pt: {
    meta: { title: "Kaliplay | Inventário digital rastreável", description: "Kaliplay procura, valida e distribui inventário digital documentado com direitos, regiões, regras de plataforma e rastreabilidade." },
    nav: { home: "Início", store: "Store", about: "Visão", compliance: "Compliance", contact: "Contato", terms: "Termos", privacy: "Privacidade" },
    hero: { eyebrow: "Inventário digital rastreável", title: "Ativos digitais verificados.", body: "We procure, validate and distribute traceable digital inventory", primary: "Falar com Kaliplay", secondary: "Store", store: "" }
  },
  ru: {
    meta: { title: "Kaliplay | Отслеживаемый цифровой инвентарь", description: "Kaliplay закупает, проверяет и распространяет документированный цифровой инвентарь с правами, регионами и правилами платформ." },
    nav: { home: "Главная", store: "Store", about: "Видение", compliance: "Комплаенс", contact: "Контакты", terms: "Условия", privacy: "Приватность" },
    hero: { eyebrow: "Отслеживаемый цифровой инвентарь", title: "Проверенные цифровые активы.", body: "We procure, validate and distribute traceable digital inventory", primary: "Связаться с Kaliplay", secondary: "Store", store: "" }
  },
  id: {
    meta: { title: "Kaliplay | Inventaris digital terlacak", description: "Kaliplay mengadakan, memvalidasi, dan mendistribusikan inventaris digital terdokumentasi dengan hak, wilayah, aturan platform, dan jejak operasi jelas." },
    nav: { home: "Beranda", store: "Store", about: "Visi", compliance: "Kepatuhan", contact: "Kontak", terms: "Syarat", privacy: "Privasi" },
    hero: { eyebrow: "Inventaris digital terlacak", title: "Aset digital terverifikasi.", body: "We procure, validate and distribute traceable digital inventory", primary: "Hubungi Kaliplay", secondary: "Store", store: "" }
  }
};

function merge(locale: Locale): HomeCopy {
  if (locale === "en") return en;
  const partial = translations[locale];
  return {
    ...en,
    ...partial,
    nav: { ...en.nav, ...partial.nav },
    hero: { ...en.hero, ...partial.hero },
    mission: { ...en.mission, ...partial.mission },
    cta: { ...en.cta, ...partial.cta },
    pages: {
      ...en.pages,
      ...partial.pages
    }
  };
}

export const copy: Record<Locale, HomeCopy> = Object.fromEntries(locales.map((locale) => [locale, merge(locale)])) as Record<Locale, HomeCopy>;

export function getCopy(locale: Locale) {
  return copy[locale];
}
