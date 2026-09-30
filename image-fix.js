const fs = require('fs');
const glob = require('fs').readdirSync('.');

// 1. Cache bust HTML
const cacheVersion = Date.now();
const htmlFiles = glob.filter(f => f.endsWith('.html'));

htmlFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/premium\.css(\?v=[0-9]+)?/g, 'premium.css?v=' + cacheVersion);
    fs.writeFileSync(file, content);
});

// 2. Read premium.css
let premiumCss = fs.readFileSync('css/premium.css', 'utf8');

// Replace z-index: -1 with z-index: 0 to fix the vanishing images
premiumCss = premiumCss.replace(/z-index:\s*-1\s*!important;/g, 'z-index: 0 !important;');

fs.writeFileSync('css/premium.css', premiumCss);
console.log('Images brought back by fixing z-index!');
