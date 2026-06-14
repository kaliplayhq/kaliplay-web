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
  stats: Array<{ value: string; label: string }>;
  marquee: string[];
  mission: { title: string; body: string };
  pillars: Array<{ title: string; body: string }>;
  flow: Array<{ step: string; title: string; body: string }>;
  cta: { title: string; body: string; email: string };
  footer: string;
  pages: Record<PageSlug, { eyebrow: string; title: string; body: string; bullets: string[] }>;
};

const en: HomeCopy = {
  meta: {
    title: "Kaliplay | Digital assets marketplace",
    description: "Kaliplay sources, validates, and distributes documented digital assets with clear rights, regions, and operational traceability."
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
    eyebrow: "Digital assets marketplace",
    title: "Verified digital assets.",
    body: "Kaliplay buys, validates, and distributes traceable digital inventory: games, content, licenses, perks, and other documented digital goods.",
    primary: "Go to store",
    secondary: "How it works",
    store: "Store opening soon"
  },
  stats: [
    { value: "100%", label: "Documented supply target" },
    { value: "0", label: "Accounts sold" },
    { value: "24/7", label: "Price and risk monitoring roadmap" }
  ],
  marquee: ["Digital goods", "Game keys", "Licenses", "DLC", "Perks", "Content drops", "Marketplace supply", "Regional clarity"],
  mission: {
    title: "Our mission is to make digital asset commerce cleaner, faster, and safer.",
    body: "Kaliplay exists to turn messy digital supply into a controlled marketplace operation: verified sources, transparent regions, auditable inventory, and customer-ready delivery."
  },
  pillars: [
    { title: "Source", body: "Find digital assets from documented suppliers, publishers, platforms, and approved commercial programs." },
    { title: "Validate", body: "Check rights, invoices, regions, platform rules, delivery constraints, replacement policy, and resale risk." },
    { title: "Distribute", body: "Publish only inventory that is traceable, priced, monitored, and ready for support." }
  ],
  flow: [
    { step: "01", title: "Acquire", body: "Qualify suppliers and asset categories before capital is committed." },
    { step: "02", title: "Control", body: "Score margin, demand, fraud exposure, region confidence, and operational risk." },
    { step: "03", title: "Deliver", body: "Prepare a buyer-facing store and marketplace channels with audit-ready inventory." }
  ],
  cta: {
    title: "Supplier, marketplace, or digital asset partner?",
    body: "Talk to Kaliplay about documented inventory, distribution, compliance, or account review.",
    email: "info@kaliplay.com"
  },
  footer: "Kaliplay does not sell accounts or use misleading regional activation practices.",
  pages: {
    store: {
      eyebrow: "Store",
      title: "Store under construction.",
      body: "The direct Kaliplay store is being built. Initial operations focus on supplier validation, marketplace approval, and documented inventory readiness.",
      bullets: ["Digital asset catalog coming soon.", "No public checkout is active yet.", "Marketplace and supplier discussions are open."]
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
    meta: { title: "Kaliplay | 数字资产市场", description: "Kaliplay 验证并分发有记录的数字资产，关注权利、区域和可追踪运营。" },
    nav: { home: "首页", store: "商店", about: "愿景", compliance: "合规", contact: "联系", terms: "条款", privacy: "隐私" },
    hero: { eyebrow: "数字资产市场", title: "已验证的数字资产。", body: "Kaliplay 采购、验证并分发可追踪数字库存：游戏、内容、许可证、权益和其他有记录的数字商品。", primary: "进入商店", secondary: "运作方式", store: "商店即将开放" }
  },
  hi: {
    meta: { title: "Kaliplay | डिजिटल एसेट मार्केटप्लेस", description: "Kaliplay दस्तावेज़ित डिजिटल एसेट्स को सत्यापित और वितरित करता है।" },
    nav: { home: "होम", store: "स्टोर", about: "विजन", compliance: "अनुपालन", contact: "संपर्क", terms: "शर्तें", privacy: "गोपनीयता" },
    hero: { eyebrow: "डिजिटल एसेट मार्केटप्लेस", title: "सत्यापित डिजिटल एसेट्स।", body: "Kaliplay games, content, licenses, perks और अन्य दस्तावेज़ित डिजिटल goods को validate और distribute करता है।", primary: "स्टोर पर जाएं", secondary: "कैसे काम करता है", store: "स्टोर जल्द खुलेगा" }
  },
  es: {
    meta: { title: "Kaliplay | Marketplace de activos digitales", description: "Kaliplay valida y distribuye activos digitales documentados con derechos, regiones y operación trazable." },
    nav: { home: "Inicio", store: "Store", about: "Visión", compliance: "Compliance", contact: "Contacto", terms: "Términos", privacy: "Privacidad" },
    hero: { eyebrow: "Marketplace de activos digitales", title: "Activos digitales verificados.", body: "Kaliplay compra, valida y distribuye inventario digital trazable: juegos, contenido, licencias, perks y otros bienes digitales documentados.", primary: "Ir al store", secondary: "Cómo funciona", store: "Store en construcción" },
    mission: { title: "Nuestra misión es hacer el comercio de activos digitales más limpio, rápido y seguro.", body: "Kaliplay convierte supply digital desordenado en una operación controlada: fuentes verificadas, regiones transparentes, inventario auditable y entrega lista para clientes." },
    cta: { title: "¿Proveedor, marketplace o partner de activos digitales?", body: "Hablemos sobre inventario documentado, distribución, compliance o account review.", email: "info@kaliplay.com" },
    footer: "Kaliplay no vende cuentas ni usa prácticas engañosas de activación regional."
  },
  ar: {
    meta: { title: "Kaliplay | سوق أصول رقمية", description: "Kaliplay يتحقق ويوزع أصولا رقمية موثقة مع حقوق ومناطق واضحة." },
    nav: { home: "الرئيسية", store: "المتجر", about: "الرؤية", compliance: "الامتثال", contact: "اتصال", terms: "الشروط", privacy: "الخصوصية" },
    hero: { eyebrow: "سوق أصول رقمية", title: "أصول رقمية موثقة.", body: "Kaliplay يشتري ويتحقق ويوزع مخزونا رقميا قابلا للتتبع: ألعاب ومحتوى وتراخيص ومزايا وسلع رقمية موثقة.", primary: "اذهب إلى المتجر", secondary: "كيف يعمل", store: "المتجر قريبا" }
  },
  fr: {
    meta: { title: "Kaliplay | Marketplace d'actifs numériques", description: "Kaliplay valide et distribue des actifs numériques documentés avec droits, régions et traçabilité." },
    nav: { home: "Accueil", store: "Store", about: "Vision", compliance: "Conformité", contact: "Contact", terms: "Conditions", privacy: "Confidentialité" },
    hero: { eyebrow: "Marketplace d'actifs numériques", title: "Actifs numériques vérifiés.", body: "Kaliplay achète, valide et distribue un inventaire numérique traçable : jeux, contenu, licences, perks et biens numériques documentés.", primary: "Aller au store", secondary: "Fonctionnement", store: "Store bientôt disponible" }
  },
  bn: {
    meta: { title: "Kaliplay | ডিজিটাল অ্যাসেট মার্কেটপ্লেস", description: "Kaliplay নথিভুক্ত ডিজিটাল অ্যাসেট যাচাই ও বিতরণ করে।" },
    nav: { home: "হোম", store: "স্টোর", about: "ভিশন", compliance: "কমপ্লায়েন্স", contact: "যোগাযোগ", terms: "শর্তাবলি", privacy: "গোপনীয়তা" },
    hero: { eyebrow: "ডিজিটাল অ্যাসেট মার্কেটপ্লেস", title: "যাচাইকৃত ডিজিটাল অ্যাসেট।", body: "Kaliplay games, content, licenses, perks এবং অন্যান্য নথিভুক্ত digital goods যাচাই ও বিতরণ করে।", primary: "স্টোরে যান", secondary: "কীভাবে কাজ করে", store: "স্টোর শীঘ্রই" }
  },
  pt: {
    meta: { title: "Kaliplay | Marketplace de ativos digitais", description: "Kaliplay valida e distribui ativos digitais documentados com direitos, regiões e rastreabilidade." },
    nav: { home: "Início", store: "Store", about: "Visão", compliance: "Compliance", contact: "Contato", terms: "Termos", privacy: "Privacidade" },
    hero: { eyebrow: "Marketplace de ativos digitais", title: "Ativos digitais verificados.", body: "Kaliplay compra, valida e distribui inventário digital rastreável: jogos, conteúdo, licenças, perks e outros bens digitais documentados.", primary: "Ir ao store", secondary: "Como funciona", store: "Store em construção" }
  },
  ru: {
    meta: { title: "Kaliplay | Маркетплейс цифровых активов", description: "Kaliplay проверяет и распространяет документированные цифровые активы с правами, регионами и трассируемостью." },
    nav: { home: "Главная", store: "Store", about: "Видение", compliance: "Комплаенс", contact: "Контакты", terms: "Условия", privacy: "Приватность" },
    hero: { eyebrow: "Маркетплейс цифровых активов", title: "Проверенные цифровые активы.", body: "Kaliplay покупает, проверяет и распространяет цифровой инвентарь: игры, контент, лицензии, perks и другие документированные goods.", primary: "В store", secondary: "Как работает", store: "Store скоро" }
  },
  id: {
    meta: { title: "Kaliplay | Marketplace aset digital", description: "Kaliplay memvalidasi dan mendistribusikan aset digital terdokumentasi dengan hak, wilayah, dan jejak operasi jelas." },
    nav: { home: "Beranda", store: "Store", about: "Visi", compliance: "Kepatuhan", contact: "Kontak", terms: "Syarat", privacy: "Privasi" },
    hero: { eyebrow: "Marketplace aset digital", title: "Aset digital terverifikasi.", body: "Kaliplay membeli, memvalidasi, dan mendistribusikan inventaris digital: game, konten, lisensi, perks, dan digital goods terdokumentasi.", primary: "Ke store", secondary: "Cara kerja", store: "Store segera hadir" }
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
    stats: partial.stats || en.stats,
    marquee: partial.marquee || en.marquee,
    mission: { ...en.mission, ...partial.mission },
    pillars: partial.pillars || en.pillars,
    flow: partial.flow || en.flow,
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
