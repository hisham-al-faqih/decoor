const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\M-ALANEED\\Desktop\\decoor';
const htmlFiles = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

htmlFiles.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');
    
    // Remove Google Fonts
    content = content.replace(/<link rel="preconnect" href="https:\/\/fonts\.googleapis\.com">\s*/g, '');
    content = content.replace(/<link rel="preconnect" href="https:\/\/fonts\.gstatic\.com" crossorigin>\s*/g, '');
    content = content.replace(/<link href="https:\/\/fonts\.googleapis\.com[^>]+>\s*/g, '');
    content = content.replace(/<noscript><link rel="stylesheet" href="https:\/\/fonts\.googleapis\.com[^>]+><\/noscript>\s*/g, '');
    
    // Check if fonts.css is already linked
    if (!content.includes('href="css/fonts.css"')) {
        // Insert fonts.css before style.css
        content = content.replace(/<link rel="stylesheet" href="css\/style\.css">/, '<link rel="stylesheet" href="css/fonts.css">\n<link rel="stylesheet" href="css/style.css">');
    }
    
    fs.writeFileSync(path.join(dir, file), content, 'utf8');
});

// Now fix CSS for Web Components FOUC
let css = fs.readFileSync(path.join(dir, 'css', 'style.css'), 'utf8');
const foucCss = `\n/* Prevent Web Component FOUC */\nsite-header:not(:defined), site-footer:not(:defined), floating-contact:not(:defined) {\n    display: block;\n    visibility: hidden;\n    min-height: 80px;\n}\nsite-footer:not(:defined) {\n    min-height: 300px;\n}\n`;

if (!css.includes('site-header:not(:defined)')) {
    fs.writeFileSync(path.join(dir, 'css', 'style.css'), css + foucCss, 'utf8');
}

console.log('FOUC and Fonts fixed.');
