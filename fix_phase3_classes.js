const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\M-ALANEED\\Desktop\\decoor';
const htmlFiles = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

htmlFiles.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');

    content = content.replace(/class="service-card-image"/g, 'class="editorial-image"');
    content = content.replace(/class="service-card-content"/g, 'class="editorial-content"');

    fs.writeFileSync(path.join(dir, file), content, 'utf8');
});

console.log('Fixed editorial image/content classes in all HTML files.');
