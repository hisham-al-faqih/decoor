const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\M-ALANEED\\Desktop\\decoor';
const htmlFiles = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

htmlFiles.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');

    // Add premium.css link if it's missing, right after style.css
    if (!content.includes('premium.css')) {
        content = content.replace(/<link rel="stylesheet" href="css\/style\.css">/, '<link rel="stylesheet" href="css/style.css">\n<link rel="stylesheet" href="css/premium.css">');
    }
    
    // FOUC Hack
    if (!content.includes('visibility: hidden;')) {
        content = content.replace(/<\/head>/, '<style>:not(:defined) { visibility: hidden; }</style>\n</head>');
    }

    fs.writeFileSync(path.join(dir, file), content, 'utf8');
});

console.log('Injected premium.css and FOUC hack into all HTML files.');
