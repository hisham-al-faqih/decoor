const fs = require('fs');
const glob = require('fs').readdirSync('.');

// 1. Cache bust HTML files
const htmlFiles = glob.filter(f => f.endsWith('.html'));
const cacheVersion = Date.now();
htmlFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/premium\.css(\?v=[0-9]+)?/g, 'premium.css?v=' + cacheVersion);
    fs.writeFileSync(file, content);
});

// 2. Append Ultimate Mobile Reset
let premiumCss = fs.readFileSync('css/premium.css', 'utf8');

premiumCss += `
/* ==========================================================================
   ULTIMATE MOBILE RESPONSIVE RESET (Phase 5)
   ========================================================================== */
@media (max-width: 992px) {
    /* --- 1. Header Reset --- */
    site-header {
        position: relative !important;
        z-index: 1000 !important;
        display: block !important;
        width: 100% !important;
    }
    .premium-header {
        position: relative !important;
        width: 100% !important;
        max-width: 100% !important;
        border-radius: 0 !important; 
        padding: 10px 15px !important;
        margin: 0 !important;
        border: none !important;
        border-bottom: 1px solid rgba(255,255,255,0.1) !important;
        height: auto !important;
        box-sizing: border-box !important;
    }
    .nav-container {
        display: flex !important;
        justify-content: space-between !important;
        align-items: center !important;
        width: 100% !important;
        flex-wrap: nowrap !important;
        box-sizing: border-box !important;
    }
    .logo {
        display: flex !important;
        align-items: center !important;
    }
    .logo img {
        max-height: 45px !important; 
        width: auto !important;
    }
    .nav-actions {
        display: flex !important;
        align-items: center !important;
    }
    .nav-toggle {
        display: flex !important;
        flex-direction: column !important;
        justify-content: space-around !important;
        width: 32px !important;
        height: 24px !important;
        background: transparent !important;
        border: none !important;
        padding: 0 !important;
        margin: 0 !important;
        cursor: pointer !important;
    }
    .nav-toggle span {
        width: 100% !important;
        height: 3px !important;
        background-color: var(--white, #fff) !important;
        border-radius: 3px !important;
        display: block !important;
    }
    
    /* --- 2. Mobile Menu Dropdown --- */
    .nav-menu {
        position: absolute !important;
        top: 100% !important;
        left: 0 !important;
        right: 0 !important;
        width: 100% !important;
        background: var(--primary-color, #25221F) !important;
        display: none !important; /* JS will override with .active */
        flex-direction: column !important;
        padding: 20px 0 !important;
        box-shadow: 0 10px 20px rgba(0,0,0,0.5) !important;
        border-top: 1px solid rgba(255,255,255,0.1) !important;
        box-sizing: border-box !important;
        border-radius: 0 0 15px 15px !important;
    }
    .nav-menu.active {
        display: flex !important;
    }
    .nav-menu ul {
        display: flex !important;
        flex-direction: column !important;
        gap: 15px !important;
        width: 100% !important;
        align-items: center !important;
        padding: 0 !important;
        margin: 0 !important;
    }
    .nav-menu ul li {
        width: 100% !important;
        text-align: center !important;
    }
    .nav-menu ul li a {
        display: block !important;
        padding: 10px !important;
        font-size: 1.1rem !important;
    }

    /* --- 3. Global Section Spacing --- */
    .section-padding {
        padding: 40px 0 !important; 
    }
    .premium-explore-section {
        padding: 3rem 1rem !important;
    }
    .premium-explore-section .container {
        padding: 2rem 1rem !important;
    }

    /* --- 4. Typography Scaling for Mobile --- */
    h1 { font-size: 2rem !important; line-height: 1.3 !important; }
    h2 { font-size: 1.6rem !important; line-height: 1.4 !important; }
    h3 { font-size: 1.2rem !important; line-height: 1.4 !important; }
    p { font-size: 0.95rem !important; line-height: 1.6 !important; }
    
    /* --- 5. Fix Overflows & Grids --- */
    .container {
        width: 100% !important;
        max-width: 100% !important;
        padding: 0 15px !important;
        box-sizing: border-box !important;
        overflow: hidden !important;
    }
    body, html {
        overflow-x: hidden !important;
        width: 100% !important;
        max-width: 100vw !important;
    }
    .projects-grid, .editorial-grid, .services-grid, .expertise-grid, .projects-grid-new {
        display: grid !important;
        grid-template-columns: 1fr !important;
        gap: 1.5rem !important;
        width: 100% !important;
        box-sizing: border-box !important;
    }
    
    /* --- 6. "Why Choose Us" Card Layout --- */
    .premium-feature-card {
        min-height: 280px !important;
        width: 100% !important;
        box-sizing: border-box !important;
    }
    .feature-card-bg-overlay {
        padding: 1.5rem 1rem 1rem 1rem !important;
        background: linear-gradient(to top, rgba(37,34,31, 0.95) 0%, rgba(37,34,31, 0.7) 70%, transparent 100%) !important;
    }
    .feature-card-bg-overlay h3 {
        font-size: 1.1rem !important;
    }
    .feature-card-bg-overlay p {
        font-size: 0.85rem !important;
    }

    /* --- 7. Buttons --- */
    .btn-premium, .btn-solid, .hero-btn, .btn-outline-dark {
        padding: 0.7rem 1.2rem !important;
        font-size: 0.95rem !important;
    }
    .hero-buttons {
        display: flex !important;
        flex-direction: column !important;
        gap: 15px !important;
        width: 100% !important;
        box-sizing: border-box !important;
        padding: 0 20px !important;
    }
    .hero-buttons a {
        width: 100% !important;
        text-align: center !important;
        justify-content: center !important;
    }
    
    /* --- 8. Hide redundant elements --- */
    .nav-actions .btn-nav-cta {
        display: none !important;
    }
}
`;
fs.writeFileSync('css/premium.css', premiumCss);
console.log('Mobile reset injected!');
