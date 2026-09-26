const fs = require('fs');
const glob = require('fs').readdirSync('.');

let index = fs.readFileSync('index.html', 'utf8');
index = index.replace(/href="#projects"/g, 'href="portfolio.html"');
index = index.replace(/class="btn-premium glass-btn"/g, 'class="btn-premium btn-solid"');
fs.writeFileSync('index.html', index);

// Find all HTML files and fix service-card
const htmlFiles = glob.filter(f => f.endsWith('.html'));

const serviceImages = [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
    'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=80',
    'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=600&q=80',
    'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?w=600&q=80'
];

htmlFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Inject image into service-card if it doesn't have one
    let i = 0;
    let modified = content.replace(/<div class="service-card fade-in">/g, (match) => {
        let img = serviceImages[i % serviceImages.length];
        i++;
        return `<div class="service-card fade-in">\n<div class="service-image"><img src="${img}" alt="خدمة ذات صلة" style="width:100%; height:200px; object-fit:cover; border-bottom: 3px solid var(--accent-color);"></div>`;
    });
    
    fs.writeFileSync(file, modified);
});

console.log('Fixed links and service cards');
