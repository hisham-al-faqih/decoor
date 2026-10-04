const fs = require('fs');
const path = require('path');

const dir = __dirname;

function replaceInFile(filePath, regex, replacement) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (regex.test(content)) {
        const newContent = content.replace(regex, replacement);
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Updated: ${path.basename(filePath)}`);
    }
}

// 1. Process all HTML files
const htmlFiles = fs.readdirSync(dir).filter(f => f.endsWith('.html'));
htmlFiles.forEach(f => {
    const fullPath = path.join(dir, f);
    replaceInFile(fullPath, /https:\/\/wa\.me\/966551614831/g, 'https://wa.me/966547465053');
});

// 2. Process app-components.js
const jsPath = path.join(dir, 'js', 'app-components.js');
replaceInFile(jsPath, /https:\/\/wa\.me\/966551614831/g, 'https://wa.me/966547465053');

console.log('Done processing files.');
