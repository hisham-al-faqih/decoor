const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
    const c = fs.readFileSync(f, 'utf8');
    const telMatches = c.match(/<a[^>]*href=\"tel:05[0-9]{8}\"[^>]*>.*?<\/a>/gs);
    if (telMatches && telMatches.length > 0) {
        console.log(f, telMatches.length, telMatches[0].substring(0, 70));
    }
});
