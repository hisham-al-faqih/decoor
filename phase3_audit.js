const fs = require('fs');
const path = require('path');

const dir = __dirname;
const htmlFiles = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

let totalImages = 0;
let missingAlt = [];
let missingLazy = [];
let brokenLinks = [];

const allHtmlFileNames = new Set(htmlFiles);

htmlFiles.forEach(file => {
    const content = fs.readFileSync(path.join(dir, file), 'utf8');
    
    // Check images
    const imgRegex = /<img\s+([^>]+)>/g;
    let imgMatch;
    while ((imgMatch = imgRegex.exec(content)) !== null) {
        totalImages++;
        const attrs = imgMatch[1];
        
        // Check alt
        const hasAlt = /alt\s*=\s*["']([^"']+)["']/.exec(attrs);
        if (!hasAlt || hasAlt[1].trim() === '') {
            missingAlt.push({ file, img: imgMatch[0] });
        }
        
        // Check lazy
        const hasLazy = /loading\s*=\s*["']lazy["']/.test(attrs);
        if (!hasLazy) {
            missingLazy.push({ file, img: imgMatch[0] });
        }
    }
    
    // Check links
    const aRegex = /<a\s+[^>]*href\s*=\s*["']([^"']+)["']/g;
    let aMatch;
    while ((aMatch = aRegex.exec(content)) !== null) {
        let link = aMatch[1];
        // Ignore external, anchor, and protocol links
        if (link.startsWith('http') || link.startsWith('tel:') || link.startsWith('mailto:') || link.startsWith('#')) {
            continue;
        }
        
        // Remove query params or hashes from local links
        link = link.split('#')[0].split('?')[0];
        
        if (link && !allHtmlFileNames.has(link) && !fs.existsSync(path.join(dir, link))) {
            brokenLinks.push({ file, link });
        }
    }
});

console.log('--- Phase 3 Audit Results ---');
console.log(`Total HTML Files: ${htmlFiles.length}`);
console.log(`Total Images Found: ${totalImages}`);
console.log(`Images missing 'alt': ${missingAlt.length}`);
console.log(`Images missing 'loading="lazy"': ${missingLazy.length}`);
console.log(`Broken internal links: ${brokenLinks.length}`);

if (brokenLinks.length > 0) {
    console.log('\nBroken Links Details:');
    brokenLinks.forEach(b => console.log(`- ${b.file} points to missing: ${b.link}`));
}
