/**
 * Central Translation Dictionary & Main Application JS
 * Configured specifically for Kolak Group.
 */

/* ==========================================================================
   1. CENTRAL TRANSLATION DICTIONARY (i18n)
   ========================================================================== */
const translations = {
  en: {
    "nav.about": "About Us",
    "nav.businesses": "Our Businesses",
    "nav.people": "Our People",
    "nav.news": "News & Resources",
    "nav.career": "Career",
    "nav.contact": "Contact Us",
    "lang.toggle": "العربية",
    "hero.title": "Empowering Global Trade & Industry",
    "hero.subtitle":
      "A legacy of excellence and industrial expansion across global markets since 1920",
    "hero.cta_secondary": "Discover Kolak",
    "hero.cta_primary": "Our Services",
    "about.eyebrow": "Kolak Group Businesses",
    "about.title":
      "Forging regional progress through a century of vision and strategic diversification.",
    "about.p1":
      "Founded in Suleymania, Iraq, in the 1920s, Kolak Group began as a family-led venture in wholesale food trading and real estate under the guidance of Mr. Haji Mohammed Kolak. His leadership laid the foundation for a company built on unwavering long-term vision.",
    "about.p2":
      'By the 1960s, his son, Mr. Haj Faeq Kolak, elevated the business into a regional cornerstone. Known locally as a "Matahen" (flour merchant), he expanded operations, strengthened real estate investments, and introduced an animal feed division—broadening our footprint and cementing our legacy.',
    "about.link": "Discover Our Legacy",
    "video.title": "Driving Regional Progress & Industrial Vision",
    "video.cta": "Watch Video",
    "partners.title": "Our Clients",
    "partners.subtitle":
      "We are proud of contributing to the success of the world's leading brands",
    "partners.all_industries": "All Industries",
    "partners.all_technologies": "All Technologies",
    "partners.tag_logistics": "Logistics",
    "partners.card1_hover":
      "See How We Helped regional logistics scale operations globally",
    "partners.tag_oil_gas": "Oil & Gas",
    "partners.card2_hover":
      "See How We Helped European gas market data go digital for the first time",
    "partners.tag_software": "Computer Software",
    "partners.card3_hover":
      "Empowering cybersecurity software architecture with scalable cloud solutions",
    "partners.tag_retail": "Retail",
    "partners.card4_hover":
      "Transforming digital learning environments for millions of users worldwide",
    "partners.tag_media": "Media & Entertainment",
    "partners.card5_hover":
      "Accelerating media analytics platform delivery through automated pipelines",
    "partners.tag_healthcare": "Healthcare",
    "partners.card6_hover":
      "Optimizing supply chain visibility across international pharmaceutical networks",
    "news.eyebrow": "Insights",
    "news.title": "Latest News & Events",
    "news.subtitle":
      "Stay updated with Kolak Group's recent announcements and upcoming industrial summits.",
    "news.view_all": "View all articles",
    "news.card1_title": "Kolak Group Expands Operations",
    "news.card1_excerpt":
      "Read about our latest strategic expansion and what it means for the future of our regional manufacturing processes.",
    "news.card2_title": "Annual Industrial Summit",
    "news.event_month": "SEP",
    "news.event_date": "15",
    "news.event_location": "Beirut, Lebanon",
    "news.event_venue": "Main Exhibition Hall",
    "news.event_time": "9:00 AM",
    "news.event_tz": "EEST",
    "news.card3_title": "Commitment to Sustainability",
    "news.card3_excerpt":
      "Discover our newly launched green initiatives and our timeline for transitioning to 100% renewable energy.",
    "news.card4_title": "Global Tech Expo",
    "news.event2_month": "NOV",
    "news.event2_date": "22",
    "news.event2_location": "Dubai, UAE",
    "news.event2_venue": "Trade Centre",
    "news.event2_time": "10:00 AM",
    "news.event2_tz": "GST",
    "news.tag_expansion": "Expansion",
    "news.tag_manufacturing": "Manufacturing",
    "news.tag_summit": "Summit",
    "news.tag_industry": "Industry",
    "news.tag_sustainability": "Sustainability",
    "news.tag_green": "Green Energy",
    "news.tag_expo": "Expo",
    "news.tag_tech": "Technology",
    "footer.tagline":
      "Pioneering industrial expansion with bold engineering and refined vision.",
    "footer.copyright": "© 2026 Kolak Group. All Rights Reserved.",
    "footer.nav_title": "Navigation",
    "footer.resources_title": "Resources",
    "footer.news": "News & Events",
    "footer.press": "Press Releases",
    "footer.reports": "Reports",
    "footer.insights": "Insights",
    "footer.legal_title": "Legal & Utility",
    "footer.accessibility": "Accessibility",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Use",
    "footer.sitemap": "Sitemap",
    "partners.eyebrow": "Portfolio",
    "partners.title": "Our Businesses",
    "partners.subtitle":
      "We are proud of contributing to the growth and diversification of key regional industries.",
    "partners.explore_all": "Explore all businesses",
    "partners.tag_power": "Power & Energy",
    "partners.tag_heavy_industry": "Heavy Industry",
    "partners.tag_investment": "Investment",
    "partners.tag_retail": "Retail & Real Estate",
    "partners.tag_engineering": "Engineering",
    "partners.tag_healthcare": "Healthcare",
    "partners.tag_packaging": "Packaging",
    "partners.tag_manufacturing": "Manufacturing",
    "partners.card1_hover":
      "Powering regional growth through large-scale power generation, thermal energy production, and reliable utility infrastructure operating across strategic markets.",
    "partners.card2_hover":
      "Manufacturing high-grade industrial cement and sustainable building supplies engineered to foundation major regional infrastructure projects.",
    "partners.card3_hover":
      "Managing a diversified portfolio of commercial real estate, private equity ventures, and capital growth assets across key emerging economies.",
    "partners.card4_hover":
      "Developing premier lifestyle retail destinations and commercial centers that integrate top international brands, dining, and family entertainment.",
    "partners.card5_hover":
      "Delivering turnkey electro-mechanical contracting, heavy industrial engineering solutions, and complex facility maintenance for industrial plants.",
    "partners.card6_hover":
      "Producing high-quality pharmaceutical formulations and essential medical supplies to strengthen public health and regional healthcare networks.",
    "partners.card7_hover":
      "Specializing in food-grade tinplate packaging, precision metal containers, and high-volume filling solutions for leading food producers.",
    "partners.card8_hover":
      "Engineering high-durability container glass, architectural glazing, and customized industrial glass solutions for modern construction.",
    "hero.slide2_title": "Pioneering Sustainable Infrastructure",
    "hero.slide2_subtitle":
      "Building the foundation for tomorrow's regional economies.",
  },
  ar: {
    "nav.about": "عن المجموعة",
    "nav.businesses": "أعمالنا",
    "nav.people": "كوادرنا",
    "nav.news": "الأخبار والموارد",
    "nav.career": "الوظائف",
    "nav.contact": "تواصل معنا",
    "lang.toggle": "EN",
    "hero.title": "تمكين التجارة والصناعة العالمية",
    "hero.subtitle":
      "إرث من التميز والتوسع الصناعي عبر الأسواق العالمية منذ عام ١٩٢٠",
    "hero.cta_secondary": "اكتشف كولاك",
    "hero.cta_primary": "خدماتنا",
    "about.eyebrow": "أعمال مجموعة كولاك",
    "about.title":
      "صياغة التقدم الإقليمي من خلال قرن من الرؤية والتنويع الاستراتيجي.",
    "about.p1":
      "تأسست مجموعة كولاك في السليمانية، العراق، في عشرينيات القرن الماضي، وبدأت كمشروع عائلي في تجارة المواد الغذائية بالجملة والعقارات تحت إشراف السيد الحاج محمد كولاك. أرست قيادته الأساس لشركة مبنية على رؤية طويلة الأجل لا تتزعزع.",
    "about.p2":
      'بحلول الستينيات، ارتقى نجله، السيد الحاج فائق كولاك، بالعمل ليصبح ركيزة إقليمية. عُرف محلياً باسم "المطاحن" (تاجر الدقيق)، ووسع العمليات، وعزز الاستثمارات العقارية، وأدخل قسماً لأعلاف الحيوانات - مما وسع بصمتنا ورسخ إرثنا.',
    "about.link": "اكتشف إرثنا",
    "video.title": "قيادة التقدم الإقليمي والرؤية الصناعية",
    "video.cta": "شاهد الفيديو",
    "partners.title": "عملاؤنا",
    "partners.subtitle":
      "نفتخر بالمساهمة في نجاح العلامات التجارية الرائدة عالمياً",
    "partners.all_industries": "جميع الصناعات",
    "partners.all_technologies": "جميع التقنيات",
    "partners.tag_logistics": "الخدمات اللوجستية",
    "partners.card1_hover":
      "شاهد كيف ساعدنا الخدمات اللوجستية الإقليمية على توسيع عملياتها عالمياً",
    "partners.tag_oil_gas": "النفط والغاز",
    "partners.card2_hover":
      "شاهد كيف ساعدنا في رقمنة بيانات سوق الغاز الأوروبي لأول مرة",
    "partners.tag_software": "برمجيات الحاسوب",
    "partners.card3_hover":
      "تمكين بنية برمجيات الأمن السيبراني بحلول سحابية قابلة للتطوير",
    "partners.tag_retail": "التجزئة",
    "partners.card4_hover":
      "تحويل بيئات التعلم الرقمي لملايين المستخدمين حول العالم",
    "partners.tag_media": "الإعلام والترفيه",
    "partners.card5_hover":
      "تسريع تقديم منصة تحليلات الوسائط من خلال المسارات الآلية",
    "partners.tag_healthcare": "الرعاية الصحية",
    "partners.card6_hover":
      "تحسين رؤية سلسلة التوريد عبر شبكات الأدوية الدولية",
    "news.eyebrow": "رؤى",
    "news.title": "أحدث الأخبار والفعاليات",
    "news.subtitle":
      "ابق على اطلاع بأحدث إعلانات مجموعة كولاك والقمم الصناعية القادمة.",
    "news.view_all": "عرض جميع المقالات",
    "news.card1_title": "مجموعة كولاك توسع عملياتها",
    "news.card1_excerpt":
      "اقرأ عن أحدث توسعاتنا الاستراتيجية وما يعنيه ذلك لمستقبل عمليات التصنيع الإقليمية لدينا.",
    "news.card2_title": "القمة الصناعية السنوية",
    "news.event_month": "سبتمبر",
    "news.event_date": "١٥",
    "news.event_location": "بيروت، لبنان",
    "news.event_venue": "قاعة المعارض الرئيسية",
    "news.event_time": "٩:٠٠ صباحاً",
    "news.event_tz": "توقيت شرق أوروبا الصيفي",
    "news.card3_title": "الالتزام بالاستدامة",
    "news.card3_excerpt":
      "اكتشف مب مبادراتنا الخضراء التي تم إطلاقها حديثاً وجدولنا الزمني للتحول إلى الطاقة المتجددة بنسبة ١٠٠٪.",
    "news.card4_title": "معرض التكنولوجيا العالمي",
    "news.event2_month": "نوفمبر",
    "news.event2_date": "٢٢",
    "news.event2_location": "دبي، الإمارات",
    "news.event2_venue": "المركز التجاري",
    "news.event2_time": "١٠:٠٠ صباحاً",
    "news.event2_tz": "توقيت الخليج القياسي",
    "news.tag_expansion": "توسع",
    "news.tag_manufacturing": "تصنيع",
    "news.tag_summit": "قمة",
    "news.tag_industry": "صناعة",
    "news.tag_sustainability": "استدامة",
    "news.tag_green": "طاقة خضراء",
    "news.tag_expo": "معرض",
    "news.tag_tech": "تكنولوجيا",
    "footer.tagline": "ريادة التوسع الصناعي بهندسة متطورة ورؤية راسخة.",
    "footer.copyright": "© ٢٠٢٦ مجموعة كولاك. جميع الحقوق محفوظة.",
    "footer.nav_title": "التنقل",
    "footer.resources_title": "الموارد",
    "footer.news": "الأخبار والفعاليات",
    "footer.press": "البيانات الصحفية",
    "footer.reports": "التقارير",
    "footer.insights": "رؤى",
    "footer.legal_title": "القانونية والمرافق",
    "footer.accessibility": "سهولة الوصول",
    "footer.privacy": "سياسة الخصوصية",
    "footer.terms": "شروط الاستخدام",
    "footer.sitemap": "خريطة الموقع",
    "partners.eyebrow": "محفظة الأعمال",
    "partners.title": "شركاتنا",
    "partners.subtitle":
      "نعتز بالمساهمة في نمو وتنوع القطاعات الصناعية الرئيسية في المنطقة.",
    "partners.explore_all": "استكشف جميع الأعمال",
    "partners.tag_power": "الطاقة والكهرباء",
    "partners.tag_heavy_industry": "الصناعات الثقيلة",
    "partners.tag_investment": "الاستثمار",
    "partners.tag_retail": "التجزئة والعقارات",
    "partners.tag_engineering": "الهندسة والمقاولات",
    "partners.tag_healthcare": "الرعاية الصحية",
    "partners.tag_packaging": "التعبئة والتغليف",
    "partners.tag_manufacturing": "التصنيع",
    "partners.card1_hover":
      "تعزيز النمو الإقليمي من خلال توليد الطاقة على نطاق واسع وتطوير بنية تحتية موثوقة للمرافق عبر الأسواق الاستراتيجية.",
    "partners.card2_hover":
      "تصنيع ألمنيوم ومواد بناء وإسمنت صناعي عالي الجودة لدعم مشاريع البنية التحتية الكبرى في المنطقة.",
    "partners.card3_hover":
      "إدارة محفظة متنوعة من العقارات التجارية واستثمارات الملكية الخاصة والأصول في الاقتصاديات الناشئة الرئيسية.",
    "partners.card4_hover":
      "تطوير وجهات تسوق ومراكز تجارية تجمع بين أرقى العلامات التجارية العالمية والمطاعم والترفيه العائلي.",
    "partners.card5_hover":
      "تقديم حلول المقاولات الكهروميكانيكية والهندسة الصناعية الثقيلة وخدمات الصيانة الشاملة للمنشآت.",
    "partners.card6_hover":
      "إنتاج مستحضرات صيدلانية عالية الجودة وإمدادات طبية أساسية لتعزيز شبكات الرعاية الصحية الإقليمية.",
    "partners.card7_hover":
      "المتخصصون في تصنيع العبوات المعدنية الغذائية والحاويات الدقيقة وحلول التعبئة الصناعية عالية الحجم.",
    "partners.card8_hover":
      "تصنيع الزجاج المعماري والعبوات الزجاجية عالية المتانة والحلول الزجاجية المخصصة للبناء الحديث.",
    "hero.slide2_title": "ريادة البنية التحتية المستدامة",
    "hero.slide2_subtitle": "بناء الأساس لاقتصادات المنطقة في المستقبل.",
  },
};

/* ==========================================================================
   2. INITIALIZATION
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initThemeState();
  initLanguageState();
  setupGlobalControls();

  window.addEventListener("componentsLoaded", () => {
    const currentLang = localStorage.getItem("lang") || "en";
    translateDOM(currentLang);

    initSmartHeader();
    initVideoModal();
    initScrollReveals();
    initVideoParallax();
    initTransparentNav();
    initHeroSlider();
    initHeroParallax();
    initDraggableSliders();
  });
});

/* ==========================================================================
   3. THEME ENGINE
   ========================================================================== */
function initThemeState() {
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;
  applyTheme(savedTheme || (systemPrefersDark ? "dark" : "light"));
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  const themeIcon = document.querySelector(".theme-toggle-btn i");
  if (themeIcon) {
    themeIcon.className = theme === "dark" ? "ph ph-sun" : "ph ph-moon";
  }
}

/* ==========================================================================
   4. LANGUAGE ENGINE
   ========================================================================== */
function initLanguageState() {
  const savedLang = localStorage.getItem("lang") || "en";
  setLanguage(savedLang);
}

function setLanguage(lang) {
  const dir = lang === "ar" ? "rtl" : "ltr";
  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("dir", dir);
  localStorage.setItem("lang", lang);

  const logos = document.querySelectorAll("img[data-logo-en][data-logo-ar]");
  logos.forEach((logo) => {
    logo.src =
      lang === "ar"
        ? logo.getAttribute("data-logo-ar")
        : logo.getAttribute("data-logo-en");
  });

  translateDOM(lang);
}

window.updateTranslations = function () {
  const currentLang = localStorage.getItem("lang") || "en";
  translateDOM(currentLang);
};

function translateDOM(lang) {
  const translatableElements = document.querySelectorAll("[data-i18n]");
  translatableElements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

/* ==========================================================================
   5. DELEGATED EVENT LISTENERS
   ========================================================================== */
function setupGlobalControls() {
  document.addEventListener("click", (e) => {
    const themeBtn = e.target.closest(".theme-toggle-btn");
    if (themeBtn) {
      const currentTheme =
        document.documentElement.getAttribute("data-theme") || "light";
      applyTheme(currentTheme === "dark" ? "light" : "dark");
      return;
    }

    const langBtn = e.target.closest(".lang-toggle-btn");
    if (langBtn) {
      const currentLang = document.documentElement.getAttribute("lang") || "en";
      setLanguage(currentLang === "ar" ? "en" : "ar");
      return;
    }
  });
}

/* ==========================================================================
   6. VIDEO LIGHTBOX MODAL
   ========================================================================== */
function initVideoModal() {
  const videoFrame = document.querySelector(".video-frame");
  const videoModal = document.querySelector(".video-modal");
  if (!videoFrame || !videoModal) return;

  if (videoFrame.dataset.modalBound === "true") return;
  videoFrame.dataset.modalBound = "true";

  const modalVideo = videoModal.querySelector("video");
  const closeBtn = videoModal.querySelector(".video-modal__close");
  const backdrop = videoModal.querySelector(".video-modal__backdrop");

  function openModal() {
    videoModal.classList.add("is-open");
    document.body.style.overflow = "hidden";
    if (modalVideo) {
      modalVideo.currentTime = 0;
      modalVideo.play().catch(() => {});
    }
  }

  function closeModal() {
    videoModal.classList.remove("is-open");
    document.body.style.overflow = "";
    if (modalVideo) modalVideo.pause();
  }

  videoFrame.addEventListener("click", openModal);
  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (backdrop) backdrop.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && videoModal.classList.contains("is-open"))
      closeModal();
  });
}

/* ==========================================================================
   7. SMART REVEAL HEADER ON SCROLL
   ========================================================================== */
function initSmartHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  if (header.dataset.scrollBound === "true") return;
  header.dataset.scrollBound = "true";

  let lastScrollY = window.scrollY;
  const delta = 10;
  let ticking = false;

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = Math.max(0, window.scrollY);

          if (currentScrollY <= 80) {
            header.classList.remove("is-hidden", "is-scrolled");
            lastScrollY = currentScrollY;
            ticking = false;
            return;
          }

          if (Math.abs(lastScrollY - currentScrollY) <= delta) {
            ticking = false;
            return;
          }

          header.classList.add("is-scrolled");
          if (currentScrollY > lastScrollY) {
            header.classList.add("is-hidden");
          } else {
            header.classList.remove("is-hidden");
          }

          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true },
  );
}

/* ==========================================================================
   8. SCROLL REVEAL ANIMATIONS
   ========================================================================== */
function initScrollReveals() {
  const revealElements = document.querySelectorAll(".reveal-element");
  if (revealElements.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -100px 0px",
    threshold: 0.15,
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach((el) => {
    if (!el.dataset.observed) {
      revealObserver.observe(el);
      el.dataset.observed = "true";
    }
  });
}

/* ==========================================================================
   9. VIDEO PARALLAX ENGINE
   ========================================================================== */
function initVideoParallax() {
  if (window.videoParallaxRunning) return;
  window.videoParallaxRunning = true;

  function parallaxLoop() {
    const section = document.querySelector("#video-showcase");
    const title = document.querySelector(".video-parallax-title");

    if (section && title) {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const sectionCenter = rect.top + rect.height / 2;
        const screenCenter = windowHeight / 2;

        const diff = sectionCenter - screenCenter;
        let translateY = diff * 0.3;

        translateY = Math.max(0, Math.min(150, translateY));
        title.style.transform = `translateY(${translateY}px)`;
      }
    }
    window.requestAnimationFrame(parallaxLoop);
  }

  window.requestAnimationFrame(parallaxLoop);
}

/* ==========================================================================
   10. TRANSPARENT NAVIGATION LOGIC
   ========================================================================== */
function initTransparentNav() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  function checkScroll() {
    if (window.scrollY < 50) {
      header.classList.add("at-top");
    } else {
      header.classList.remove("at-top");
    }
  }

  window.addEventListener("scroll", checkScroll, { passive: true });
  checkScroll();
}

/* ==========================================================================
   11. HERO SLIDER
   ========================================================================== */
function initHeroSlider() {
  if (window.heroSliderInitialized) return;

  const waitForDOM = setInterval(() => {
    const slides = document.querySelectorAll(".hero-slide");
    const nextBtn = document.querySelector(".hero-arrow.next");
    const prevBtn = document.querySelector(".hero-arrow.prev");
    const progressFill = document.querySelector(".hero-progress-fill");

    const currentCounter = document.querySelector(".current-slide");
    const totalCounter = document.querySelector(".total-slides");

    if (slides.length === 0 || !nextBtn || !prevBtn || !progressFill) return;

    clearInterval(waitForDOM);
    window.heroSliderInitialized = true;

    if (totalCounter) totalCounter.textContent = slides.length;

    let currentSlide = 0;
    let progressAnimation;
    const slideDuration = 5000;

    function goToSlide(index) {
      const oldSlide = slides[currentSlide];

      oldSlide.classList.remove("is-active");
      oldSlide.classList.add("is-exiting");

      setTimeout(() => {
        oldSlide.classList.remove("is-exiting");
      }, 1200);

      currentSlide = (index + slides.length) % slides.length;
      slides[currentSlide].classList.add("is-active");

      if (currentCounter) currentCounter.textContent = currentSlide + 1;

      resetProgress();
    }

    function nextSlide() {
      goToSlide(currentSlide + 1);
    }
    function prevSlide() {
      goToSlide(currentSlide - 1);
    }

    function resetProgress() {
      cancelAnimationFrame(progressAnimation);
      progressFill.style.width = "0%";

      let startTime = Date.now();

      function updateProgress() {
        let elapsed = Date.now() - startTime;
        let percent = (elapsed / slideDuration) * 100;

        if (percent >= 100) {
          progressFill.style.width = `100%`;
          nextSlide();
        } else {
          progressFill.style.width = `${percent}%`;
          progressAnimation = requestAnimationFrame(updateProgress);
        }
      }

      progressAnimation = requestAnimationFrame(updateProgress);
    }

    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    resetProgress();
  }, 100);
}
initHeroSlider();

/* ==========================================================================
   12. HERO MOUSE PARALLAX ENGINE
   ========================================================================== */
function initHeroParallax() {
  const heroSection = document.querySelector(".hero-advanced-section");
  if (!heroSection) return;

  let requestRef;
  const isRTL = document.documentElement.dir === "rtl";

  heroSection.addEventListener("mousemove", (e) => {
    if (requestRef) cancelAnimationFrame(requestRef);

    requestRef = requestAnimationFrame(() => {
      const rect = heroSection.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      let moveX = (e.clientX - rect.left - centerX) / centerX;
      const moveY = (e.clientY - rect.top - centerY) / centerY;

      if (isRTL) moveX = -moveX;

      const images = heroSection.querySelectorAll(".parallax-target");
      images.forEach((img) => {
        const rtlScale = isRTL ? " scaleX(-1)" : "";
        img.style.transform = `translate(${moveX * -5}px, 0px)${rtlScale}`;
      });
    });
  });

  heroSection.addEventListener("mouseleave", () => {
    const images = heroSection.querySelectorAll(".parallax-target");
    images.forEach((img) => {
      const rtlScale = isRTL ? " scaleX(-1)" : "";
      img.style.transform = `translate(0px, 0px)${rtlScale}`;
    });
  });
}

/* ==========================================================================
   CUSTOM WEB COMPONENTS
   ========================================================================== */
class KolakSectionHeader extends HTMLElement {
  connectedCallback() {
    const eyebrow = this.getAttribute("eyebrow") || "";
    const titleText = this.getAttribute("title") || "";
    const titleI18n = this.getAttribute("title-i18n") || "";
    const descText = this.getAttribute("desc") || "";
    const descI18n = this.getAttribute("desc-i18n") || "";
    const linkText = this.getAttribute("link-text") || "";
    const linkHref = this.getAttribute("link-href") || "#";

    let linkHTML = "";
    if (linkText) {
      linkHTML = `
        <a href="${linkHref}" class="section-header-advanced__link">
          <span data-i18n="${this.getAttribute("link-i18n") || ""}">${linkText}</span>
          <i class="ph-bold ph-arrow-right"></i>
        </a>
      `;
    }

    let descHTML = "";
    if (descText || descI18n) {
      descHTML = `<p class="section-header-advanced__desc" data-i18n="${descI18n}">${descText}</p>`;
    }

    this.innerHTML = `
      <div class="section-header-advanced">
        <div class="section-header-advanced__main">
          ${eyebrow ? `<span class="section-header-advanced__eyebrow" data-i18n="${this.getAttribute("eyebrow-i18n") || ""}">${eyebrow}</span>` : ""}
          <h2 class="section-header-advanced__title" data-i18n="${titleI18n}">${titleText}</h2>
          ${descHTML}
        </div>
        ${linkHTML}
      </div>
    `;
  }
}
customElements.define("kolak-section-header", KolakSectionHeader);

/* ==========================================================================
   13. DRAGGABLE HORIZONTAL SCROLL
   ========================================================================== */
function initDraggableSliders() {
  const sliders = document.querySelectorAll(".cards-scroll-track");

  sliders.forEach((slider) => {
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.style.cursor = "grabbing";
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.style.cursor = "grab";
    });

    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.style.cursor = "grab";
    });

    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.5;
      slider.scrollLeft = scrollLeft - walk;
    });
  });
}
