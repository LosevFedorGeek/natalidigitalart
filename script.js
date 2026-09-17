const WEB3FORMS_ACCESS_KEY = "38155835-3b6e-4487-8b7c-53662c37263d";

document.addEventListener("DOMContentLoaded", () => {
  const i18n = {
    ru: {
      author_name: "Наталья Кочуланова",
      nav_services: "Услуги",
      nav_portfolio: "Портфолио",
      nav_about: "Опыт",
      nav_contacts: "Контакты",
      btn_discuss: "Обсудить проект",
      btn_contact: "Связаться",
      hero_title: "Комплексный дизайн для бизнеса: от айдентики до сайтов",
      hero_subtitle:
        "20+ лет практики, академическая художественная школа и точная допечатная подготовка. Создаю визуальные решения, которые помогают брендам говорить на языке премиального минимализма.",
      btn_portfolio: "Портфолио",
      services_title: "Услуги и специализация",
      services_subtitle:
        "Многолетний опыт в различных областях визуального дизайна позволяет решать задачи любой сложности под ключ.",
      service_1_text:
        "Проектирование и разработка сайтов, многостраничных лендингов на Tilda, адаптивный дизайн для идеального отображения на всех устройствах.",
      service_2_title: "Брендинг & Айдентика",
      service_2_text:
        "Разработка уникальных логотипов, создание фирменного стиля, констант бренда и эстетичного визуала для социальных сетей.",
      service_3_title: "Презентации & Инфографика",
      service_3_text:
        "Профессиональные питч-деки, презентации для инвесторов и партнёров, а также инфографика и карточки для маркетплейсов.",
      service_4_title: "Полиграфия & Prepress",
      service_4_text:
        "Дизайн печатной продукции и материалов для бизнеса. Точная допечатная подготовка макетов под стандарты и спецификации типографий.",
      portfolio_title: "Избранные работы",
      portfolio_subtitle:
        "Проекты на стыке чистого искусства, современных медиатехнологий и практической пользы для коммерческих клиентов.",
      btn_see_all: "Смотреть все",
      proj_1_desc: "Премиальный сайт строительной компании",
      proj_2_desc: "Концепт e-commerce магазина одежды",
      proj_3_desc: "Айдентика бренда косметики и SMM",
      proj_4_desc: "Продающая инфографика для маркетплейсов",
      about_badge: "ПОДХОД И ОПЫТ",
      about_title: "Практичный дизайн с опорой на техническую экспертизу",
      about_lead: "От пиксельной сетки в диджитал до физических материалов",
      about_text:
        "Понимаю работу конверсии в вебе и нюансы реального производства. Создаю продуманные макеты: они привлекают клиентов в сети и без проблем встают на печать в типографиях или на сборку в рекламных цехах.",
      btn_about_more: "Подробнее об авторе",
      stat_1_label: "ЛЕТ В ДИЗАЙНЕ И ПРОИЗВОДСТВЕ",
      stat_2_label: "ЛЕТ В PREPRESS И РЕКЛАМНЫХ ЦЕХАХ",
      stat_3_label: "ПОЛНЫЙ КОНТРОЛЬ ЦВЕТООПИСАНИЯ",
      footer_title: "Обсудим ваш проект и задачи бизнеса",
      footer_subtitle:
        "Напишите мне любым удобным способом, чтобы рассчитать стоимость, сроки и технические нюансы реализации.",
      footer_copy: "© 2026 Наталья Кочуланова. Все права защищены.",
      dev_label: "Разработка сайта",
      modal_contact_title: "Обсудить проект",
      modal_contact_sub:
        "Выберите направление и укажите контакт — я свяжусь с вами в течение 2-3 часов с оценкой сроков.",
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
        "Нажимая кнопку, вы подтверждаете согласие на конфиденциальную обработку контактных данных.",
      about_meta_edu: "Образование",
      about_edu_1: "ЧГУ • ИЗО и черчение",
      about_edu_2: "Школа «Логомашина» • Digital-дизайн",
      about_meta_exp: "Опыт в индустрии",
      about_exp_val: "20+ лет практики • 150+ проектов",
      about_role: "Графический & Digital-дизайнер • Prepress-эксперт",
      about_lead_full:
        "Академическое художественное образование (ЧГУ) в сочетании с многолетним опытом в реальном производстве рекламных цехов и типографий.",
      about_text_full:
        "Свободно объединяю технологические стандарты физических материалов (prepress, спуски полос, фрезеровка, плоттерная резка) с современным цифровым дизайном (UI/UX, Tilda Z-Block, инфографика, бизнес-презентации). Для генерации уникальных арт-активов и ускорения рутинных этапов активно использую Midjourney и ChatGPT.",
      about_skills_title: "Ключевые компетенции",
      about_card_1:
        "Проектирование в Figma, верстка лендингов на Tilda, продающая инфографика и карточки для маркетплейсов, 150+ питч-деков и презентаций для EdTech и бизнеса.",
      about_card_2:
        "Владение Adobe Photoshop и CorelDRAW. Допечатная подготовка любой сложности под стандарты производств: CMYK, УФ-печать, плоттерная резка, точные контуры.",
      about_card_3_title: "Брендинг & Носители",
      about_card_3:
        "Логотипы, бренд-константы, навигационные интерьерные системы, комплексный дизайн оформления фасадов и брендирования автотранспорта.",
      about_card_4_title: "Арт-дирекшн",
      about_card_4:
        "Профессиональный контроль цвета, типографики и иерархии композиции, опыт руководства художественным отделением и кураторства выставочных экспозиций.",
      about_work_title: "Опыт работы",
      timeline_1_period: "2022 — настоящее время",
      timeline_1_role: "Digital-дизайнер / Фриланс",
      timeline_1_desc:
        "Разработка коммерческой графики, сайтов на Tilda, баннеров и интерфейсов. Курс продуктового дизайна в «Логомашине» (2025–2026).",
      timeline_palme_period: "2021 — 2022",
      timeline_palme_role: "Graphic Designer / Palme School (Канада)",
      timeline_palme_desc:
        "Создание 150+ презентаций по гайдлайнам, стилизация иллюстраций для канадской онлайн-школы.",
      timeline_2_period: "2013 — 2026",
      timeline_2_role:
        "Руководитель художественного отделения / Арт-консультант",
      timeline_2_desc:
        "Руководство выставочной деятельностью и визуальным стилем крупных арт-событий. Экспертный контроль композиции и цветового пространства.",
      timeline_3_period: "2002 — 2013",
      timeline_3_role:
        "Дизайнер-технолог / Prepress-специалист (РА «Прорыв», ЗАО «ЦРТ»)",
      timeline_3_desc:
        "Рекламная поддержка ХК «Северсталь» и сети «Мори-Синема». Проектирование наружной и интерьерной рекламы: от векторных чертежей до сборки в цехах и монтажа.",
      about_tools_title: "Инструменты и технологии",
      btn_discuss_author: "Обсудить проект с автором",
    },
    en: {
      author_name: "Natalia Kochulanova",
      nav_services: "Services",
      nav_portfolio: "Portfolio",
      nav_about: "Experience",
      nav_contacts: "Contacts",
      btn_discuss: "Discuss Project",
      btn_contact: "Contact Me",
      hero_title: "Comprehensive Design for Business: Identity to Websites",
      hero_subtitle:
        "20+ years of expertise, academic art school background, and precision prepress. Creating visual solutions that help brands speak premium minimalism.",
      btn_portfolio: "Portfolio",
      services_title: "Services & Specialization",
      services_subtitle:
        "Decades of design practice allowing turnkey delivery of complex visual solutions.",
      service_1_text:
        "UI/UX design, custom Tilda landing pages, and responsive websites engineered for all modern devices.",
      service_2_title: "Branding & Identity",
      service_2_text:
        "Unique brand marks, corporate identity systems, brand guidelines, and high-converting social media visual kits.",
      service_3_title: "Presentations & Infographics",
      service_3_text:
        "Investor pitch decks, commercial presentations for EdTech and enterprises, and e-commerce marketplace cards.",
      service_4_title: "Print Design & Prepress",
      service_4_text:
        "Marketing print collateral with strict production prepress matching technical printing house specifications.",
      portfolio_title: "Selected Works",
      portfolio_subtitle:
        "Projects merging pure visual art, modern digital tech, and measurable commercial value.",
      btn_see_all: "View Full Archive",
      proj_1_desc: "Premium website for architectural construction firm",
      proj_2_desc: "E-commerce fashion store concept",
      proj_3_desc: "Cosmetics brand identity & SMM direction",
      proj_4_desc: "High-converting marketplace product infographics",
      about_badge: "EXPERTISE & CRAFT",
      about_title: "Results-driven design grounded in technical precision",
      about_lead: "From digital pixel grid to tangible physical materials",
      about_text:
        "Mastering web conversion metrics and real-world printing facility nuances. Designing assets that captivate audiences online and run through production machinery without a hitch.",
      btn_about_more: "Read Full Bio",
      stat_1_label: "YEARS IN DESIGN & PRODUCTION",
      stat_2_label: "YEARS IN PREPRESS & SIGNAGE SHOPS",
      stat_3_label: "FULL COLOR SPACE CONTROL",
      footer_title: "Let's discuss your next breakthrough project",
      footer_subtitle:
        "Reach out via any channel below to get cost projections, timelines, and technical architecture.",
      footer_copy: "© 2026 Natalia Kochulanova. All rights reserved.",
      dev_label: "Crafted by",
      modal_contact_title: "Start a Project",
      modal_contact_sub:
        "Select an area and leave your handle — I will get back within 2-3 hours with timeline estimates.",
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
        "By submitting, you consent to confidential processing of your contact details.",
      about_meta_edu: "Education",
      about_edu_1: "ChSU • Fine Arts & Technical Drawing",
      about_edu_2: "Logomachine School • Digital Product Design",
      about_meta_exp: "Industry Track",
      about_exp_val: "20+ years practice • 150+ completed projects",
      about_role: "Graphic & Digital Designer • Prepress Specialist",
      about_lead_full:
        "Academic fine arts degree paired with deep engineering production experience inside signage facilities and print houses.",
      about_text_full:
        "Seamlessly combining physical manufacturing rules (color separations, imposition, CNC milling, plotting) with digital interfaces (UI/UX, Tilda Z-Block, business slide decks). Integrating Midjourney and ChatGPT to generate proprietary visual assets and accelerate project turnarounds.",
      about_skills_title: "Core Competencies",
      about_card_1:
        "Figma wireframing, Tilda Z-Block development, e-commerce marketplace infographics, and 150+ pitch presentations for EdTech and corporate clients.",
      about_card_2:
        "Expert Adobe Photoshop & CorelDRAW commands. Flawless prepress for CMYK offset, UV printing, plot cutting, and exact vector contours.",
      about_card_3_title: "Branding & Wayfinding",
      about_card_3:
        "Logos, brand books, interior navigation wayfinding, corporate facade transformations, and vehicle fleet wraps.",
      about_card_4_title: "Art Direction",
      about_card_4:
        "Senior mastery over color hierarchy, typography scales, and composition, with past background leading an academic art division.",
      about_work_title: "Career Milestones",
      timeline_1_period: "2022 — Present",
      timeline_1_role: "Digital Designer / Independent",
      timeline_1_desc:
        "Commercial web and visual assets, Tilda landing pages, and UI interfaces. Advanced product design certification at Logomachine (2025–2026).",
      timeline_palme_period: "2021 — 2022",
      timeline_palme_role: "Graphic Designer / Palme School (Canada)",
      timeline_palme_desc:
        "Production of 150+ brand-aligned presentations, custom illustration styling for a Canadian online school.",
      timeline_2_period: "2013 — 2026",
      timeline_2_role: "Head of Fine Arts Department / Art Consultant",
      timeline_2_desc:
        "Curating exhibition environments and brand visuals for major regional arts events. Rigorous oversight of color spaces and aesthetics.",
      timeline_3_period: "2002 — 2013",
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
        el.textContent = i18n[lang][key];
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

  const glowEl = document.getElementById("ambient-glow");
  let glowX = window.innerWidth / 2;
  let glowY = window.innerHeight / 2;
  let curGlowX = glowX;
  let curGlowY = glowY;

  window.addEventListener("mousemove", (e) => {
    glowX = e.clientX;
    glowY = e.clientY;
  });

  const updateGlow = () => {
    curGlowX += (glowX - curGlowX) * 0.08;
    curGlowY += (glowY - curGlowY) * 0.08;
    if (glowEl) {
      glowEl.style.left = `${curGlowX}px`;
      glowEl.style.top = `${curGlowY}px`;
    }
    requestAnimationFrame(updateGlow);
  };
  updateGlow();

  const reveals = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
  );

  reveals.forEach((el) => revealObserver.observe(el));

  const counters = document.querySelectorAll(".js-counter");
  let countersTriggered = false;

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !countersTriggered) {
          countersTriggered = true;
          counters.forEach((counter) => {
            const target = +counter.getAttribute("data-target");
            const duration = 1600;
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
    { threshold: 0.4 },
  );

  const aboutSection = document.querySelector(".about");
  if (aboutSection) counterObserver.observe(aboutSection);

  const isDesktop = window.matchMedia(
    "(hover: hover) and (pointer: fine)",
  ).matches;
  let mouseX = -10000;
  let mouseY = -10000;

  if (isDesktop) {
    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
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

    const tiltElements = Array.from(
      document.querySelectorAll(".tilt-target"),
    ).map((el) => ({
      el,
      rx: 0,
      ry: 0,
      ty: 0,
      targetRx: 0,
      targetRy: 0,
      targetTy: 0,
    }));

    const modalInteractiveElements = Array.from(
      document.querySelectorAll("[data-modal-interactive]"),
    ).map((el) => ({
      el,
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
    }));

    const updatePhysics = () => {
      let closestMagnetic = null;
      let minDistance = Infinity;

      magneticElements.forEach((item) => {
        const rect = item.el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dist = Math.hypot(mouseX - cx, mouseY - cy);
        const radius = Math.max(rect.width, rect.height) * 0.75;

        if (dist < radius && dist < minDistance) {
          minDistance = dist;
          closestMagnetic = {
            item,
            dx: mouseX - cx,
            dy: mouseY - cy,
            radius,
            dist,
          };
        }
      });

      magneticElements.forEach((item) => {
        if (closestMagnetic && closestMagnetic.item === item) {
          const force = 1 - closestMagnetic.dist / closestMagnetic.radius;
          item.targetX = Math.max(
            -5,
            Math.min(5, closestMagnetic.dx * force * 0.18),
          );
          item.targetY = Math.max(
            -4,
            Math.min(4, closestMagnetic.dy * force * 0.18),
          );
        } else {
          item.targetX = 0;
          item.targetY = 0;
        }

        item.x += (item.targetX - item.x) * 0.12;
        item.y += (item.targetY - item.y) * 0.12;

        if (Math.abs(item.x) > 0.01 || Math.abs(item.y) > 0.01) {
          item.el.style.transform = `translate3d(${item.x.toFixed(2)}px, ${item.y.toFixed(2)}px, 0)`;
        } else {
          item.el.style.transform = "";
        }
      });

      tiltElements.forEach((item) => {
        const rect = item.el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = mouseX - cx;
        const dy = mouseY - cy;
        const buffer = 80;

        if (
          mouseX >= rect.left - buffer &&
          mouseX <= rect.right + buffer &&
          mouseY >= rect.top - buffer &&
          mouseY <= rect.bottom + buffer
        ) {
          const maxW = rect.width / 2 + buffer;
          const maxH = rect.height / 2 + buffer;
          item.targetRx = -Math.max(-1, Math.min(1, dy / maxH)) * 4.5;
          item.targetRy = Math.max(-1, Math.min(1, dx / maxW)) * 4.5;
          item.targetTy = -4;
        } else {
          item.targetRx = 0;
          item.targetRy = 0;
          item.targetTy = 0;
        }

        item.rx += (item.targetRx - item.rx) * 0.08;
        item.ry += (item.targetRy - item.ry) * 0.08;
        item.ty += (item.targetTy - item.ty) * 0.08;

        if (
          Math.abs(item.rx) > 0.01 ||
          Math.abs(item.ry) > 0.01 ||
          Math.abs(item.ty) > 0.01
        ) {
          item.el.style.transform = `perspective(1000px) rotateX(${item.rx.toFixed(2)}deg) rotateY(${item.ry.toFixed(2)}deg) translate3d(0, ${item.ty.toFixed(2)}px, 0)`;
        } else {
          item.el.style.transform = "";
        }
      });

      const anyModalOpen = document.querySelector(".modal.is-open");
      if (anyModalOpen) {
        modalInteractiveElements.forEach((item) => {
          const rect = item.el.getBoundingClientRect();
          const cx = rect.left + rect.width / 2;
          const cy = rect.top + rect.height / 2;
          const dist = Math.hypot(mouseX - cx, mouseY - cy);
          const radius = Math.max(rect.width, rect.height) * 0.6;

          if (dist < radius) {
            const force = 1 - dist / radius;
            item.targetX = Math.max(
              -3,
              Math.min(3, (mouseX - cx) * force * 0.08),
            );
            item.targetY = Math.max(
              -2,
              Math.min(2, (mouseY - cy) * force * 0.08),
            );
          } else {
            item.targetX = 0;
            item.targetY = 0;
          }

          item.x += (item.targetX - item.x) * 0.12;
          item.y += (item.targetY - item.y) * 0.12;

          if (Math.abs(item.x) > 0.01 || Math.abs(item.y) > 0.01) {
            item.el.style.transform = `translate3d(${item.x.toFixed(2)}px, ${item.y.toFixed(2)}px, 0)`;
          } else {
            item.el.style.transform = "";
          }
        });
      }

      requestAnimationFrame(updatePhysics);
    };

    requestAnimationFrame(updatePhysics);
  }

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
  const contactLabel = document.getElementById("contact-label");

  channelTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      channelTabs.forEach((t) => t.classList.remove("is-active"));
      tab.classList.add("is-active");

      const channelName = tab.getAttribute("data-channel");
      const placeholder = tab.getAttribute("data-placeholder");

      if (channelInput) channelInput.value = channelName;
      if (contactInput) contactInput.placeholder = placeholder;
      if (contactLabel)
        contactLabel.textContent =
          currentLang === "en"
            ? `${channelName} Contact *`
            : `Ваш ${channelName} *`;
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
      document.body.style.overflow = isOpen ? "hidden" : "";
    };

    const closeMenu = () => {
      mobileNav.classList.remove("is-open");
      burgerBtn.classList.remove("is-active");
      burgerBtn.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
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
    }
    targetModal.classList.add("is-open");
    targetModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
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
    const chips = document.querySelectorAll("#service-chips .chip");
    chips.forEach((c, idx) => c.classList.toggle("is-active", idx === 0));
    const serviceInput = document.getElementById("selected-service");
    if (serviceInput) serviceInput.value = "Веб-сайт";

    const channelTabs = document.querySelectorAll("#channel-tabs .channel-tab");
    channelTabs.forEach((t, idx) => t.classList.toggle("is-active", idx === 0));
    const channelInput = document.getElementById("selected-channel");
    if (channelInput) channelInput.value = "Telegram";

    const contactInput = document.getElementById("user-contact");
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
          if (typeof closeModal === "function") {
            closeModal(contactModal);
          } else if (contactModal) {
            contactModal.classList.remove("is-open");
            contactModal.setAttribute("aria-hidden", "true");
            document.body.style.overflow = "";
          }
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
