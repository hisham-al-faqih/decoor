const fs = require('fs');
const code = fs.readFileSync('js/app-components.js', 'utf8');
const navActionsCSS = code.substring(code.indexOf('.nav-actions {'), code.indexOf('.nav-actions {') + 300);
console.log('Nav Actions CSS:\n', navActionsCSS);
