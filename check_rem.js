const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
files.forEach(f => {
    let c = fs.readFileSync(f, 'utf8');
    const regex = /<a[^>]*href="tel:05[0-9]{8}"[^>]*>[\s\S]*?<\/a>/g;
    const matches = c.match(regex);
    if (matches) {
        console.log(f, matches.length);
        
        // Remove ALL of them, EXCEPT we keep ONE if they are in the same block?
        // Wait, what if they are separated by lots of lines?
        // Let's just output where they are.
    }
});
