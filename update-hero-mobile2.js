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

// 2. Remove the previous hero fix and append the new one
let premiumCss = fs.readFileSync('css/premium.css', 'utf8');

// The marker for the previous code block starts here:
const heroMarker = '/* ==========================================\n   1. HERO CONTAINER & TYPOGRAPHY RESET (MOBILE)\n   ========================================== */';
const floatingMarker = '/* ==========================================\n   2. FLOATING CONTACT BUTTONS RESET (MOBILE)\n   ========================================== */';

// We want to remove everything from heroMarker to floatingMarker
const heroIdx = premiumCss.indexOf(heroMarker);
const floatingIdx = premiumCss.indexOf(floatingMarker);

if (heroIdx !== -1 && floatingIdx !== -1) {
    // Keep everything before the hero fix and everything from floating buttons onwards
    premiumCss = premiumCss.substring(0, heroIdx) + premiumCss.substring(floatingIdx);
}

const newCSS = `
/* ==========================================
   1. HERO CONTAINER & TYPOGRAPHY RESET (MOBILE) (UPDATED)
   ========================================== */
@media (max-width: 992px) {
    /* 1. Force Hero Section to expand naturally with its children */
    .hero, .service-hero {
        height: auto !important;
        min-height: 100vh !important;
        display: flex !important;
        flex-direction: column !important;
        justify-content: center !important;
        align-items: center !important;
        padding-top: 120px !important;
        padding-bottom: 60px !important;
        box-sizing: border-box !important;
    }

    /* 2. Break any absolute positioning or fixed height on the content container */
    .hero-content, .service-hero-content {
        position: relative !important;
        top: auto !important;
        left: auto !important;
        right: auto !important;
        transform: none !important;
        height: auto !important; /* Forces the box to expand naturally downwards */
        min-height: unset !important;
        max-width: 100% !important;
        width: 100% !important;
        padding: 0 20px !important;
        margin: 0 auto !important;
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        box-sizing: border-box !important;
    }

    /* 3. Stabilize typography scales on mobile */
    .hero-content h1, 
    .service-hero-content h1, 
    .hero-title, 
    h1 {
        font-size: 1.7rem !important; /* Perfect readable title size on mobile phones */
        line-height: 1.5 !important;
        margin-top: 0 !important;
        margin-bottom: 1.25rem !important;
        font-weight: 800 !important;
        color: #F7F4EF !important;
        text-align: center !important;
        display: block !important;
    }

    .hero-content p, 
    .service-hero-content p, 
    .hero-description {
        font-size: 0.95rem !important;
        line-height: 1.7 !important;
        margin-bottom: 2.5rem !important; /* Gives clear breathing room before buttons */
        color: rgba(247, 244, 239, 0.95) !important;
        text-align: center !important;
        display: block !important;
        height: auto !important; /* Ensure description doesn't have fixed heights */
    }

    /* 4. Force Buttons container to stack beneath the text perfectly */
    .hero-buttons, .service-hero-buttons {
        display: flex !important;
        flex-direction: column !important;
        gap: 14px !important;
        width: 100% !important;
        max-width: 320px !important;
        margin-top: 0 !important;
        margin-bottom: 0 !important;
        position: relative !important;
    }

    .hero-buttons a, .service-hero-buttons a, .hero-btn {
        width: 100% !important;
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        padding: 0.9rem 1.5rem !important;
        font-size: 1rem !important;
        border-radius: 50px !important;
        box-sizing: border-box !important;
    }
}
`;

fs.writeFileSync('css/premium.css', premiumCss + newCSS);
console.log('Mobile Hero updated fix injected!');
