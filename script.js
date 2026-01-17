(() => {
  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));

  // Dock + items (match YOUR HTML)
  const dock = $(".dock");
  const pill = $(".activePill");
  const items = $$(".dockItem");

  if (!dock || !pill || items.length === 0) return;

  let activeEl = items[0];

  function movePillTo(el) {
    if (!el) return;

    const dockRect = dock.getBoundingClientRect();
    const r = el.getBoundingClientRect();

    const x = r.left - dockRect.left;
    const w = Math.max(74, Math.min(r.width, dockRect.width - 20));

    dock.style.setProperty("--pillX", `${x}px`);
    pill.style.width = `${w}px`;
	dock.style.setProperty("--pillX", `${x}px`);

    items.forEach(i => i.classList.remove("active"));
    el.classList.add("active");
  }

  // Hover bubble behaviour
  items.forEach((a) => {
    a.addEventListener("mouseenter", () => movePillTo(a));
    a.addEventListener("focus", () => movePillTo(a));
    a.addEventListener("click", () => { activeEl = a; movePillTo(a); });
  });

  dock.addEventListener("mouseleave", () => movePillTo(activeEl));
  dock.addEventListener("focusout", () => movePillTo(activeEl));

  // Liquid mouse tracking for highlight/refraction
  dock.addEventListener("pointermove", (e) => {
    const r = dock.getBoundingClientRect();
    const mx = ((e.clientX - r.left) / r.width) * 100;
    dock.style.setProperty("--mx", `${mx}%`);
  }, { passive: true });

  dock.addEventListener("pointerleave", () => {
    dock.style.removeProperty("--mx");
  });

  // Scroll spy (active follows section)
  const sections = items
    .map(i => document.getElementById(i.dataset.target))
    .filter(Boolean);

  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter(e => e.isIntersecting)
      .sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    const id = visible.target.id;
    const next = items.find(i => i.dataset.target === id);
    if (next) {
      activeEl = next;
      movePillTo(next);
    }
  }, { threshold: [0.35, 0.55, 0.75] });

  sections.forEach(s => observer.observe(s));

  // Initial position
  requestAnimationFrame(() => movePillTo(activeEl));
  
  // =========================
// Scroll reveal (whole page)
// =========================
const revealTargets = document.querySelectorAll(
  "section, .card, .work, h1, h2, p, .ctaRow, .photoHero, .photoCard"
);

revealTargets.forEach(el => el.classList.add("reveal"));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target); // reveal once
    }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -10% 0px" });

revealTargets.forEach(el => revealObserver.observe(el));

})();

