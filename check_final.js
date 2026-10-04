const fs = require('fs');

const dakhiliya = fs.readFileSync('dakhiliya.html', 'utf8');
const index = fs.readFileSync('index.html', 'utf8');
const appComponents = fs.readFileSync('js/app-components.js', 'utf8');

console.log('App components config checks:');
console.log('whatsapp:', appComponents.includes('whatsapp: "https://wa.me/966547465053"'));
console.log('phone:', appComponents.includes('phone: "0554595628"'));
console.log('phone2:', appComponents.includes('phone2: "0547465053"'));
console.log('Has PhonePopup?', appComponents.includes('PhonePopup extends HTMLElement'));
console.log('Has FloatingContact?', appComponents.includes('FloatingContact extends HTMLElement'));

console.log('\nOld numbers left?');
console.log('wa.me/966551614831 in index:', index.includes('wa.me/966551614831'));
console.log('wa.me/966551614831 in dakhiliya:', dakhiliya.includes('wa.me/966551614831'));
