const fs = require('fs');

// 1. Clean style.css
let styleCss = fs.readFileSync('css/style.css', 'utf8');

// We know the problematic block is:
// @media (max-width:768px){ ... .hero{height:70vh}.hero-buttons{flex-direction:row;gap:10px}.hero-btn{flex-grow:1;width:auto;padding:12px 15px;font-size:1rem} ... }

// Let's explicitly remove those rules
styleCss = styleCss.replace(/\.hero\{height:70vh\}/g, '');
styleCss = styleCss.replace(/\.hero-buttons\{flex-direction:row;gap:10px\}/g, '');
styleCss = styleCss.replace(/\.hero-btn\{flex-grow:1;width:auto;padding:12px 15px;font-size:1rem\}/g, '');

fs.writeFileSync('css/style.css', styleCss);
console.log('style.css cleaned of old hero queries');

// 2. Remove inline styles from index.html Hero section if they exist
let indexHtml = fs.readFileSync('index.html', 'utf8');
indexHtml = indexHtml.replace(/<section class="hero[^>]*>/, (match) => {
    return match.replace(/\s*style="[^"]*"/, '');
});
indexHtml = indexHtml.replace(/<div class="hero-content[^>]*>/, (match) => {
    return match.replace(/\s*style="[^"]*"/, '');
});

// Cache bust again to force the browser to read the new style.css and index.html
const cacheVersion = Date.now();
indexHtml = indexHtml.replace(/premium\.css(\?v=[0-9]+)?/g, 'premium.css?v=' + cacheVersion);
indexHtml = indexHtml.replace(/style\.css(\?v=[0-9]+)?/g, 'style.css?v=' + cacheVersion);
fs.writeFileSync('index.html', indexHtml);

// 3. Do the same cache busting for all other HTML files (for style.css too)
const glob = require('fs').readdirSync('.');
const htmlFiles = glob.filter(f => f.endsWith('.html') && f !== 'index.html');
htmlFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/premium\.css(\?v=[0-9]+)?/g, 'premium.css?v=' + cacheVersion);
    content = content.replace(/style\.css(\?v=[0-9]+)?/g, 'style.css?v=' + cacheVersion);
    
    // Also remove inline styles from any service-hero
    content = content.replace(/<section class="service-hero[^>]*>/g, (match) => {
        return match.replace(/\s*style="[^"]*"/, '');
    });
    
    fs.writeFileSync(file, content);
});

console.log('HTML files cleaned and cache-busted');
