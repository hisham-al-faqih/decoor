const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(/href="css\/premium\.css.*?"/g, 'href="css/premium.css?v=' + Date.now() + '"');
html = html.replace(/class="expertise-card"/g, 'class="premium-expertise-card"'); // Fix expertise section
fs.writeFileSync('index.html', html, 'utf8');
console.log('Fixed cache bust and expertise-card');
