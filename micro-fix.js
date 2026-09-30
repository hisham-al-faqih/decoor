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

// 3. Append the precise micro fixes
const finalFixes = `

/* ==========================================================================
   MICRO-SURGERY: BUTTONS CENTERING & HEADER OVERFLOW
   ========================================================================== */
@media (max-width: 992px) {
    /* 1. Perfect Button Centering */
    .hero-buttons a, .service-hero-buttons a, .hero-btn, .btn-premium, .btn-solid, .glass-btn {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        width: 100% !important;
        max-width: 320px !important;
        margin: 0 auto !important; /* Center the button in the container */
        padding: 14px 20px !important; /* Even padding */
        gap: 10px !important; /* Exact gap */
        box-sizing: border-box !important;
    }
    
    .hero-btn svg, .btn-premium svg, .btn-solid svg, .glass-btn svg {
        margin: 0 !important; /* Kill any lopsided margins */
        display: block !important;
    }

    .hero-buttons, .service-hero-buttons {
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important; /* Force children to center */
        justify-content: center !important;
        width: 100% !important;
        padding: 0 !important;
        margin: 0 auto !important;
    }

    /* 2. Header & Nav Horizontal Scroll Fix */
    site-header {
        position: absolute !important;
        left: 0 !important;
        right: 0 !important;
        width: 100vw !important; /* Strict viewport width */
        max-width: 100vw !important;
        padding: 0 15px !important; /* Safe zone */
        box-sizing: border-box !important;
        overflow-x: hidden !important;
    }

    .premium-header {
        width: 100% !important;
        max-width: 100% !important; /* Prevent it from expanding beyond site-header */
        box-sizing: border-box !important;
        padding: 10px 20px !important; /* Safe internal padding */
        overflow-x: hidden !important; /* Kill any internal spillage */
        display: flex !important;
        justify-content: space-between !important;
        align-items: center !important;
    }

    .nav-container {
        width: 100% !important;
        max-width: 100% !important;
        display: flex !important;
        justify-content: space-between !important;
        align-items: center !important;
        box-sizing: border-box !important;
        padding: 0 !important;
        margin: 0 !important;
    }

    .nav-menu {
        left: 0 !important;
        right: 0 !important;
        width: 100vw !important; /* Exact screen width */
        max-width: 100vw !important;
        margin: 0 !important;
        margin-left: -15px !important; /* Compensate for site-header 15px padding */
        box-sizing: border-box !important;
        overflow-x: hidden !important; /* Crucial kill switch */
    }
    
    .nav-menu ul {
        width: 100% !important;
        box-sizing: border-box !important;
        padding: 0 !important;
        margin: 0 !important;
        overflow-x: hidden !important;
    }
}
`;

fs.writeFileSync('css/premium.css', premiumCss + finalFixes);
console.log('Micro fixes for buttons and header overflow injected!');
