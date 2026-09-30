const fs = require('fs');
const glob = require('fs').readdirSync('.');

// 1. Cache bust all HTML files
const htmlFiles = glob.filter(f => f.endsWith('.html'));
const cacheVersion = Date.now();
htmlFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/premium\.css(\?v=[0-9]+)?/g, 'premium.css?v=' + cacheVersion);
    fs.writeFileSync(file, content);
});

// 2. Append the new fixes to premium.css
let premiumCss = fs.readFileSync('css/premium.css', 'utf8');

const newCSS = `

/* ==========================================================================
   USER REQUESTED FIX: HERO & FLOATING BUTTONS MOBILE FIX
   ========================================================================== */
/* ==========================================
   1. HERO CONTAINER & TYPOGRAPHY RESET (MOBILE)
   ========================================== */
@media (max-width: 992px) {
    .hero, .service-hero {
        min-height: 100vh !important;
        height: auto !important;
        padding-top: 130px !important; /* Forces layout to drop safely below header */
        padding-bottom: 50px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        box-sizing: border-box !important;
    }

    .hero-content, .service-hero-content {
        max-width: 100% !important;
        width: 100% !important;
        padding: 0 20px !important;
        margin: 0 auto !important;
        text-align: center !important;
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        box-sizing: border-box !important;
    }

    /* Force downscaling on all possible headings to kill duplicates */
    .hero-content h1, 
    .service-hero-content h1, 
    .hero-title,
    h1 {
        font-size: 1.8rem !important; /* Absolute fixed readable scale for phone */
        line-height: 1.4 !important;
        margin-bottom: 1rem !important;
        font-weight: 800 !important;
        color: #F7F4EF !important;
        text-align: center !important;
    }

    /* Force downscaling on descriptions */
    .hero-content p, 
    .service-hero-content p, 
    .hero-description,
    .hero-content p.hero-description {
        font-size: 0.95rem !important;
        line-height: 1.6 !important;
        margin-bottom: 2rem !important;
        color: rgba(247, 244, 239, 0.9) !important;
        max-width: 100% !important;
        text-align: center !important;
    }

    /* Stack Hero CTA Buttons Cleanly */
    .hero-buttons, .service-hero-buttons {
        display: flex !important;
        flex-direction: column !important;
        gap: 12px !important;
        width: 100% !important;
        max-width: 300px !important;
        margin: 0 auto !important;
    }

    .hero-buttons a, .service-hero-buttons a, .hero-btn {
        width: 100% !important;
        text-align: center !important;
        justify-content: center !important;
        padding: 0.8rem 1.5rem !important;
        font-size: 1rem !important;
        box-sizing: border-box !important;
        border-radius: 50px !important;
    }
}

/* ==========================================
   2. FLOATING CONTACT BUTTONS RESET (MOBILE)
   ========================================== */
@media (max-width: 992px) {
    /* Push the bar to the absolute bottom left corner out of the content way */
    .floating-contact-lux {
        position: fixed !important;
        bottom: 20px !important;
        left: 20px !important;
        right: auto !important;
        display: flex !important;
        flex-direction: column !important; /* Stack vertically so it doesn't block horizontal space */
        gap: 10px !important;
        z-index: 99999 !important;
        transform: none !important;
    }

    /* Ensure icons are perfect clean circles */
    .floating-contact-lux .float-btn-lux {
        width: 50px !important;
        height: 50px !important;
        padding: 0 !important;
        margin: 0 !important;
        border-radius: 50% !important;
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3) !important;
    }

    .floating-contact-lux .float-btn-lux svg {
        width: 22px !important;
        height: 22px !important;
        display: block !important;
        margin: 0 auto !important;
    }
}
`;

fs.writeFileSync('css/premium.css', premiumCss + newCSS);
console.log('Mobile Hero/Floating fix injected!');
