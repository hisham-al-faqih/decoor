const fs = require('fs');
const code = fs.readFileSync('css/style.css', 'utf8');
const queries = code.match(/@media[^{]+\{([\s\S]+?})\s*}/g) || code.match(/@media[\s\S]{0,1000}/g);
console.log(queries.join('\n\n====\n\n'));
