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
   USER REQUESTED FIX: OUR SERVICES / EDITORIAL CARDS MOBILE FIX (FINAL)
   ========================================================================== */
@media (max-width: 992px) {
    /* 1. Ensure the services grid behaves purely as single columns */
    .editorial-grid {
        display: flex !important;
        flex-direction: column !important;
        gap: 3rem !important;
    }
    .editorial-card:first-child {
        grid-column: span 1 !important;
    }

    /* 2. Force the card to behave as a solid box with its original background */
    .editorial-card {
        position: relative !important;
        display: flex !important;
        flex-direction: column !important;
        justify-content: flex-end !important; /* Pushes text container to the very bottom */
        height: 520px !important; /* Fixed robust height to showcase the background image */
        border-radius: 24px !important;
        overflow: hidden !important;
        background-size: cover !important;
        background-position: center !important;
    }

    /* 3. Handle the image container if it exists, force it to cover the top area */
    .editorial-image {
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
        width: 100% !important;
        height: 100% !important;
        z-index: 1 !important;
    }
    .editorial-image img {
        width: 100% !important;
        height: 100% !important;
        object-fit: cover !important;
    }

    /* 4. Turn off desktop destructive overlays on mobile */
    .editorial-card::after {
        content: '' !important;
        position: absolute !important;
        inset: 0 !important;
        background: linear-gradient(to top, rgba(37,34,31,0.95) 0%, rgba(37,34,31,0.4) 60%, transparent 100%) !important;
        z-index: 2 !important;
        display: block !important;
    }

    /* 5. Force text container to float at the bottom cleanly over the shadow gradient */
    .editorial-content {
        position: relative !important;
        z-index: 3 !important; /* Sit on top of everything */
        width: 100% !important;
        padding: 2rem 1.5rem !important;
        background: transparent !important; /* No solid dark blocking on image */
        box-sizing: border-box !important;
        transform: none !important;
        margin-top: auto !important; /* Snaps directly to bottom */
        text-align: right !important;
    }

    /* 6. Fix text constraints so it fits mobile screens perfectly */
    .editorial-content h3 {
        font-size: 1.4rem !important;
        font-weight: 800 !important;
        color: #F7F4EF !important;
        margin-bottom: 0.75rem !important;
        text-shadow: 0 2px 4px rgba(0,0,0,0.5) !important;
    }

    .editorial-content p {
        font-size: 0.95rem !important;
        line-height: 1.6 !important;
        color: rgba(247, 244, 239, 0.9) !important;
        margin-bottom: 1.5rem !important;
        text-shadow: 0 1px 3px rgba(0,0,0,0.5) !important;
        -webkit-line-clamp: 3 !important; /* Limit description so keywords don't get crushed */
        display: -webkit-box !important;
        -webkit-box-orient: vertical !important;
        overflow: hidden !important;
    }

    /* Center button for natural thumb reach on mobile */
    .editorial-content .glass-btn {
        display: inline-flex !important;
        align-self: center !important;
        margin-top: 0.5rem !important;
    }
}
`;

fs.writeFileSync('css/premium.css', premiumCss + newCSS);
console.log('Mobile Services/Editorial final fix injected!');
