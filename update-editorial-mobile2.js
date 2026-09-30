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

// 2. Replace the previous fix block with the new one
let premiumCss = fs.readFileSync('css/premium.css', 'utf8');

const marker = '/* ==========================================================================\n   USER REQUESTED FIX: OUR SERVICES / EDITORIAL CARDS MOBILE FIX';
const idx = premiumCss.indexOf(marker);

if (idx !== -1) {
    premiumCss = premiumCss.substring(0, idx);
}

const newCSS = `/* ==========================================================================
   USER REQUESTED FIX: OUR SERVICES / EDITORIAL CARDS MOBILE FIX (UPDATED)
   ========================================================================== */
@media (max-width: 992px) {
    /* 1. Reset Grid Container for services */
    .editorial-grid {
        display: grid !important;
        grid-template-columns: 1fr !important;
        grid-auto-rows: auto !important;
        gap: 2.5rem !important;
    }
    .editorial-card:first-child {
        grid-column: span 1 !important;
    }

    /* 2. Fix Card Structure & force stacked view */
    .editorial-card {
        display: flex !important;
        flex-direction: column !important; /* Forces image on top, text on bottom */
        height: auto !important;
        min-height: 480px !important; /* Gives enough vertical room */
        background: #25221F !important; /* Dark premium background */
        border-radius: 24px !important;
        overflow: hidden !important;
        position: relative !important;
    }

    /* 3. Force the image container to appear on top of the card */
    .editorial-image {
        position: relative !important;
        top: 0 !important;
        left: 0 !important;
        width: 100% !important;
        height: 220px !important; /* Fixed readable height for the photo on mobile */
        display: block !important;
        z-index: 1 !important;
    }

    .editorial-image img {
        width: 100% !important;
        height: 100% !important;
        object-fit: cover !important;
        display: block !important;
    }

    /* 4. Fix content container to sit cleanly below the image */
    .editorial-content {
        position: relative !important;
        z-index: 2 !important;
        width: 100% !important;
        padding: 1.75rem 1.5rem !important;
        background: #25221F !important;
        box-sizing: border-box !important;
        transform: none !important; /* Kill desktop animations */
        margin-top: 0 !important;
        flex-grow: 1 !important;
        display: flex !important;
        flex-direction: column !important;
        align-items: flex-start !important; /* Standard RTL alignment */
    }

    /* 5. Disable desktop full-card overlays on mobile */
    .editorial-card::after {
        display: none !important;
    }

    /* 6. Typography adjustments for mobile inside services */
    .editorial-content h3 {
        font-size: 1.3rem !important;
        margin-bottom: 0.75rem !important;
        color: #F7F4EF !important;
        text-align: right !important;
        width: 100% !important;
    }

    .editorial-content p {
        font-size: 0.95rem !important;
        line-height: 1.6 !important;
        margin-bottom: 1.5rem !important;
        color: rgba(247, 244, 239, 0.8) !important;
        text-align: right !important;
        width: 100% !important;
        -webkit-line-clamp: unset !important;
        display: block !important;
    }

    .editorial-content .glass-btn {
        margin-top: auto !important;
        align-self: center !important; /* Center button on mobile for better UX */
    }
}
`;

fs.writeFileSync('css/premium.css', premiumCss + newCSS);
console.log('Mobile Services/Editorial updated fix injected!');
