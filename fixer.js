const fs = require('fs');
const path = require('path');

let f = fs.readFileSync('fix_contacts.js', 'utf8');
f = f.replace(/console\.log\\\(\\\`Updated HTML file: \\\$\\{f\\}\\\`\\\);/g, "console.log('Updated HTML file: ' + f);");
// also fix any bad backticks inside string
f = f.replace(/console\.log\(\`Updated HTML file: \$\{f\}\`\);/g, "console.log('Updated HTML file: ' + f);");
fs.writeFileSync('fix_contacts.js', f);
