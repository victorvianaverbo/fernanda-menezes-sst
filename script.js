// =========================================================
// Fernanda Menezes — interações da landing page (vanilla JS)
// =========================================================

(() => {
  'use strict';

  // 1. Pós-load: stagger fade-up
  window.addEventListener('load', () => {
    requestAnimationFrame(() => document.body.classList.add('is-ready'));
  });

  // 2. Scroll progress bar + header sticky
  const header = document.getElementById('site-header');
  const progressEl = document.querySelector('.scroll-progress');
  let stickyThreshold = 80;

  function onScroll() {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
    if (progressEl) progressEl.style.width = pct + '%';

    if (header) {
      const shouldStick = scrollY > stickyThreshold;
      if (shouldStick && !header.classList.contains('is-scrolled')) {
        header.classList.add('is-scrolled');
        document.body.classList.add('has-fixed-header');
      } else if (!shouldStick && header.classList.contains('is-scrolled')) {
        header.classList.remove('is-scrolled');
        document.body.classList.remove('has-fixed-header');
      }
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // 3. Tabs verticais (Solução)
  const tabs = document.querySelectorAll('.tabs__tab');
  const panels = document.querySelectorAll('.tabs__panel');
  let autoCycleTimer = null;

  function activateTab(targetId) {
    tabs.forEach(t => {
      const active = t.dataset.tab === targetId;
      t.classList.toggle('is-active', active);
      t.setAttribute('aria-selected', active ? 'true' : 'false');
    });
    panels.forEach(p => p.classList.toggle('is-active', p.dataset.panel === targetId));
  }

  function resetAutoCycle() {
    clearTimeout(autoCycleTimer);
    autoCycleTimer = setTimeout(() => {
      const order = ['01', '02', '03', '04'];
      const current = document.querySelector('.tabs__tab.is-active')?.dataset.tab || '01';
      const next = order[(order.indexOf(current) + 1) % order.length];
      activateTab(next);
    }, 8000);
  }

  tabs.forEach(t => {
    t.addEventListener('click', () => {
      activateTab(t.dataset.tab);
      clearTimeout(autoCycleTimer);
      autoCycleTimer = null;
    });
  });

  // Auto-cycle apenas quando seção está visível
  const servicesSection = document.querySelector('.services');
  if (servicesSection) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting && autoCycleTimer === null) {
          resetAutoCycle();
        } else if (!e.isIntersecting) {
          clearTimeout(autoCycleTimer);
          autoCycleTimer = null;
        }
      });
    }, { threshold: 0.3 });
    obs.observe(servicesSection);
  }

  // 4. Problema: numerais outline → fill quando entram em viewport
  const problemItems = document.querySelectorAll('.problem__item');
  if (problemItems.length) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.3, rootMargin: '0px 0px -10% 0px' });
    problemItems.forEach(it => obs.observe(it));
  }

  // 5. Como funciona: timeline gold draw + dots scale
  const howTimeline = document.querySelector('.how__timeline');
  const howSteps = document.querySelectorAll('.how__step');
  if (howTimeline) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          howTimeline.classList.add('is-visible');
          howSteps.forEach((s, i) => {
            setTimeout(() => s.classList.add('is-visible'), 200 + i * 220);
          });
          obs.disconnect();
        }
      });
    }, { threshold: 0.25 });
    obs.observe(howTimeline);
  }

  // 6. Counter animation nas métricas (sobre)
  const counters = document.querySelectorAll('[data-counter-to]');
  if (counters.length) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const to = parseInt(el.dataset.counterTo, 10);
        const duration = 1200;
        const start = performance.now();
        function tick(now) {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          el.textContent = Math.round(to * eased);
          if (t < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        obs.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(c => obs.observe(c));
  }

  // 7. Smooth scroll para âncoras internas (offset por header sticky)
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const targetId = a.getAttribute('href');
      if (targetId === '#' || targetId.length < 2) return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      const offset = header?.classList.contains('is-scrolled') ? 88 : 24;
      const y = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });
})();
