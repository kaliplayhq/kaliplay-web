export const locales = ["en", "es", "pt", "fr", "zh", "ko", "ru"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const languages: Record<Locale, string> = {
  en: "English",
  es: "Español",
  pt: "Português",
  fr: "Français",
  zh: "中文",
  ko: "한국어",
  ru: "Русский"
};

// BCP-47 tags for <html lang> and hreflang SEO annotations.
export const hreflang: Record<Locale, string> = {
  en: "en",
  es: "es",
  pt: "pt-BR",
  fr: "fr",
  zh: "zh-Hans",
  ko: "ko",
  ru: "ru"
};

// Open Graph locale codes.
export const ogLocale: Record<Locale, string> = {
  en: "en_US",
  es: "es_ES",
  pt: "pt_BR",
  fr: "fr_FR",
  zh: "zh_CN",
  ko: "ko_KR",
  ru: "ru_RU"
};

export const pageSlugs = ["store", "about", "compliance", "contact", "terms", "privacy"] as const;

export type PageSlug = (typeof pageSlugs)[number];

export const assetCodes = ["KEY", "DLC", "OS", "GFT", "SUB", "COIN", "EVT", "ART", "EDU", "WEB"] as const;

export type AssetCode = (typeof assetCodes)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function dir(_locale: Locale) {
  return "ltr" as const;
}

type AssetCopy = { title: string; body: string; detail: string };
type WorkflowStep = { kicker: string; title: string; body: string };

type FormCopy = {
  title: string;
  party: string;
  email: string;
  emailPlaceholder: string;
  message: string;
  messagePlaceholder: string;
  send: string;
  sending: string;
  success: string;
  error: string;
  prepared: string;
  parties: string[];
};

type StoreGateCopy = {
  badge: string;
  heading: string;
  registered: string;
  email: string;
  emailPlaceholder: string;
  password: string;
  passwordPlaceholder: string;
  invalid: string;
  login: string;
  needAccess: string;
  needAccessBody: string;
  request: string;
  requestEyebrow: string;
  close: string;
};

type HomeSection = {
  missionLabel: string;
  verified: string;
  inventory: { kicker: string; heading: string; body: string };
  assets: Record<AssetCode, AssetCopy>;
  workflow: WorkflowStep[];
};

export type HomeCopy = {
  meta: { title: string; description: string };
  nav: Record<PageSlug, string> & { home: string };
  hero: { eyebrow: string; title: string; body: string; primary: string; secondary: string; store: string };
  mission: { lead: string; adjectives: string[]; body: string };
  footer: string;
  home: HomeSection;
  form: FormCopy;
  storeGate: StoreGateCopy;
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
    lead: "Make digital asset commerce",
    adjectives: ["Cleaner", "Faster", "Safer"],
    body: "Kaliplay turns fragmented digital supply into a controlled distribution operation: verified sources, transparent regions, auditable inventory, and customer-ready delivery."
  },
  footer: "Documented digital inventory for marketplace distribution.",
  home: {
    missionLabel: "Mission",
    verified: "Verified",
    inventory: {
      kicker: "Digital inventory",
      heading: "Inventory we can validate.",
      body: "Every category moves through the same control path before Kaliplay treats it as distributable inventory."
    },
    assets: {
      KEY: { title: "PC & Console Game Keys", body: "Steam, Epic, EA, Ubisoft", detail: "Documented game keys for PC and console platforms, with invoice-backed origin, region clarity, and replacement terms before listing." },
      DLC: { title: "DLC & Expansion Packs", body: "add-ons, passes, expansions", detail: "Downloadable content, season passes, and expansion packs reviewed against publisher, platform, region, and entitlement rules." },
      OS: { title: "Software & OS Licenses", body: "Windows, Office, tools", detail: "Windows, Office, antivirus, Adobe, Corel, and design tools only when supplier authorization, invoices, and resale rights are supportable." },
      GFT: { title: "Gift Cards & Vouchers", body: "PSN, Xbox, Nintendo, Razer", detail: "PlayStation, Xbox, Nintendo, Razer Gold, iTunes, and Google Play vouchers gated by source, region, fraud risk, and redemption policy." },
      SUB: { title: "Subscription Top-ups", body: "streaming, gaming, cloud", detail: "Netflix, Spotify, Discord Nitro, Amazon Prime, Game Pass, and cloud upgrades reviewed for source, territory, and activation constraints." },
      COIN: { title: "In-game Currency & Goods", body: "V-Bucks, Robux, points", detail: "V-Bucks, Robux, COD Points, FIFA Points, gems, skins, and emotes only where transfer, platform rules, and delivery are explicit." },
      EVT: { title: "eSports & Event Access", body: "tickets, meet-and-greets", detail: "Digital tickets, virtual meet-and-greets, and event access require verified issuer rights, clear date constraints, and supportable delivery." },
      ART: { title: "Digital Art & Collectibles", body: "verified, traceable editions", detail: "Limited digital art and NFT-linked collectibles only when provenance, rights, edition limits, and blockchain proof are traceable." },
      EDU: { title: "E-learning & E-books", body: "courses, books, audiobooks", detail: "Udemy, Coursera, MasterClass vouchers, DRM-free e-books, audiobooks, and license transfers reviewed before distribution." },
      WEB: { title: "Domains & VPN Keys", body: "domains, VPN, security", detail: "Transferable domain names plus VPN and security subscription keys, verified for ownership transfer, region, and redemption before listing." }
    },
    workflow: [
      { kicker: "Source intake", title: "Documented origin", body: "Supplier identity, invoice path, ownership proof, replacement policy, and category risk are recorded before capital is committed." },
      { kicker: "Validation gate", title: "Rights, region, and platform review", body: "Resale permission, activation territory, redemption constraints, fraud exposure, and support risk are checked before publishing." },
      { kicker: "Controlled release", title: "Distribution-ready lot", body: "Only traceable inventory with clear delivery, pricing, support notes, and audit trail can move toward buyers." }
    ]
  },
  form: {
    title: "Tell us about your business.",
    party: "Party type",
    email: "Email",
    emailPlaceholder: "name@company.com",
    message: "Message",
    messagePlaceholder: "Tell us what inventory, access, partnership, or review you need.",
    send: "Send",
    sending: "Sending…",
    success: "Request sent. We'll get back to you soon.",
    error: "Something went wrong. Please email info@kaliplay.com.",
    prepared: "Request prepared. Your email client should open to send it to info@kaliplay.com.",
    parties: ["Supplier", "Publisher", "Marketplace", "Digital asset partner", "Buyer", "Other"]
  },
  storeGate: {
    badge: "Store login",
    heading: "Sign in to Kaliplay Store.",
    registered: "Registered already?",
    email: "Email",
    emailPlaceholder: "name@company.com",
    password: "Password",
    passwordPlaceholder: "Password",
    invalid: "Invalid credentials.",
    login: "Login",
    needAccess: "Need access?",
    needAccessBody: "Request access as a supplier, marketplace, partner, or buyer.",
    request: "Request access",
    requestEyebrow: "Request access",
    close: "Close"
  },
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
      body: "Kaliplay operates a controlled marketplace for documented digital goods: clear source records, validated rights, transparent activation rules, and reliable delivery paths.",
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
      title: "Get in touch.",
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

type Translation = Partial<Omit<HomeCopy, "pages">> & { pages?: Partial<HomeCopy["pages"]> };

const es: Translation = {
  meta: {
    title: "Kaliplay | Inventario digital trazable",
    description: "Kaliplay procura, valida y distribuye inventario digital documentado con derechos, regiones, reglas de plataforma y operación trazable."
  },
  nav: { home: "Inicio", store: "Tienda", about: "Visión", compliance: "Cumplimiento", contact: "Contacto", terms: "Términos", privacy: "Privacidad" },
  hero: {
    eyebrow: "Inventario digital trazable",
    title: "Activos digitales verificados.",
    body: "Procuramos, validamos y distribuimos inventario digital trazable",
    primary: "Contactar a Kaliplay",
    secondary: "Tienda",
    store: ""
  },
  mission: {
    lead: "Hacer el comercio de activos digitales",
    adjectives: ["Más limpio", "Más rápido", "Más seguro"],
    body: "Kaliplay convierte un suministro digital fragmentado en una operación de distribución controlada: fuentes verificadas, regiones transparentes, inventario auditable y entrega lista para el cliente."
  },
  footer: "Inventario digital documentado para distribución en marketplaces.",
  home: {
    missionLabel: "Misión",
    verified: "Verificado",
    inventory: {
      kicker: "Inventario digital",
      heading: "Inventario que podemos validar.",
      body: "Cada categoría pasa por el mismo recorrido de control antes de que Kaliplay la trate como inventario distribuible."
    },
    assets: {
      KEY: { title: "Keys de juegos PC y consola", body: "Steam, Epic, EA, Ubisoft", detail: "Keys de juegos documentadas para PC y consola, con origen respaldado por factura, claridad de región y términos de reemplazo antes de publicar." },
      DLC: { title: "DLC y expansiones", body: "complementos, pases, expansiones", detail: "Contenido descargable, pases de temporada y expansiones revisados contra reglas de publisher, plataforma, región y derechos." },
      OS: { title: "Software y licencias de SO", body: "Windows, Office, herramientas", detail: "Windows, Office, antivirus, Adobe, Corel y herramientas de diseño solo cuando la autorización del proveedor, las facturas y los derechos de reventa son sostenibles." },
      GFT: { title: "Gift cards y vouchers", body: "PSN, Xbox, Nintendo, Razer", detail: "Vouchers de PlayStation, Xbox, Nintendo, Razer Gold, iTunes y Google Play, filtrados por origen, región, riesgo de fraude y política de canje." },
      SUB: { title: "Recargas de suscripción", body: "streaming, gaming, cloud", detail: "Netflix, Spotify, Discord Nitro, Amazon Prime, Game Pass y mejoras de cloud revisadas por origen, territorio y restricciones de activación." },
      COIN: { title: "Moneda y bienes in-game", body: "V-Bucks, Robux, puntos", detail: "V-Bucks, Robux, COD Points, FIFA Points, gemas, skins y emotes solo cuando la transferencia, las reglas de plataforma y la entrega son explícitas." },
      EVT: { title: "eSports y acceso a eventos", body: "entradas, meet-and-greets", detail: "Entradas digitales, meet-and-greets virtuales y acceso a eventos requieren derechos verificados del emisor, fechas claras y entrega sostenible." },
      ART: { title: "Arte digital y coleccionables", body: "ediciones verificadas y trazables", detail: "Arte digital limitado y coleccionables ligados a NFT solo cuando la procedencia, los derechos, el límite de edición y la prueba en blockchain son trazables." },
      EDU: { title: "E-learning y e-books", body: "cursos, libros, audiolibros", detail: "Vouchers de Udemy, Coursera, MasterClass, e-books sin DRM, audiolibros y transferencias de licencia revisados antes de distribuir." },
      WEB: { title: "Dominios y claves VPN", body: "dominios, VPN, seguridad", detail: "Nombres de dominio transferibles más claves de VPN y seguridad, verificados por transferencia de titularidad, región y canje antes de publicar." }
    },
    workflow: [
      { kicker: "Ingreso de origen", title: "Origen documentado", body: "Identidad del proveedor, vía de factura, prueba de titularidad, política de reemplazo y riesgo de categoría se registran antes de comprometer capital." },
      { kicker: "Filtro de validación", title: "Revisión de derechos, región y plataforma", body: "Permiso de reventa, territorio de activación, restricciones de canje, exposición a fraude y riesgo de soporte se verifican antes de publicar." },
      { kicker: "Liberación controlada", title: "Lote listo para distribución", body: "Solo el inventario trazable, con entrega, precio, notas de soporte y traza de auditoría claros, avanza hacia los compradores." }
    ]
  },
  form: {
    title: "Contanos sobre tu empresa.",
    party: "Tipo de parte",
    email: "Email",
    emailPlaceholder: "nombre@empresa.com",
    message: "Mensaje",
    messagePlaceholder: "Contanos qué inventario, acceso, alianza o revisión necesitás.",
    send: "Enviar",
    sending: "Enviando…",
    success: "Consulta enviada. Te respondemos pronto.",
    error: "Algo salió mal. Escribinos a info@kaliplay.com.",
    prepared: "Consulta preparada. Tu cliente de email debería abrirse para enviarla a info@kaliplay.com.",
    parties: ["Proveedor", "Publisher", "Marketplace", "Partner de activos digitales", "Comprador", "Otro"]
  },
  storeGate: {
    badge: "Acceso a la tienda",
    heading: "Iniciá sesión en Kaliplay Store.",
    registered: "¿Ya estás registrado?",
    email: "Email",
    emailPlaceholder: "nombre@empresa.com",
    password: "Contraseña",
    passwordPlaceholder: "Contraseña",
    invalid: "Credenciales inválidas.",
    login: "Ingresar",
    needAccess: "¿Necesitás acceso?",
    needAccessBody: "Solicitá acceso como proveedor, marketplace, partner o comprador.",
    request: "Solicitar acceso",
    requestEyebrow: "Solicitar acceso",
    close: "Cerrar"
  },
  pages: {
    store: { eyebrow: "Tienda", title: "Kaliplay Store.", body: "Iniciá sesión o solicitá acceso.", bullets: [] },
    about: {
      eyebrow: "Visión",
      title: "Una capa confiable para la distribución de activos digitales.",
      body: "Kaliplay opera un marketplace controlado para bienes digitales documentados: registros de origen claros, derechos validados, reglas de activación transparentes y vías de entrega confiables.",
      bullets: ["Más que juegos: software, vouchers, recargas, coleccionables, cursos, dominios y otros activos digitales documentados.", "Suministro trazable antes de escalar.", "Roadmap de tienda, sistema de administración e inteligencia de precios."]
    },
    compliance: {
      eyebrow: "Cumplimiento",
      title: "Derechos claros. Suministro documentado. Entrega controlada.",
      body: "Cada categoría de activo debe tener un origen documentado, permiso de reventa o vía comercial clara, claridad de región/plataforma y entrega sostenible.",
      bullets: ["Controles de factura y origen.", "Validación de región, plataforma y derechos.", "Revisión manual antes de comprar o publicar."]
    },
    contact: {
      eyebrow: "Contacto",
      title: "Hablemos.",
      body: "Proveedores, marketplaces, publishers, partners y compradores pueden usar este formulario para consultas de inventario, acceso, alianzas o cumplimiento.",
      bullets: []
    }
  }
};

const pt: Translation = {
  meta: {
    title: "Kaliplay | Inventário digital rastreável",
    description: "A Kaliplay adquire, valida e distribui inventário digital documentado com direitos, regiões, regras de plataforma e rastreabilidade operacional."
  },
  nav: { home: "Início", store: "Loja", about: "Visão", compliance: "Conformidade", contact: "Contato", terms: "Termos", privacy: "Privacidade" },
  hero: {
    eyebrow: "Inventário digital rastreável",
    title: "Ativos digitais verificados.",
    body: "Adquirimos, validamos e distribuímos inventário digital rastreável",
    primary: "Falar com a Kaliplay",
    secondary: "Loja",
    store: ""
  },
  mission: {
    lead: "Tornar o comércio de ativos digitais",
    adjectives: ["Mais limpo", "Mais rápido", "Mais seguro"],
    body: "A Kaliplay transforma um suprimento digital fragmentado em uma operação de distribuição controlada: fontes verificadas, regiões transparentes, inventário auditável e entrega pronta para o cliente."
  },
  footer: "Inventário digital documentado para distribuição em marketplaces.",
  home: {
    missionLabel: "Missão",
    verified: "Verificado",
    inventory: {
      kicker: "Inventário digital",
      heading: "Inventário que podemos validar.",
      body: "Cada categoria passa pelo mesmo fluxo de controle antes de a Kaliplay tratá-la como inventário distribuível."
    },
    assets: {
      KEY: { title: "Keys de jogos PC e console", body: "Steam, Epic, EA, Ubisoft", detail: "Keys de jogos documentadas para PC e console, com origem respaldada por nota fiscal, clareza de região e termos de reposição antes da publicação." },
      DLC: { title: "DLC e expansões", body: "complementos, passes, expansões", detail: "Conteúdo para download, passes de temporada e expansões revisados conforme regras de publisher, plataforma, região e direitos." },
      OS: { title: "Software e licenças de SO", body: "Windows, Office, ferramentas", detail: "Windows, Office, antivírus, Adobe, Corel e ferramentas de design apenas quando autorização do fornecedor, notas fiscais e direitos de revenda forem comprováveis." },
      GFT: { title: "Gift cards e vouchers", body: "PSN, Xbox, Nintendo, Razer", detail: "Vouchers de PlayStation, Xbox, Nintendo, Razer Gold, iTunes e Google Play, filtrados por origem, região, risco de fraude e política de resgate." },
      SUB: { title: "Recargas de assinatura", body: "streaming, gaming, cloud", detail: "Netflix, Spotify, Discord Nitro, Amazon Prime, Game Pass e upgrades de cloud revisados por origem, território e restrições de ativação." },
      COIN: { title: "Moeda e itens in-game", body: "V-Bucks, Robux, pontos", detail: "V-Bucks, Robux, COD Points, FIFA Points, gemas, skins e emotes apenas quando transferência, regras de plataforma e entrega forem explícitas." },
      EVT: { title: "eSports e acesso a eventos", body: "ingressos, meet-and-greets", detail: "Ingressos digitais, meet-and-greets virtuais e acesso a eventos exigem direitos verificados do emissor, datas claras e entrega comprovável." },
      ART: { title: "Arte digital e colecionáveis", body: "edições verificadas e rastreáveis", detail: "Arte digital limitada e colecionáveis ligados a NFT apenas quando proveniência, direitos, limite de edição e prova em blockchain forem rastreáveis." },
      EDU: { title: "E-learning e e-books", body: "cursos, livros, audiolivros", detail: "Vouchers de Udemy, Coursera, MasterClass, e-books sem DRM, audiolivros e transferências de licença revisados antes da distribuição." },
      WEB: { title: "Domínios e chaves VPN", body: "domínios, VPN, segurança", detail: "Nomes de domínio transferíveis mais chaves de VPN e segurança, verificados por titularidade, região e resgate antes da publicação." }
    },
    workflow: [
      { kicker: "Entrada de origem", title: "Origem documentada", body: "Identidade do fornecedor, caminho da nota fiscal, prova de titularidade, política de reposição e risco de categoria são registrados antes de comprometer capital." },
      { kicker: "Filtro de validação", title: "Revisão de direitos, região e plataforma", body: "Permissão de revenda, território de ativação, restrições de resgate, exposição a fraude e risco de suporte são checados antes de publicar." },
      { kicker: "Liberação controlada", title: "Lote pronto para distribuição", body: "Somente inventário rastreável, com entrega, preço, notas de suporte e trilha de auditoria claros, avança para os compradores." }
    ]
  },
  form: {
    title: "Conte sobre sua empresa.",
    party: "Tipo de parte",
    email: "Email",
    emailPlaceholder: "nome@empresa.com",
    message: "Mensagem",
    messagePlaceholder: "Conte qual inventário, acesso, parceria ou revisão você precisa.",
    send: "Enviar",
    sending: "Enviando…",
    success: "Pedido enviado. Em breve respondemos.",
    error: "Algo deu errado. Escreva para info@kaliplay.com.",
    prepared: "Pedido preparado. Seu cliente de email deve abrir para enviá-lo a info@kaliplay.com.",
    parties: ["Fornecedor", "Publisher", "Marketplace", "Parceiro de ativos digitais", "Comprador", "Outro"]
  },
  storeGate: {
    badge: "Acesso à loja",
    heading: "Entre na Kaliplay Store.",
    registered: "Já tem cadastro?",
    email: "Email",
    emailPlaceholder: "nome@empresa.com",
    password: "Senha",
    passwordPlaceholder: "Senha",
    invalid: "Credenciais inválidas.",
    login: "Entrar",
    needAccess: "Precisa de acesso?",
    needAccessBody: "Solicite acesso como fornecedor, marketplace, parceiro ou comprador.",
    request: "Solicitar acesso",
    requestEyebrow: "Solicitar acesso",
    close: "Fechar"
  },
  pages: {
    store: { eyebrow: "Loja", title: "Kaliplay Store.", body: "Entre ou solicite acesso.", bullets: [] },
    about: {
      eyebrow: "Visão",
      title: "Uma camada confiável para a distribuição de ativos digitais.",
      body: "A Kaliplay opera um marketplace controlado para bens digitais documentados: registros de origem claros, direitos validados, regras de ativação transparentes e caminhos de entrega confiáveis.",
      bullets: ["Mais do que jogos: software, vouchers, recargas, colecionáveis, cursos, domínios e outros ativos digitais documentados.", "Suprimento rastreável antes de escalar.", "Roadmap de loja, sistema de administração e inteligência de preços."]
    },
    compliance: {
      eyebrow: "Conformidade",
      title: "Direitos claros. Suprimento documentado. Entrega controlada.",
      body: "Cada categoria de ativo deve ter origem documentada, permissão de revenda ou caminho comercial claro, clareza de região/plataforma e entrega comprovável.",
      bullets: ["Verificações de nota fiscal e origem.", "Validação de região, plataforma e direitos.", "Revisão manual antes de comprar ou publicar."]
    },
    contact: {
      eyebrow: "Contato",
      title: "Fale conosco.",
      body: "Fornecedores, marketplaces, publishers, parceiros e compradores podem usar este formulário para questões de inventário, acesso, parceria ou conformidade.",
      bullets: []
    }
  }
};

const fr: Translation = {
  meta: {
    title: "Kaliplay | Inventaire numérique traçable",
    description: "Kaliplay sélectionne, valide et distribue un inventaire numérique documenté avec droits, régions, règles de plateforme et traçabilité opérationnelle."
  },
  nav: { home: "Accueil", store: "Boutique", about: "Vision", compliance: "Conformité", contact: "Contact", terms: "Conditions", privacy: "Confidentialité" },
  hero: {
    eyebrow: "Inventaire numérique traçable",
    title: "Actifs numériques vérifiés.",
    body: "Nous sélectionnons, validons et distribuons un inventaire numérique traçable",
    primary: "Contacter Kaliplay",
    secondary: "Boutique",
    store: ""
  },
  mission: {
    lead: "Rendre le commerce d’actifs numériques",
    adjectives: ["Plus clair", "Plus rapide", "Plus sûr"],
    body: "Kaliplay transforme une offre numérique fragmentée en une opération de distribution contrôlée : sources vérifiées, régions transparentes, inventaire auditable et livraison prête pour le client."
  },
  footer: "Inventaire numérique documenté pour la distribution sur les marketplaces.",
  home: {
    missionLabel: "Mission",
    verified: "Vérifié",
    inventory: {
      kicker: "Inventaire numérique",
      heading: "Un inventaire que nous pouvons valider.",
      body: "Chaque catégorie suit le même parcours de contrôle avant que Kaliplay ne la traite comme un inventaire distribuable."
    },
    assets: {
      KEY: { title: "Clés de jeux PC et console", body: "Steam, Epic, EA, Ubisoft", detail: "Clés de jeux documentées pour PC et console, avec origine appuyée par facture, clarté de région et conditions de remplacement avant la mise en vente." },
      DLC: { title: "DLC et extensions", body: "add-ons, passes, extensions", detail: "Contenus téléchargeables, passes saisonniers et extensions vérifiés selon les règles d’éditeur, de plateforme, de région et de droits." },
      OS: { title: "Logiciels et licences d’OS", body: "Windows, Office, outils", detail: "Windows, Office, antivirus, Adobe, Corel et outils de design uniquement lorsque l’autorisation du fournisseur, les factures et les droits de revente sont justifiables." },
      GFT: { title: "Cartes-cadeaux et bons", body: "PSN, Xbox, Nintendo, Razer", detail: "Bons PlayStation, Xbox, Nintendo, Razer Gold, iTunes et Google Play filtrés par source, région, risque de fraude et politique d’utilisation." },
      SUB: { title: "Recharges d’abonnement", body: "streaming, gaming, cloud", detail: "Netflix, Spotify, Discord Nitro, Amazon Prime, Game Pass et upgrades cloud vérifiés selon la source, le territoire et les contraintes d’activation." },
      COIN: { title: "Monnaie et biens in-game", body: "V-Bucks, Robux, points", detail: "V-Bucks, Robux, COD Points, FIFA Points, gemmes, skins et emotes uniquement lorsque le transfert, les règles de plateforme et la livraison sont explicites." },
      EVT: { title: "eSports et accès aux événements", body: "billets, meet-and-greets", detail: "Billets numériques, meet-and-greets virtuels et accès aux événements exigent des droits d’émetteur vérifiés, des dates claires et une livraison justifiable." },
      ART: { title: "Art numérique et objets de collection", body: "éditions vérifiées et traçables", detail: "Art numérique en édition limitée et objets de collection liés aux NFT uniquement lorsque la provenance, les droits, les limites d’édition et la preuve blockchain sont traçables." },
      EDU: { title: "E-learning et e-books", body: "cours, livres, audiolivres", detail: "Bons Udemy, Coursera, MasterClass, e-books sans DRM, audiolivres et transferts de licence vérifiés avant la distribution." },
      WEB: { title: "Domaines et clés VPN", body: "domaines, VPN, sécurité", detail: "Noms de domaine transférables ainsi que clés VPN et de sécurité, vérifiés pour le transfert de propriété, la région et l’utilisation avant la mise en vente." }
    },
    workflow: [
      { kicker: "Réception des sources", title: "Origine documentée", body: "Identité du fournisseur, traçabilité de facture, preuve de propriété, politique de remplacement et risque de catégorie sont enregistrés avant d’engager des capitaux." },
      { kicker: "Filtre de validation", title: "Revue des droits, de la région et de la plateforme", body: "Autorisation de revente, territoire d’activation, contraintes d’utilisation, exposition à la fraude et risque de support sont vérifiés avant la publication." },
      { kicker: "Mise en circulation contrôlée", title: "Lot prêt pour la distribution", body: "Seul un inventaire traçable, avec livraison, prix, notes de support et piste d’audit clairs, peut avancer vers les acheteurs." }
    ]
  },
  form: {
    title: "Parlez-nous de votre entreprise.",
    party: "Type de partie",
    email: "E-mail",
    emailPlaceholder: "nom@entreprise.com",
    message: "Message",
    messagePlaceholder: "Dites-nous de quel inventaire, accès, partenariat ou revue vous avez besoin.",
    send: "Envoyer",
    sending: "Envoi…",
    success: "Demande envoyée. Nous reviendrons vers vous bientôt.",
    error: "Une erreur s’est produite. Écrivez-nous à info@kaliplay.com.",
    prepared: "Demande préparée. Votre client e-mail devrait s’ouvrir pour l’envoyer à info@kaliplay.com.",
    parties: ["Fournisseur", "Éditeur", "Marketplace", "Partenaire d’actifs numériques", "Acheteur", "Autre"]
  },
  storeGate: {
    badge: "Accès à la boutique",
    heading: "Connectez-vous à Kaliplay Store.",
    registered: "Déjà inscrit ?",
    email: "E-mail",
    emailPlaceholder: "nom@entreprise.com",
    password: "Mot de passe",
    passwordPlaceholder: "Mot de passe",
    invalid: "Identifiants invalides.",
    login: "Connexion",
    needAccess: "Besoin d’un accès ?",
    needAccessBody: "Demandez un accès en tant que fournisseur, marketplace, partenaire ou acheteur.",
    request: "Demander un accès",
    requestEyebrow: "Demander un accès",
    close: "Fermer"
  },
  pages: {
    store: { eyebrow: "Boutique", title: "Kaliplay Store.", body: "Connectez-vous ou demandez un accès.", bullets: [] },
    about: {
      eyebrow: "Vision",
      title: "Une couche de confiance pour la distribution d’actifs numériques.",
      body: "Kaliplay exploite une marketplace contrôlée pour des biens numériques documentés : registres d’origine clairs, droits validés, règles d’activation transparentes et voies de livraison fiables.",
      bullets: ["Au-delà des jeux : logiciels, bons, recharges, objets de collection, cours, domaines et autres actifs numériques documentés.", "Une offre traçable avant de passer à l’échelle.", "Feuille de route : boutique, système d’administration et intelligence tarifaire."]
    },
    compliance: {
      eyebrow: "Conformité",
      title: "Des droits clairs. Une offre documentée. Une livraison contrôlée.",
      body: "Chaque catégorie d’actif doit disposer d’une origine documentée, d’une autorisation de revente ou d’une voie commerciale claire, d’une clarté de région/plateforme et d’une livraison justifiable.",
      bullets: ["Vérifications de facture et d’origine.", "Validation de région, de plateforme et de droits.", "Revue manuelle avant l’achat ou la publication."]
    },
    contact: {
      eyebrow: "Contact",
      title: "Contactez-nous.",
      body: "Fournisseurs, marketplaces, éditeurs, partenaires et acheteurs peuvent utiliser ce formulaire pour des questions d’inventaire, d’accès, de partenariat ou de conformité.",
      bullets: []
    }
  }
};

const zh: Translation = {
  meta: {
    title: "Kaliplay | 可追溯的数字库存",
    description: "Kaliplay 采购、验证并分发有据可查的数字库存，涵盖权利、地区、平台规则与可追溯的运营。"
  },
  nav: { home: "首页", store: "商店", about: "愿景", compliance: "合规", contact: "联系", terms: "条款", privacy: "隐私" },
  hero: {
    eyebrow: "可追溯的数字库存",
    title: "经过验证的数字资产。",
    body: "我们采购、验证并分发可追溯的数字库存",
    primary: "联系 Kaliplay",
    secondary: "商店",
    store: ""
  },
  mission: {
    lead: "让数字资产交易",
    adjectives: ["更清晰", "更快速", "更安全"],
    body: "Kaliplay 将碎片化的数字供给转化为受控的分发运营：经过验证的来源、透明的地区、可审计的库存，以及可直接交付给客户的服务。"
  },
  footer: "面向交易市场分发的、有据可查的数字库存。",
  home: {
    missionLabel: "使命",
    verified: "已验证",
    inventory: {
      kicker: "数字库存",
      heading: "我们能够验证的库存。",
      body: "在 Kaliplay 将其视为可分发库存之前，每个类别都要经过同样的管控流程。"
    },
    assets: {
      KEY: { title: "PC 与主机游戏密钥", body: "Steam, Epic, EA, Ubisoft", detail: "面向 PC 与主机平台的有据可查的游戏密钥，上架前具备发票支持的来源、清晰的地区与更换条款。" },
      DLC: { title: "DLC 与扩展包", body: "附加内容、通行证、扩展", detail: "可下载内容、季票与扩展包，依据发行商、平台、地区与授权规则进行审核。" },
      OS: { title: "软件与操作系统许可证", body: "Windows、Office、工具", detail: "仅在供应商授权、发票与转售权可被证实时，提供 Windows、Office、杀毒软件、Adobe、Corel 与设计工具。" },
      GFT: { title: "礼品卡与代金券", body: "PSN, Xbox, Nintendo, Razer", detail: "PlayStation、Xbox、Nintendo、Razer Gold、iTunes 与 Google Play 代金券，按来源、地区、欺诈风险与兑换政策进行管控。" },
      SUB: { title: "订阅充值", body: "流媒体、游戏、云服务", detail: "Netflix、Spotify、Discord Nitro、Amazon Prime、Game Pass 与云服务升级，按来源、区域与激活限制审核。" },
      COIN: { title: "游戏内货币与物品", body: "V-Bucks、Robux、点数", detail: "V-Bucks、Robux、COD 点数、FIFA 点数、宝石、皮肤与表情，仅在转移、平台规则与交付明确时提供。" },
      EVT: { title: "电竞与活动门票", body: "门票、见面会", detail: "数字门票、线上见面会与活动门票需具备经过验证的发行方权利、明确的日期限制与可保障的交付。" },
      ART: { title: "数字艺术与收藏品", body: "经验证、可追溯的版本", detail: "限量数字艺术与关联 NFT 的收藏品，仅在出处、权利、版本数量与区块链证明可追溯时提供。" },
      EDU: { title: "在线学习与电子书", body: "课程、书籍、有声书", detail: "Udemy、Coursera、MasterClass 代金券，无 DRM 电子书、有声书与许可证转让，在分发前进行审核。" },
      WEB: { title: "域名与 VPN 密钥", body: "域名、VPN、安全", detail: "可转让的域名以及 VPN 与安全订阅密钥，上架前就所有权转移、地区与兑换进行验证。" }
    },
    workflow: [
      { kicker: "来源接入", title: "有据可查的来源", body: "在投入资金之前，记录供应商身份、发票路径、所有权证明、更换政策与类别风险。" },
      { kicker: "验证关卡", title: "权利、地区与平台审核", body: "在发布之前，检查转售许可、激活地区、兑换限制、欺诈风险与支持风险。" },
      { kicker: "受控发布", title: "可分发批次", body: "只有具备清晰交付、定价、支持说明与审计记录的可追溯库存，才能流向买家。" }
    ]
  },
  form: {
    title: "介绍一下您的业务。",
    party: "参与方类型",
    email: "电子邮箱",
    emailPlaceholder: "name@company.com",
    message: "留言",
    messagePlaceholder: "告诉我们您需要的库存、访问权限、合作或审核。",
    send: "发送",
    sending: "发送中…",
    success: "请求已发送。我们会尽快回复您。",
    error: "出现了问题。请发送邮件至 info@kaliplay.com。",
    prepared: "请求已准备好。您的邮件客户端应会打开，并发送至 info@kaliplay.com。",
    parties: ["供应商", "发行商", "交易市场", "数字资产合作伙伴", "买家", "其他"]
  },
  storeGate: {
    badge: "商店登录",
    heading: "登录 Kaliplay Store。",
    registered: "已经注册？",
    email: "电子邮箱",
    emailPlaceholder: "name@company.com",
    password: "密码",
    passwordPlaceholder: "密码",
    invalid: "凭据无效。",
    login: "登录",
    needAccess: "需要访问权限？",
    needAccessBody: "以供应商、交易市场、合作伙伴或买家身份申请访问权限。",
    request: "申请访问",
    requestEyebrow: "申请访问",
    close: "关闭"
  },
  pages: {
    store: { eyebrow: "商店", title: "Kaliplay Store.", body: "登录或申请访问权限。", bullets: [] },
    about: {
      eyebrow: "愿景",
      title: "数字资产分发的可信层。",
      body: "Kaliplay 运营一个面向有据可查数字商品的受控交易市场：清晰的来源记录、经过验证的权利、透明的激活规则与可靠的交付路径。",
      bullets: ["不止于游戏：软件、代金券、充值、收藏品、课程、域名及其他有据可查的数字资产。", "在规模化之前实现可追溯的供给。", "店面、管理系统与定价情报路线图。"]
    },
    compliance: {
      eyebrow: "合规",
      title: "清晰的权利。有据可查的供给。受控的交付。",
      body: "每个资产类别都必须具备有据可查的来源、清晰的转售许可或商业路径、明确的地区/平台以及可保障的交付。",
      bullets: ["发票与来源核查。", "地区、平台与权利验证。", "购买或发布前进行人工审核。"]
    },
    contact: {
      eyebrow: "联系",
      title: "与我们联系。",
      body: "供应商、交易市场、发行商、合作伙伴与买家均可使用此表单提交库存、访问、合作或合规相关的问题。",
      bullets: []
    }
  }
};

const ko: Translation = {
  meta: {
    title: "Kaliplay | 추적 가능한 디지털 인벤토리",
    description: "Kaliplay는 권리, 지역, 플랫폼 규칙과 추적 가능한 운영을 갖춘, 문서화된 디지털 인벤토리를 조달·검증·유통합니다."
  },
  nav: { home: "홈", store: "스토어", about: "비전", compliance: "컴플라이언스", contact: "문의", terms: "약관", privacy: "개인정보" },
  hero: {
    eyebrow: "추적 가능한 디지털 인벤토리",
    title: "검증된 디지털 자산.",
    body: "추적 가능한 디지털 인벤토리를 조달·검증·유통합니다",
    primary: "Kaliplay에 문의",
    secondary: "스토어",
    store: ""
  },
  mission: {
    lead: "디지털 자산 거래를",
    adjectives: ["더 깔끔하게", "더 빠르게", "더 안전하게"],
    body: "Kaliplay는 파편화된 디지털 공급을 통제된 유통 운영으로 전환합니다: 검증된 출처, 투명한 지역, 감사 가능한 인벤토리, 그리고 고객에게 바로 전달 가능한 제공."
  },
  footer: "마켓플레이스 유통을 위한 문서화된 디지털 인벤토리.",
  home: {
    missionLabel: "미션",
    verified: "검증됨",
    inventory: {
      kicker: "디지털 인벤토리",
      heading: "검증할 수 있는 인벤토리.",
      body: "Kaliplay가 유통 가능한 인벤토리로 취급하기 전에, 모든 카테고리는 동일한 관리 절차를 거칩니다."
    },
    assets: {
      KEY: { title: "PC·콘솔 게임 키", body: "Steam, Epic, EA, Ubisoft", detail: "PC 및 콘솔 플랫폼용 문서화된 게임 키로, 등록 전 인보이스 기반 출처, 지역 명확성, 교체 조건을 갖춥니다." },
      DLC: { title: "DLC 및 확장팩", body: "추가 콘텐츠, 패스, 확장", detail: "다운로드 콘텐츠, 시즌 패스, 확장팩을 퍼블리셔·플랫폼·지역·권리 규칙에 따라 검토합니다." },
      OS: { title: "소프트웨어 및 OS 라이선스", body: "Windows, Office, 도구", detail: "공급자 승인, 인보이스, 재판매 권리가 입증 가능한 경우에만 Windows, Office, 백신, Adobe, Corel, 디자인 도구를 제공합니다." },
      GFT: { title: "기프트 카드 및 바우처", body: "PSN, Xbox, Nintendo, Razer", detail: "PlayStation, Xbox, Nintendo, Razer Gold, iTunes, Google Play 바우처를 출처·지역·사기 위험·사용 정책으로 관리합니다." },
      SUB: { title: "구독 충전", body: "스트리밍, 게임, 클라우드", detail: "Netflix, Spotify, Discord Nitro, Amazon Prime, Game Pass 및 클라우드 업그레이드를 출처·지역·활성화 제약에 따라 검토합니다." },
      COIN: { title: "게임 내 재화 및 아이템", body: "V-Bucks, Robux, 포인트", detail: "V-Bucks, Robux, COD 포인트, FIFA 포인트, 젬, 스킨, 이모트는 이전, 플랫폼 규칙, 전달이 명확한 경우에만 제공합니다." },
      EVT: { title: "e스포츠 및 이벤트 입장", body: "티켓, 미트앤그리트", detail: "디지털 티켓, 가상 미트앤그리트, 이벤트 입장은 검증된 발행자 권리, 명확한 날짜 제약, 보장 가능한 전달이 필요합니다." },
      ART: { title: "디지털 아트 및 수집품", body: "검증·추적 가능한 에디션", detail: "한정 디지털 아트와 NFT 연계 수집품은 출처, 권리, 에디션 한도, 블록체인 증명이 추적 가능한 경우에만 제공합니다." },
      EDU: { title: "이러닝 및 전자책", body: "강의, 도서, 오디오북", detail: "Udemy, Coursera, MasterClass 바우처, DRM 없는 전자책, 오디오북, 라이선스 이전을 유통 전에 검토합니다." },
      WEB: { title: "도메인 및 VPN 키", body: "도메인, VPN, 보안", detail: "양도 가능한 도메인과 VPN·보안 구독 키를 등록 전에 소유권 이전, 지역, 사용 조건에 대해 검증합니다." }
    },
    workflow: [
      { kicker: "출처 접수", title: "문서화된 출처", body: "자본을 투입하기 전에 공급자 신원, 인보이스 경로, 소유권 증명, 교체 정책, 카테고리 위험을 기록합니다." },
      { kicker: "검증 관문", title: "권리·지역·플랫폼 검토", body: "게시 전에 재판매 허가, 활성화 지역, 사용 제약, 사기 노출, 지원 위험을 확인합니다." },
      { kicker: "통제된 출고", title: "유통 준비 완료 배치", body: "명확한 전달, 가격, 지원 메모, 감사 추적을 갖춘 추적 가능한 인벤토리만 구매자에게 이동할 수 있습니다." }
    ]
  },
  form: {
    title: "비즈니스에 대해 알려주세요.",
    party: "참여자 유형",
    email: "이메일",
    emailPlaceholder: "name@company.com",
    message: "메시지",
    messagePlaceholder: "필요한 인벤토리, 접근, 파트너십 또는 검토 내용을 알려주세요.",
    send: "보내기",
    sending: "전송 중…",
    success: "요청이 전송되었습니다. 곧 연락드리겠습니다.",
    error: "문제가 발생했습니다. info@kaliplay.com 으로 이메일을 보내주세요.",
    prepared: "요청이 준비되었습니다. 이메일 클라이언트가 열리면 info@kaliplay.com 으로 보내주세요.",
    parties: ["공급자", "퍼블리셔", "마켓플레이스", "디지털 자산 파트너", "구매자", "기타"]
  },
  storeGate: {
    badge: "스토어 로그인",
    heading: "Kaliplay Store에 로그인하세요.",
    registered: "이미 등록하셨나요?",
    email: "이메일",
    emailPlaceholder: "name@company.com",
    password: "비밀번호",
    passwordPlaceholder: "비밀번호",
    invalid: "잘못된 자격 증명입니다.",
    login: "로그인",
    needAccess: "접근 권한이 필요하신가요?",
    needAccessBody: "공급자, 마켓플레이스, 파트너 또는 구매자로 접근을 요청하세요.",
    request: "접근 요청",
    requestEyebrow: "접근 요청",
    close: "닫기"
  },
  pages: {
    store: { eyebrow: "스토어", title: "Kaliplay Store.", body: "로그인하거나 접근을 요청하세요.", bullets: [] },
    about: {
      eyebrow: "비전",
      title: "디지털 자산 유통을 위한 신뢰 계층.",
      body: "Kaliplay는 문서화된 디지털 상품을 위한 통제된 마켓플레이스를 운영합니다: 명확한 출처 기록, 검증된 권리, 투명한 활성화 규칙, 신뢰할 수 있는 전달 경로.",
      bullets: ["게임을 넘어서: 소프트웨어, 바우처, 충전, 수집품, 강의, 도메인 및 기타 문서화된 디지털 자산.", "확장 이전에 추적 가능한 공급.", "스토어, 관리 시스템, 가격 인텔리전스 로드맵."]
    },
    compliance: {
      eyebrow: "컴플라이언스",
      title: "명확한 권리. 문서화된 공급. 통제된 전달.",
      body: "모든 자산 카테고리는 문서화된 출처, 명확한 재판매 허가 또는 상업적 경로, 지역/플랫폼 명확성, 보장 가능한 전달을 갖춰야 합니다.",
      bullets: ["인보이스 및 출처 확인.", "지역·플랫폼·권리 검증.", "구매 또는 게시 전 수동 검토."]
    },
    contact: {
      eyebrow: "문의",
      title: "문의하기.",
      body: "공급자, 마켓플레이스, 퍼블리셔, 파트너, 구매자는 이 양식을 통해 인벤토리, 접근, 파트너십 또는 컴플라이언스 관련 문의를 할 수 있습니다.",
      bullets: []
    }
  }
};

const ru: Translation = {
  meta: {
    title: "Kaliplay | Прослеживаемый цифровой инвентарь",
    description: "Kaliplay закупает, проверяет и распространяет документированный цифровой инвентарь с правами, регионами, правилами платформ и прослеживаемой операционной деятельностью."
  },
  nav: { home: "Главная", store: "Магазин", about: "Видение", compliance: "Комплаенс", contact: "Контакты", terms: "Условия", privacy: "Конфиденциальность" },
  hero: {
    eyebrow: "Прослеживаемый цифровой инвентарь",
    title: "Проверенные цифровые активы.",
    body: "Мы закупаем, проверяем и распространяем прослеживаемый цифровой инвентарь",
    primary: "Связаться с Kaliplay",
    secondary: "Магазин",
    store: ""
  },
  mission: {
    lead: "Сделать торговлю цифровыми активами",
    adjectives: ["Чище", "Быстрее", "Безопаснее"],
    body: "Kaliplay превращает разрозненное цифровое предложение в управляемую операцию распространения: проверенные источники, прозрачные регионы, проверяемый инвентарь и готовую к выдаче клиенту поставку."
  },
  footer: "Документированный цифровой инвентарь для распространения на маркетплейсах.",
  home: {
    missionLabel: "Миссия",
    verified: "Проверено",
    inventory: {
      kicker: "Цифровой инвентарь",
      heading: "Инвентарь, который мы можем проверить.",
      body: "Каждая категория проходит один и тот же путь контроля, прежде чем Kaliplay рассматривает её как инвентарь, пригодный для распространения."
    },
    assets: {
      KEY: { title: "Ключи игр для ПК и консолей", body: "Steam, Epic, EA, Ubisoft", detail: "Документированные ключи игр для ПК и консолей: подтверждённое счётом происхождение, ясность по региону и условия замены до публикации." },
      DLC: { title: "DLC и дополнения", body: "аддоны, пропуски, дополнения", detail: "Загружаемый контент, сезонные пропуски и дополнения, проверяемые по правилам издателя, платформы, региона и прав." },
      OS: { title: "ПО и лицензии ОС", body: "Windows, Office, инструменты", detail: "Windows, Office, антивирусы, Adobe, Corel и дизайн-инструменты — только при подтверждаемых авторизации поставщика, счетах и правах перепродажи." },
      GFT: { title: "Подарочные карты и ваучеры", body: "PSN, Xbox, Nintendo, Razer", detail: "Ваучеры PlayStation, Xbox, Nintendo, Razer Gold, iTunes и Google Play с контролем источника, региона, риска мошенничества и политики погашения." },
      SUB: { title: "Пополнение подписок", body: "стриминг, гейминг, облако", detail: "Netflix, Spotify, Discord Nitro, Amazon Prime, Game Pass и облачные апгрейды, проверяемые по источнику, территории и ограничениям активации." },
      COIN: { title: "Внутриигровая валюта и товары", body: "V-Bucks, Robux, очки", detail: "V-Bucks, Robux, COD Points, FIFA Points, гемы, скины и эмоции — только когда передача, правила платформы и доставка явно определены." },
      EVT: { title: "Киберспорт и доступ на события", body: "билеты, встречи", detail: "Цифровые билеты, виртуальные встречи и доступ на события требуют проверенных прав организатора, чётких ограничений по датам и подтверждаемой выдачи." },
      ART: { title: "Цифровое искусство и коллекционные предметы", body: "проверенные, прослеживаемые издания", detail: "Лимитированное цифровое искусство и связанные с NFT коллекционные предметы — только когда происхождение, права, лимиты издания и блокчейн-подтверждение прослеживаемы." },
      EDU: { title: "Онлайн-обучение и электронные книги", body: "курсы, книги, аудиокниги", detail: "Ваучеры Udemy, Coursera, MasterClass, электронные книги без DRM, аудиокниги и передача лицензий, проверяемые до распространения." },
      WEB: { title: "Домены и ключи VPN", body: "домены, VPN, безопасность", detail: "Передаваемые доменные имена, а также ключи VPN и подписок безопасности, проверенные на передачу прав, регион и погашение до публикации." }
    },
    workflow: [
      { kicker: "Приём источников", title: "Документированное происхождение", body: "Личность поставщика, путь счёта, подтверждение прав собственности, политика замены и риск категории фиксируются до вложения капитала." },
      { kicker: "Контроль проверки", title: "Проверка прав, региона и платформы", body: "Разрешение на перепродажу, территория активации, ограничения погашения, риск мошенничества и риск поддержки проверяются до публикации." },
      { kicker: "Контролируемый выпуск", title: "Партия, готовая к распространению", body: "Только прослеживаемый инвентарь с чёткой доставкой, ценой, заметками поддержки и аудиторским следом может двигаться к покупателям." }
    ]
  },
  form: {
    title: "Расскажите о вашей компании.",
    party: "Тип стороны",
    email: "Эл. почта",
    emailPlaceholder: "name@company.com",
    message: "Сообщение",
    messagePlaceholder: "Расскажите, какой инвентарь, доступ, партнёрство или проверка вам нужны.",
    send: "Отправить",
    sending: "Отправка…",
    success: "Запрос отправлен. Мы скоро свяжемся с вами.",
    error: "Что-то пошло не так. Напишите нам на info@kaliplay.com.",
    prepared: "Запрос подготовлен. Ваш почтовый клиент должен открыться, чтобы отправить его на info@kaliplay.com.",
    parties: ["Поставщик", "Издатель", "Маркетплейс", "Партнёр по цифровым активам", "Покупатель", "Другое"]
  },
  storeGate: {
    badge: "Вход в магазин",
    heading: "Войдите в Kaliplay Store.",
    registered: "Уже зарегистрированы?",
    email: "Эл. почта",
    emailPlaceholder: "name@company.com",
    password: "Пароль",
    passwordPlaceholder: "Пароль",
    invalid: "Неверные учётные данные.",
    login: "Войти",
    needAccess: "Нужен доступ?",
    needAccessBody: "Запросите доступ как поставщик, маркетплейс, партнёр или покупатель.",
    request: "Запросить доступ",
    requestEyebrow: "Запросить доступ",
    close: "Закрыть"
  },
  pages: {
    store: { eyebrow: "Магазин", title: "Kaliplay Store.", body: "Войдите или запросите доступ.", bullets: [] },
    about: {
      eyebrow: "Видение",
      title: "Доверенный слой для распространения цифровых активов.",
      body: "Kaliplay управляет контролируемым маркетплейсом для документированных цифровых товаров: ясные записи об источнике, проверенные права, прозрачные правила активации и надёжные пути доставки.",
      bullets: ["Больше, чем игры: ПО, ваучеры, пополнения, коллекционные предметы, курсы, домены и другие документированные цифровые активы.", "Прослеживаемое предложение до масштабирования.", "Дорожная карта: витрина, система администрирования и ценовая аналитика."]
    },
    compliance: {
      eyebrow: "Комплаенс",
      title: "Ясные права. Документированное предложение. Контролируемая доставка.",
      body: "Каждая категория активов должна иметь документированный источник, ясное разрешение на перепродажу или коммерческий путь, ясность по региону/платформе и подтверждаемую доставку.",
      bullets: ["Проверки счёта и происхождения.", "Проверка региона, платформы и прав.", "Ручная проверка перед покупкой или публикацией."]
    },
    contact: {
      eyebrow: "Контакты",
      title: "Свяжитесь с нами.",
      body: "Поставщики, маркетплейсы, издатели, партнёры и покупатели могут использовать эту форму для вопросов об инвентаре, доступе, партнёрстве или комплаенсе.",
      bullets: []
    }
  }
};

const translations: Record<Exclude<Locale, "en">, Translation> = { es, pt, fr, zh, ko, ru };

function merge(locale: Locale): HomeCopy {
  if (locale === "en") return en;
  const partial = translations[locale];
  return {
    ...en,
    ...partial,
    meta: { ...en.meta, ...partial.meta },
    nav: { ...en.nav, ...partial.nav },
    hero: { ...en.hero, ...partial.hero },
    mission: { ...en.mission, ...partial.mission },
    form: { ...en.form, ...partial.form },
    storeGate: { ...en.storeGate, ...partial.storeGate },
    home: partial.home
      ? {
          ...en.home,
          ...partial.home,
          inventory: { ...en.home.inventory, ...partial.home.inventory },
          assets: { ...en.home.assets, ...partial.home.assets },
          workflow: partial.home.workflow ?? en.home.workflow
        }
      : en.home,
    pages: { ...en.pages, ...partial.pages }
  };
}

export const copy: Record<Locale, HomeCopy> = Object.fromEntries(locales.map((locale) => [locale, merge(locale)])) as Record<Locale, HomeCopy>;

export function getCopy(locale: Locale) {
  return copy[locale];
}
