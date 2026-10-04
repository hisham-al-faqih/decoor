const fs = require('fs');
const code = fs.readFileSync('index.html', 'utf8');
const scripts = code.match(/<script[\s\S]*?<\/script>/g);
console.log(scripts);
