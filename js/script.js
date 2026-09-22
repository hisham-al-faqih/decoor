document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  const navMenu = document.querySelector(".nav-menu");
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelectorAll(".nav-link");
  const backToTop = document.querySelector(".back-to-top");
  const faqItems = document.querySelectorAll(".faq-item");
  const mapIframe = document.querySelector(".map-container iframe");
  const keywordsCloud = document.querySelector(".keywords-cloud");
  const lazySections = document.querySelectorAll(".fade-in");

  function toggleNav() {
    navMenu.classList.toggle("active");
    navToggle.classList.toggle("active");
  }

  function closeMenu() {
    navMenu.classList.remove("active");
    navToggle.classList.remove("active");
  }

  function handleScroll() {
    if (backToTop) {
      backToTop.classList.toggle("show", window.scrollY > 200);
    }
  }

  function scrollToTop(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function toggleFaq() {
    const faqItem = this.closest(".faq-item");
    if (faqItem) faqItem.classList.toggle("active");
  }

  function loadMap() {
    if (mapIframe && mapIframe.dataset.src) {
      mapIframe.src = mapIframe.dataset.src;
      mapIframe.removeAttribute("data-src");
    }
  }

  function populateKeywords() {
    const items = [
      { name: "دهانات داخلية", url: "dakhiliya.html" },
      { name: "دهانات خارجية", url: "khariijiya.html" },
      { name: "ديكورات فوم", url: "fome.html" },
      { name: "أسقف جبس بورد", url: "gypsum.html" },
      { name: "بديل الخشب", url: "wood.html" },
      { name: "بديل الرخام", url: "marble.html" },
      { name: "ورق جدران", url: "wallpaper.html" },
      { name: "أسقف", url: "roof.html" },
      { name: "تركيب مرايا", url: "mirror.html" },
      { name: "ترميمات تشطيبات", url: "renovation.html" },
      { name: "ديكور شيبورد", url: "chipboard.html" }
    ];

    items.forEach((item) => {
      const link = document.createElement("a");
      link.href = item.url;
      link.textContent = item.name;
      keywordsCloud.appendChild(link);
    });
  }

  function lazyLoadSections() {
    lazySections.forEach((section) => {
      if (section.getBoundingClientRect().top < window.innerHeight - 100) {
        section.classList.add("active");
      }
    });
  }

  if (navToggle) navToggle.addEventListener("click", toggleNav);

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  if (backToTop) backToTop.addEventListener("click", scrollToTop);

  window.addEventListener("scroll", handleScroll);

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    if (question) question.addEventListener("click", toggleFaq);
  });

  if (mapIframe) setTimeout(loadMap, 3000);
  if (keywordsCloud) populateKeywords();

  if (lazySections.length > 0) {
    window.addEventListener("scroll", lazyLoadSections);
    window.addEventListener("load", lazyLoadSections);
  }
});
