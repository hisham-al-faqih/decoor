const fs = require('fs');
const path = require('path');

const dir = __dirname;
const htmlFiles = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

let totalUpdated = 0;

htmlFiles.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');
    let imgCount = 0;
    
    const newContent = content.replace(/<img\s+([^>]+)>/gi, (match, attrs) => {
        imgCount++;
        
        // Skip if already has loading= attribute
        if (/loading\s*=/i.test(attrs)) {
            return match;
        }
        
        // Skip the very first image in any HTML file as it's often above the fold (Hero image)
        if (imgCount === 1) {
            return match;
        }
        
        // Skip if it explicitly contains 'logo' or 'hero' in its classes or src
        if (/logo/i.test(attrs) || /hero/i.test(attrs)) {
            return match;
        }
        
        totalUpdated++;
        
        // Add loading="lazy" properly based on whether it is self-closing or not
        if (match.endsWith('/>')) {
            return match.slice(0, -2) + ' loading="lazy" />';
        } else {
            return match.slice(0, -1) + ' loading="lazy">';
        }
    });

    if (content !== newContent) {
        fs.writeFileSync(path.join(dir, file), newContent, 'utf8');
        console.log(`Updated images in: ${file}`);
    }
});

console.log(`\nSuccess! Total images updated with loading="lazy": ${totalUpdated}`);
