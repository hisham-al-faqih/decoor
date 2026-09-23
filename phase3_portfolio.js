const fs = require('fs');

const file = 'c:\\Users\\M-ALANEED\\Desktop\\decoor\\index.html';
let html = fs.readFileSync(file, 'utf8');

// Update 'latest-work-grid' to 'portfolio-grid'
html = html.replace(/class="latest-work-grid"/g, 'class="portfolio-grid"');
html = html.replace(/class="lw-item"/g, 'class="portfolio-card"');
html = html.replace(/class="lw-label"/g, 'class="portfolio-info"');
html = html.replace(/class="lw-arrow"/g, 'class="portfolio-arrow"');

// Fix the portfolio info wrapping so it matches the CSS overlay
html = html.replace(/<span class="portfolio-info">([\s\S]*?)<\/span>/g, '<div class="portfolio-overlay"></div><div class="portfolio-info"><h4>$1</h4></div>');
html = html.replace(/<span class="portfolio-arrow">([\s\S]*?)<\/span>/g, '<div class="portfolio-arrow">$1</div>');

fs.writeFileSync(file, html, 'utf8');
console.log('Fixed portfolio section.');
