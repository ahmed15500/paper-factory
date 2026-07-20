"use strict";

/*
  Add the factory's official details below.
  WhatsApp number must include the country code without + or spaces.
  Example for Egypt: 201001234567
*/
const FACTORY_CONTACT = {
  whatsapp: "",
  phone: "",
  email: "",
  addressAr: "",
  addressEn: ""
};

const translations = {
  ar: {
    pageTitle: "مصنع الأخوه | قص وتحويل الورق",
    pageDescription: "مصنع الأخوه لقص وتحويل الورق حسب المقاسات والمواصفات المطلوبة.",
    skipLink: "انتقل إلى المحتوى", brandArabic: "مصنع الأخوه", menu: "القائمة",
    navAbout: "عن المصنع", navServices: "الخدمات", navProcess: "خطوات العمل", navQuote: "طلب عرض سعر",
    heroEyebrow: "حلول متخصصة في تجهيز الورق",
    heroTitle: "قص وتحويل الورق<br><span>بالمقاس الذي تحتاجه</span>",
    heroText: "مصنع الأخوه يقدم خدمات قص وتحويل الورق وفق المقاسات والمواصفات المطلوبة، لخدمة احتياجات المصانع والمطابع وتجار الورق.",
    heroCta: "اطلب عرض سعر", heroSecondary: "استكشف خدماتنا",
    pointOne: "مقاسات مخصصة", pointTwo: "تجهيز منظم", pointThree: "خدمة مرنة",
    visualCardOneTitle: "مقاسات مخصصة", visualCardOneText: "حسب مواصفات الطلب",
    visualCardTwoTitle: "تحويل احترافي", visualCardTwoText: "رولات وأفرخ ورقية",
    trustIntro: "نجهز الورق لاحتياجات", trustPrinting: "المطابع", trustPackaging: "مصانع التغليف", trustTrade: "تجار الورق", trustIndustry: "الاستخدامات الصناعية",
    aboutEyebrow: "من نحن", aboutTitle: "مصنع متخصص في قص وتحويل الورق",
    aboutTextOne: "يركز مصنع الأخوه على تحويل خامات الورق من صورتها الأساسية إلى المقاسات والأشكال المناسبة لاحتياجات العميل.",
    aboutTextTwo: "نعمل على فهم مواصفات كل طلب، وتحديد أبعاد القص المطلوبة، ثم تجهيز الورق بصورة منظمة تسهل استخدامه في المرحلة التالية من الإنتاج أو الطباعة.",
    aboutLink: "تعرف على خطوات تنفيذ الطلب",
    valueOneTitle: "فهم المواصفات", valueOneText: "تحديد نوع التجهيز والمقاسات المطلوبة قبل بدء التنفيذ.",
    valueTwoTitle: "دقة التجهيز", valueTwoText: "التركيز على أبعاد القص وتنظيم الكميات وفق الطلب.",
    valueThreeTitle: "مرونة الطلبات", valueThreeText: "التعامل مع متطلبات متنوعة للرولات والأفرخ الورقية.",
    servicesEyebrow: "خدماتنا", servicesTitle: "حلول قص وتحويل تناسب طلبك", servicesIntro: "الخدمات التالية تمثل نطاق العمل الأساسي للمصنع، ويمكن تحديد التفاصيل الفنية لكل طلب بشكل منفصل.",
    serviceOneTitle: "قص الورق حسب المقاس", serviceOneText: "تجهيز الورق بأبعاد محددة وفق العرض والطول المطلوبين للاستخدام النهائي.",
    serviceTwoTitle: "تحويل الرولات إلى أفرخ", serviceTwoText: "تحويل رولات الورق إلى أفرخ بالمقاسات المناسبة لعمليات الطباعة أو التصنيع.",
    serviceThreeTitle: "إعادة تقطيع الأفرخ", serviceThreeText: "إعادة تجهيز الأفرخ الكبيرة إلى مقاسات أصغر تتوافق مع متطلبات التشغيل.",
    serviceFourTitle: "تجهيز مواصفات الطلب", serviceFourText: "تنظيم تفاصيل المقاسات والكميات والملاحظات الفنية قبل بدء عملية التحويل.",
    processEyebrow: "كيف نعمل", processTitle: "من مواصفاتك إلى ورق جاهز للاستخدام", processIntro: "مسار واضح يساعد على تحديد المطلوب وتنظيم عملية التجهيز.",
    processOneTitle: "استلام تفاصيل الطلب", processOneText: "نوع الورق، المقاس المطلوب، الكمية وأي ملاحظات فنية.",
    processTwoTitle: "مراجعة المواصفات", processTwoText: "مراجعة الأبعاد وطريقة التحويل المناسبة قبل التنفيذ.",
    processThreeTitle: "القص والتحويل", processThreeText: "تنفيذ عملية التجهيز وفق المواصفات المتفق عليها.",
    processFourTitle: "تجهيز الطلب", processFourText: "تنظيم الكميات لتصبح جاهزة للاستلام أو المرحلة التالية.",
    quoteEyebrow: "ابدأ طلبك", quoteTitle: "أرسل مواصفات الورق المطلوبة", quoteText: "أدخل البيانات الأساسية وسيقوم الموقع بتجهيز ملخص منظم لطلبك. يمكن ربطه مباشرة بواتساب عند إضافة رقم المصنع.",
    quoteListOne: "حدد الخدمة المطلوبة", quoteListTwo: "أدخل العرض والطول والكمية", quoteListThree: "أضف أي ملاحظات فنية مهمة", contactPending: "بيانات التواصل الرسمية قيد الإضافة",
    fieldName: "الاسم", fieldCompany: "الشركة", fieldPhone: "رقم الهاتف", fieldService: "الخدمة المطلوبة", selectService: "اختر الخدمة",
    fieldWidth: "العرض", fieldLength: "الطول", fieldQuantity: "الكمية", fieldNotes: "تفاصيل إضافية", unitCm: "سم",
    placeholderName: "اكتب اسمك", placeholderCompany: "اسم الشركة - اختياري", placeholderPhone: "رقم للتواصل", placeholderWidth: "مثال: 70", placeholderLength: "مثال: 100", placeholderQuantity: "أدخل الكمية", placeholderNotes: "نوع الورق، وزن الورق أو أي ملاحظات أخرى",
    submitQuote: "جهّز طلب عرض السعر", formNote: "لن يتم إرسال البيانات إلى أي جهة قبل إضافة وسيلة التواصل الرسمية للمصنع.",
    contactEyebrow: "تواصل معنا", contactTitle: "لديك طلب قص أو تحويل ورق؟", contactText: "أرسل لنا تفاصيل المقاسات والكميات المطلوبة وسنراجع مواصفات الطلب.",
    contactPhoneLabel: "الهاتف وواتساب", contactAddressLabel: "عنوان المصنع", contactEmailLabel: "البريد الإلكتروني", contactNotAdded: "لم تتم إضافة البيانات بعد",
    footerText: "متخصصون في قص وتحويل الورق وفق المقاسات والمواصفات المطلوبة.", footerTagline: "الورق بالمقاس المناسب لعملك",
    requiredError: "يرجى استكمال الاسم ورقم الهاتف والخدمة المطلوبة.",
    copiedSuccess: "تم تجهيز ملخص الطلب ونسخه. أضف رقم واتساب المصنع في ملف script.js لإرسال الطلبات مباشرة.",
    copyFallback: "تم تجهيز ملخص الطلب أدناه. انسخه وأرسله إلى المصنع عند إضافة بيانات التواصل.",
    whatsappOpening: "سيتم فتح واتساب لإرسال تفاصيل الطلب.",
    requestHeading: "طلب عرض سعر - مصنع الأخوه", labelName: "الاسم", labelCompany: "الشركة", labelPhone: "الهاتف", labelService: "الخدمة", labelSize: "المقاس", labelQuantity: "الكمية", labelNotes: "ملاحظات", notSpecified: "غير محدد", cm: "سم"
  },
  en: {
    pageTitle: "The Brothers Factory | Paper Cutting & Converting",
    pageDescription: "The Brothers Factory provides paper cutting and converting services to requested sizes and specifications.",
    skipLink: "Skip to content", brandArabic: "The Brothers Factory", menu: "Menu",
    navAbout: "About", navServices: "Services", navProcess: "Our process", navQuote: "Request a quote",
    heroEyebrow: "Specialized paper converting solutions",
    heroTitle: "Paper cutting and converting<br><span>to the size you need</span>",
    heroText: "The Brothers Factory provides paper cutting and converting services based on requested dimensions and specifications for manufacturers, printers and paper traders.",
    heroCta: "Request a quote", heroSecondary: "Explore our services",
    pointOne: "Custom sizes", pointTwo: "Organized preparation", pointThree: "Flexible service",
    visualCardOneTitle: "Custom dimensions", visualCardOneText: "Based on your specifications",
    visualCardTwoTitle: "Paper converting", visualCardTwoText: "Rolls and paper sheets",
    trustIntro: "We prepare paper for", trustPrinting: "Printing houses", trustPackaging: "Packaging factories", trustTrade: "Paper traders", trustIndustry: "Industrial uses",
    aboutEyebrow: "About us", aboutTitle: "A factory specialized in paper cutting and converting",
    aboutTextOne: "The Brothers Factory focuses on converting paper materials into the dimensions and formats required by each customer.",
    aboutTextTwo: "We review every request, define the required cutting dimensions, then prepare the paper in an organized format for its next production or printing stage.",
    aboutLink: "See how an order is processed",
    valueOneTitle: "Specification review", valueOneText: "Defining the required process and dimensions before production begins.",
    valueTwoTitle: "Accurate preparation", valueTwoText: "Focusing on cutting dimensions and organizing quantities for each order.",
    valueThreeTitle: "Flexible orders", valueThreeText: "Handling different requirements for paper rolls and sheets.",
    servicesEyebrow: "Our services", servicesTitle: "Cutting and converting solutions for your order", servicesIntro: "These are the factory's core services. Technical details can be specified for each request.",
    serviceOneTitle: "Paper cutting to size", serviceOneText: "Preparing paper to defined width and length dimensions for its intended use.",
    serviceTwoTitle: "Roll-to-sheet conversion", serviceTwoText: "Converting paper rolls into sheets sized for printing or manufacturing operations.",
    serviceThreeTitle: "Sheet re-cutting", serviceThreeText: "Re-cutting large paper sheets into smaller dimensions suited to production requirements.",
    serviceFourTitle: "Order specification setup", serviceFourText: "Organizing dimensions, quantities and technical notes before the converting process begins.",
    processEyebrow: "How we work", processTitle: "From your specifications to ready-to-use paper", processIntro: "A clear path for defining and organizing every paper converting request.",
    processOneTitle: "Receive order details", processOneText: "Paper type, required dimensions, quantity and technical notes.",
    processTwoTitle: "Review specifications", processTwoText: "Reviewing the dimensions and selecting the suitable converting method.",
    processThreeTitle: "Cut and convert", processThreeText: "Performing the required process according to the agreed specifications.",
    processFourTitle: "Prepare the order", processFourText: "Organizing quantities for collection or the next production stage.",
    quoteEyebrow: "Start your order", quoteTitle: "Send the required paper specifications", quoteText: "Enter the basic details and the website will prepare an organized request summary. It can open WhatsApp directly once the factory number is added.",
    quoteListOne: "Select the required service", quoteListTwo: "Enter width, length and quantity", quoteListThree: "Add important technical notes", contactPending: "Official contact details are being added",
    fieldName: "Name", fieldCompany: "Company", fieldPhone: "Phone number", fieldService: "Required service", selectService: "Select a service",
    fieldWidth: "Width", fieldLength: "Length", fieldQuantity: "Quantity", fieldNotes: "Additional details", unitCm: "cm",
    placeholderName: "Enter your name", placeholderCompany: "Company name - optional", placeholderPhone: "Contact number", placeholderWidth: "Example: 70", placeholderLength: "Example: 100", placeholderQuantity: "Enter quantity", placeholderNotes: "Paper type, paper weight or any other notes",
    submitQuote: "Prepare quote request", formNote: "No data will be sent until the factory's official contact channel is added.",
    contactEyebrow: "Contact us", contactTitle: "Need paper cutting or converting?", contactText: "Send the required dimensions and quantities so the order specifications can be reviewed.",
    contactPhoneLabel: "Phone & WhatsApp", contactAddressLabel: "Factory address", contactEmailLabel: "Email", contactNotAdded: "Details not added yet",
    footerText: "Specialists in paper cutting and converting to requested sizes and specifications.", footerTagline: "Paper prepared to fit your work",
    requiredError: "Please complete your name, phone number and required service.",
    copiedSuccess: "The request summary was prepared and copied. Add the factory WhatsApp number in script.js to send requests directly.",
    copyFallback: "The request summary is ready below. Copy it and send it after contact details are added.",
    whatsappOpening: "WhatsApp will open with your request details.",
    requestHeading: "Quote Request - The Brothers Factory", labelName: "Name", labelCompany: "Company", labelPhone: "Phone", labelService: "Service", labelSize: "Size", labelQuantity: "Quantity", labelNotes: "Notes", notSpecified: "Not specified", cm: "cm"
  }
};

let currentLanguage = localStorage.getItem("brothers-factory-language") || "ar";

const html = document.documentElement;
const languageButton = document.querySelector(".language-toggle");
const languageCurrent = document.querySelector(".language-current");
const menuButton = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const quoteForm = document.getElementById("quote-form");
const formMessage = document.getElementById("form-message");

function applyLanguage(language) {
  const dictionary = translations[language];
  currentLanguage = language;
  html.lang = language;
  html.dir = language === "ar" ? "rtl" : "ltr";
  document.title = dictionary.pageTitle;
  document.querySelector('meta[name="description"]').setAttribute("content", dictionary.pageDescription);
  languageCurrent.textContent = language === "ar" ? "EN" : "ع";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) element.innerHTML = dictionary[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (dictionary[key]) element.placeholder = dictionary[key];
  });

  document.querySelectorAll("select option[data-ar]").forEach((option) => {
    option.textContent = option.dataset[language];
  });

  updateContactDetails();
  localStorage.setItem("brothers-factory-language", language);
}

function updateContactDetails() {
  const dictionary = translations[currentLanguage];
  const phoneElement = document.querySelector(".contact-phone");
  const addressElement = document.querySelector(".contact-address");
  const emailElement = document.querySelector(".contact-email");

  phoneElement.textContent = FACTORY_CONTACT.phone || dictionary.contactNotAdded;
  addressElement.textContent = (currentLanguage === "ar" ? FACTORY_CONTACT.addressAr : FACTORY_CONTACT.addressEn) || dictionary.contactNotAdded;
  emailElement.textContent = FACTORY_CONTACT.email || dictionary.contactNotAdded;

  [phoneElement, addressElement, emailElement].forEach((element) => {
    if (element.textContent !== dictionary.contactNotAdded) element.removeAttribute("data-i18n");
  });
}

languageButton.addEventListener("click", () => {
  applyLanguage(currentLanguage === "ar" ? "en" : "ar");
});

menuButton.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

document.addEventListener("click", (event) => {
  if (!mainNav.contains(event.target) && !menuButton.contains(event.target)) {
    mainNav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }
});

function buildRequestSummary(formData) {
  const t = translations[currentLanguage];
  const width = formData.get("width") || t.notSpecified;
  const length = formData.get("length") || t.notSpecified;
  const size = width === t.notSpecified && length === t.notSpecified
    ? t.notSpecified
    : `${width} × ${length} ${t.cm}`;

  return [
    `*${t.requestHeading}*`,
    `${t.labelName}: ${formData.get("name")}`,
    `${t.labelCompany}: ${formData.get("company") || t.notSpecified}`,
    `${t.labelPhone}: ${formData.get("phone")}`,
    `${t.labelService}: ${formData.get("service")}`,
    `${t.labelSize}: ${size}`,
    `${t.labelQuantity}: ${formData.get("quantity") || t.notSpecified}`,
    `${t.labelNotes}: ${formData.get("notes") || t.notSpecified}`
  ].join("\n");
}

function showMessage(text, type) {
  formMessage.textContent = text;
  formMessage.className = `form-message show ${type}`;
}

quoteForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const t = translations[currentLanguage];
  const requiredFields = [quoteForm.elements.name, quoteForm.elements.phone, quoteForm.elements.service];
  let valid = true;

  requiredFields.forEach((field) => {
    const missing = !String(field.value).trim();
    field.setAttribute("aria-invalid", String(missing));
    if (missing) valid = false;
  });

  if (!valid) {
    showMessage(t.requiredError, "error");
    requiredFields.find((field) => !String(field.value).trim())?.focus();
    return;
  }

  const formData = new FormData(quoteForm);
  const summary = buildRequestSummary(formData);

  if (FACTORY_CONTACT.whatsapp) {
    showMessage(t.whatsappOpening, "success");
    const whatsappUrl = `https://wa.me/${FACTORY_CONTACT.whatsapp}?text=${encodeURIComponent(summary)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    return;
  }

  try {
    await navigator.clipboard.writeText(summary);
    showMessage(t.copiedSuccess, "success");
  } catch (error) {
    showMessage(`${t.copyFallback}\n\n${summary}`, "success");
  }
});

quoteForm.querySelectorAll("input, select, textarea").forEach((field) => {
  field.addEventListener("input", () => field.removeAttribute("aria-invalid"));
});

const revealObserver = "IntersectionObserver" in window
  ? new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 })
  : null;

document.querySelectorAll(".reveal").forEach((element) => {
  if (revealObserver) revealObserver.observe(element);
  else element.classList.add("visible");
});

document.getElementById("year").textContent = new Date().getFullYear();
applyLanguage(currentLanguage);
