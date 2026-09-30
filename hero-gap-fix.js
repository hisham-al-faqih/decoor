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
   USER REQUESTED FIX: GAP AND BUTTON CENTERING
   ========================================================================== */
@media (max-width: 992px) {
    /* 1. Remove Top and Right gap in Hero */
    .hero-content, .service-hero-content {
        position: relative !important;
        right: auto !important;
        left: auto !important;
        top: auto !important;
        bottom: auto !important;
        margin-right: auto !important;
        margin-left: auto !important;
        margin-top: 0 !important;
        margin-bottom: 0 !important;
        width: 100% !important;
        max-width: 100% !important;
        padding: 0 15px !important;
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        justify-content: center !important;
        box-sizing: border-box !important;
        transform: none !important;
    }

    /* 2. Absolutely Center Buttons Content */
    .hero-btn, .btn-premium, .btn-solid, .glass-btn, .hero-buttons a, .service-hero-buttons a {
        display: flex !important;
        flex-direction: row !important;
        justify-content: center !important;
        align-items: center !important;
        text-align: center !important;
        width: 100% !important;
        max-width: 300px !important;
        margin: 0 auto !important;
        padding: 15px 20px !important;
        box-sizing: border-box !important;
        gap: 8px !important;
    }

    .hero-btn span, .btn-premium span, .btn-solid span, .glass-btn span {
        margin: 0 !important;
        padding: 0 !important;
        flex-grow: 0 !important;
        flex-shrink: 0 !important;
        width: auto !important;
        text-align: center !important;
        line-height: 1 !important;
    }

    .hero-btn svg, .btn-premium svg, .btn-solid svg, .glass-btn svg {
        margin: 0 !important;
        padding: 0 !important;
        flex-shrink: 0 !important;
        display: block !important;
    }
}
`;

fs.writeFileSync('css/premium.css', premiumCss + finalCSS);
console.log('Hero gap and button centering injected again!');
