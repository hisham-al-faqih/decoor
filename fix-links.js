const fs = require('fs');
let f = fs.readFileSync('index.html', 'utf8');

// Replace <a href="#"> with <span class="keyword-pill">
f = f.replace(/<a href="#">(.*?)<\/a>/g, '<span class="keyword-pill">$1</span>');

fs.writeFileSync('index.html', f);
console.log('Fixed # links');
