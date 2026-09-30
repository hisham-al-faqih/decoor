const fs = require('fs');
const glob = require('fs').readdirSync('.');

const cacheVersion = Date.now();
const htmlFiles = glob.filter(f => f.endsWith('.html'));

htmlFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/premium\.css(\?v=[0-9]+)?/g, 'premium.css?v=' + cacheVersion);
    fs.writeFileSync(file, content);
});

let premiumCss = fs.readFileSync('css/premium.css', 'utf8');
premiumCss += `
.hero, .service-hero {
    border-radius: 0 !important;
}
.hero-bg-image {
    border-radius: 0 !important;
}
`;
fs.writeFileSync('css/premium.css', premiumCss);
console.log('Fixed border radius on hero!');
