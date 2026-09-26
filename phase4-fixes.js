const fs = require('fs');
const glob = require('fs').readdirSync('.');

// 1. Cache bust all HTML files
const htmlFiles = glob.filter(f => f.endsWith('.html'));
htmlFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/premium\.css(\?v=[0-9]+)?/g, 'premium.css?v=' + Date.now());
    
    // Also fix the back button:
    content = content.replace(/class="btn-premium glass-btn">العودة/g, 'class="btn-solid" style="padding: 1rem 2.5rem; font-size: 1.1rem; border-radius: 50px;">العودة');
    
    fs.writeFileSync(file, content);
});

// 2. Append final specific fixes to premium.css
let premiumCss = fs.readFileSync('css/premium.css', 'utf8');
premiumCss += `
/* ==========================================================================
   FINAL OVERRIDES (Phase 4)
   ========================================================================== */

/* Fix Hero Header on Mobile: Force relative positioning and normal padding */
.premium-header {
    position: relative !important;
}

@media (max-width: 992px) {
    .premium-header {
        padding: 10px 20px !important;
        border-radius: 20px !important;
    }
    .nav-menu {
        position: absolute !important;
        top: 100% !important;
        left: 0 !important;
        width: 100% !important;
        background: #25221F !important;
        border-radius: 20px !important;
        padding: 20px !important;
        display: none !important;
        flex-direction: column !important;
        z-index: 9999 !important;
        margin-top: 10px !important;
    }
    .nav-menu.active {
        display: flex !important;
    }
    .hero {
        padding-top: 120px !important; /* Ensure content clears header */
    }
}

/* Fix "Why Choose Us" text size and layout */
.feature-card-bg-overlay h3 {
    font-size: 1.2rem !important;
    margin-bottom: 0.5rem !important;
}
.feature-card-bg-overlay p {
    font-size: 0.85rem !important;
    line-height: 1.5 !important;
}
.premium-feature-card {
    min-height: 400px !important;
}

/* Center Latest Work Content */
.latest-work-header {
    text-align: center !important;
    align-items: center !important;
    margin: 0 auto 3rem auto !important;
    max-width: 800px !important;
}
.latest-work-cta {
    display: flex !important;
    justify-content: center !important;
    width: 100% !important;
    margin-top: 2rem !important;
}
.latest-work-cta a {
    margin: 0 auto !important;
}

/* Back Home Button wrapper centering */
.back-home-btn-wrapper {
    display: flex !important;
    justify-content: center !important;
    margin: 40px 0 !important;
}
`;
fs.writeFileSync('css/premium.css', premiumCss);
console.log('Phase 4 completed');
