const fs = require('fs');
const lines = fs.readFileSync('dakhiliya.html', 'utf8').split('\n');
lines.forEach((l, i) => {
    if (['<head>', '</head>', '<body', '</body>', '<title>'].some(t => l.includes(t))) {
        console.log(`${i+1}: ${l.trim()}`);
    }
});
