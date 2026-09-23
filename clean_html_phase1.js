const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\M-ALANEED\\Desktop\\decoor';
const htmlFiles = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

htmlFiles.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');

    // 1. Remove ANY `<link rel="preload" ... style.css` or `fonts.css`
    content = content.replace(/<link rel="preload"[^>]*href="css\/style\.css"[^>]*>/gi, '');
    content = content.replace(/<link rel="preload"[^>]*href="css\/fonts\.css"[^>]*>/gi, '');
    
    // 2. Remove ANY `<noscript><link ... style.css`
    content = content.replace(/<noscript>.*?href="css\/style\.css".*?<\/noscript>/gi, '');
    content = content.replace(/<noscript>.*?href="css\/fonts\.css".*?<\/noscript>/gi, '');
    
    // 3. Remove ANY remaining 🎨 emojis or weird SVG artifacts (just in case)
    content = content.replace(/🎨/g, '');
    content = content.replace(/<text[^>]*>.*?<\/text><\/svg>/g, '');

    // 4. Ensure we have exactly one link to fonts, style, premium
    // Let's strip all of them and re-inject them right before </head> to be 100% clean
    content = content.replace(/<link[^>]*href="css\/fonts\.css"[^>]*>/gi, '');
    content = content.replace(/<link[^>]*href="css\/style\.css"[^>]*>/gi, '');
    content = content.replace(/<link[^>]*href="css\/premium\.css"[^>]*>/gi, '');
    
    // Also remove the FOUC hack so we can inject it exactly once
    content = content.replace(/<style>:not\(:defined\)\s*\{\s*visibility:\s*hidden;\s*\}<\/style>/gi, '');

    // Inject them cleanly right before </head>
    const cleanStyles = `
<link rel="stylesheet" href="css/fonts.css">
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/premium.css">
<style>:not(:defined) { visibility: hidden; }</style>
</head>`;
    
    content = content.replace(/<\/head>/i, cleanStyles);

    // 5. Ensure <site-header>, <site-footer>, <floating-contact> are not duplicated
    content = content.replace(/(?:<site-header><\/site-header>\s*)+/gi, '<site-header></site-header>\n');
    content = content.replace(/(?:<site-footer><\/site-footer>\s*)+/gi, '<site-footer></site-footer>\n');
    content = content.replace(/(?:<floating-contact><\/floating-contact>\s*)+/gi, '<floating-contact></floating-contact>\n');
    
    // Check if site-header is accidentally in <head>
    if (content.match(/<head>[\s\S]*<site-header><\/site-header>[\s\S]*<\/head>/i)) {
        content = content.replace(/<site-header><\/site-header>/gi, '');
        content = content.replace(/<body>/i, '<body>\n    <site-header></site-header>');
    }
    
    // Also remove any stray <script src="js/app-components.js"></script> and inject it in <head> only once
    content = content.replace(/<script[^>]*src="js\/app-components\.js"[^>]*><\/script>/gi, '');
    content = content.replace(/<\/head>/i, '<script src="js/app-components.js" defer></script>\n</head>');

    fs.writeFileSync(path.join(dir, file), content, 'utf8');
});

console.log('Phase 1 Structural Cleanup Complete.');
