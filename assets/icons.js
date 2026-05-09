/* SVG icons keyed by category. Lucide-style line icons.
   Use ICON(category, sizePx, colorVar) to get an inline SVG string. */

window.CAT_COLORS = {
  "everyday essentials":       "#c14b2f",
  "food & dining":             "#d97706",
  "nightlife & entertainment": "#7c3aed",
  "cafes & work":              "#0891b2",
  "outdoor & recreation":      "#16a34a",
  "transport & connectivity":  "#2563eb",
  "transport hubs":            "#1e40af",
  "shopping & local finds":    "#be185d",
  "health & safety":           "#dc2626",
  "culture & attractions":     "#9333ea",
  "tourism & landmarks":       "#a16207",
  "neighborhoods & areas":     "#475569",
  "pet-friendly":              "#0e7490",
  "family-friendly":           "#65a30d",
  "religious & spiritual":     "#6b21a8",
  "wellness & spa":            "#0d9488",
  "beauty & grooming":         "#db2777",
};
window.colorFor = c => window.CAT_COLORS[c] || "#6b6b6b";

/* Each icon is a path-only SVG body. The wrapper supplies size + color. */
const ICON_PATHS = {
  // Shopping bag — everyday essentials
  "everyday essentials":
    `<path d="M6 2L4 6v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6l-2-4H6z"/><line x1="4" y1="6" x2="20" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>`,
  // Fork & knife crossed — food
  "food & dining":
    `<path d="M3 2v7c0 1.1.9 2 2 2v11"/><line x1="7" y1="2" x2="7" y2="22"/><path d="M21 15V2c-2 0-4 2-4 4v7c0 1 1 2 2 2h2v6"/>`,
  // Cocktail glass — nightlife
  "nightlife & entertainment":
    `<path d="M5 3l7 9 7-9z"/><line x1="12" y1="12" x2="12" y2="21"/><line x1="8" y1="21" x2="16" y2="21"/>`,
  // Coffee cup — cafes & work
  "cafes & work":
    `<path d="M17 8h1a4 4 0 0 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/>`,
  // Tree — outdoor & recreation
  "outdoor & recreation":
    `<path d="M12 2L8 7h2v3H6l4 5h-2l4 5 4-5h-2l4-5h-4V7h2z"/><line x1="12" y1="20" x2="12" y2="22"/>`,
  // Bus — transport
  "transport & connectivity":
    `<path d="M8 6v6"/><path d="M16 6v6"/><path d="M2 12h19.6"/><path d="M18 18h3a1 1 0 0 0 1-1V8.5a1 1 0 0 0-.4-.8L17 4H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>`,
  // Train — transport hubs
  "transport hubs":
    `<rect x="4" y="3" width="16" height="16" rx="2"/><path d="M4 11h16"/><path d="M12 3v8"/><path d="M8 19l-2 3"/><path d="M16 19l2 3"/><circle cx="8" cy="15" r="1"/><circle cx="16" cy="15" r="1"/>`,
  // Shopping tote — shopping & local finds
  "shopping & local finds":
    `<path d="M3 7h18l-2 13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L3 7z"/><path d="M8 7V5a4 4 0 0 1 8 0v2"/>`,
  // Cross / heart — health & safety
  "health & safety":
    `<path d="M19 14c1.5-2 3-4 3-7a4 4 0 0 0-7-3 4 4 0 0 0-7 3c0 3 1.5 5 3 7l4 5z"/>`,
  // Ticket — culture & attractions
  "culture & attractions":
    `<path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/><line x1="13" y1="5" x2="13" y2="19"/>`,
  // Monument
  "tourism & landmarks":
    `<path d="M12 2L4 22h16L12 2z"/><circle cx="12" cy="6" r="1"/>`,
  // Map pin — neighborhoods
  "neighborhoods & areas":
    `<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>`,
  // Paw — pet-friendly
  "pet-friendly":
    `<circle cx="12" cy="14" r="4"/><circle cx="6.5" cy="9.5" r="2"/><circle cx="17.5" cy="9.5" r="2"/><circle cx="9" cy="6" r="1.7"/><circle cx="15" cy="6" r="1.7"/>`,
  // Family — family-friendly
  "family-friendly":
    `<circle cx="9" cy="6" r="2.5"/><circle cx="16" cy="7" r="2"/><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><path d="M16 11a3 3 0 0 1 3 3v2"/>`,
  // Building with cross/dome — religious & spiritual
  "religious & spiritual":
    `<path d="M12 2v4"/><path d="M10 4h4"/><path d="M5 22V10l7-4 7 4v12"/><path d="M9 22v-6h6v6"/>`,
  // Lotus — wellness & spa
  "wellness & spa":
    `<path d="M12 22c0-4 0-7 4-9-4-2-4-5-4-9 0 4 0 7-4 9 4 2 4 5 4 9z"/><path d="M3 14c2 1 5 1 6-1"/><path d="M21 14c-2 1-5 1-6-1"/>`,
  // Scissors — beauty & grooming
  "beauty & grooming":
    `<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/>`,
};

/* Builds an SVG string. size in px. color is a CSS color or var. */
window.renderIcon = function(category, size = 18, color = 'currentColor', strokeWidth = 1.8) {
  const path = ICON_PATHS[category] || ICON_PATHS["neighborhoods & areas"];
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;
};

/* Map marker: filled circle bg + white icon. Returns a Leaflet divIcon-ready HTML string. */
window.renderMapMarker = function(category, opts = {}) {
  const color = window.colorFor(category);
  const size = opts.size || 30;
  const inner = opts.inner || 16;
  const path = ICON_PATHS[category] || ICON_PATHS["neighborhoods & areas"];
  return `
    <div style="
      width:${size}px;height:${size}px;border-radius:50%;
      background:${color};
      display:flex;align-items:center;justify-content:center;
      box-shadow:0 2px 6px rgba(0,0,0,.35);
      border:2px solid white;
    ">
      <svg xmlns="http://www.w3.org/2000/svg" width="${inner}" height="${inner}" viewBox="0 0 24 24"
        fill="none" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">${path}</svg>
    </div>`;
};

/* Home pin SVG — circular house icon */
window.HOME_MARKER_HTML = `
  <div style="
    width:40px;height:40px;border-radius:50%;
    background:#1a1a1a;
    display:flex;align-items:center;justify-content:center;
    box-shadow:0 3px 12px rgba(0,0,0,.45);
    border:3px solid white;
  ">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 12l9-9 9 9"/>
      <path d="M5 10v10a1 1 0 0 0 1 1h4v-7h4v7h4a1 1 0 0 0 1-1V10"/>
    </svg>
  </div>`;
