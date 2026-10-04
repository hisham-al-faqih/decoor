const fs = require('fs');
const code = fs.readFileSync('js/app-components.js', 'utf8');
const mediaIndex = code.indexOf('@media (max-width: 992px)');
console.log(code.substring(mediaIndex, mediaIndex + 1500));
