const fs = require('fs');
fs.appendFileSync('js/app-components.js', '\ncustomElements.define("site-header", SiteHeader);\ncustomElements.define("site-footer", SiteFooter);\n');
console.log('Appended customElements.define');
