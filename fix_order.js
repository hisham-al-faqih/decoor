const fs = require('fs');

const file = 'c:\\Users\\M-ALANEED\\Desktop\\decoor\\index.html';
let html = fs.readFileSync(file, 'utf8');

// Swap the button and the heading in latest-work-header
const regex = /<div class="latest-work-header">\s*<a href="#projects" class="btn-outline-dark">([\s\S]*?)<\/a>\s*<div class="lw-heading">([\s\S]*?)<\/div>\s*<\/div>/;
html = html.replace(regex, (match, btnContent, headingContent) => {
    return `<div class="latest-work-header">
            <div class="lw-heading">
              ${headingContent}
            </div>
            <a href="#projects" class="btn-outline-dark">
              ${btnContent}
            </a>
          </div>`;
});

fs.writeFileSync(file, html, 'utf8');
console.log('Swapped button and heading in latest-work-header.');
