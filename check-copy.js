const fs = require('fs');
let f = fs.readFileSync('index copy.html', 'utf8');
let m = f.match(/<img[^>]+src="([^"]+)"[^>]*>/g);
if(m) console.log(m.slice(0, 10).join('\\n'));
