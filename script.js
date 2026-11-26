/* Personal site: small, dependency-free enhancements.
   The page works fully without this file; it only adds polish. */
(function () {
  "use strict";

  var root = document.documentElement;
  root.classList.remove("no-js");
  root.classList.add("js");

  /* ---- Footer year ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Mobile menu ---- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");

  function setMenu(open) {
    if (!toggle || !nav) return;
    toggle.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setMenu(toggle.getAttribute("aria-expanded") !== "true");
    });

    // Close after choosing a link
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setMenu(false);
    });

    // Close with Escape and return focus to the button
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setMenu(false);
        toggle.focus();
      }
    });

    // Reset when resizing up to desktop
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 860) setMenu(false);
    });
  }

  /* ---- Header border once you scroll ---- */
  var header = document.querySelector(".site-header");
  function onScroll() {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Fade-in on scroll + highlight current section in nav ---- */
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach(function (el) {
      el.classList.add("is-visible");
    });
    return;
  }

  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.1 });

  document.querySelectorAll(".reveal").forEach(function (el, i) {
    el.style.transitionDelay = (i % 3) * 80 + "ms"; // slight stagger
    revealObserver.observe(el);
  });

  var navLinks = document.querySelectorAll('.site-nav a[href^="#"]');
  var sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      navLinks.forEach(function (link) {
        if (link.getAttribute("href") === "#" + entry.target.id) {
          link.setAttribute("aria-current", "true");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    });
  }, { rootMargin: "-45% 0px -50% 0px" });

  navLinks.forEach(function (link) {
    var section = document.querySelector(link.getAttribute("href"));
    if (section) sectionObserver.observe(section);
  });
})();
