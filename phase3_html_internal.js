const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\M-ALANEED\\Desktop\\decoor';
const htmlFiles = fs.readdirSync(dir).filter(f => f.endsWith('.html') && f !== 'index.html');

htmlFiles.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');

    // Update "Related Services"
    content = content.replace(/<div class="services-grid">/g, '<div class="editorial-grid">');
    content = content.replace(/class="service-card"/g, 'class="editorial-card"');
    content = content.replace(/class="service-image"/g, 'class="editorial-image"');
    content = content.replace(/class="service-content"/g, 'class="editorial-content"');
    content = content.replace(/class="btn-premium"/g, 'class="btn-premium glass-btn"');

    // Ensure the new CSS will apply perfectly
    fs.writeFileSync(path.join(dir, file), content, 'utf8');
});

console.log('Internal pages restructured for Premium Editorial layout.');
