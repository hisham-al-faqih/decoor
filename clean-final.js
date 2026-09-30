const fs = require('fs');
const glob = require('fs').readdirSync('.');

// 1. Cache bust all HTML files
const cacheVersion = Date.now();
const htmlFiles = glob.filter(f => f.endsWith('.html'));

htmlFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/premium\.css(\?v=[0-9]+)?/g, 'premium.css?v=' + cacheVersion);
    fs.writeFileSync(file, content);
});

// 2. Read premium.css
let premiumCss = fs.readFileSync('css/premium.css', 'utf8');

const globalScrollIdx = premiumCss.indexOf('GLOBAL SCROLL');
if (globalScrollIdx > 100) {
    // find the start of the comment block
    const commentStart = premiumCss.lastIndexOf('/* ==========================================================================', globalScrollIdx);
    if (commentStart !== -1) {
        premiumCss = premiumCss.substring(0, commentStart);
    }
}

// Append the final clean fixes
const finalFixes = `

/* ==========================================================================
   CLEAN FINAL FIXES: BUTTONS & HEADER MENU & SCROLL
   ========================================================================== */
/* 1. Global Horizontal Scroll Kill */
html, body {
    max-width: 100vw !important;
    overflow-x: hidden !important;
    box-sizing: border-box !important;
}

*, *::before, *::after {
    box-sizing: border-box !important;
}

img, video, iframe, .container, section, .editorial-grid, .projects-grid, .stats-grid, .features-grid, .process-grid, .projects-grid-new, .services-grid, .expertise-grid {
    max-width: 100vw !important;
    box-sizing: border-box !important;
}

@media (max-width: 992px) {
    /* 2. Header Mobile Offset (keep original colors) */
    site-header {
        position: absolute !important;
        top: 20px !important;
        left: 0 !important;
        right: 0 !important;
        width: 100% !important;
        z-index: 1000 !important;
        display: block !important;
        padding: 0 15px !important;
        box-sizing: border-box !important;
    }

    .premium-header {
        width: 100% !important;
        max-width: 100% !important;
        box-sizing: border-box !important;
        margin: 0 !important;
        /* Background remains its original glass color */
        padding: 10px 20px !important;
    }

    /* Keep Nav Menu strictly inside without bleeding */
    .nav-menu {
        position: absolute !important;
        top: 100% !important;
        left: 0 !important;
        width: 100% !important;
        max-width: 100% !important;
        margin: 0 !important;
        margin-top: 10px !important;
        box-sizing: border-box !important;
        overflow-x: hidden !important;
    }
    
    .nav-menu ul {
        width: 100% !important;
        padding: 0 !important;
        margin: 0 !important;
        box-sizing: border-box !important;
    }

    /* 3. Button Centering */
    .hero-btn, .btn-premium, .btn-solid, .glass-btn, .hero-buttons a {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        text-align: center !important;
        width: 100% !important;
        padding: 12px 20px !important;
        gap: 8px !important;
        box-sizing: border-box !important;
    }

    .hero-btn svg, .btn-premium svg, .btn-solid svg, .glass-btn svg {
        margin: 0 !important;
        padding: 0 !important;
        flex-shrink: 0 !important;
        display: block !important;
    }
}
`;

fs.writeFileSync('css/premium.css', premiumCss + finalFixes);
console.log('Clean final fixes injected!');
