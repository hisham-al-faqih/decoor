const fs = require('fs');
const glob = require('fs').readdirSync('.');

// 1. Cache bust all HTML files with a new unique timestamp
const cacheVersion = Date.now();
const htmlFiles = glob.filter(f => f.endsWith('.html'));

htmlFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/premium\.css(\?v=[0-9]+)?/g, 'premium.css?v=' + cacheVersion);
    content = content.replace(/style\.css(\?v=[0-9]+)?/g, 'style.css?v=' + cacheVersion);
    fs.writeFileSync(file, content);
});

// 2. Read premium.css
let premiumCss = fs.readFileSync('css/premium.css', 'utf8');

// 3. Append the Ultimate Fixes (Header, Buttons, Scroll Kill) at the absolute end
const finalFixes = `

/* ==========================================================================
   FINAL GLOBAL SURGERY: HEADER, BUTTONS, & SCROLL KILLER
   ========================================================================== */

/* 1. ABSOLUTE SCROLL KILLER (Global) */
html, body, .wrapper, .main, main {
    width: 100vw !important;
    max-width: 100vw !important;
    overflow-x: hidden !important;
    margin: 0 !important;
    padding: 0 !important;
    box-sizing: border-box !important;
}

*, *::before, *::after {
    box-sizing: border-box !important;
}

/* Force ALL grids and large containers to shrink to screen width */
.container, section, .editorial-grid, .projects-grid, .stats-grid, .features-grid, .process-grid, .projects-grid-new, .services-grid, .expertise-grid {
    width: 100% !important;
    max-width: 100vw !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
    box-sizing: border-box !important;
    overflow-x: hidden !important;
}

/* Eliminate any fixed px width elements that break mobile layout */
@media (max-width: 992px) {
    [style*="width:"] {
        max-width: 100vw !important;
    }
    
    img, iframe, video {
        max-width: 100% !important;
        height: auto !important;
        box-sizing: border-box !important;
    }
}

/* ==========================================
   2. UNIFIED HEADER FIX (Mobile)
   ========================================== */
@media (max-width: 992px) {
    /* Push header down to breathe */
    site-header {
        position: absolute !important;
        top: 25px !important; /* Pushed down nicely */
        left: 0 !important;
        width: 100% !important;
        z-index: 1000 !important;
        display: flex !important;
        justify-content: center !important;
        padding: 0 15px !important;
        box-sizing: border-box !important;
    }

    /* Deepen the glass effect and shape */
    .premium-header {
        width: 100% !important;
        background: rgba(26, 23, 20, 0.85) !important; /* Darker background */
        backdrop-filter: blur(20px) !important;
        -webkit-backdrop-filter: blur(20px) !important;
        border: 1px solid rgba(200, 176, 138, 0.4) !important; /* Brighter gold trim */
        border-radius: 50px !important; /* Perfect Pill shape */
        padding: 10px 25px !important;
        box-shadow: 0 15px 40px rgba(0,0,0,0.5) !important;
        margin: 0 !important;
        display: flex !important;
        align-items: center !important;
    }

    /* Adjust logo height inside this specific padding */
    .premium-header .logo img {
        max-height: 40px !important;
        width: auto !important;
        display: block !important;
        padding: 0 !important;
        margin: 0 !important;
    }
}

/* ==========================================
   3. PERFECT BUTTON CENTERING (Global & Mobile)
   ========================================== */
/* Apply to all CTA buttons everywhere */
.hero-btn, .btn-premium, .btn-solid, .glass-btn, .btn-outline-dark {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    text-align: center !important;
    box-sizing: border-box !important;
}

@media (max-width: 992px) {
    /* Buttons expand and center their text/icons perfectly */
    .hero-btn, .btn-premium, .btn-solid, .glass-btn, .btn-outline-dark, .hero-buttons a, .service-hero-buttons a {
        width: 100% !important;
        max-width: 100% !important;
        display: flex !important; /* Flex ensures internal content centers */
        align-items: center !important;
        justify-content: center !important;
        text-align: center !important;
        padding: 1rem 1rem !important; /* Balanced padding */
        font-size: 1rem !important;
        margin-left: 0 !important;
        margin-right: 0 !important;
        border-radius: 50px !important;
        gap: 10px !important; /* Clean space between icon and text */
    }

    /* Make sure SVG icons inside buttons don't skew or push text */
    .hero-btn svg, .btn-premium svg, .btn-solid svg, .glass-btn svg {
        margin: 0 !important;
        flex-shrink: 0 !important;
        width: 20px !important;
        height: 20px !important;
    }

    /* Hero button container strictly contained */
    .hero-buttons, .service-hero-buttons {
        width: 100% !important;
        max-width: 350px !important; /* Comfortable width on mobile */
        margin: 0 auto !important;
        display: flex !important;
        flex-direction: column !important;
        gap: 15px !important;
        align-items: center !important;
    }
}
`;

fs.writeFileSync('css/premium.css', premiumCss + finalFixes);
console.log('Final Mobile Surgery (Buttons & Scroll) injected!');
