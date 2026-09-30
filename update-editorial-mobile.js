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

// 2. Append the new media query block to premium.css
let premiumCss = fs.readFileSync('css/premium.css', 'utf8');

const newCSS = `

/* ==========================================================================
   USER REQUESTED FIX: OUR SERVICES / EDITORIAL CARDS MOBILE FIX
   ========================================================================== */
@media (max-width: 992px) {
    /* Fix Editorial/Service Grid Container */
    .editorial-grid {
        display: grid !important;
        grid-template-columns: 1fr !important;
        grid-auto-rows: auto !important; /* Allow cards to stretch vertically based on text */
        gap: 2rem !important;
    }
    .editorial-card:first-child {
        grid-column: span 1 !important;
    }
    
    /* Transform Cards from Overlay into a stacked layout (Image top, Text bottom) */
    .editorial-card {
        display: flex !important;
        flex-direction: column !important;
        height: auto !important; 
        background: #25221F !important; /* Premium dark background for the whole card */
        border-radius: 20px !important;
        overflow: hidden !important;
    }
    
    .editorial-image {
        position: relative !important;
        width: 100% !important;
        height: 220px !important; /* Fixed natural image height on phone */
    }
    
    .editorial-image img {
        width: 100% !important;
        height: 100% !important;
        object-fit: cover !important;
    }
    
    /* Fix Content container structure beneath the image */
    .editorial-content {
        position: relative !important;
        transform: none !important; /* Disable deskop hover translate effects */
        padding: 1.5rem !important;
        width: 100% !important;
        background: #25221F !important;
        box-sizing: border-box !important;
    }
    
    .editorial-card::after {
        display: none !important; /* Remove desktop absolute gradient shadow overlay */
    }
    
    /* Padding & spacing safeguards for typography */
    .editorial-content h3 {
        margin-bottom: 0.75rem !important;
        font-size: 1.25rem !important;
        color: #F7F4EF !important;
    }
    .editorial-content p {
        margin-bottom: 1.5rem !important;
        color: rgba(247, 244, 239, 0.8) !important;
        -webkit-line-clamp: unset !important; /* Prevent text from chopping off hidden */
    }
    .editorial-content .glass-btn {
        display: inline-flex !important;
        margin-top: auto !important;
    }
}
`;

fs.writeFileSync('css/premium.css', premiumCss + newCSS);
console.log('Mobile Services/Editorial fix injected!');
