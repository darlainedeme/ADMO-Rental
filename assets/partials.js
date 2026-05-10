/* Render shared nav + footer into [data-partial="nav"] and [data-partial="footer"].
   This keeps the four HTML files in sync without a build step. */

(function() {
  const NAV_HTML = `
    <nav id="nav">
      <div class="nav-inner">
        <a href="index.html" class="nav-brand"><span class="dot"></span>2465 18th St · Adams Morgan</a>
        <div class="nav-links">
          <a href="apartment.html">The apartment</a>
          <a href="neighborhood.html">The neighborhood</a>
          <a href="explore.html">Explore the map</a>
          <button id="dm-toggle" aria-label="Toggle dark mode" title="Toggle dark mode">☾</button>
          <a href="inquire.html" class="nav-cta">Inquire</a>
        </div>
      </div>
    </nav>
  `;

  const FOOTER_HTML = `
    <footer>
      <div class="footer-grid">
        <div>
          <div class="footer-brand">2465 18th St NW #4</div>
          <p style="max-width:38ch;">A furnished one-bedroom in a small four-unit building on 18th Street, Adams Morgan. The kind of place where you'll know your neighbors and walk almost everywhere. Available September 2026, twelve-month lease, possibility of renewal.</p>
        </div>
        <div>
          <h4>Pages</h4>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="apartment.html">The apartment</a></li>
            <li><a href="neighborhood.html">The neighborhood</a></li>
            <li><a href="explore.html">Explore the map</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        © <span id="footer-year"></span> · 2465 18th St NW #4, Adams Morgan, Washington DC
      </div>
    </footer>
  `;

  // ── Page-nav at the bottom of each page ─────────────────
  const ALL_PAGES = [
    { href: 'index.html',        label: 'Home',          desc: 'Why I built this site' },
    { href: 'apartment.html',    label: 'The apartment', desc: 'Photos, layout, lease terms' },
    { href: 'neighborhood.html', label: 'Neighborhood',  desc: 'Why I love living here' },
    { href: 'explore.html',      label: 'The map',       desc: 'Every spot I actually use' },
    { href: 'inquire.html',      label: 'Inquire',       desc: 'Send me a quick message' },
  ];
  const currentPage = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const others = ALL_PAGES.filter(p => p.href.toLowerCase() !== currentPage);
  const PAGE_NAV_HTML = `
    <section class="page-nav-pane">
      <div class="container">
        <div class="page-nav-eyebrow">Keep going</div>
        <div class="page-nav-grid">
          ${others.map(p => `
            <a class="page-nav-card" href="${p.href}">
              <div class="page-nav-label">${p.label}</div>
              <div class="page-nav-desc">${p.desc}</div>
              <span class="page-nav-arrow">→</span>
            </a>
          `).join('')}
        </div>
      </div>
    </section>
  `;

  const navHost = document.querySelector('[data-partial="nav"]');
  const footerHost = document.querySelector('[data-partial="footer"]');
  const pageNavHost = document.querySelector('[data-partial="page-nav"]');
  if (navHost) navHost.outerHTML = NAV_HTML;
  if (pageNavHost) pageNavHost.outerHTML = PAGE_NAV_HTML;
  if (footerHost) footerHost.outerHTML = FOOTER_HTML;
})();
