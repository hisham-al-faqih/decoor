const fs = require('fs');
const glob = require('fs').readdirSync('.');

// 1. Cache bust HTML files
const htmlFiles = glob.filter(f => f.endsWith('.html'));
const cacheVersion = Date.now();
htmlFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/premium\.css(\?v=[0-9]+)?/g, 'premium.css?v=' + cacheVersion);
    fs.writeFileSync(file, content);
});

// 2. Append the ultimate fixes to premium.css
let premiumCss = fs.readFileSync('css/premium.css', 'utf8');

const finalCSS = `

/* ==========================================================================
   ULTIMATE GLOBAL OVERRIDES - MOBILE SPACING, HEADER & SCROLL KILLER
   ========================================================================== */

/* --- 1. Header Position, Spacing & Deep Glass --- */
@media (max-width: 992px) {
    site-header {
        position: fixed !important; /* Fixed ensures it stays beautifully floating when scrolling down */
        top: 25px !important; /* Extra breathing room from the top edge */
        left: 0 !important;
        right: 0 !important;
        width: 100% !important;
        max-width: 100% !important;
        z-index: 99999 !important;
        padding: 0 15px !important;
        margin: 0 auto !important;
        display: flex !important;
        justify-content: center !important;
        box-sizing: border-box !important;
    }

    .premium-header {
        width: 100% !important;
        background: rgba(20, 18, 16, 0.90) !important; /* Very deep, highly legible dark glass */
        backdrop-filter: blur(25px) !important;
        -webkit-backdrop-filter: blur(25px) !important;
        border: 1px solid rgba(200, 176, 138, 0.5) !important;
        padding: 12px 20px !important;
        border-radius: 40px !important;
        box-shadow: 0 15px 40px rgba(0,0,0,0.6) !important;
    }

    .nav-container .logo img {
        height: auto !important;
        max-height: 42px !important; /* Adjusted slightly larger for visibility */
        padding: 2px 0 !important;
        object-fit: contain !important;
    }

    /* Prevent hero content from hiding under the fixed header */
    .hero, .service-hero {
        padding-top: 150px !important; 
    }
}

/* Desktop unified deep glass */
.premium-header {
    background: rgba(20, 18, 16, 0.90) !important;
    backdrop-filter: blur(25px) !important;
    -webkit-backdrop-filter: blur(25px) !important;
}

/* --- 2. ABSOLUTE SCROLL KILLER (Global Overrides) --- */
html, body {
    width: 100% !important;
    max-width: 100% !important;
    overflow-x: hidden !important;
    margin: 0 !important;
    padding: 0 !important;
    box-sizing: border-box !important;
    position: relative !important;
}

*, *::before, *::after {
    box-sizing: border-box !important;
}

/* Lock down all potential overflow culprits */
section, header, footer, main, .container, .row, .grid, .editorial-grid, .projects-grid, .services-grid, .expertise-grid, .features-grid-bg, .faq-container, .keywords-fortress {
    max-width: 100% !important;
    box-sizing: border-box !important;
    overflow-x: hidden !important; /* Prevent internal scrolling */
}

/* Kill negative margins on rows if they exist from old grid systems */
.row {
    margin-left: 0 !important;
    margin-right: 0 !important;
}

/* Ensure media stays responsive unconditionally */
img, video, iframe, canvas {
    max-width: 100% !important;
    height: auto;
}
`;

fs.writeFileSync('css/premium.css', premiumCss + finalCSS);
console.log('Final Header & Scroll overrides injected!');
