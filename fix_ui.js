const fs = require('fs');

const css = `
/* ==========================================================================
   UI FIXES (Based on visual feedback)
   ========================================================================== */

/* 1. Header Logo Size & Layout Fix */
.premium-header .nav-container {
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
    width: 100% !important;
}
.premium-header .logo img {
    height: 45px !important;
    width: auto !important;
    max-width: 100% !important;
    object-fit: contain !important;
}

/* 2. Hero Title Constraints */
.hero-title {
    font-size: clamp(2rem, 3.5vw, 3rem) !important; /* Smaller and more manageable */
    line-height: 1.4 !important;
    font-weight: 800 !important;
    margin-bottom: 1.5rem !important;
    color: var(--white) !important;
}
.hero-description {
    font-size: clamp(1rem, 1.2vw, 1.1rem) !important;
    line-height: 1.8 !important;
    color: rgba(255,255,255,0.9) !important;
}

/* 3. Missing Backgrounds (Why Us & Services without images) */
.premium-feature-card, .editorial-card {
    background-color: #2a2a2a !important; /* Fallback dark color */
}

/* 4. Fix "أحدث أعمالنا" Header Layout */
.latest-work-header {
    display: flex !important;
    justify-content: space-between !important;
    align-items: flex-start !important;
    margin-bottom: 3rem !important;
    flex-wrap: wrap !important;
    gap: 1.5rem !important;
}
.latest-work-header .lw-heading h2 {
    margin-bottom: 0.5rem !important;
}
.latest-work-header .lw-heading p {
    color: #666 !important;
    max-width: 600px !important;
}
.btn-outline-dark {
    padding: 0.8rem 1.8rem !important;
    border: 1px solid var(--dark) !important;
    border-radius: 50px !important;
    color: var(--dark) !important;
    text-decoration: none !important;
    display: inline-flex !important;
    align-items: center !important;
    gap: 0.5rem !important;
    transition: var(--transition) !important;
}
.btn-outline-dark:hover {
    background: var(--dark) !important;
    color: var(--white) !important;
}

/* 5. Fix Glass Buttons text alignment */
.glass-btn, .btn-premium {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    text-align: center !important;
    line-height: 1 !important;
    padding: 1rem 1.8rem !important;
}

/* 6. Fix Typography globally so headings aren't monstrous */
h1, h2, h3, h4, h5, h6 {
    line-height: 1.4 !important;
}

/* 7. Explore Section Pills layout */
.premium-explore-cloud {
    display: flex !important;
    flex-wrap: wrap !important;
    justify-content: center !important;
    gap: 1rem !important;
    align-items: center !important;
}
.premium-explore-cloud a {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    line-height: 1 !important;
}

/* Ensure Header is correctly absolute and centered */
site-header {
    position: absolute !important;
    top: 20px !important;
    left: 0 !important;
    right: 0 !important;
    width: 100% !important;
    z-index: 1000 !important;
    display: flex !important;
    justify-content: center !important;
    padding: 0 20px !important;
}
`;

fs.appendFileSync('c:\\Users\\M-ALANEED\\Desktop\\decoor\\css\\premium.css', css, 'utf8');
console.log('UI Fixes appended.');
