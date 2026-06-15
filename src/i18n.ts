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
  cta: { kicker: string; title: string; body: string; action: string; email: string };
  footer: string;
  pages: Record<PageSlug, { eyebrow: string; title: string; body: string; bullets: string[]; sections?: { title: string; body: string }[] }>;
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
    primary: "Contact Kaliplay",
    secondary: "Store",
    store: ""
  },
  mission: {
    title: "Make digital asset commerce cleaner, faster, and safer.",
    body: "Kaliplay turns fragmented digital supply into a controlled distribution operation: verified sources, transparent regions, auditable inventory, and customer-ready delivery."
  },
  cta: {
    kicker: "Contact",
    title: "Tell us what digital inventory you need to move.",
    body: "Suppliers, marketplaces, publishers, partners, and buyers can contact Kaliplay about inventory, access, partnerships, and compliance questions.",
    action: "Send request",
    email: "info@kaliplay.com"
  },
  footer: "Documented digital inventory for marketplace distribution.",
  pages: {
    store: {
      eyebrow: "Store",
      title: "Kaliplay Store.",
      body: "Sign in or request access.",
      bullets: []
    },
    about: {
      eyebrow: "Vision",
      title: "A trusted layer for digital asset distribution.",
      body: "Kaliplay is building a controlled marketplace operation for documented digital goods: clear source records, validated rights, transparent activation rules, and reliable delivery paths.",
      bullets: ["Broader than games: software, vouchers, top-ups, collectibles, courses, domains, and other documented digital assets.", "Traceable supply before scale.", "Storefront, admin system, and pricing intelligence roadmap."]
    },
    compliance: {
      eyebrow: "Compliance",
      title: "Clear rights. Documented supply. Controlled delivery.",
      body: "Every asset category must have a documented source, clear resale permission or commercial path, region/platform clarity, and supportable delivery.",
      bullets: ["Invoice and origin checks.", "Region, platform, and rights validation.", "Manual review before buying or publishing."]
    },
    contact: {
      eyebrow: "Contact",
      title: "Tell us what digital inventory you need to move.",
      body: "Suppliers, marketplaces, publishers, partners, and buyers can use this form for inventory, access, partnership, or compliance questions.",
      bullets: []
    },
    terms: {
      eyebrow: "Terms",
      title: "Terms and Conditions.",
      body: "These Terms govern access to Kaliplay websites, store areas, supplier conversations, and digital inventory workflows.",
      bullets: [],
      sections: [
        {
          title: "1. Scope",
          body: "Kaliplay provides technology, review processes, and commercial workflows for documented digital inventory. These Terms apply to visitors, registered users, suppliers, buyers, publishers, marketplaces, and partners who access Kaliplay services."
        },
        {
          title: "2. Accounts and access",
          body: "Store and partner areas may require an account. Kaliplay may approve, refuse, suspend, or terminate access where credentials are invalid, information is incomplete, activity is suspicious, or continued access may create operational, legal, payment, or platform risk."
        },
        {
          title: "3. Digital inventory",
          body: "Digital inventory may include game keys, downloadable content, software licenses, gift cards, vouchers, subscriptions, in-game currency, virtual items, digital collectibles, e-learning access, e-books, cloud upgrades, domains, and related digital goods. Availability, delivery method, restrictions, and support obligations may vary by item, supplier, platform, territory, and publisher rules."
        },
        {
          title: "4. Supplier obligations",
          body: "Suppliers must provide accurate information, lawful source documentation, resale or distribution authority, region and platform restrictions, tax and invoice data, delivery terms, support rules, and replacement policies where applicable. Suppliers must not submit stolen, fraudulent, revoked, account-based, misleading, embargoed, or unauthorized inventory."
        },
        {
          title: "5. Buyer and user obligations",
          body: "Users must provide accurate account and transaction information, keep credentials secure, comply with platform and publisher terms, and use digital goods only within applicable restrictions. Users must not abuse redemption systems, payment tools, support channels, chargeback mechanisms, or access credentials."
        },
        {
          title: "6. Validation and publication",
          body: "Kaliplay may review inventory before purchase, publication, distribution, or continued listing. Validation reduces risk but does not guarantee that a third-party platform, publisher, payment provider, or rights holder will accept or maintain a digital item."
        },
        {
          title: "7. Prices, payments, refunds, and adjustments",
          body: "Prices, fees, taxes, payment methods, settlement timing, refunds, replacements, chargebacks, reversals, penalties, and adjustments may be governed by separate commercial terms, marketplace rules, supplier agreements, payment provider rules, or listing-specific conditions."
        },
        {
          title: "8. Prohibited activity",
          body: "Users may not submit or trade unclear supply, unauthorized accounts, compromised credentials, malware, phishing material, counterfeit items, misleading regional activation offers, or items that violate law, platform terms, publisher rights, sanctions, payment rules, or consumer protection rules."
        },
        {
          title: "9. Intellectual property and platform content",
          body: "Kaliplay owns or licenses its brand, website, software, interface, content, and operational materials. Third-party brands, games, platforms, publishers, and trademarks remain the property of their respective owners. References to them identify compatible or relevant digital goods only."
        },
        {
          title: "10. Limitation of liability",
          body: "To the maximum extent permitted by law, Kaliplay is not liable for indirect, incidental, special, consequential, punitive, or lost-profit damages. Kaliplay is not responsible for third-party platform outages, publisher actions, payment provider decisions, user misuse, supplier misrepresentations, or restrictions outside Kaliplay control."
        },
        {
          title: "11. Changes",
          body: "Kaliplay may update these Terms to reflect product, legal, risk, security, payment, or operational changes. Continued use of Kaliplay services after an update means acceptance of the updated Terms."
        },
        {
          title: "12. Contact",
          body: "Questions about these Terms can be sent to info@kaliplay.com."
        }
      ]
    },
    privacy: {
      eyebrow: "Privacy",
      title: "Privacy Policy.",
      body: "This Policy explains how Kaliplay collects, uses, stores, and protects personal data connected with its websites, store access, forms, and business workflows.",
      bullets: [],
      sections: [
        {
          title: "1. Data we collect",
          body: "Kaliplay may collect identification and contact data, business role, company details, messages, supplier or inventory information, account credentials, access logs, device data, security signals, communication history, and information required to evaluate transactions, fraud risk, support, compliance, or platform rules."
        },
        {
          title: "2. Sources of data",
          body: "Data may be provided directly by users, generated through website and account activity, received from business partners, suppliers, marketplaces, service providers, payment or fraud-prevention providers, public records, or third-party platforms involved in digital inventory distribution."
        },
        {
          title: "3. Purposes of processing",
          body: "Kaliplay processes data to answer inquiries, manage accounts, evaluate access requests, validate suppliers and inventory, operate store and marketplace workflows, detect fraud, secure systems, provide support, comply with law, maintain records, improve services, and communicate about commercial opportunities."
        },
        {
          title: "4. Legal bases",
          body: "Where applicable, Kaliplay processes data based on contract performance, legitimate interests, legal obligations, consent, fraud prevention, security, and steps requested before entering into a commercial relationship."
        },
        {
          title: "5. Sharing",
          body: "Kaliplay may share data with hosting providers, analytics tools, email and support providers, identity or fraud-prevention vendors, payment providers, professional advisors, authorities, suppliers, marketplaces, publishers, or partners when needed for operations, compliance, security, dispute handling, or requested services."
        },
        {
          title: "6. International processing",
          body: "Kaliplay may process data in different jurisdictions depending on infrastructure, vendor location, business partner location, and user location. Where required, Kaliplay uses contractual, organizational, and technical safeguards for cross-border transfers."
        },
        {
          title: "7. Retention",
          body: "Kaliplay keeps data only as long as reasonably needed for the purposes described in this Policy, including account operation, commercial records, support, security, fraud prevention, legal obligations, dispute resolution, and audit requirements."
        },
        {
          title: "8. Security",
          body: "Kaliplay uses technical and organizational measures designed to protect data against unauthorized access, loss, misuse, alteration, or disclosure. No online system can be guaranteed fully secure."
        },
        {
          title: "9. User rights",
          body: "Depending on applicable law, users may request access, correction, deletion, restriction, portability, objection, or withdrawal of consent. Kaliplay may need to verify identity before responding and may retain information where required by law, security, dispute, or legitimate business needs."
        },
        {
          title: "10. Cookies and analytics",
          body: "Kaliplay may use cookies, pixels, local storage, and analytics technologies to operate the website, remember preferences, measure performance, improve experience, and protect against abuse."
        },
        {
          title: "11. Minors",
          body: "Kaliplay services are intended for business and adult users. The website is not directed to children."
        },
        {
          title: "12. Contact",
          body: "Privacy questions or requests can be sent to info@kaliplay.com."
        }
      ]
    }
  }
};

const translations: Record<Exclude<Locale, "en">, Partial<HomeCopy>> = {
  zh: {
    meta: { title: "Kaliplay | 可追踪数字库存", description: "Kaliplay 采购、验证并分发有记录的数字库存，关注权利、区域、平台规则和可追踪运营。" },
    nav: { home: "首页", store: "商店", about: "愿景", compliance: "合规", contact: "联系", terms: "条款", privacy: "隐私" },
    hero: { eyebrow: "可追踪数字库存", title: "已验证的数字资产。", body: "We procure, validate and distribute traceable digital inventory", primary: "Contact Kaliplay", secondary: "Store", store: "" }
  },
  hi: {
    meta: { title: "Kaliplay | traceable digital inventory", description: "Kaliplay documented digital inventory को procure, validate और distribute करता है।" },
    nav: { home: "होम", store: "स्टोर", about: "विजन", compliance: "अनुपालन", contact: "संपर्क", terms: "शर्तें", privacy: "गोपनीयता" },
    hero: { eyebrow: "Traceable digital inventory", title: "सत्यापित डिजिटल एसेट्स।", body: "We procure, validate and distribute traceable digital inventory", primary: "Contact Kaliplay", secondary: "Store", store: "" }
  },
  es: {
    meta: { title: "Kaliplay | Inventario digital trazable", description: "Kaliplay procura, valida y distribuye inventario digital documentado con derechos, regiones, reglas de plataforma y operación trazable." },
    nav: { home: "Inicio", store: "Store", about: "Visión", compliance: "Compliance", contact: "Contacto", terms: "Términos", privacy: "Privacidad" },
    hero: { eyebrow: "Inventario digital trazable", title: "Activos digitales verificados.", body: "Procuramos, validamos y distribuimos inventario digital trazable", primary: "Contact Kaliplay", secondary: "Store", store: "" },
    mission: { title: "Hacer el comercio de activos digitales más limpio, rápido y seguro.", body: "Kaliplay convierte supply digital fragmentado en una operación controlada: fuentes verificadas, regiones transparentes, inventario auditable y entrega lista para clientes." },
    cta: { kicker: "Contacto", title: "Contanos qué inventario digital necesitás mover.", body: "Proveedores, marketplaces, publishers, partners y compradores pueden contactar a Kaliplay por inventario, acceso, alianzas y consultas de compliance.", action: "Enviar consulta", email: "info@kaliplay.com" },
    footer: "Inventario digital documentado para distribución en marketplaces."
  },
  ar: {
    meta: { title: "Kaliplay | مخزون رقمي قابل للتتبع", description: "Kaliplay يشتري ويتحقق ويوزع مخزونا رقميا موثقا مع حقوق ومناطق وقواعد منصة واضحة." },
    nav: { home: "الرئيسية", store: "المتجر", about: "الرؤية", compliance: "الامتثال", contact: "اتصال", terms: "الشروط", privacy: "الخصوصية" },
    hero: { eyebrow: "مخزون رقمي قابل للتتبع", title: "أصول رقمية موثقة.", body: "We procure, validate and distribute traceable digital inventory", primary: "Contact Kaliplay", secondary: "Store", store: "" }
  },
  fr: {
    meta: { title: "Kaliplay | Inventaire numérique traçable", description: "Kaliplay procure, valide et distribue un inventaire numérique documenté avec droits, régions, règles plateforme et traçabilité." },
    nav: { home: "Accueil", store: "Store", about: "Vision", compliance: "Conformité", contact: "Contact", terms: "Conditions", privacy: "Confidentialité" },
    hero: { eyebrow: "Inventaire numérique traçable", title: "Actifs numériques vérifiés.", body: "We procure, validate and distribute traceable digital inventory", primary: "Contact Kaliplay", secondary: "Store", store: "" }
  },
  bn: {
    meta: { title: "Kaliplay | Traceable digital inventory", description: "Kaliplay documented digital inventory procure, validate এবং distribute করে।" },
    nav: { home: "হোম", store: "স্টোর", about: "ভিশন", compliance: "কমপ্লায়েন্স", contact: "যোগাযোগ", terms: "শর্তাবলি", privacy: "গোপনীয়তা" },
    hero: { eyebrow: "Traceable digital inventory", title: "যাচাইকৃত ডিজিটাল অ্যাসেট।", body: "We procure, validate and distribute traceable digital inventory", primary: "Contact Kaliplay", secondary: "Store", store: "" }
  },
  pt: {
    meta: { title: "Kaliplay | Inventário digital rastreável", description: "Kaliplay procura, valida e distribui inventário digital documentado com direitos, regiões, regras de plataforma e rastreabilidade." },
    nav: { home: "Início", store: "Store", about: "Visão", compliance: "Compliance", contact: "Contato", terms: "Termos", privacy: "Privacidade" },
    hero: { eyebrow: "Inventário digital rastreável", title: "Ativos digitais verificados.", body: "We procure, validate and distribute traceable digital inventory", primary: "Contact Kaliplay", secondary: "Store", store: "" }
  },
  ru: {
    meta: { title: "Kaliplay | Отслеживаемый цифровой инвентарь", description: "Kaliplay закупает, проверяет и распространяет документированный цифровой инвентарь с правами, регионами и правилами платформ." },
    nav: { home: "Главная", store: "Store", about: "Видение", compliance: "Комплаенс", contact: "Контакты", terms: "Условия", privacy: "Приватность" },
    hero: { eyebrow: "Отслеживаемый цифровой инвентарь", title: "Проверенные цифровые активы.", body: "We procure, validate and distribute traceable digital inventory", primary: "Contact Kaliplay", secondary: "Store", store: "" }
  },
  id: {
    meta: { title: "Kaliplay | Inventaris digital terlacak", description: "Kaliplay mengadakan, memvalidasi, dan mendistribusikan inventaris digital terdokumentasi dengan hak, wilayah, aturan platform, dan jejak operasi jelas." },
    nav: { home: "Beranda", store: "Store", about: "Visi", compliance: "Kepatuhan", contact: "Kontak", terms: "Syarat", privacy: "Privasi" },
    hero: { eyebrow: "Inventaris digital terlacak", title: "Aset digital terverifikasi.", body: "We procure, validate and distribute traceable digital inventory", primary: "Contact Kaliplay", secondary: "Store", store: "" }
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
