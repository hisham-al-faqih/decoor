const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.resolve(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            if (!file.includes('node_modules') && !file.includes('.git') && !file.includes('.system_generated')) {
                results = results.concat(walk(file));
            }
        } else {
            results.push(file);
        }
    });
    return results;
}

walk('.').forEach(f => {
    if (!f.endsWith('.js') && !f.endsWith('.html') && !f.endsWith('.json')) return;
    try {
        const c = fs.readFileSync(f, 'utf8');
        const m = c.match(/tel:[^\"\'\s>]+/g);
        if (m) {
            console.log(path.basename(f), m);
        }
    } catch(e) {}
});
