/* Shared site behavior: nav, dark mode, fade-ins, escape helpers. */

(function() {
  // Dark mode toggle (theme is already applied pre-paint by inline script)
  const dmBtn = document.getElementById('dm-toggle');
  function setIcon() {
    const t = document.documentElement.getAttribute('data-theme');
    if (dmBtn) dmBtn.textContent = t === 'dark' ? '☀' : '☾';
  }
  if (dmBtn) {
    dmBtn.addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-theme');
      const next = cur === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      setIcon();
    });
    setIcon();
  }

  // Sticky nav scroll state
  const navEl = document.getElementById('nav');
  if (navEl && !navEl.classList.contains('solid')) {
    const onScroll = () => navEl.classList.toggle('scrolled', window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Highlight active nav link based on current page
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = (a.getAttribute('href') || '').toLowerCase();
    if (!href || href.startsWith('mailto') || href.startsWith('#')) return;
    if (href === path || (path === '' && href === 'index.html')) a.classList.add('active');
  });

  // Fade-in observer (entry animation)
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-in').forEach(el => io.observe(el));

  // Reading progress bar (injected; fills as user scrolls)
  const bar = document.createElement('div');
  bar.className = 'read-progress';
  const fill = document.createElement('div');
  bar.appendChild(fill);
  document.body.appendChild(bar);
  const updateProgress = () => {
    const h = document.documentElement;
    const total = h.scrollHeight - h.clientHeight;
    const pct = total > 0 ? Math.min(1, Math.max(0, h.scrollTop / total)) : 0;
    fill.style.width = (pct * 100).toFixed(2) + '%';
  };
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);
  updateProgress();

  // Animated number counters (elements with [data-count-to])
  const easeOut = t => 1 - Math.pow(1 - t, 3);
  const animateCount = el => {
    const target = parseFloat(el.dataset.countTo);
    if (isNaN(target)) return;
    const dur = parseInt(el.dataset.countDuration || '1100', 10);
    const decimals = parseInt(el.dataset.countDecimals || '0', 10);
    const prefix = el.dataset.countPrefix || '';
    const suffix = el.dataset.countSuffix || '';
    const start = performance.now();
    const fmt = n => prefix + n.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + suffix;
    el.classList.add('count-up');
    const tick = now => {
      const t = Math.min(1, (now - start) / dur);
      el.textContent = fmt(target * easeOut(t));
      if (t < 1) requestAnimationFrame(tick);
      else el.textContent = fmt(target);
    };
    requestAnimationFrame(tick);
  };
  const countIO = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCount(e.target);
        countIO.unobserve(e.target);
      }
    });
  }, { threshold: 0.4 });
  document.querySelectorAll('[data-count-to]').forEach(el => countIO.observe(el));

  // Footer year
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();

/* HTML escape */
window.escHtml = function(s) {
  return String(s || '').replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
};

/* Distance to walking time. Walking pace = 3 mph = 20 min/mile.
   Accepts a numeric miles value or a string like "0.3 mi". */
window.MIN_PER_MILE = 20;
window.walkMinutes = function(input) {
  if (input == null) return null;
  let mi = null;
  if (typeof input === 'number') mi = input;
  else {
    const m = String(input).match(/(\d+(?:\.\d+)?)/);
    if (m) mi = parseFloat(m[1]);
  }
  if (mi == null || isNaN(mi)) return null;
  return Math.max(1, Math.round(mi * window.MIN_PER_MILE));
};
/* Display string. 0.0 mi → "outside"; otherwise "N min walk". */
window.walkLabel = function(input) {
  if (input == null) return '';
  let mi = null;
  if (typeof input === 'number') mi = input;
  else {
    const m = String(input).match(/(\d+(?:\.\d+)?)/);
    if (m) mi = parseFloat(m[1]);
  }
  if (mi == null || isNaN(mi)) return '';
  if (mi < 0.05) return 'outside the door';
  const min = Math.max(1, Math.round(mi * window.MIN_PER_MILE));
  return `${min} min walk`;
};
