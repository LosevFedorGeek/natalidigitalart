const WEB3FORMS_ACCESS_KEY = "38155835-3b6e-4487-8b7c-53662c37263d";

document.addEventListener("DOMContentLoaded", () => {
  const typograph = (text) => {
    if (!text || typeof text !== "string") return text;
    return text
      .replace(/\s+—\s+/g, "\u00A0— ")
      .replace(
        /(^|[\s(«"'>])(в|во|на|с|со|к|ко|от|ото|до|по|из|изо|о|об|обо|у|за|под|подо|над|надо|при|про|через|и|а|но|да|или|ли|бы|б|же|ж)\s+/gi,
        "$1$2\u00A0",
      )
      .replace(
        /(\d+)\s+(лет|года|год|проектов|проекта|проект|часов|часа|час|мин|сек)/gi,
        "$1\u00A0$2",
      )
      .replace(/(\d+)\+(\s+)/g, "$1+\u00A0");
  };

  const i18n = {
    ru: {
      author_name: "Наталья Кочуланова",
      nav_services: "Услуги",
      nav_portfolio: "Портфолио",
      nav_about: "Опыт",
      nav_contacts: "Контакты",
      btn_discuss: "Обсудить проект",
      btn_contact: "Связаться",
      hero_title:
        "Комплексный дизайн для\u00A0бизнеса: от\u00A0айдентики до\u00A0сайтов",
      hero_subtitle:
        "20+\u00A0лет практики, академическая художественная школа и\u00A0точная допечатная подготовка. Создаю визуальные решения, которые помогают брендам говорить на\u00A0языке премиального минимализма.",
      btn_portfolio: "Портфолио",
      services_title: "Услуги и\u00A0специализация",
      services_subtitle:
        "Многолетний опыт в\u00A0различных областях визуального дизайна позволяет решать задачи любой сложности под\u00A0ключ.",
      service_1_text:
        "Проектирование и\u00A0разработка сайтов, многостраничных лендингов на\u00A0Tilda, адаптивный дизайн для\u00A0идеального отображения на\u00A0всех устройствах.",
      service_2_title: "Брендинг & Айдентика",
      service_2_text:
        "Разработка уникальных логотипов, создание фирменного стиля, констант бренда и\u00A0эстетичного визуала для\u00A0социальных сетей.",
      service_3_title: "Презентации & Инфографика",
      service_3_text:
        "Профессиональные питч-деки, презентации для\u00A0инвесторов и\u00A0партнёров, а\u00A0также инфографика и\u00A0карточки для\u00A0маркетплейсов.",
      service_4_title: "Полиграфия & Prepress",
      service_4_text:
        "Дизайн печатной продукции и\u00A0материалов для\u00A0бизнеса. Точная допечатная подготовка макетов под\u00A0стандарты и\u00A0спецификации типографий.",
      portfolio_title: "Избранные работы",
      portfolio_subtitle:
        "Проекты на\u00A0стыке чистого искусства, современных медиатехнологий и\u00A0практической пользы для\u00A0коммерческих клиентов.",
      btn_see_all: "Смотреть все",
      proj_1_desc: "Премиальный сайт строительной компании",
      proj_2_desc: "Концепт e-commerce магазина одежды",
      proj_3_desc: "Айдентика бренда косметики и\u00A0SMM",
      proj_4_desc: "Продающая инфографика для\u00A0маркетплейсов",
      about_badge: "ПОДХОД И\u00A0ОПЫТ",
      about_title:
        "Практичный дизайн с\u00A0опорой на\u00A0техническую экспертизу",
      about_lead:
        "От\u00A0пиксельной сетки в\u00A0диджитал до\u00A0физических материалов",
      about_text:
        "Понимаю работу конверсии в\u00A0вебе и\u00A0нюансы реального производства. Создаю продуманные макеты: они привлекают клиентов в\u00A0сети и\u00A0без\u00A0проблем встают на\u00A0печать в\u00A0типографиях или\u00A0на\u00A0сборку в\u00A0рекламных цехах.",
      btn_about_more: "Подробнее об\u00A0авторе",
      stat_1_label: "ЛЕТ В\u00A0ДИЗАЙНЕ И\u00A0ПРОИЗВОДСТВЕ",
      stat_2_label: "ЛЕТ В\u00A0PREPRESS И\u00A0РЕКЛАМНЫХ ЦЕХАХ",
      stat_3_label: "ПОЛНЫЙ КОНТРОЛЬ ЦВЕТООПИСАНИЯ",
      footer_title: "Обсудим ваш проект и\u00A0задачи бизнеса",
      footer_subtitle:
        "Напишите мне любым удобным способом, чтобы рассчитать стоимость, сроки и\u00A0технические нюансы реализации.",
      footer_copy: "©\u00A02026 Наталья Кочуланова. Все права защищены.",
      modal_contact_title: "Обсудить проект",
      modal_contact_sub:
        "Выберите направление и\u00A0укажите контакт\u00A0— я\u00A0свяжусь с\u00A0вами в\u00A0течение 2–3\u00A0часов с\u00A0оценкой сроков.",
      label_direction: "Направление проекта",
      label_preferred_channel: "Предпочитаемый способ связи",
      chip_web: "Веб-сайт",
      chip_identity: "Айдентика",
      chip_infographics: "Инфографика",
      chip_print: "Полиграфия",
      chip_complex: "Комплекс",
      chip_other: "Другое",
      label_name: "Ваше имя *",
      label_contact: "Контакт *",
      label_task: "О задаче (необязательно)",
      placeholder_name: "Александр",
      placeholder_contact: "@username или телефон",
      placeholder_task: "Сроки, задачи, ссылки на референсы или ТЗ...",
      btn_submit_lead: "Отправить заявку",
      privacy_notice:
        "Нажимая кнопку, вы подтверждаете согласие на\u00A0конфиденциальную обработку контактных данных.",
      about_meta_edu: "Образование",
      about_edu_1: "ЧГУ • ИЗО и\u00A0черчение",
      about_edu_2: "Школа «Логомашина» • Digital-дизайн",
      about_meta_exp: "Опыт в\u00A0индустрии",
      about_exp_val: "20+\u00A0лет практики • 150+\u00A0проектов",
      about_role: "Графический & Digital-дизайнер • Prepress-эксперт",
      about_lead_full:
        "Академическое художественное образование (ЧГУ) в\u00A0сочетании с\u00A0многолетним опытом в\u00A0реальном производстве рекламных цехов и\u00A0типографий.",
      about_text_full:
        "Свободно объединяю технологические стандарты физических материалов (prepress, спуски полос, фрезеровка, плоттерная резка) с\u00A0современным цифровым дизайном (UI/UX, Tilda Z-Block, инфографика, бизнес-презентации). Для\u00A0генерации уникальных арт-активов и\u00A0ускорения рутинных этапов активно использую Midjourney и\u00A0ChatGPT.",
      about_skills_title: "Ключевые компетенции",
      about_card_1:
        "Проектирование в\u00A0Figma, верстка лендингов на\u00A0Tilda, продающая инфографика и\u00A0карточки для\u00A0маркетплейсов, 150+\u00A0питч-деков и\u00A0презентаций для\u00A0EdTech и\u00A0бизнеса.",
      about_card_2:
        "Владение Adobe Photoshop и\u00A0CorelDRAW. Допечатная подготовка любой сложности под\u00A0стандарты производств: CMYK, УФ-печать, плоттерная резка, точные контуры.",
      about_card_3_title: "Брендинг & Носители",
      about_card_3:
        "Логотипы, бренд-константы, навигационные интерьерные системы, комплексный дизайн оформления фасадов и\u00A0брендирования автотранспорта.",
      about_card_4_title: "Арт-дирекшн",
      about_card_4:
        "Профессиональный контроль цвета, типографики и\u00A0иерархии композиции, опыт руководства художественным отделением и\u00A0кураторства выставочных экспозиций.",
      about_work_title: "Опыт работы",
      timeline_1_period: "2022\u00A0— настоящее время",
      timeline_1_role: "Digital-дизайнер / Фриланс",
      timeline_1_desc:
        "Разработка коммерческой графики, сайтов на\u00A0Tilda, баннеров и\u00A0интерфейсов. Курс продуктового дизайна в\u00A0«Логомашине» (2025–2026).",
      timeline_palme_period: "2021\u00A0— 2022",
      timeline_palme_role: "Graphic Designer / Palme School (Канада)",
      timeline_palme_desc:
        "Создание 150+\u00A0презентаций по\u00A0гайдлайнам, стилизация иллюстраций для\u00A0канадской онлайн-школы.",
      timeline_2_period: "2013\u00A0— 2026",
      timeline_2_role:
        "Руководитель художественного отделения / Арт-консультант",
      timeline_2_desc:
        "Руководство выставочной деятельностью и\u00A0визуальным стилем крупных арт-событий. Экспертный контроль композиции и\u00A0цветового пространства.",
      timeline_3_period: "2002\u00A0— 2013",
      timeline_3_role:
        "Дизайнер-технолог / Prepress-специалист (РА\u00A0«Прорыв», ЗАО\u00A0«ЦРТ»)",
      timeline_3_desc:
        "Рекламная поддержка ХК\u00A0«Северсталь» и\u00A0сети «Мори-Синема». Проектирование наружной и\u00A0интерьерной рекламы: от\u00A0векторных чертежей до\u00A0сборки в\u00A0цехах и\u00A0монтажа.",
      about_tools_title: "Инструменты и\u00A0технологии",
      btn_discuss_author: "Обсудить проект с\u00A0автором",
    },
    en: {
      author_name: "Natalia Kochulanova",
      nav_services: "Services",
      nav_portfolio: "Portfolio",
      nav_about: "Experience",
      nav_contacts: "Contacts",
      btn_discuss: "Discuss Project",
      btn_contact: "Contact Me",
      hero_title:
        "Comprehensive Design for\u00A0Business: Identity to\u00A0Websites",
      hero_subtitle:
        "20+\u00A0years of\u00A0expertise, academic art school background, and\u00A0precision prepress. Creating visual solutions that help brands speak premium minimalism.",
      btn_portfolio: "Portfolio",
      services_title: "Services & Specialization",
      services_subtitle:
        "Decades of\u00A0design practice allowing turnkey delivery of\u00A0complex visual solutions.",
      service_1_text:
        "UI/UX design, custom Tilda landing pages, and\u00A0responsive websites engineered for\u00A0all modern devices.",
      service_2_title: "Branding & Identity",
      service_2_text:
        "Unique brand marks, corporate identity systems, brand guidelines, and\u00A0high-converting social media visual kits.",
      service_3_title: "Presentations & Infographics",
      service_3_text:
        "Investor pitch decks, commercial presentations for\u00A0EdTech and\u00A0enterprises, and\u00A0e-commerce marketplace cards.",
      service_4_title: "Print Design & Prepress",
      service_4_text:
        "Marketing print collateral with\u00A0strict production prepress matching technical printing house specifications.",
      portfolio_title: "Selected Works",
      portfolio_subtitle:
        "Projects merging pure visual art, modern digital tech, and\u00A0measurable commercial value.",
      btn_see_all: "View Full Archive",
      proj_1_desc: "Premium website for architectural construction firm",
      proj_2_desc: "E-commerce fashion store concept",
      proj_3_desc: "Cosmetics brand identity & SMM direction",
      proj_4_desc: "High-converting marketplace product infographics",
      about_badge: "EXPERTISE & CRAFT",
      about_title: "Results-driven design grounded in\u00A0technical precision",
      about_lead: "From digital pixel grid to\u00A0tangible physical materials",
      about_text:
        "Mastering web conversion metrics and\u00A0real-world printing facility nuances. Designing assets that captivate audiences online and\u00A0run through production machinery without a\u00A0hitch.",
      btn_about_more: "Read Full Bio",
      stat_1_label: "YEARS IN\u00A0DESIGN & PRODUCTION",
      stat_2_label: "YEARS IN\u00A0PREPRESS & SIGNAGE SHOPS",
      stat_3_label: "FULL COLOR SPACE CONTROL",
      footer_title: "Let's discuss your next breakthrough project",
      footer_subtitle:
        "Reach out via any channel below to\u00A0get cost projections, timelines, and\u00A0technical architecture.",
      footer_copy: "©\u00A02026 Natalia Kochulanova. All rights reserved.",
      modal_contact_title: "Start a\u00A0Project",
      modal_contact_sub:
        "Select an\u00A0area and\u00A0leave your handle\u00A0— I\u00A0will get back within 2–3\u00A0hours with\u00A0timeline estimates.",
      label_direction: "Project Area",
      label_preferred_channel: "Preferred Communication Channel",
      chip_web: "Website",
      chip_identity: "Identity",
      chip_infographics: "Infographics",
      chip_print: "Print & Prepress",
      chip_complex: "Turnkey Brand",
      chip_other: "Other",
      label_name: "Your Name *",
      label_contact: "Contact *",
      label_task: "Project Details (optional)",
      placeholder_name: "Alexander",
      placeholder_contact: "@username or phone",
      placeholder_task: "Scope, timelines, references, technical brief...",
      btn_submit_lead: "Send Inquiry",
      privacy_notice:
        "By submitting, you consent to\u00A0confidential processing of\u00A0your contact details.",
      about_meta_edu: "Education",
      about_edu_1: "ChSU • Fine Arts & Technical Drawing",
      about_edu_2: "Logomachine School • Digital Product Design",
      about_meta_exp: "Industry Track",
      about_exp_val: "20+\u00A0years practice • 150+\u00A0completed projects",
      about_role: "Graphic & Digital Designer • Prepress Specialist",
      about_lead_full:
        "Academic fine arts degree paired with\u00A0deep engineering production experience inside signage facilities and\u00A0print houses.",
      about_text_full:
        "Seamlessly combining physical manufacturing rules (color separations, imposition, CNC milling, plotting) with\u00A0digital interfaces (UI/UX, Tilda Z-Block, business slide decks). Integrating Midjourney and\u00A0ChatGPT to\u00A0generate proprietary visual assets and\u00A0accelerate project turnarounds.",
      about_skills_title: "Core Competencies",
      about_card_1:
        "Figma wireframing, Tilda Z-Block development, e-commerce marketplace infographics, and\u00A0150+\u00A0pitch presentations for\u00A0EdTech and\u00A0corporate clients.",
      about_card_2:
        "Expert Adobe Photoshop & CorelDRAW commands. Flawless prepress for\u00A0CMYK offset, UV printing, plot cutting, and\u00A0exact vector contours.",
      about_card_3_title: "Branding & Wayfinding",
      about_card_3:
        "Logos, brand books, interior navigation wayfinding, corporate facade transformations, and\u00A0vehicle fleet wraps.",
      about_card_4_title: "Art Direction",
      about_card_4:
        "Senior mastery over color hierarchy, typography scales, and\u00A0composition, with\u00A0past background leading an\u00A0academic art division.",
      about_work_title: "Career Milestones",
      timeline_1_period: "2022\u00A0— Present",
      timeline_1_role: "Digital Designer / Independent",
      timeline_1_desc:
        "Commercial web and\u00A0visual assets, Tilda landing pages, and\u00A0UI interfaces. Advanced product design certification at\u00A0Logomachine (2025–2026).",
      timeline_palme_period: "2021\u00A0— 2022",
      timeline_palme_role: "Graphic Designer / Palme School (Canada)",
      timeline_palme_desc:
        "Production of\u00A0150+\u00A0brand-aligned presentations, custom illustration styling for\u00A0a\u00A0Canadian online school.",
      timeline_2_period: "2013\u00A0— 2026",
      timeline_2_role: "Head of Fine Arts Department / Art Consultant",
      timeline_2_desc:
        "Curating exhibition environments and\u00A0brand visuals for\u00A0major regional arts events. Rigorous oversight of\u00A0color spaces and\u00A0aesthetics.",
      timeline_3_period: "2002\u00A0— 2013",
      timeline_3_role:
        "Production Designer / Prepress Lead (RA Proryv, CJSC CRT)",
      timeline_3_desc:
        "Campaign visuals for Severstal Hockey Club and Mori Cinema. Turnkey signage engineering from vector blueprints to assembly and field installation.",
      about_tools_title: "Tools & Stack",
      btn_discuss_author: "Discuss Project With Author",
    },
  };

  let currentLang = localStorage.getItem("site_lang") || "ru";

  const applyLanguage = (lang) => {
    currentLang = lang;
    localStorage.setItem("site_lang", lang);
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (i18n[lang] && i18n[lang][key]) {
        el.textContent = typograph(i18n[lang][key]);
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (i18n[lang] && i18n[lang][key]) {
        el.placeholder = i18n[lang][key];
      }
    });

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("is-active", btn.getAttribute("data-lang") === lang);
    });
  };

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetLang = btn.getAttribute("data-lang");
      applyLanguage(targetLang);
    });
  });

  applyLanguage(currentLang);

  let currentTheme = localStorage.getItem("site_theme") || "light";

  const applyTheme = (theme) => {
    currentTheme = theme;
    localStorage.setItem("site_theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  };

  document.querySelectorAll(".js-theme-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
    });
  });

  applyTheme(currentTheme);

  const scrollBar = document.getElementById("scroll-progress");
  const headerEl = document.querySelector(".header");

  window.addEventListener(
    "scroll",
    () => {
      const scrollY = window.scrollY;
      if (headerEl) {
        if (scrollY > 30) {
          headerEl.classList.add("is-scrolled");
        } else {
          headerEl.classList.remove("is-scrolled");
        }
      }
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (scrollY / totalHeight) * 100 : 0;
      if (scrollBar) scrollBar.style.width = `${progress}%`;
    },
    { passive: true },
  );

  const isFinePointer = window.matchMedia(
    "(hover: hover) and (pointer: fine)",
  ).matches;

  if (isFinePointer) {
    let mouseX = -500;
    let mouseY = -500;
    let auraX = mouseX;
    let auraY = mouseY;
    let dotX = mouseX;
    let dotY = mouseY;

    const cursorDot = document.getElementById("cursor-dot");
    const cursorAura = document.getElementById("cursor-aura");

    window.addEventListener(
      "mousemove",
      (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        if (cursorDot) cursorDot.classList.remove("is-hidden");
        if (cursorAura) cursorAura.classList.remove("is-hidden");
      },
      { passive: true },
    );

    document.addEventListener("mouseleave", () => {
      if (cursorDot) cursorDot.classList.add("is-hidden");
      if (cursorAura) cursorAura.classList.add("is-hidden");
    });

    document.addEventListener("mousedown", () => {
      if (cursorAura) {
        cursorAura.style.setProperty("--cx", `${auraX.toFixed(1)}px`);
        cursorAura.style.setProperty("--cy", `${auraY.toFixed(1)}px`);
        cursorAura.classList.add("is-clicking");
      }
    });

    document.addEventListener("mouseup", () => {
      if (cursorAura) cursorAura.classList.remove("is-clicking");
    });

    const interactiveSelectors =
      "a, button, input, textarea, .service-card, .project-card, .chip, .channel-tab, .theme-toggle, .lang-btn, .burger-btn";

    document.querySelectorAll(interactiveSelectors).forEach((el) => {
      el.addEventListener("mouseenter", () => {
        if (cursorAura) cursorAura.classList.add("is-hovering");
        if (cursorDot) cursorDot.classList.add("is-hovering");
      });
      el.addEventListener("mouseleave", () => {
        if (cursorAura) cursorAura.classList.remove("is-hovering");
        if (cursorDot) cursorDot.classList.remove("is-hovering");
      });
    });

    const magneticElements = Array.from(
      document.querySelectorAll("[data-magnetic]"),
    ).map((el) => ({
      el,
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
    }));

    const tiltCards = Array.from(
      document.querySelectorAll(".service-card, .project-card, .tilt-target"),
    ).map((el) => ({
      el,
      rx: 0,
      ry: 0,
      targetRx: 0,
      targetRy: 0,
    }));

    const renderPhysics = () => {
      dotX += (mouseX - dotX) * 0.75;
      dotY += (mouseY - dotY) * 0.75;
      auraX += (mouseX - auraX) * 0.16;
      auraY += (mouseY - auraY) * 0.16;

      if (cursorDot) {
        cursorDot.style.transform = `translate3d(${dotX.toFixed(1)}px, ${dotY.toFixed(1)}px, 0) translate(-50%, -50%)`;
      }
      if (cursorAura) {
        cursorAura.style.transform = `translate3d(${auraX.toFixed(1)}px, ${auraY.toFixed(1)}px, 0) translate(-50%, -50%)`;
      }

      magneticElements.forEach((item) => {
        const rect = item.el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = mouseX - cx;
        const dy = mouseY - cy;
        const dist = Math.hypot(dx, dy);
        const radius = Math.max(rect.width, rect.height) * 0.8;

        if (dist < radius) {
          const power = Math.pow(1 - dist / radius, 1.6);
          item.targetX = dx * power * 0.08;
          item.targetY = dy * power * 0.08;
        } else {
          item.targetX = 0;
          item.targetY = 0;
        }

        item.x += (item.targetX - item.x) * 0.15;
        item.y += (item.targetY - item.y) * 0.15;

        if (Math.abs(item.x) > 0.01 || Math.abs(item.y) > 0.01) {
          item.el.style.transform = `translate3d(${item.x.toFixed(2)}px, ${item.y.toFixed(2)}px, 0)`;
        } else {
          item.el.style.transform = "";
        }
      });

      tiltCards.forEach((item) => {
        const rect = item.el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = mouseX - cx;
        const dy = mouseY - cy;
        const buffer = 36;

        if (
          mouseX >= rect.left - buffer &&
          mouseX <= rect.right + buffer &&
          mouseY >= rect.top - buffer &&
          mouseY <= rect.bottom + buffer
        ) {
          const maxW = rect.width / 2 + buffer;
          const maxH = rect.height / 2 + buffer;
          const nx = Math.max(-1, Math.min(1, dx / maxW));
          const ny = Math.max(-1, Math.min(1, dy / maxH));

          item.targetRx = -ny * 1.8;
          item.targetRy = nx * 1.8;

          const innerX = mouseX - rect.left;
          const innerY = mouseY - rect.top;
          item.el.style.setProperty("--mouse-x", `${innerX.toFixed(1)}px`);
          item.el.style.setProperty("--mouse-y", `${innerY.toFixed(1)}px`);
          item.el.classList.add("is-proximity");
        } else {
          item.targetRx = 0;
          item.targetRy = 0;
          item.el.classList.remove("is-proximity");
        }

        item.rx += (item.targetRx - item.rx) * 0.1;
        item.ry += (item.targetRy - item.ry) * 0.1;

        if (Math.abs(item.rx) > 0.01 || Math.abs(item.ry) > 0.01) {
          item.el.style.transform = `perspective(1000px) rotateX(${item.rx.toFixed(2)}deg) rotateY(${item.ry.toFixed(2)}deg)`;
        } else {
          item.el.style.transform = "";
        }
      });

      requestAnimationFrame(renderPhysics);
    };

    requestAnimationFrame(renderPhysics);
  }

  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px 60px 0px" },
    );

    reveals.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add("is-visible");
      } else {
        revealObserver.observe(el);
      }
    });
  } else {
    reveals.forEach((el) => el.classList.add("is-visible"));
  }

  const counters = document.querySelectorAll(".js-counter");
  let countersTriggered = false;

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !countersTriggered) {
          countersTriggered = true;
          counters.forEach((counter) => {
            const target = +counter.getAttribute("data-target");
            const duration = 1400;
            const start = performance.now();

            const updateNumber = (time) => {
              const elapsed = time - start;
              const progress = Math.min(elapsed / duration, 1);
              const easeOutQuad = 1 - (1 - progress) * (1 - progress);
              const current = Math.floor(easeOutQuad * target);
              counter.innerText = current;

              if (progress < 1) {
                requestAnimationFrame(updateNumber);
              } else {
                counter.innerText = target;
              }
            };

            requestAnimationFrame(updateNumber);
          });
        }
      });
    },
    { threshold: 0.2 },
  );

  const aboutSection = document.querySelector(".about");
  if (aboutSection) counterObserver.observe(aboutSection);

  const heroSlider = document.getElementById("hero-slider");
  if (heroSlider) {
    const slides = heroSlider.querySelectorAll(".hero__slide");
    const bullets = heroSlider.querySelectorAll(".hero__slider-bullet");
    const counter = document.getElementById("slider-counter");
    const btnNext = heroSlider.querySelector(".js-slider-next");
    const btnPrev = heroSlider.querySelector(".js-slider-prev");

    let currentIndex = 0;
    let slideTimer = null;
    const intervalTime = 4000;

    let touchStartX = 0;
    let touchEndX = 0;

    const showSlide = (index) => {
      slides.forEach((slide) => slide.classList.remove("is-active"));
      bullets.forEach((bullet) => bullet.classList.remove("is-active"));

      currentIndex = (index + slides.length) % slides.length;

      slides[currentIndex].classList.add("is-active");

      const activeBullet = bullets[currentIndex];
      if (activeBullet) {
        void activeBullet.offsetWidth;
        activeBullet.classList.add("is-active");
      }

      if (counter) {
        const currentPad = String(currentIndex + 1).padStart(2, "0");
        const totalPad = String(slides.length).padStart(2, "0");
        counter.textContent = `${currentPad} / ${totalPad}`;
      }
    };

    const nextSlide = () => showSlide(currentIndex + 1);
    const prevSlide = () => showSlide(currentIndex - 1);

    const startTimer = () => {
      stopTimer();
      slideTimer = setInterval(nextSlide, intervalTime);
      heroSlider.classList.remove("is-paused");
    };

    const stopTimer = () => {
      if (slideTimer) {
        clearInterval(slideTimer);
        slideTimer = null;
      }
      heroSlider.classList.add("is-paused");
    };

    if (btnNext) {
      btnNext.addEventListener("click", (e) => {
        e.stopPropagation();
        nextSlide();
        startTimer();
      });
    }

    if (btnPrev) {
      btnPrev.addEventListener("click", (e) => {
        e.stopPropagation();
        prevSlide();
        startTimer();
      });
    }

    bullets.forEach((bullet) => {
      bullet.addEventListener("click", (e) => {
        e.stopPropagation();
        const targetIndex = parseInt(bullet.getAttribute("data-index"), 10);
        showSlide(targetIndex);
        startTimer();
      });
    });

    heroSlider.addEventListener("mouseenter", stopTimer);
    heroSlider.addEventListener("mouseleave", startTimer);

    heroSlider.addEventListener(
      "touchstart",
      (e) => {
        touchStartX = e.changedTouches[0].screenX;
        stopTimer();
      },
      { passive: true },
    );

    heroSlider.addEventListener(
      "touchend",
      (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 40) {
          if (diff > 0) nextSlide();
          else prevSlide();
        }
        startTimer();
      },
      { passive: true },
    );

    showSlide(0);
    startTimer();
  }

  const chips = document.querySelectorAll("#service-chips .chip");
  const serviceInput = document.getElementById("selected-service");
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("is-active"));
      chip.classList.add("is-active");
      if (serviceInput) {
        serviceInput.value = chip.getAttribute("data-value");
      }
    });
  });

  const channelTabs = document.querySelectorAll("#channel-tabs .channel-tab");
  const channelInput = document.getElementById("selected-channel");
  const contactInput = document.getElementById("user-contact");

  channelTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      channelTabs.forEach((t) => t.classList.remove("is-active"));
      tab.classList.add("is-active");

      const channelName = tab.getAttribute("data-channel");
      const placeholder = tab.getAttribute("data-placeholder");

      if (channelInput) channelInput.value = channelName;
      if (contactInput) contactInput.placeholder = placeholder;
    });
  });

  const burgerBtn = document.querySelector(".js-burger");
  const mobileNav = document.querySelector(".js-nav");
  const navLinks = document.querySelectorAll(".header__link");

  if (burgerBtn && mobileNav) {
    const toggleMenu = () => {
      const isOpen = mobileNav.classList.toggle("is-open");
      burgerBtn.classList.toggle("is-active", isOpen);
      burgerBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
      mobileNav.setAttribute("aria-hidden", isOpen ? "false" : "true");
      document.body.style.overflow = isOpen ? "hidden" : "";
      document.documentElement.style.overflow = isOpen ? "hidden" : "";
    };

    const closeMenu = () => {
      mobileNav.classList.remove("is-open");
      burgerBtn.classList.remove("is-active");
      burgerBtn.setAttribute("aria-expanded", "false");
      mobileNav.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };

    burgerBtn.addEventListener("click", toggleMenu);

    navLinks.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mobileNav.classList.contains("is-open")) {
        closeMenu();
      }
    });
  }

  const aboutModal = document.getElementById("about-modal");
  const contactModal = document.getElementById("contact-modal");
  const openContactButtons = document.querySelectorAll(".js-open-modal");
  const openAboutButtons = document.querySelectorAll(".js-open-about-modal");
  const closeButtons = document.querySelectorAll(".js-close-modal");
  const aboutToContactBtn = document.querySelector(".js-about-to-contact");

  const openModal = (targetModal) => {
    if (!targetModal) return;
    if (mobileNav && mobileNav.classList.contains("is-open")) {
      mobileNav.classList.remove("is-open");
      burgerBtn.classList.remove("is-active");
      burgerBtn.setAttribute("aria-expanded", "false");
      mobileNav.setAttribute("aria-hidden", "true");
    }
    targetModal.classList.add("is-open");
    targetModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  };

  const closeModal = (targetModal) => {
    if (targetModal) {
      targetModal.classList.remove("is-open");
      targetModal.setAttribute("aria-hidden", "true");
    } else {
      document.querySelectorAll(".modal.is-open").forEach((m) => {
        m.classList.remove("is-open");
        m.setAttribute("aria-hidden", "true");
      });
    }
    const anyStillOpen = document.querySelector(".modal.is-open");
    if (!anyStillOpen) {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
  };

  openContactButtons.forEach((btn) => {
    btn.addEventListener("click", () => openModal(contactModal));
  });

  openAboutButtons.forEach((btn) => {
    btn.addEventListener("click", () => openModal(aboutModal));
  });

  if (aboutToContactBtn) {
    aboutToContactBtn.addEventListener("click", () => {
      closeModal(aboutModal);
      setTimeout(() => openModal(contactModal), 180);
    });
  }

  closeButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const parentModal = e.target.closest(".modal");
      closeModal(parentModal);
    });
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });

  const leadForm = document.getElementById("lead-form");
  const statusDiv = document.getElementById("form-status");
  const submitBtn = leadForm ? leadForm.querySelector(".modal__submit") : null;

  const resetModalInteractions = () => {
    chips.forEach((c, idx) => c.classList.toggle("is-active", idx === 0));
    if (serviceInput) serviceInput.value = "Веб-сайт";

    channelTabs.forEach((t, idx) => t.classList.toggle("is-active", idx === 0));
    if (channelInput) channelInput.value = "Telegram";

    if (contactInput) contactInput.placeholder = "@username или телефон";
  };

  if (leadForm && submitBtn && statusDiv) {
    leadForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      if (submitBtn.disabled) return;

      const formData = new FormData(leadForm);

      if (formData.get("botcheck")) {
        statusDiv.classList.add("success");
        statusDiv.textContent =
          currentLang === "en"
            ? "Inquiry sent successfully! Talk soon."
            : "Заявка успешно отправлена! Скоро свяжемся.";
        leadForm.reset();
        setTimeout(() => closeModal(contactModal), 1500);
        return;
      }

      statusDiv.className = "form-status";
      statusDiv.textContent = "";
      submitBtn.classList.add("is-loading");
      submitBtn.disabled = true;

      const service = formData.get("service") || "Веб-сайт";
      const channel = formData.get("channel") || "Telegram";
      const name = formData.get("name")?.toString().trim() || "Заказчик";
      const contact = formData.get("contact")?.toString().trim();
      const message =
        formData.get("message")?.toString().trim() || "Не указано";

      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        email_to: "kochulanova_nata@mail.ru",
        from_name: `${name} (Заявка с сайта)`,
        subject: `🔥 Новый заказ: ${service} — ${name}`,
        "Имя заказчика": name,
        "Контакт для связи": contact,
        "Где связаться": channel,
        "Что требуется сделать": service,
        "Детали задачи / ТЗ": message,
        "Время отправки": new Date().toLocaleString("ru-RU", {
          timeZone: "Europe/Moscow",
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        });

        const data = await response.json();

        if (!response.ok || !data.success) {
          throw new Error(data.message || "Ошибка отправки");
        }

        statusDiv.classList.add("success");
        statusDiv.textContent =
          currentLang === "en"
            ? "Inquiry sent successfully! Talk soon."
            : "Заявка успешно отправлена! Скоро свяжемся.";

        leadForm.reset();
        resetModalInteractions();

        setTimeout(() => {
          closeModal(contactModal);
          statusDiv.textContent = "";
          statusDiv.className = "form-status";
        }, 2000);
      } catch (err) {
        statusDiv.classList.add("error");
        statusDiv.textContent =
          currentLang === "en"
            ? "Failed to send. Please contact directly via email."
            : "Ошибка отправки. Попробуйте написать напрямую.";
      } finally {
        submitBtn.classList.remove("is-loading");
        submitBtn.disabled = false;
      }
    });
  }
});
