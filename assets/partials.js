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
          <a href="mailto:inquiries@example.com?subject=Adams%20Morgan%20apartment%20%E2%80%94%20Sept%202026%20lease" class="nav-cta">Inquire</a>
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

  const navHost = document.querySelector('[data-partial="nav"]');
  const footerHost = document.querySelector('[data-partial="footer"]');
  if (navHost) navHost.outerHTML = NAV_HTML;
  if (footerHost) footerHost.outerHTML = FOOTER_HTML;
})();
