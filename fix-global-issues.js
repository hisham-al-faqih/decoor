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

// 2. Append fixes to premium.css
let premiumCss = fs.readFileSync('css/premium.css', 'utf8');

// We need to fix the site-header in mobile. Let's find the 'site-header {' inside the phase 5 block and replace 'relative' with 'absolute'.
// Actually, it's easier to just append an overriding CSS block at the very end.

const finalCSS = `
/* ==========================================================================
   GLOBAL SCROLL & UNIFIED HEADER FIX
   ========================================================================== */

/* 1. Kill Horizontal Scrolling globally */
html, body {
    max-width: 100vw !important;
    overflow-x: hidden !important;
    box-sizing: border-box !important;
}

*, *::before, *::after {
    box-sizing: border-box !important;
}

/* Ensure no element can exceed viewport width */
img, video, iframe, .container, .editorial-card, .premium-feature-card, section {
    max-width: 100vw !important;
}

/* 2. Unified Floating Glass Pill Header (Mobile) */
@media (max-width: 992px) {
    /* Make the header float perfectly on mobile just like desktop */
    site-header {
        position: absolute !important;
        top: 15px !important; /* Float a bit from the top */
        left: 0 !important;
        width: 100% !important;
        z-index: 1000 !important;
        display: flex !important;
        justify-content: center !important;
        padding: 0 15px !important;
        box-sizing: border-box !important;
    }

    .premium-header {
        width: 100% !important;
        background: rgba(37, 34, 31, 0.75) !important; /* Premium dark glass */
        backdrop-filter: blur(16px) !important;
        -webkit-backdrop-filter: blur(16px) !important;
        border: 1px solid rgba(200, 176, 138, 0.3) !important; /* Gold trim */
        border-radius: 40px !important; /* Perfect Pill shape */
        padding: 8px 20px !important;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3) !important;
        margin: 0 !important;
    }

    /* Readjust Hero padding so content starts below the floating header */
    .hero, .service-hero {
        padding-top: 100px !important;
    }
}

/* Force standard pill on desktop internal pages if it somehow differed */
site-header {
    position: absolute !important;
    top: 20px !important;
    left: 0 !important;
    width: 100% !important;
    z-index: 1000 !important;
    display: flex !important;
    justify-content: center !important;
    padding: 0 20px !important;
    box-sizing: border-box !important;
}
`;

fs.writeFileSync('css/premium.css', premiumCss + finalCSS);
console.log('Global scroll and unified header fix applied!');
