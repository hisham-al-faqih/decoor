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
   HERO GAP & BUTTON CENTERING OVERRIDE
   ========================================================================== */
@media (max-width: 992px) {
    /* 1. Fix Top and Right Gap */
    .hero, .service-hero {
        margin: 0 !important;
        width: 100vw !important;
        max-width: 100vw !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
        overflow: hidden !important; /* Prevents background image shifting */
    }
    
    .hero-bg-image {
        position: absolute !important;
        top: 0 !important;
        right: 0 !important; /* RTL Critical */
        left: 0 !important;
        bottom: 0 !important;
        width: 100% !important;
        height: 100% !important;
        margin: 0 !important;
        transform: none !important;
    }

    .hero-content, .service-hero-content {
        position: relative !important;
        right: auto !important;
        left: auto !important;
        top: auto !important;
        bottom: auto !important;
        margin-right: auto !important;
        margin-left: auto !important;
        margin-top: 0 !important;
        padding: 0 15px !important;
        width: 100% !important;
        max-width: 100vw !important;
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        justify-content: center !important;
        box-sizing: border-box !important;
    }

    /* 2. Absolute Centering for Buttons */
    .hero-btn, .btn-premium, .btn-solid, .glass-btn, .hero-buttons a, .service-hero-buttons a {
        display: flex !important;
        flex-direction: row !important;
        justify-content: center !important;
        align-items: center !important;
        text-align: center !important;
        width: 100% !important;
        max-width: 300px !important;
        margin: 0 auto !important; /* Center button block */
        padding: 15px 20px !important;
        box-sizing: border-box !important;
    }

    .hero-btn span, .btn-premium span, .btn-solid span, .glass-btn span {
        margin: 0 !important;
        padding: 0 !important;
        flex-grow: 0 !important; /* Do not stretch */
        text-align: center !important;
        line-height: 1 !important;
    }

    .hero-btn svg, .btn-premium svg, .btn-solid svg, .glass-btn svg {
        margin: 0 !important;
        margin-inline-end: 10px !important; /* Consistent RTL spacing */
        padding: 0 !important;
        flex-shrink: 0 !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
    }
}
`;

fs.writeFileSync('css/premium.css', premiumCss + finalCSS);
console.log('Hero gap and button centering injected!');
