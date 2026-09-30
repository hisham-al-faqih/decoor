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

const universalFix = `
/* ==========================================================================
   UNIVERSAL HEADER & BUTTON FIX FOR ALL PAGES (MOBILE)
   ========================================================================== */
@media (max-width: 992px) {
    /* 1. Universal Glass Pill Header */
    .premium-header, .site-header .premium-header, header.premium-header {
        border-radius: 50px !important; /* Force capsule shape */
        background: rgba(26, 23, 20, 0.75) !important; /* Glass effect */
        backdrop-filter: blur(15px) !important;
        -webkit-backdrop-filter: blur(15px) !important;
        border: 1px solid rgba(200, 176, 138, 0.3) !important; /* Light gold border */
        margin: 15px auto !important;
        width: 90% !important;
        max-width: 400px !important;
        padding: 10px 20px !important;
        box-sizing: border-box !important;
        position: relative !important;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2) !important;
    }
    
    /* Center the header floating container */
    site-header {
        position: absolute !important;
        top: 10px !important;
        left: 0 !important;
        right: 0 !important;
        width: 100% !important;
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
        z-index: 1000 !important;
        padding: 0 !important;
    }

    /* 2. Shrink and Center Hero Buttons (All Pages) */
    .hero-buttons, .service-hero-buttons, .hero-content > div:last-child {
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        justify-content: center !important;
        width: 100% !important;
        margin-top: 25px !important;
    }

    .hero-buttons a, .service-hero-buttons a, .hero-btn, .service-hero-btn, .btn-premium, .hero-content a.btn-solid {
        display: flex !important;
        flex-direction: row !important;
        justify-content: center !important;
        align-items: center !important;
        width: 100% !important;
        max-width: 280px !important; /* Prevent giant width, shrink to elegant size */
        margin: 0 auto 15px auto !important;
        padding: 14px 20px !important;
        border-radius: 50px !important;
        box-sizing: border-box !important;
        text-align: center !important;
    }

    /* 3. Center Button Text and Icons Perfectly */
    .hero-buttons a span, .service-hero-buttons a span, .hero-btn span, .service-hero-btn span, .btn-premium span {
        display: inline-block !important;
        position: static !important;
        flex: 0 0 auto !important; /* Stop text from stretching */
        margin: 0 !important;
        padding: 0 !important;
        line-height: 1 !important;
        text-align: center !important;
    }

    .hero-buttons a svg, .service-hero-buttons a svg, .hero-btn svg, .service-hero-btn svg, .btn-premium svg {
        display: inline-block !important;
        position: static !important;
        flex: 0 0 auto !important; /* Stop SVG from stretching */
        margin: 0 0 0 10px !important; /* 10px gap pushing the text slightly left in RTL */
        padding: 0 !important;
        width: 20px !important;
        height: 20px !important;
    }
}
`;

fs.writeFileSync('css/premium.css', premiumCss + universalFix);
console.log('Universal header and button fixes injected!');
