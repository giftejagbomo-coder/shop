(function () {
  "use strict";

  // Mobile nav
  const menuBtn = document.querySelector(".mobile-menu-btn");
  const mainNav = document.querySelector(".main-nav");
  if (menuBtn && mainNav) {
    menuBtn.addEventListener("click", () => {
      mainNav.classList.toggle("open");
      menuBtn.setAttribute(
        "aria-expanded",
        mainNav.classList.contains("open")
      );
    });
  }

  // Hero slider
  const slider = document.querySelector(".hero-slider");
  if (!slider) return;

  const slides = slider.querySelectorAll(".hero-slide");
  const dots = slider.querySelectorAll(".hero-dot");
  const prevBtn = slider.querySelector(".hero-nav--prev");
  const nextBtn = slider.querySelector(".hero-nav--next");
  let current = 0;
  let autoplayTimer;

  function goTo(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((s, i) => s.classList.toggle("active", i === current));
    dots.forEach((d, i) => d.classList.toggle("active", i === current));
  }

  function next() {
    goTo(current + 1);
  }

  function prev() {
    goTo(current - 1);
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(next, 6000);
  }

  function stopAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer);
  }

  prevBtn?.addEventListener("click", () => {
    prev();
    startAutoplay();
  });
  nextBtn?.addEventListener("click", () => {
    next();
    startAutoplay();
  });
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      goTo(i);
      startAutoplay();
    });
  });

  slider.addEventListener("mouseenter", stopAutoplay);
  slider.addEventListener("mouseleave", startAutoplay);

  goTo(0);
  startAutoplay();

  // Newsletter
  const newsletterForm = document.querySelector(".newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector("input");
      if (input?.value.trim()) {
        alert("Thank you for subscribing!");
        input.value = "";
      }
    });
  }

  // Contact form
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you! We will get back to you soon.");
      contactForm.reset();
    });
  }
})();
