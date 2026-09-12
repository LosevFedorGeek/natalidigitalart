document.addEventListener("DOMContentLoaded", () => {
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
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px",
    },
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
          const rawX = closestMagnetic.dx * force * 0.18;
          const rawY = closestMagnetic.dy * force * 0.18;
          item.targetX = Math.max(-5, Math.min(5, rawX));
          item.targetY = Math.max(-4, Math.min(4, rawY));
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
          const normX = Math.max(-1, Math.min(1, dx / maxW));
          const normY = Math.max(-1, Math.min(1, dy / maxH));

          item.targetRx = -normY * 4.5;
          item.targetRy = normX * 4.5;
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

      const isModalOpen = document
        .getElementById("contact-modal")
        .classList.contains("is-open");
      if (isModalOpen) {
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
      bullets.forEach((bullet) => {
        bullet.classList.remove("is-active");
        const fill = bullet.querySelector(".hero__slider-bullet-fill");
        if (fill) fill.style.transition = "none";
      });

      currentIndex = (index + slides.length) % slides.length;

      slides[currentIndex].classList.add("is-active");

      const activeBullet = bullets[currentIndex];
      if (activeBullet) {
        activeBullet.classList.add("is-active");
        const fill = activeBullet.querySelector(".hero__slider-bullet-fill");
        if (fill) {
          void fill.offsetWidth;
          fill.style.transition = `transform ${intervalTime}ms linear`;
        }
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
          if (diff > 0) {
            nextSlide();
          } else {
            prevSlide();
          }
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

  const modal = document.getElementById("contact-modal");
  const openButtons = document.querySelectorAll(".js-open-modal");
  const closeButtons = document.querySelectorAll(".js-close-modal");

  const openModal = () => {
    if (mobileNav && mobileNav.classList.contains("is-open")) {
      mobileNav.classList.remove("is-open");
      burgerBtn.classList.remove("is-active");
      burgerBtn.setAttribute("aria-expanded", "false");
    }
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  openButtons.forEach((btn) => btn.addEventListener("click", openModal));
  closeButtons.forEach((btn) => btn.addEventListener("click", closeModal));

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });

  const leadForm = document.getElementById("lead-form");
  const statusDiv = document.getElementById("form-status");
  const submitBtn = leadForm ? leadForm.querySelector(".modal__submit") : null;

  const TELEGRAM_BOT_TOKEN = "YOUR_BOT_TOKEN";
  const TELEGRAM_CHAT_ID = "YOUR_CHAT_ID";

  if (leadForm) {
    leadForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      statusDiv.className = "form-status";
      statusDiv.textContent = "";
      submitBtn.classList.add("is-loading");

      const formData = new FormData(leadForm);
      const service = formData.get("service") || "Веб-сайт";
      const name = formData.get("name");
      const contact = formData.get("contact");
      const message = formData.get("message") || "Не указано";

      const text = `🔥 Новая заявка с сайта!\n\n📌 Направление: ${service}\n👤 Имя: ${name}\n📞 Контакт: ${contact}\n📝 Задача: ${message}`;

      try {
        if (TELEGRAM_BOT_TOKEN !== "YOUR_BOT_TOKEN") {
          const res = await fetch(
            `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: text,
                parse_mode: "HTML",
              }),
            },
          );

          if (!res.ok) throw new Error("Network response was not ok");
        } else {
          await new Promise((res) => setTimeout(res, 800));
        }

        statusDiv.classList.add("success");
        statusDiv.textContent = "Заявка успешно отправлена! Скоро свяжемся.";
        leadForm.reset();
        setTimeout(() => closeModal(), 2200);
      } catch (err) {
        statusDiv.classList.add("error");
        statusDiv.textContent =
          "Ошибка отправки. Попробуйте написать напрямую в мессенджер.";
      } finally {
        submitBtn.classList.remove("is-loading");
      }
    });
  }
});
