const fs = require('fs');
const code = fs.readFileSync('js/app-components.js', 'utf8');
const matches = code.match(/\.btn-nav-cta[\s\S]{0,150}/g);
if (matches) {
  matches.forEach(m => console.log('--- MATCH ---\n' + m));
}
