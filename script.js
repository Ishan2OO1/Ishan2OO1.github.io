/* Ishan Chaudhary — portfolio interactions */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Footer year */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* Mobile navigation */
  var menuToggle = document.querySelector('.menu-toggle');
  var navLinks = document.querySelector('.nav-links');
  if (menuToggle && navLinks) {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.addEventListener('click', function () {
      var open = navLinks.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(open));
    });
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.focus();
      }
    });
  }

  /* Scroll reveal — never leaves content hidden if unsupported */
  var revealEls = document.querySelectorAll('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { observer.observe(el); });
  }

  /* Project concept previews */
  var demoOutputs = {
    MedQGraph: 'Sample pathway: question parsed \u2192 clinical entities retrieved \u2192 temporal graph traversed \u2192 grounded answer assembled. The real system reached 94.3% query success and ran 65% faster than the SQL baseline. Illustrative only; no patient data.',
    SkiTrak: 'Simulation complete: request accepted \u2192 thread pool dispatch \u2192 RabbitMQ queue \u2192 leaderboard consumer. The real platform sustained 10.5K requests/sec at 50 ms p99 with zero failures. Conceptual flow, not a live load test.',
    AIport: 'Sample insight: question parsed \u2192 SQL generated \u2192 validation layer checked \u2192 chart returned. The real tool reached 91% accuracy across 11 query types over a 600+ column warehouse. Mock output only.',
    Vision2D: 'Sample output: frame preprocessed \u2192 ONNX inference \u2192 result returned. The real pipeline hit 30+ FPS after a 3\u00d7 speedup from separable convolution decomposition. The model is not running in this preview.'
  };

  function closeDemo(project) {
    var panel = document.getElementById('demo-' + project);
    var toggle = document.querySelector('.demo-toggle[data-project="' + project + '"]');
    if (!panel || !toggle) return;
    panel.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.innerHTML = 'Interactive preview <span>\uFF0B</span>';
  }

  document.querySelectorAll('.demo-toggle').forEach(function (button) {
    var project = button.dataset.project;
    var panel = document.getElementById('demo-' + project);
    if (!panel) return;
    button.setAttribute('aria-controls', 'demo-' + project);
    button.addEventListener('click', function () {
      var open = panel.hidden;
      panel.hidden = !open;
      button.setAttribute('aria-expanded', String(open));
      button.innerHTML = open
        ? 'Close preview <span>\u2212</span>'
        : 'Interactive preview <span>\uFF0B</span>';
      if (open) panel.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'nearest' });
    });
  });

  document.querySelectorAll('.demo-close').forEach(function (button) {
    button.addEventListener('click', function () {
      closeDemo(button.dataset.close);
      var toggle = document.querySelector('.demo-toggle[data-project="' + button.dataset.close + '"]');
      if (toggle) toggle.focus();
    });
  });

  document.querySelectorAll('.demo-run').forEach(function (button) {
    var label = button.innerHTML;
    button.addEventListener('click', function () {
      var project = button.dataset.run;
      var out = document.getElementById('result-' + project);
      if (out) out.textContent = demoOutputs[project] || 'No preview available.';
      button.innerHTML = 'Preview complete \u2713';
      setTimeout(function () { button.innerHTML = label; }, 2600);
    });
  });
})();
