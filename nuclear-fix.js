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

const finalCSS = `
/* ==========================================================================
   NUCLEAR FIX: BUTTON CENTERING AND RIGHT GAP
   ========================================================================== */
@media (max-width: 992px) {
    /* 1. Kill Body/Html Right Gap Completely */
    html, body {
        margin: 0 !important;
        padding: 0 !important;
        width: 100% !important;
        max-width: 100% !important;
        overflow-x: hidden !important;
        position: relative !important;
    }
    
    .hero, .service-hero {
        width: 100% !important;
        max-width: 100% !important;
        margin: 0 !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
        left: 0 !important;
        right: 0 !important;
        overflow: hidden !important; /* Prevents background overflow */
    }

    .hero-bg-image {
        position: absolute !important;
        top: 0 !important;
        right: 0 !important;
        left: 0 !important;
        bottom: 0 !important;
        width: 100vw !important; /* Force full viewport width */
        max-width: 100% !important;
        margin: 0 !important;
        transform: none !important;
    }

    .hero-content, .service-hero-content {
        width: 100% !important;
        max-width: 100% !important;
        margin: 0 auto !important;
        padding: 0 20px !important;
        right: 0 !important;
        left: 0 !important;
        transform: none !important;
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        justify-content: center !important;
    }

    /* 2. Absolute Centering for Buttons */
    .hero-buttons {
        width: 100% !important;
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        justify-content: center !important;
        margin-top: 20px !important;
    }

    .hero-buttons a.hero-btn, .service-hero-buttons a.service-hero-btn {
        display: flex !important;
        flex-direction: row !important;
        justify-content: center !important;
        align-items: center !important;
        width: 100% !important;
        max-width: 320px !important;
        margin: 0 auto 15px auto !important;
        padding: 15px !important;
        box-sizing: border-box !important;
    }

    .hero-buttons a.hero-btn span, .service-hero-buttons a.service-hero-btn span {
        display: inline-block !important;
        position: static !important;
        flex: 0 0 auto !important;
        margin: 0 !important;
        padding: 0 !important;
        text-align: center !important;
        line-height: 1 !important;
    }

    .hero-buttons a.hero-btn svg, .service-hero-buttons a.service-hero-btn svg {
        display: inline-block !important;
        position: static !important;
        margin: 0 0 0 10px !important; /* Spacing in RTL: margin-left pushes text to the right */
        padding: 0 !important;
        flex: 0 0 auto !important;
    }
}
`;

fs.writeFileSync('css/premium.css', premiumCss + finalCSS);
console.log('Nuclear fix injected!');
