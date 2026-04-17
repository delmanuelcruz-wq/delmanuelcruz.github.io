/* =========================================================
   Del Manuel Cruz — Portfolio
   Shared interaction layer
   ========================================================= */

(function () {
  "use strict";

  /* ---------- Reveal on scroll ---------- */
  const revealTargets = document.querySelectorAll(
    ".hero, .work-card, .case-block, .metric, .pillar, .skill-col, .contact, .next-case, .chart-card, .kpi-tile, .sql-card"
  );

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  revealTargets.forEach((el) => {
    el.classList.add("reveal");
    io.observe(el);
  });

  /* ---------- Animated counters on .metric-value ---------- */
  function parseMetric(raw) {
    // Returns { prefix, suffix, num } — handles $9,022.44 / 833 / $24,036 / <10h / 200+ / 0 / 2+1 / C-Suite
    const text = raw.trim();
    // Not animatable if there's no digit at all
    if (!/\d/.test(text)) return null;
    const match = text.match(/^([^\d\-]*)(-?\d[\d,]*(?:\.\d+)?)(.*)$/);
    if (!match) return null;
    const prefix = match[1] || "";
    const numStr = match[2].replace(/,/g, "");
    const suffix = match[3] || "";
    const num = parseFloat(numStr);
    if (isNaN(num)) return null;
    const decimals = (numStr.split(".")[1] || "").length;
    return { prefix, suffix, num, decimals };
  }

  function formatNumber(n, decimals) {
    const fixed = n.toFixed(decimals);
    const [intPart, decPart] = fixed.split(".");
    const withCommas = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return decPart ? withCommas + "." + decPart : withCommas;
  }

  function animateCounter(el) {
    const raw = el.getAttribute("data-raw") || el.textContent;
    el.setAttribute("data-raw", raw);
    const parsed = parseMetric(raw);
    if (!parsed) return;
    const duration = 1400;
    const start = performance.now();
    const from = 0;
    const to = parsed.num;

    function tick(now) {
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      const current = from + (to - from) * eased;
      el.textContent =
        parsed.prefix + formatNumber(current, parsed.decimals) + parsed.suffix;
      if (t < 1) requestAnimationFrame(tick);
      else el.textContent = raw;
    }
    requestAnimationFrame(tick);
  }

  const metricObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          metricObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll(".metric-value, .kpi-value").forEach((el) => {
    metricObserver.observe(el);
  });

  /* ---------- Nav scroll state ---------- */
  const nav = document.querySelector(".nav");
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 8) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Hero rotating taglines ---------- */
  const rotator = document.querySelector("[data-rotate]");
  if (rotator) {
    const items = rotator.getAttribute("data-rotate").split("|");
    let i = 0;
    rotator.textContent = items[0];
    setInterval(() => {
      i = (i + 1) % items.length;
      rotator.style.opacity = "0";
      setTimeout(() => {
        rotator.textContent = items[i];
        rotator.style.opacity = "1";
      }, 260);
    }, 2800);
  }

  /* ---------- Copy email to clipboard ---------- */
  document.querySelectorAll("[data-copy]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const text = btn.getAttribute("data-copy");
      navigator.clipboard.writeText(text).then(() => {
        const original = btn.textContent;
        btn.textContent = "Copied ✓";
        setTimeout(() => (btn.textContent = original), 1400);
      });
    });
  });
})();
