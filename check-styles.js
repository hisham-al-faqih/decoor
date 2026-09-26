const fs = require('fs');
let f = fs.readFileSync('dakhiliya.html', 'utf8');
let m = f.match(/<style[^>]*>[\s\S]*?<\/style>/gi);
console.log(m ? m.join('\n---\n') : 'no style tags');
