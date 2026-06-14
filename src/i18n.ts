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

export const pageSlugs = ["about", "compliance", "contact", "terms", "privacy"] as const;

export type PageSlug = (typeof pageSlugs)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function dir(locale: Locale) {
  return locale === "ar" ? "rtl" : "ltr";
}

export type HomeCopy = {
  meta: {
    title: string;
    description: string;
  };
  nav: Record<PageSlug, string> & { home: string };
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    primary: string;
    secondary: string;
  };
  stats: Array<{ value: string; label: string }>;
  pillars: Array<{ title: string; body: string }>;
  flow: Array<{ step: string; title: string; body: string }>;
  cta: {
    title: string;
    body: string;
    email: string;
  };
  footer: string;
  pages: Record<PageSlug, { eyebrow: string; title: string; body: string; bullets: string[] }>;
};

export const copy: Record<Locale, HomeCopy> = {
  en: {
    meta: {
      title: "Kaliplay | Documented digital entertainment inventory",
      description: "Kaliplay is an Argentina-based digital entertainment marketplace seller focused on documented PC game keys and compliant activation regions."
    },
    nav: {
      home: "Home",
      about: "About",
      compliance: "Compliance",
      contact: "Contact",
      terms: "Terms",
      privacy: "Privacy"
    },
    hero: {
      eyebrow: "Argentina-based marketplace seller",
      title: "Documented game inventory. Built with heat, precision, and control.",
      body: "Kaliplay focuses on verified supply sources, compliant activation regions, and traceable PC digital entertainment inventory.",
      primary: "Contact Kaliplay",
      secondary: "View compliance"
    },
    stats: [
      { value: "PC", label: "Initial platform focus" },
      { value: "0", label: "Accounts sold" },
      { value: "10+", label: "Region and supply checks" }
    ],
    pillars: [
      { title: "Documented supply", body: "Every supplier path is reviewed for invoice availability, resale permission, region scope, and replacement policy." },
      { title: "Activation clarity", body: "Listings are prepared around explicit platform, SKU, and region data before inventory is considered publishable." },
      { title: "Operational audit", body: "Purchases, listings, price changes, sales, payouts, and incidents are designed to leave a readable trail." }
    ],
    flow: [
      { step: "01", title: "Source", body: "Qualify suppliers and publishers before buying." },
      { step: "02", title: "Score", body: "Measure margin, region confidence, marketplace risk, and price stability." },
      { step: "03", title: "Publish", body: "List only inventory that passes compliance and operational checks." }
    ],
    cta: {
      title: "Supplier, marketplace, or compliance inquiry?",
      body: "Reach the Kaliplay team for documentation, inventory discussions, or account review.",
      email: "info@kaliplay.com"
    },
    footer: "Kaliplay does not sell game accounts or use misleading regional activation practices.",
    pages: {
      about: {
        eyebrow: "About",
        title: "A focused seller for documented PC digital entertainment inventory.",
        body: "Kaliplay is operated from Argentina with a conservative launch plan: validate marketplace access, payouts, supply documentation, and small inventory pilots before scaling.",
        bullets: ["Argentina-based operator.", "PC and Steam-first research.", "Supplier documentation before inventory growth."]
      },
      compliance: {
        eyebrow: "Compliance",
        title: "No unclear regions. No accounts. No undocumented supply.",
        body: "The operating standard is simple: only documented game keys, clear activation regions, and traceable supplier relationships are considered acceptable.",
        bullets: ["Invoice and origin checks.", "Region and platform validation.", "Manual review before purchase or listing."]
      },
      contact: {
        eyebrow: "Contact",
        title: "Talk to Kaliplay.",
        body: "For suppliers, marketplaces, and compliance review, use the primary contact channel.",
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
  },
  zh: {
    meta: {
      title: "Kaliplay | 有记录的数字娱乐库存",
      description: "Kaliplay 是位于阿根廷的数字娱乐市场卖家，专注于有文件记录的 PC 游戏密钥和合规激活区域。"
    },
    nav: { home: "首页", about: "关于", compliance: "合规", contact: "联系", terms: "条款", privacy: "隐私" },
    hero: {
      eyebrow: "位于阿根廷的市场卖家",
      title: "有记录的游戏库存。以热度、精度和控制构建。",
      body: "Kaliplay 专注于已验证的供应来源、合规激活区域和可追踪的 PC 数字娱乐库存。",
      primary: "联系 Kaliplay",
      secondary: "查看合规"
    },
    stats: [{ value: "PC", label: "初始平台重点" }, { value: "0", label: "不销售账号" }, { value: "10+", label: "区域与供应检查" }],
    pillars: [
      { title: "有记录的供应", body: "每条供应路径都会审查发票、转售许可、区域范围和替换政策。" },
      { title: "清晰激活", body: "发布前围绕平台、SKU 和区域数据准备清楚的库存信息。" },
      { title: "运营审计", body: "采购、上架、价格变更、销售、付款和事件都应留下可读记录。" }
    ],
    flow: [
      { step: "01", title: "来源", body: "购买前先评估供应商和发行商。" },
      { step: "02", title: "评分", body: "衡量利润、区域可信度、市场风险和价格稳定性。" },
      { step: "03", title: "发布", body: "只发布通过合规和运营检查的库存。" }
    ],
    cta: { title: "供应商、市场或合规咨询？", body: "联系 Kaliplay 团队处理文档、库存或账号审核问题。", email: "info@kaliplay.com" },
    footer: "Kaliplay 不销售游戏账号，也不使用误导性的区域激活做法。",
    pages: {
      about: { eyebrow: "关于", title: "专注于有记录 PC 数字娱乐库存的卖家。", body: "Kaliplay 在阿根廷运营，以保守方式启动：先验证市场准入、付款、供应文档和小规模库存试点。", bullets: ["阿根廷运营。", "优先研究 PC 和 Steam。", "供应文档先于库存增长。"] },
      compliance: { eyebrow: "合规", title: "不接受不清楚的区域、账号或无文档供应。", body: "运营标准很简单：只考虑有记录的游戏密钥、清晰的激活区域和可追踪供应关系。", bullets: ["发票和来源检查。", "区域和平台验证。", "购买或上架前人工审核。"] },
      contact: { eyebrow: "联系", title: "联系 Kaliplay。", body: "供应商、市场和合规审核请使用主要联系渠道。", bullets: ["General: info@kaliplay.com", "Procurement: procurement@kaliplay.com", "Sales: sales@kaliplay.com"] },
      terms: { eyebrow: "条款", title: "条款草案。", body: "本网站是商业信息展示。当前阶段尚未开放直接消费者结账。", bullets: ["没有公开购物车。", "已发布商品遵循对应市场条款。", "直接销售前将完成法律文本审查。"] },
      privacy: { eyebrow: "隐私", title: "隐私草案。", body: "Kaliplay 只收集回复商业咨询以及处理供应商或市场沟通所需的信息。", bullets: ["可能保存商业联系信息。", "本网站不收集支付数据。", "公开结账前将完成隐私文本。"] }
    }
  },
  hi: {
    meta: { title: "Kaliplay | दस्तावेज़ित डिजिटल मनोरंजन इन्वेंटरी", description: "Kaliplay अर्जेंटीना-आधारित डिजिटल मनोरंजन मार्केटप्लेस विक्रेता है, जो दस्तावेज़ित PC गेम कीज़ और अनुपालन सक्रियण क्षेत्रों पर केंद्रित है।" },
    nav: { home: "होम", about: "परिचय", compliance: "अनुपालन", contact: "संपर्क", terms: "शर्तें", privacy: "गोपनीयता" },
    hero: { eyebrow: "अर्जेंटीना-आधारित मार्केटप्लेस विक्रेता", title: "दस्तावेज़ित गेम इन्वेंटरी। गर्मी, सटीकता और नियंत्रण के साथ निर्मित।", body: "Kaliplay सत्यापित आपूर्ति स्रोतों, अनुपालन सक्रियण क्षेत्रों और ट्रेस करने योग्य PC डिजिटल मनोरंजन इन्वेंटरी पर केंद्रित है।", primary: "Kaliplay से संपर्क करें", secondary: "अनुपालन देखें" },
    stats: [{ value: "PC", label: "प्रारंभिक प्लेटफॉर्म फोकस" }, { value: "0", label: "बेचे गए अकाउंट" }, { value: "10+", label: "क्षेत्र और आपूर्ति जांच" }],
    pillars: [
      { title: "दस्तावेज़ित आपूर्ति", body: "हर सप्लायर पथ को इनवॉइस, रीसेल अनुमति, क्षेत्र सीमा और रिप्लेसमेंट नीति के लिए जांचा जाता है।" },
      { title: "स्पष्ट सक्रियण", body: "लिस्टिंग से पहले प्लेटफॉर्म, SKU और क्षेत्र डेटा साफ किया जाता है।" },
      { title: "ऑपरेशनल ऑडिट", body: "खरीद, लिस्टिंग, कीमत, बिक्री, पेआउट और घटनाओं के लिए पढ़ने योग्य ट्रेल रखी जाती है।" }
    ],
    flow: [{ step: "01", title: "स्रोत", body: "खरीदने से पहले सप्लायर और पब्लिशर को योग्य करें।" }, { step: "02", title: "स्कोर", body: "मार्जिन, क्षेत्र भरोसा, मार्केट जोखिम और मूल्य स्थिरता मापें।" }, { step: "03", title: "प्रकाशित", body: "सिर्फ अनुपालन और ऑपरेशन जांच पास इन्वेंटरी सूचीबद्ध करें।" }],
    cta: { title: "सप्लायर, मार्केटप्लेस या अनुपालन पूछताछ?", body: "दस्तावेज़, इन्वेंटरी या अकाउंट समीक्षा के लिए Kaliplay टीम से संपर्क करें।", email: "info@kaliplay.com" },
    footer: "Kaliplay गेम अकाउंट नहीं बेचता और भ्रामक क्षेत्रीय सक्रियण का उपयोग नहीं करता।",
    pages: {
      about: { eyebrow: "परिचय", title: "दस्तावेज़ित PC डिजिटल मनोरंजन इन्वेंटरी के लिए केंद्रित विक्रेता।", body: "Kaliplay अर्जेंटीना से संचालित है और पहले मार्केटप्लेस एक्सेस, पेआउट, आपूर्ति दस्तावेज़ और छोटे पायलट सत्यापित करता है।", bullets: ["अर्जेंटीना-आधारित ऑपरेटर।", "PC और Steam-first शोध।", "इन्वेंटरी वृद्धि से पहले सप्लायर दस्तावेज़।"] },
      compliance: { eyebrow: "अनुपालन", title: "अस्पष्ट क्षेत्र नहीं। अकाउंट नहीं। बिना दस्तावेज़ आपूर्ति नहीं।", body: "मानक सरल है: केवल दस्तावेज़ित गेम कीज़, स्पष्ट सक्रियण क्षेत्र और ट्रेस करने योग्य सप्लायर संबंध।", bullets: ["इनवॉइस और स्रोत जांच।", "क्षेत्र और प्लेटफॉर्म सत्यापन।", "खरीद या लिस्टिंग से पहले मैनुअल समीक्षा।"] },
      contact: { eyebrow: "संपर्क", title: "Kaliplay से बात करें।", body: "सप्लायर, मार्केटप्लेस और अनुपालन समीक्षा के लिए मुख्य संपर्क चैनल का उपयोग करें।", bullets: ["General: info@kaliplay.com", "Procurement: procurement@kaliplay.com", "Sales: sales@kaliplay.com"] },
      terms: { eyebrow: "शर्तें", title: "शर्तों का मसौदा।", body: "यह वेबसाइट सूचना-आधारित व्यावसायिक उपस्थिति है। अभी डायरेक्ट कंज्यूमर checkout सक्रिय नहीं है।", bullets: ["कोई सार्वजनिक cart उपलब्ध नहीं।", "जहां listings प्रकाशित हैं वहां marketplace terms लागू।", "डायरेक्ट sales से पहले legal text review होगा।"] },
      privacy: { eyebrow: "गोपनीयता", title: "गोपनीयता मसौदा।", body: "Kaliplay केवल व्यावसायिक पूछताछ और सप्लायर/मार्केटप्लेस बातचीत के लिए जरूरी जानकारी एकत्र करता है।", bullets: ["Business contact details store हो सकते हैं।", "इस वेबसाइट पर payment data collect नहीं होता।", "Public checkout से पहले privacy text final होगा।"] }
    }
  },
  es: {
    meta: { title: "Kaliplay | Inventario digital documentado", description: "Kaliplay es un seller de entretenimiento digital basado en Argentina, enfocado en claves PC documentadas y regiones de activación claras." },
    nav: { home: "Inicio", about: "Acerca", compliance: "Compliance", contact: "Contacto", terms: "Términos", privacy: "Privacidad" },
    hero: { eyebrow: "Seller marketplace basado en Argentina", title: "Inventario gaming documentado. Construido con fuego, precisión y control.", body: "Kaliplay trabaja con fuentes verificadas, regiones de activación claras e inventario PC trazable.", primary: "Contactar Kaliplay", secondary: "Ver compliance" },
    stats: [{ value: "PC", label: "Foco inicial" }, { value: "0", label: "Cuentas vendidas" }, { value: "10+", label: "Checks de región y supply" }],
    pillars: [
      { title: "Supply documentado", body: "Cada ruta de proveedor se revisa por factura, permiso de reventa, región y política de reemplazo." },
      { title: "Activación clara", body: "Las listings se preparan con plataforma, SKU y región explícitas antes de publicar." },
      { title: "Auditoría operativa", body: "Compras, listings, precios, ventas, payouts e incidentes dejan una traza legible." }
    ],
    flow: [{ step: "01", title: "Fuente", body: "Calificar proveedores y publishers antes de comprar." }, { step: "02", title: "Score", body: "Medir margen, confianza regional, riesgo marketplace y estabilidad de precio." }, { step: "03", title: "Publicar", body: "Listar solo inventario que pase compliance y operación." }],
    cta: { title: "¿Proveedor, marketplace o revisión compliance?", body: "Contactá al equipo Kaliplay por documentación, inventario o account review.", email: "info@kaliplay.com" },
    footer: "Kaliplay no vende cuentas de juegos ni usa prácticas engañosas de activación regional.",
    pages: {
      about: { eyebrow: "Acerca", title: "Un seller enfocado en inventario PC documentado.", body: "Kaliplay opera desde Argentina con un plan conservador: validar acceso marketplace, payouts, documentación de supply y pilotos chicos antes de escalar.", bullets: ["Operador basado en Argentina.", "Research PC y Steam-first.", "Documentación de proveedores antes de crecer stock."] },
      compliance: { eyebrow: "Compliance", title: "Sin regiones confusas. Sin cuentas. Sin supply sin documentos.", body: "El estándar operativo es simple: solo claves documentadas, regiones claras y proveedores trazables.", bullets: ["Checks de factura y origen.", "Validación de región y plataforma.", "Revisión manual antes de compra o listing."] },
      contact: { eyebrow: "Contacto", title: "Hablemos.", body: "Para proveedores, marketplaces y revisión compliance, usar el canal principal.", bullets: ["General: info@kaliplay.com", "Procurement: procurement@kaliplay.com", "Sales: sales@kaliplay.com"] },
      terms: { eyebrow: "Términos", title: "Draft de términos.", body: "Este sitio es una presencia comercial informativa. El checkout directo no está activo en esta etapa.", bullets: ["No hay carrito público.", "Aplican términos del marketplace donde se publique.", "Texto legal final antes de venta directa."] },
      privacy: { eyebrow: "Privacidad", title: "Draft de privacidad.", body: "Kaliplay solo recolecta la información necesaria para responder consultas comerciales y conversaciones con proveedores o marketplaces.", bullets: ["Se pueden guardar contactos comerciales.", "No se recolectan datos de pago en este sitio.", "Texto final antes de checkout público."] }
    }
  },
  ar: {
    meta: { title: "Kaliplay | مخزون ترفيه رقمي موثق", description: "Kaliplay بائع سوق رقمي من الأرجنتين يركز على مفاتيح ألعاب PC موثقة ومناطق تفعيل متوافقة." },
    nav: { home: "الرئيسية", about: "من نحن", compliance: "الامتثال", contact: "اتصال", terms: "الشروط", privacy: "الخصوصية" },
    hero: { eyebrow: "بائع سوق من الأرجنتين", title: "مخزون ألعاب موثق. مبني بحرارة ودقة وسيطرة.", body: "تركز Kaliplay على مصادر توريد موثقة، ومناطق تفعيل متوافقة، ومخزون ترفيه رقمي قابل للتتبع على PC.", primary: "اتصل بـ Kaliplay", secondary: "عرض الامتثال" },
    stats: [{ value: "PC", label: "المنصة الأولى" }, { value: "0", label: "حسابات مباعة" }, { value: "10+", label: "فحوصات المنطقة والتوريد" }],
    pillars: [
      { title: "توريد موثق", body: "تتم مراجعة كل مسار توريد للفواتير، إذن إعادة البيع، نطاق المنطقة، وسياسة الاستبدال." },
      { title: "وضوح التفعيل", body: "تجهز القوائم حول المنصة و SKU والمنطقة قبل اعتبار المخزون قابلا للنشر." },
      { title: "تدقيق تشغيلي", body: "المشتريات والقوائم وتغيرات الأسعار والمبيعات والمدفوعات والحوادث مصممة لترك أثر مقروء." }
    ],
    flow: [{ step: "01", title: "المصدر", body: "تأهيل الموردين والناشرين قبل الشراء." }, { step: "02", title: "التقييم", body: "قياس الهامش وثقة المنطقة ومخاطر السوق واستقرار السعر." }, { step: "03", title: "النشر", body: "نشر المخزون الذي يمر بفحوصات الامتثال والتشغيل فقط." }],
    cta: { title: "استفسار مورد أو سوق أو امتثال؟", body: "تواصل مع فريق Kaliplay للوثائق أو المخزون أو مراجعة الحساب.", email: "info@kaliplay.com" },
    footer: "لا تبيع Kaliplay حسابات ألعاب ولا تستخدم ممارسات تفعيل إقليمية مضللة.",
    pages: {
      about: { eyebrow: "من نحن", title: "بائع مركز على مخزون ترفيه رقمي موثق للـ PC.", body: "تعمل Kaliplay من الأرجنتين بخطة محافظة: التحقق من الوصول إلى الأسواق، والمدفوعات، ووثائق التوريد، وتجارب مخزون صغيرة قبل التوسع.", bullets: ["مشغل من الأرجنتين.", "بحث PC و Steam أولا.", "توثيق الموردين قبل نمو المخزون."] },
      compliance: { eyebrow: "الامتثال", title: "لا مناطق غير واضحة. لا حسابات. لا توريد بلا وثائق.", body: "المعيار التشغيلي بسيط: مفاتيح ألعاب موثقة فقط، مناطق تفعيل واضحة، وعلاقات توريد قابلة للتتبع.", bullets: ["فحص الفاتورة والمصدر.", "التحقق من المنطقة والمنصة.", "مراجعة يدوية قبل الشراء أو النشر."] },
      contact: { eyebrow: "اتصال", title: "تحدث إلى Kaliplay.", body: "للموردين والأسواق ومراجعة الامتثال، استخدم قناة الاتصال الرئيسية.", bullets: ["General: info@kaliplay.com", "Procurement: procurement@kaliplay.com", "Sales: sales@kaliplay.com"] },
      terms: { eyebrow: "الشروط", title: "مسودة الشروط.", body: "هذا الموقع حضور تجاري معلوماتي. لا يوجد checkout مباشر للمستهلك في هذه المرحلة.", bullets: ["لا توجد عربة عامة.", "تنطبق شروط السوق حيث يتم النشر.", "سيتم مراجعة النص القانوني قبل البيع المباشر."] },
      privacy: { eyebrow: "الخصوصية", title: "مسودة الخصوصية.", body: "تجمع Kaliplay فقط المعلومات اللازمة للرد على الاستفسارات التجارية وتشغيل محادثات الموردين أو الأسواق.", bullets: ["قد يتم حفظ بيانات الاتصال التجارية.", "لا يتم جمع بيانات الدفع على هذا الموقع.", "سيتم إنهاء نص الخصوصية قبل checkout عام."] }
    }
  },
  fr: {
    meta: { title: "Kaliplay | Inventaire digital documenté", description: "Kaliplay est un vendeur de marketplace basé en Argentine, centré sur des clés PC documentées et des régions d'activation conformes." },
    nav: { home: "Accueil", about: "À propos", compliance: "Conformité", contact: "Contact", terms: "Conditions", privacy: "Confidentialité" },
    hero: { eyebrow: "Vendeur marketplace basé en Argentine", title: "Inventaire de jeux documenté. Construit avec intensité, précision et contrôle.", body: "Kaliplay se concentre sur des sources vérifiées, des régions d'activation conformes et un inventaire PC traçable.", primary: "Contacter Kaliplay", secondary: "Voir la conformité" },
    stats: [{ value: "PC", label: "Plateforme initiale" }, { value: "0", label: "Comptes vendus" }, { value: "10+", label: "Contrôles région et supply" }],
    pillars: [
      { title: "Supply documenté", body: "Chaque fournisseur est examiné pour facture, permission de revente, portée régionale et politique de remplacement." },
      { title: "Activation claire", body: "Les listings sont préparés avec plateforme, SKU et région explicites avant publication." },
      { title: "Audit opérationnel", body: "Achats, listings, prix, ventes, payouts et incidents doivent laisser une trace lisible." }
    ],
    flow: [{ step: "01", title: "Sourcer", body: "Qualifier fournisseurs et éditeurs avant achat." }, { step: "02", title: "Noter", body: "Mesurer marge, confiance régionale, risque marketplace et stabilité prix." }, { step: "03", title: "Publier", body: "Lister seulement l'inventaire validé conformité et opération." }],
    cta: { title: "Question fournisseur, marketplace ou conformité ?", body: "Contactez l'équipe Kaliplay pour documentation, inventaire ou revue de compte.", email: "info@kaliplay.com" },
    footer: "Kaliplay ne vend pas de comptes de jeux et n'utilise pas de pratiques d'activation régionales trompeuses.",
    pages: {
      about: { eyebrow: "À propos", title: "Un vendeur focalisé sur l'inventaire PC documenté.", body: "Kaliplay opère depuis l'Argentine avec un lancement prudent : valider accès marketplace, payouts, documentation supply et petits pilotes avant de grandir.", bullets: ["Opérateur basé en Argentine.", "Recherche PC et Steam-first.", "Documentation fournisseur avant croissance stock."] },
      compliance: { eyebrow: "Conformité", title: "Pas de régions floues. Pas de comptes. Pas de supply non documenté.", body: "Le standard est simple : clés documentées, régions claires et fournisseurs traçables.", bullets: ["Contrôles facture et origine.", "Validation région et plateforme.", "Revue manuelle avant achat ou listing."] },
      contact: { eyebrow: "Contact", title: "Parler à Kaliplay.", body: "Pour fournisseurs, marketplaces et conformité, utilisez le canal principal.", bullets: ["General: info@kaliplay.com", "Procurement: procurement@kaliplay.com", "Sales: sales@kaliplay.com"] },
      terms: { eyebrow: "Conditions", title: "Brouillon des conditions.", body: "Ce site est une présence commerciale informative. Le checkout direct n'est pas actif.", bullets: ["Pas de panier public.", "Les conditions marketplace s'appliquent où les listings sont publiés.", "Texte légal final avant vente directe."] },
      privacy: { eyebrow: "Confidentialité", title: "Brouillon confidentialité.", body: "Kaliplay collecte uniquement les informations nécessaires aux réponses commerciales et échanges fournisseurs ou marketplaces.", bullets: ["Les contacts business peuvent être stockés.", "Aucune donnée de paiement collectée ici.", "Texte final avant checkout public."] }
    }
  },
  bn: {
    meta: { title: "Kaliplay | নথিভুক্ত ডিজিটাল বিনোদন ইনভেন্টরি", description: "Kaliplay আর্জেন্টিনা-ভিত্তিক ডিজিটাল বিনোদন মার্কেটপ্লেস বিক্রেতা, নথিভুক্ত PC গেম কী এবং স্পষ্ট অ্যাক্টিভেশন অঞ্চলে মনোযোগী।" },
    nav: { home: "হোম", about: "পরিচিতি", compliance: "কমপ্লায়েন্স", contact: "যোগাযোগ", terms: "শর্তাবলি", privacy: "গোপনীয়তা" },
    hero: { eyebrow: "আর্জেন্টিনা-ভিত্তিক মার্কেটপ্লেস বিক্রেতা", title: "নথিভুক্ত গেম ইনভেন্টরি। তাপ, নির্ভুলতা ও নিয়ন্ত্রণ দিয়ে তৈরি।", body: "Kaliplay যাচাইকৃত সরবরাহ উৎস, স্পষ্ট অ্যাক্টিভেশন অঞ্চল এবং ট্রেসযোগ্য PC ডিজিটাল বিনোদন ইনভেন্টরিতে মনোযোগ দেয়।", primary: "Kaliplay-এ যোগাযোগ", secondary: "কমপ্লায়েন্স দেখুন" },
    stats: [{ value: "PC", label: "প্রাথমিক প্ল্যাটফর্ম" }, { value: "0", label: "বিক্রিত অ্যাকাউন্ট" }, { value: "10+", label: "অঞ্চল ও সরবরাহ পরীক্ষা" }],
    pillars: [
      { title: "নথিভুক্ত সরবরাহ", body: "প্রতিটি সরবরাহ পথ ইনভয়েস, পুনঃবিক্রয় অনুমতি, অঞ্চল এবং রিপ্লেসমেন্ট নীতির জন্য পর্যালোচনা করা হয়।" },
      { title: "স্পষ্ট অ্যাক্টিভেশন", body: "প্রকাশের আগে প্ল্যাটফর্ম, SKU এবং অঞ্চল তথ্য পরিষ্কার করা হয়।" },
      { title: "অপারেশনাল অডিট", body: "ক্রয়, লিস্টিং, মূল্য পরিবর্তন, বিক্রয়, পেআউট এবং ঘটনা পড়ার মতো ট্রেল রাখে।" }
    ],
    flow: [{ step: "01", title: "উৎস", body: "কেনার আগে সরবরাহকারী ও প্রকাশক যাচাই করুন।" }, { step: "02", title: "স্কোর", body: "মার্জিন, অঞ্চল আস্থা, মার্কেটপ্লেস ঝুঁকি ও মূল্য স্থিরতা মাপুন।" }, { step: "03", title: "প্রকাশ", body: "শুধু যাচাই পাস করা ইনভেন্টরি লিস্ট করুন।" }],
    cta: { title: "সরবরাহকারী, মার্কেটপ্লেস বা কমপ্লায়েন্স প্রশ্ন?", body: "ডকুমেন্টেশন, ইনভেন্টরি বা অ্যাকাউন্ট রিভিউর জন্য Kaliplay দলের সাথে যোগাযোগ করুন।", email: "info@kaliplay.com" },
    footer: "Kaliplay গেম অ্যাকাউন্ট বিক্রি করে না বা বিভ্রান্তিকর আঞ্চলিক অ্যাক্টিভেশন ব্যবহার করে না।",
    pages: {
      about: { eyebrow: "পরিচিতি", title: "নথিভুক্ত PC ডিজিটাল বিনোদন ইনভেন্টরির জন্য কেন্দ্রিত বিক্রেতা।", body: "Kaliplay আর্জেন্টিনা থেকে পরিচালিত হয় এবং স্কেল করার আগে মার্কেটপ্লেস অ্যাক্সেস, পেআউট, সরবরাহ ডকুমেন্টেশন ও ছোট পাইলট যাচাই করে।", bullets: ["আর্জেন্টিনা-ভিত্তিক অপারেটর।", "PC এবং Steam-first গবেষণা।", "স্টক বৃদ্ধির আগে সরবরাহকারী ডকুমেন্টেশন।"] },
      compliance: { eyebrow: "কমপ্লায়েন্স", title: "অস্পষ্ট অঞ্চল নয়। অ্যাকাউন্ট নয়। নথিহীন সরবরাহ নয়।", body: "মান সহজ: নথিভুক্ত গেম কী, স্পষ্ট অ্যাক্টিভেশন অঞ্চল, এবং ট্রেসযোগ্য সরবরাহ সম্পর্ক।", bullets: ["ইনভয়েস ও উৎস পরীক্ষা।", "অঞ্চল ও প্ল্যাটফর্ম যাচাই।", "কেনা বা লিস্টিংয়ের আগে ম্যানুয়াল রিভিউ।"] },
      contact: { eyebrow: "যোগাযোগ", title: "Kaliplay-এর সাথে কথা বলুন।", body: "সরবরাহকারী, মার্কেটপ্লেস এবং কমপ্লায়েন্স রিভিউর জন্য প্রধান চ্যানেল ব্যবহার করুন।", bullets: ["General: info@kaliplay.com", "Procurement: procurement@kaliplay.com", "Sales: sales@kaliplay.com"] },
      terms: { eyebrow: "শর্তাবলি", title: "শর্তাবলির খসড়া।", body: "এই ওয়েবসাইট তথ্যভিত্তিক বাণিজ্যিক উপস্থিতি। সরাসরি কনজিউমার checkout এখন সক্রিয় নয়।", bullets: ["পাবলিক cart নেই।", "যেখানে listing প্রকাশিত সেখানে marketplace terms প্রযোজ্য।", "সরাসরি বিক্রির আগে legal text review হবে।"] },
      privacy: { eyebrow: "গোপনীয়তা", title: "গোপনীয়তার খসড়া।", body: "Kaliplay শুধু ব্যবসায়িক প্রশ্নের উত্তর এবং সরবরাহকারী বা মার্কেটপ্লেস কথোপকথনের জন্য প্রয়োজনীয় তথ্য সংগ্রহ করে।", bullets: ["ব্যবসায়িক contact details রাখা হতে পারে।", "এই সাইটে payment data সংগ্রহ হয় না।", "Public checkout-এর আগে privacy text final হবে।"] }
    }
  },
  pt: {
    meta: { title: "Kaliplay | Inventário digital documentado", description: "Kaliplay é um seller de marketplace baseado na Argentina, focado em chaves PC documentadas e regiões de ativação compatíveis." },
    nav: { home: "Início", about: "Sobre", compliance: "Compliance", contact: "Contato", terms: "Termos", privacy: "Privacidade" },
    hero: { eyebrow: "Seller marketplace baseado na Argentina", title: "Inventário de jogos documentado. Construído com calor, precisão e controle.", body: "Kaliplay foca em fontes verificadas, regiões de ativação compatíveis e inventário PC rastreável.", primary: "Contatar Kaliplay", secondary: "Ver compliance" },
    stats: [{ value: "PC", label: "Foco inicial" }, { value: "0", label: "Contas vendidas" }, { value: "10+", label: "Checks de região e supply" }],
    pillars: [
      { title: "Supply documentado", body: "Cada rota de fornecedor é revisada por invoice, permissão de revenda, região e política de substituição." },
      { title: "Ativação clara", body: "As listings são preparadas com plataforma, SKU e região explícitas antes de publicar." },
      { title: "Auditoria operacional", body: "Compras, listings, preços, vendas, payouts e incidentes deixam uma trilha legível." }
    ],
    flow: [{ step: "01", title: "Fonte", body: "Qualificar fornecedores e publishers antes de comprar." }, { step: "02", title: "Score", body: "Medir margem, confiança regional, risco marketplace e estabilidade de preço." }, { step: "03", title: "Publicar", body: "Listar apenas inventário aprovado por compliance e operação." }],
    cta: { title: "Fornecedor, marketplace ou compliance?", body: "Fale com a equipe Kaliplay sobre documentação, inventário ou revisão de conta.", email: "info@kaliplay.com" },
    footer: "Kaliplay não vende contas de jogos nem usa práticas regionais de ativação enganosas.",
    pages: {
      about: { eyebrow: "Sobre", title: "Um seller focado em inventário PC documentado.", body: "Kaliplay opera da Argentina com plano conservador: validar acesso marketplace, payouts, documentação supply e pilotos pequenos antes de escalar.", bullets: ["Operador baseado na Argentina.", "Pesquisa PC e Steam-first.", "Documentação de fornecedores antes de crescer estoque."] },
      compliance: { eyebrow: "Compliance", title: "Sem regiões confusas. Sem contas. Sem supply sem documentação.", body: "O padrão é simples: apenas chaves documentadas, regiões claras e fornecedores rastreáveis.", bullets: ["Checks de invoice e origem.", "Validação de região e plataforma.", "Revisão manual antes de compra ou listing."] },
      contact: { eyebrow: "Contato", title: "Fale com Kaliplay.", body: "Para fornecedores, marketplaces e compliance, use o canal principal.", bullets: ["General: info@kaliplay.com", "Procurement: procurement@kaliplay.com", "Sales: sales@kaliplay.com"] },
      terms: { eyebrow: "Termos", title: "Rascunho dos termos.", body: "Este site é uma presença comercial informativa. Checkout direto não está ativo nesta fase.", bullets: ["Não há carrinho público.", "Termos do marketplace aplicam onde houver listing.", "Texto legal final antes de venda direta."] },
      privacy: { eyebrow: "Privacidade", title: "Rascunho de privacidade.", body: "Kaliplay coleta apenas dados necessários para responder consultas comerciais e conversas com fornecedores ou marketplaces.", bullets: ["Contatos comerciais podem ser armazenados.", "Nenhum dado de pagamento é coletado neste site.", "Texto final antes de checkout público."] }
    }
  },
  ru: {
    meta: { title: "Kaliplay | Документированный цифровой инвентарь", description: "Kaliplay — продавец цифрового развлекательного инвентаря из Аргентины, с фокусом на документированные PC-ключи и понятные регионы активации." },
    nav: { home: "Главная", about: "О нас", compliance: "Комплаенс", contact: "Контакты", terms: "Условия", privacy: "Приватность" },
    hero: { eyebrow: "Marketplace seller из Аргентины", title: "Документированный игровой инвентарь. Жар, точность и контроль.", body: "Kaliplay работает с проверенными источниками поставки, понятными регионами активации и отслеживаемым PC-инвентарем.", primary: "Связаться", secondary: "Комплаенс" },
    stats: [{ value: "PC", label: "Первый фокус" }, { value: "0", label: "Проданных аккаунтов" }, { value: "10+", label: "Проверок региона и supply" }],
    pillars: [
      { title: "Документированная поставка", body: "Каждый путь поставщика проверяется на invoice, разрешение перепродажи, регион и политику замены." },
      { title: "Ясная активация", body: "Листинги готовятся с явной платформой, SKU и регионом до публикации." },
      { title: "Операционный аудит", body: "Покупки, листинги, цены, продажи, выплаты и инциденты оставляют читаемый след." }
    ],
    flow: [{ step: "01", title: "Источник", body: "Квалифицировать поставщиков и издателей до покупки." }, { step: "02", title: "Оценка", body: "Измерять маржу, доверие к региону, marketplace-риск и стабильность цены." }, { step: "03", title: "Публикация", body: "Публиковать только инвентарь, прошедший проверки." }],
    cta: { title: "Поставщик, marketplace или комплаенс?", body: "Свяжитесь с Kaliplay по документации, инвентарю или проверке аккаунта.", email: "info@kaliplay.com" },
    footer: "Kaliplay не продает игровые аккаунты и не использует вводящие в заблуждение региональные практики активации.",
    pages: {
      about: { eyebrow: "О нас", title: "Сфокусированный seller для документированного PC-инвентаря.", body: "Kaliplay работает из Аргентины и сначала проверяет marketplace-доступ, выплаты, supply-документацию и малые пилоты.", bullets: ["Оператор из Аргентины.", "PC и Steam-first research.", "Документация поставщиков до роста stock."] },
      compliance: { eyebrow: "Комплаенс", title: "Без неясных регионов. Без аккаунтов. Без supply без документов.", body: "Стандарт простой: только документированные игровые ключи, ясные регионы и отслеживаемые поставщики.", bullets: ["Проверки invoice и origin.", "Валидация региона и платформы.", "Ручная проверка до покупки или listing."] },
      contact: { eyebrow: "Контакты", title: "Связаться с Kaliplay.", body: "Для поставщиков, marketplaces и комплаенса используйте основной канал.", bullets: ["General: info@kaliplay.com", "Procurement: procurement@kaliplay.com", "Sales: sales@kaliplay.com"] },
      terms: { eyebrow: "Условия", title: "Черновик условий.", body: "Этот сайт является информационным коммерческим присутствием. Прямой checkout пока не активен.", bullets: ["Публичной корзины нет.", "Действуют условия marketplace, где опубликованы listings.", "Юридический текст будет финализирован до прямых продаж."] },
      privacy: { eyebrow: "Приватность", title: "Черновик приватности.", body: "Kaliplay собирает только данные, нужные для ответа на бизнес-запросы и общения с поставщиками или marketplaces.", bullets: ["Бизнес-контакты могут храниться.", "Платежные данные на сайте не собираются.", "Финальный текст до публичного checkout."] }
    }
  },
  id: {
    meta: { title: "Kaliplay | Inventaris hiburan digital terdokumentasi", description: "Kaliplay adalah marketplace seller berbasis Argentina yang fokus pada key game PC terdokumentasi dan wilayah aktivasi yang jelas." },
    nav: { home: "Beranda", about: "Tentang", compliance: "Kepatuhan", contact: "Kontak", terms: "Syarat", privacy: "Privasi" },
    hero: { eyebrow: "Marketplace seller berbasis Argentina", title: "Inventaris game terdokumentasi. Dibangun dengan panas, presisi, dan kendali.", body: "Kaliplay fokus pada sumber supply terverifikasi, wilayah aktivasi yang jelas, dan inventaris PC digital yang dapat dilacak.", primary: "Kontak Kaliplay", secondary: "Lihat kepatuhan" },
    stats: [{ value: "PC", label: "Fokus platform awal" }, { value: "0", label: "Akun terjual" }, { value: "10+", label: "Cek wilayah dan supply" }],
    pillars: [
      { title: "Supply terdokumentasi", body: "Setiap jalur supplier ditinjau untuk invoice, izin resale, cakupan wilayah, dan kebijakan penggantian." },
      { title: "Aktivasi jelas", body: "Listing disiapkan dengan platform, SKU, dan wilayah eksplisit sebelum dipublikasi." },
      { title: "Audit operasional", body: "Pembelian, listing, perubahan harga, sales, payout, dan insiden dirancang meninggalkan jejak yang terbaca." }
    ],
    flow: [{ step: "01", title: "Sumber", body: "Kualifikasi supplier dan publisher sebelum membeli." }, { step: "02", title: "Skor", body: "Ukur margin, keyakinan wilayah, risiko marketplace, dan stabilitas harga." }, { step: "03", title: "Publikasi", body: "Listing hanya untuk inventaris yang lolos cek kepatuhan dan operasional." }],
    cta: { title: "Pertanyaan supplier, marketplace, atau kepatuhan?", body: "Hubungi tim Kaliplay untuk dokumentasi, inventaris, atau review akun.", email: "info@kaliplay.com" },
    footer: "Kaliplay tidak menjual akun game atau menggunakan praktik aktivasi regional yang menyesatkan.",
    pages: {
      about: { eyebrow: "Tentang", title: "Seller fokus untuk inventaris PC digital terdokumentasi.", body: "Kaliplay beroperasi dari Argentina dengan rencana konservatif: validasi akses marketplace, payout, dokumentasi supply, dan pilot kecil sebelum scale.", bullets: ["Operator berbasis Argentina.", "Riset PC dan Steam-first.", "Dokumentasi supplier sebelum pertumbuhan stok."] },
      compliance: { eyebrow: "Kepatuhan", title: "Tidak ada wilayah samar. Tidak ada akun. Tidak ada supply tanpa dokumen.", body: "Standarnya sederhana: hanya key game terdokumentasi, wilayah aktivasi jelas, dan hubungan supplier yang dapat dilacak.", bullets: ["Cek invoice dan origin.", "Validasi wilayah dan platform.", "Review manual sebelum beli atau listing."] },
      contact: { eyebrow: "Kontak", title: "Bicara dengan Kaliplay.", body: "Untuk supplier, marketplace, dan review kepatuhan, gunakan kanal utama.", bullets: ["General: info@kaliplay.com", "Procurement: procurement@kaliplay.com", "Sales: sales@kaliplay.com"] },
      terms: { eyebrow: "Syarat", title: "Draft syarat.", body: "Website ini adalah kehadiran komersial informatif. Checkout langsung belum aktif saat ini.", bullets: ["Tidak ada cart publik.", "Syarat marketplace berlaku di tempat listing dipublikasi.", "Teks legal final sebelum direct sales."] },
      privacy: { eyebrow: "Privasi", title: "Draft privasi.", body: "Kaliplay hanya mengumpulkan informasi yang diperlukan untuk merespons inquiry bisnis dan percakapan supplier atau marketplace.", bullets: ["Detail kontak bisnis dapat disimpan.", "Tidak ada data pembayaran dikumpulkan di website ini.", "Teks privasi final sebelum checkout publik."] }
    }
  }
};

export function getCopy(locale: Locale) {
  return copy[locale];
}
