const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
let success = true;

files.forEach(f => {
    const c = fs.readFileSync(f, 'utf8');
    const m = c.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i);
    if(m) {
        try {
            JSON.parse(m[1]);
        } catch(e) {
            console.log(f, 'INVALID JSON-LD', e);
            success = false;
        }
    } else {
        console.log(f, 'No JSON-LD');
        success = false; // Based on req, all pages should have JSON-LD
    }
});

if (success) {
    console.log('All JSON-LD blocks are valid.');
}
