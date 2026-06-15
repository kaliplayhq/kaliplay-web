export const locales = ["en", "es", "pt"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const languages: Record<Locale, string> = {
  en: "English",
  es: "Español",
  pt: "Português"
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
  mission: { title: string; body: string };
  cta: { kicker: string; title: string; body: string; action: string; email: string };
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
      WEB: { title: "Domains & Cloud Assets", body: "domains, storage upgrades", detail: "Clean-transfer domain names plus Dropbox, Google Drive, and iCloud upgrades, verified for ownership, transfer path, and account safety." }
    },
    workflow: [
      { kicker: "Source intake", title: "Documented origin", body: "Supplier identity, invoice path, ownership proof, replacement policy, and category risk are recorded before capital is committed." },
      { kicker: "Validation gate", title: "Rights, region, and platform review", body: "Resale permission, activation territory, redemption constraints, fraud exposure, and support risk are checked before publishing." },
      { kicker: "Controlled release", title: "Distribution-ready lot", body: "Only traceable inventory with clear delivery, pricing, support notes, and audit trail can move toward buyers." }
    ]
  },
  form: {
    title: "Please tell us about you.",
    party: "Party type",
    email: "Email",
    emailPlaceholder: "name@company.com",
    message: "Message",
    messagePlaceholder: "Tell us what inventory, access, partnership, or review you need.",
    send: "Send request",
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
    title: "Hacer el comercio de activos digitales más limpio, rápido y seguro.",
    body: "Kaliplay convierte un suministro digital fragmentado en una operación de distribución controlada: fuentes verificadas, regiones transparentes, inventario auditable y entrega lista para el cliente."
  },
  cta: {
    kicker: "Contacto",
    title: "Contanos qué inventario digital necesitás mover.",
    body: "Proveedores, marketplaces, publishers, partners y compradores pueden contactar a Kaliplay por inventario, acceso, alianzas y consultas de cumplimiento.",
    action: "Enviar consulta",
    email: "info@kaliplay.com"
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
      WEB: { title: "Dominios y activos cloud", body: "dominios, mejoras de storage", detail: "Dominios de transferencia limpia más mejoras de Dropbox, Google Drive e iCloud, verificados por titularidad, vía de transferencia y seguridad de la cuenta." }
    },
    workflow: [
      { kicker: "Ingreso de origen", title: "Origen documentado", body: "Identidad del proveedor, vía de factura, prueba de titularidad, política de reemplazo y riesgo de categoría se registran antes de comprometer capital." },
      { kicker: "Filtro de validación", title: "Revisión de derechos, región y plataforma", body: "Permiso de reventa, territorio de activación, restricciones de canje, exposición a fraude y riesgo de soporte se verifican antes de publicar." },
      { kicker: "Liberación controlada", title: "Lote listo para distribución", body: "Solo el inventario trazable, con entrega, precio, notas de soporte y traza de auditoría claros, avanza hacia los compradores." }
    ]
  },
  form: {
    title: "Contanos sobre vos.",
    party: "Tipo de parte",
    email: "Email",
    emailPlaceholder: "nombre@empresa.com",
    message: "Mensaje",
    messagePlaceholder: "Contanos qué inventario, acceso, alianza o revisión necesitás.",
    send: "Enviar consulta",
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
      body: "Kaliplay está construyendo una operación de marketplace controlada para bienes digitales documentados: registros de origen claros, derechos validados, reglas de activación transparentes y vías de entrega confiables.",
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
      title: "Contanos qué inventario digital necesitás mover.",
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
    title: "Tornar o comércio de ativos digitais mais limpo, rápido e seguro.",
    body: "A Kaliplay transforma um suprimento digital fragmentado em uma operação de distribuição controlada: fontes verificadas, regiões transparentes, inventário auditável e entrega pronta para o cliente."
  },
  cta: {
    kicker: "Contato",
    title: "Conte o que você precisa movimentar em inventário digital.",
    body: "Fornecedores, marketplaces, publishers, parceiros e compradores podem falar com a Kaliplay sobre inventário, acesso, parcerias e questões de conformidade.",
    action: "Enviar pedido",
    email: "info@kaliplay.com"
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
      WEB: { title: "Domínios e ativos cloud", body: "domínios, upgrades de armazenamento", detail: "Domínios com transferência limpa mais upgrades de Dropbox, Google Drive e iCloud, verificados por titularidade, caminho de transferência e segurança da conta." }
    },
    workflow: [
      { kicker: "Entrada de origem", title: "Origem documentada", body: "Identidade do fornecedor, caminho da nota fiscal, prova de titularidade, política de reposição e risco de categoria são registrados antes de comprometer capital." },
      { kicker: "Filtro de validação", title: "Revisão de direitos, região e plataforma", body: "Permissão de revenda, território de ativação, restrições de resgate, exposição a fraude e risco de suporte são checados antes de publicar." },
      { kicker: "Liberação controlada", title: "Lote pronto para distribuição", body: "Somente inventário rastreável, com entrega, preço, notas de suporte e trilha de auditoria claros, avança para os compradores." }
    ]
  },
  form: {
    title: "Conte sobre você.",
    party: "Tipo de parte",
    email: "Email",
    emailPlaceholder: "nome@empresa.com",
    message: "Mensagem",
    messagePlaceholder: "Conte qual inventário, acesso, parceria ou revisão você precisa.",
    send: "Enviar pedido",
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
      body: "A Kaliplay está construindo uma operação de marketplace controlada para bens digitais documentados: registros de origem claros, direitos validados, regras de ativação transparentes e caminhos de entrega confiáveis.",
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
      title: "Conte o que você precisa movimentar em inventário digital.",
      body: "Fornecedores, marketplaces, publishers, parceiros e compradores podem usar este formulário para questões de inventário, acesso, parceria ou conformidade.",
      bullets: []
    }
  }
};

const translations: Record<Exclude<Locale, "en">, Translation> = { es, pt };

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
    cta: { ...en.cta, ...partial.cta },
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
