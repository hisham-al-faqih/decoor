const fs = require('fs');
const path = require('path');

const file = 'c:\\Users\\M-ALANEED\\Desktop\\decoor\\index.html';
let html = fs.readFileSync(file, 'utf8');

// 1. Update "why-us" section
html = html.replace(/class="features-grid-bg"/g, 'class="premium-why-us-grid"');
html = html.replace(/class="feature-card-bg"/g, 'class="premium-feature-card"');

// 2. Update "expertise-section"
html = html.replace(/class="expertise-grid"/g, 'class="premium-expertise-grid"');
html = html.replace(/class="expertise-item"/g, 'class="premium-expertise-card"');

// 3. Update "services" (المزيد من أعمالنا)
html = html.replace(/<div class="services-grid">/g, '<div class="editorial-grid">');
html = html.replace(/class="service-card"/g, 'class="editorial-card"');
html = html.replace(/class="service-image"/g, 'class="editorial-image"');
html = html.replace(/class="service-content"/g, 'class="editorial-content"');

// 4. Update "projects" (أحدث أعمالنا) - Replace identical image URLs with sequential placeholders
html = html.replace(/class="projects-grid"/g, 'class="portfolio-grid"');
html = html.replace(/class="project-item"/g, 'class="portfolio-card"');

let projIndex = 1;
html = html.replace(/<img src="https:\/\/images\.unsplash\.com\/photo-1600210492486-[^"]+"/g, (match) => {
    return `<img src="images/project-placeholder-${projIndex++}.jpg"`;
});

// Add SVG arrow to portfolio overlay if not present
html = html.replace(/<div class="project-info">([\s\S]*?)<\/div>/g, (match, p1) => {
    return `<div class="project-info">${p1}</div><div class="portfolio-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 5 12 12 19"></polyline></svg></div>`;
});
html = html.replace(/class="project-info"/g, 'class="portfolio-info"');
html = html.replace(/class="project-overlay"/g, 'class="portfolio-overlay"');

// 5. Update "Related Services" button classes (from btn-premium to float-btn-lux or just style btn-premium)
html = html.replace(/class="btn-premium"/g, 'class="btn-premium glass-btn"');

// 6. Keywords Fortress -> Elegant Section
html = html.replace(/class="keywords-fortress section-padding"/g, 'class="premium-explore-section section-padding"');
html = html.replace(/class="keywords-cloud"/g, 'class="premium-explore-cloud"');

fs.writeFileSync(file, html, 'utf8');
console.log('HTML restructured for Phase 3 Premium Editorial layout.');
