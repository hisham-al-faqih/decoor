const fs = require('fs');

// --- Fix index.html ---
let indexCode = fs.readFileSync('index.html', 'utf8');
const indexRegex = /[ \t]*\.btn-nav-cta\s*\{\s*display:\s*none\s*!important;\s*\/\*\s*إخفاء زر CTA في الجوال لتوفير المساحة\s*\*\/\s*\}\r?\n?/g;
indexCode = indexCode.replace(indexRegex, '');
fs.writeFileSync('index.html', indexCode, 'utf8');
console.log('Fixed index.html');

// --- Fix css/premium.css ---
let premiumCode = fs.readFileSync('css/premium.css', 'utf8');

// There are multiple instances of this block in premium.css. 
// We will replace them precisely.
const premiumRegex1 = /[ \t]*\.nav-actions\s*\.btn-nav-cta\s*\{\s*display:\s*none\s*!important;\s*\}\r?\n?/g;
// Sometimes there is a comment above it: /* --- 8. Hide redundant elements --- */
// We just remove the exact CSS rule.
premiumCode = premiumCode.replace(premiumRegex1, '');

fs.writeFileSync('css/premium.css', premiumCode, 'utf8');
console.log('Fixed css/premium.css');
