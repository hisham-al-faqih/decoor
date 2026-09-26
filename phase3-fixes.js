const fs = require('fs');

// 1. Fix CSS
let premiumCss = fs.readFileSync('css/premium.css', 'utf8');

premiumCss += `
/* ==========================================================================
   URGENT LAYOUT FIXES (Phase 3)
   ========================================================================== */

/* 1. Mobile Header Forced Fix */
@media (max-width: 992px) {
    .nav-menu {
        position: absolute !important;
        top: 100% !important;
        left: 0 !important;
        width: 100% !important;
        background: var(--primary-color, #25221F) !important;
        display: none !important;
        flex-direction: column !important;
        padding: 1.5rem !important;
        box-shadow: 0 10px 30px rgba(0,0,0,0.5) !important;
        transition: none !important;
        z-index: 1000 !important;
    }
    .nav-menu.active {
        display: flex !important;
    }
    .nav-menu ul {
        flex-direction: column !important;
        align-items: center !important;
        gap: 1.5rem !important;
    }
    .nav-menu a {
        color: var(--white) !important;
        font-size: 1.2rem !important;
    }
    .nav-toggle {
        display: flex !important;
        flex-direction: column !important;
        gap: 6px !important;
        background: transparent !important;
        border: none !important;
        cursor: pointer !important;
        z-index: 1001 !important;
    }
    .nav-toggle span {
        display: block !important;
        width: 30px !important;
        height: 3px !important;
        background: var(--white) !important;
        border-radius: 3px !important;
    }
    .nav-actions .btn-nav-cta {
        display: none !important;
    }
}

/* 2. Fix Why Choose Us Overlay (Make it transparent gradient, not black block) */
.premium-feature-card {
    position: relative !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: flex-end !important;
    padding: 0 !important; /* Image goes to edges */
    min-height: 450px !important;
    overflow: hidden !important;
}
.feature-card-bg-overlay {
    position: absolute !important;
    bottom: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: auto !important;
    padding: 2.5rem 2rem 2rem 2rem !important;
    background: linear-gradient(to top, rgba(37,34,31, 0.95) 0%, rgba(37,34,31, 0.5) 60%, transparent 100%) !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
    border: none !important;
    border-radius: 0 0 16px 16px !important;
}

/* 3. Services Card Fix for Internal Pages (White Cards, Clear Images) */
.editorial-grid {
    display: grid !important;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) !important;
    gap: 2rem !important;
    margin-top: 2rem !important;
}
.service-card {
    background: var(--white) !important;
    border-radius: 16px !important;
    overflow: hidden !important;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08) !important;
    display: flex !important;
    flex-direction: column !important;
}
.service-card .service-image {
    display: block !important;
    width: 100% !important;
}
.service-card .service-image img {
    width: 100% !important;
    height: 250px !important;
    object-fit: cover !important;
    border-bottom: 4px solid var(--accent-color) !important;
    display: block !important;
}
.service-card .editorial-content {
    padding: 2rem !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: flex-start !important; /* RTL right */
    flex-grow: 1 !important;
    text-align: right !important;
    background: var(--white) !important;
}
.service-card h3 {
    color: var(--primary-color) !important;
    margin-bottom: 1rem !important;
    font-size: 1.4rem !important;
}
.service-card p {
    color: var(--text-color) !important;
    margin-bottom: 1.5rem !important;
    flex-grow: 1 !important;
    line-height: 1.6 !important;
}

/* 4. Center Latest Work Header & Button */
.latest-work-header {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    text-align: center !important;
    margin-bottom: 3rem !important;
}
.latest-work-cta {
    display: flex !important;
    justify-content: center !important;
    margin-top: 3rem !important;
    width: 100% !important;
}
`;

fs.writeFileSync('css/premium.css', premiumCss);
console.log('Premium CSS updated.');

// 2. Fix Portfolio.html
let portfolio = fs.readFileSync('portfolio.html', 'utf8');
// Remove the "عرض جميع الأعمال" button if it's there
portfolio = portfolio.replace(/<div class="latest-work-cta">[\s\S]*?<\/div>/g, '');

// Add Hero Section to Portfolio
if (!portfolio.includes('portfolio-hero')) {
    let heroHTML = `
    <section class="portfolio-hero" style="background: url('https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=1920&q=80') center/cover; padding: 150px 0 100px; text-align: center; color: white; position: relative;">
        <div style="position: absolute; inset: 0; background: rgba(37,34,31, 0.7);"></div>
        <div class="container" style="position: relative; z-index: 2;">
            <h1 style="font-size: 3rem; margin-bottom: 1rem; color: #fff;">معرض أعمالنا</h1>
            <p style="font-size: 1.2rem; max-width: 600px; margin: 0 auto; color: #f0f0f0;">مجموعة مختارة من أحدث مشاريعنا التي تعكس خبرتنا وجودة تنفيذنا في مجال الديكور والدهانات.</p>
        </div>
    </section>
    `;
    portfolio = portfolio.replace('<main>', '<main>\n' + heroHTML);
}
fs.writeFileSync('portfolio.html', portfolio);
console.log('Portfolio updated.');

// 3. Fix index.html latest work text centering
let indexHTML = fs.readFileSync('index.html', 'utf8');
indexHTML = indexHTML.replace(/<div class="latest-work-header">/g, '<div class="latest-work-header" style="text-align: center;">');
fs.writeFileSync('index.html', indexHTML);
console.log('Index HTML updated.');
