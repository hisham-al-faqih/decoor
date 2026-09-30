const fs = require('fs');
const glob = require('fs').readdirSync('.');

// 1. Cache bust HTML
const cacheVersion = Date.now();
const htmlFiles = glob.filter(f => f.endsWith('.html'));

htmlFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/premium\.css(\?v=[0-9]+)?/g, 'premium.css?v=' + cacheVersion);
    fs.writeFileSync(file, content);
});

// 2. Read premium.css
let premiumCss = fs.readFileSync('css/premium.css', 'utf8');

// Find where my fixes started to completely wipe them out and start fresh
const fixStart = premiumCss.indexOf('/* ==========================================================================');
if (fixStart !== -1 && fixStart > 50000) {
    premiumCss = premiumCss.substring(0, fixStart);
}

const finalMasterCSS = `
/* ==========================================================================
   ULTIMATE MASTER FIX: HERO, BUTTONS, & RESPONSIVENESS (DESKTOP & MOBILE)
   ========================================================================== */

/* 1. Global Reset to Prevent Horizontal Scroll & Gaps */
html, body {
    margin: 0 !important;
    padding: 0 !important;
    width: 100% !important;
    max-width: 100% !important;
    overflow-x: hidden !important;
}

/* 2. Fix Hero Container for ALL screen sizes */
.hero, .service-hero {
    position: relative !important;
    width: 100% !important;
    max-width: 100% !important;
    min-height: 100vh !important;
    margin: 0 !important;
    padding: 180px 20px 80px 20px !important; /* Huge top padding to clear header */
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    box-sizing: border-box !important;
    overflow: hidden !important;
}

/* Ensure background image covers perfectly without gaps */
.hero-bg-image {
    position: absolute !important;
    top: 0 !important;
    right: 0 !important; /* Critical for RTL */
    left: 0 !important;
    bottom: 0 !important;
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
    z-index: -1 !important;
    margin: 0 !important;
    transform: none !important;
}

/* Fix Hero Content Box */
.hero-content, .service-hero-content {
    position: relative !important;
    width: 100% !important;
    max-width: 800px !important;
    margin: 0 auto !important;
    right: auto !important;
    left: auto !important;
    transform: none !important;
    text-align: center !important;
    z-index: 2 !important;
}

/* 3. Universal Header Pill Design (Desktop & Mobile) */
.premium-header, .site-header .premium-header, header.premium-header {
    border-radius: 50px !important;
    background: rgba(26, 23, 20, 0.75) !important;
    backdrop-filter: blur(15px) !important;
    -webkit-backdrop-filter: blur(15px) !important;
    border: 1px solid rgba(200, 176, 138, 0.3) !important;
    margin: 15px auto !important;
    width: 90% !important;
    max-width: 1100px !important;
    padding: 10px 20px !important;
    box-sizing: border-box !important;
    box-shadow: 0 10px 25px rgba(0,0,0,0.2) !important;
}

site-header {
    position: absolute !important;
    top: 10px !important;
    left: 0 !important;
    right: 0 !important;
    width: 100% !important;
    display: flex !important;
    justify-content: center !important;
    z-index: 1000 !important;
}

/* 4. Ultimate Button Centering (Desktop & Mobile) */
.hero-buttons, .service-hero-buttons {
    width: 100% !important;
    display: flex !important;
    flex-direction: row !important;
    flex-wrap: wrap !important;
    justify-content: center !important;
    align-items: center !important;
    gap: 15px !important;
    margin-top: 30px !important;
    z-index: 2 !important;
    position: relative !important;
}

/* The exact button style */
.hero-btn, .service-hero-btn, .btn-premium, .btn-solid {
    display: flex !important;
    flex-direction: row !important;
    justify-content: center !important; /* Push contents to absolute center */
    align-items: center !important;
    width: auto !important;
    min-width: 200px !important;
    max-width: 100% !important;
    margin: 0 !important;
    padding: 15px 30px !important;
    border-radius: 50px !important;
    box-sizing: border-box !important;
    text-decoration: none !important;
    gap: 10px !important; /* Space between icon and text */
}

/* Force Text and Icon to behave inside the button */
.hero-btn span, .service-hero-btn span, .btn-premium span, .btn-solid span {
    display: inline-block !important;
    margin: 0 !important;
    padding: 0 !important;
    flex: 0 0 auto !important;
    text-align: center !important;
}

.hero-btn svg, .service-hero-btn svg, .btn-premium svg, .btn-solid svg {
    display: inline-block !important;
    margin: 0 !important;
    padding: 0 !important;
    flex: 0 0 auto !important;
    width: 1.2em !important;
    height: 1.2em !important;
}

/* ==========================================================================
   MOBILE SPECIFIC ADJUSTMENTS
   ========================================================================== */
@media (max-width: 992px) {
    .premium-header, .site-header .premium-header, header.premium-header {
        max-width: 400px !important;
        padding: 8px 15px !important;
    }

    .hero-buttons, .service-hero-buttons {
        flex-direction: column !important; /* Stack on mobile */
        gap: 15px !important;
    }

    .hero-btn, .service-hero-btn, .btn-premium, .btn-solid {
        width: 100% !important;
        max-width: 280px !important; /* Shrink to elegant mobile size */
        padding: 14px 20px !important;
    }

    .nav-menu {
        position: absolute !important;
        top: 100% !important;
        left: 0 !important;
        width: 100% !important;
        max-width: 100% !important;
        margin: 10px 0 0 0 !important;
        overflow-x: hidden !important;
        box-sizing: border-box !important;
    }
}
`;

fs.writeFileSync('css/premium.css', premiumCss + finalMasterCSS);
console.log('Master fix injected successfully!');
