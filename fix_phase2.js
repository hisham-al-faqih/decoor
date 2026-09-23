const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\M-ALANEED\\Desktop\\decoor';
const htmlFiles = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

htmlFiles.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');

    // 1. Remove the broken SVG / Emoji line
    content = content.replace(/<text y=%22\.9em%22 font-size=%2290%22>🎨<\/text><\/svg>">/g, '');
    content = content.replace(/<text y="%22\.9em%22 font-size="%2290%22>🎨<\/text><\/svg>/g, '');
    content = content.replace(/<text y=%22\.9em%22 font-size=%2290%22>🎨<\/text><\/svg>/g, '');
    content = content.replace(/<link rel="icon"[^>]*🎨[^>]*>/g, ''); // just in case

    // Ensure a proper favicon exists, if not, add it before <link rel="stylesheet"
    if (!content.includes('rel="icon"')) {
        content = content.replace(/<link rel="stylesheet"/, '<link rel="icon" type="image/png" href="images/logo.png">\n<link rel="stylesheet"');
    }

    // 2. Fix missing </head> if the site-header was injected wrongly
    // In my previous audit, I noticed <site-header></site-header> was in some files right after style.css
    // Let's remove <site-header> entirely first from the raw string to put it in the right place.
    content = content.replace(/<site-header><\/site-header>/g, '');
    content = content.replace(/<site-footer><\/site-footer>/g, '');
    content = content.replace(/<floating-contact><\/floating-contact>/g, '');
    
    // Ensure </head> exists. If it doesn't, we add it before <body> or before <main>
    if (!content.includes('</head>')) {
        if (content.includes('<body>')) {
            content = content.replace('<body>', '</head>\n<body>');
        } else if (content.includes('<main>')) {
            content = content.replace('<main>', '</head>\n<body>\n<main>');
        }
    }
    
    // Ensure <body> and </body> exist
    if (!content.includes('<body')) {
        content = content.replace('</head>', '</head>\n<body>');
    }
    if (!content.includes('</body>')) {
        content = content.replace('</html>', '</body>\n</html>');
    }

    // Now safely inject the web components inside <body>
    content = content.replace(/<body[^>]*>/, '$&\n    <site-header></site-header>');
    
    // For footer and floating contact, inject right before </body>
    content = content.replace('</body>', '    <site-footer></site-footer>\n    <floating-contact></floating-contact>\n</body>');

    // Clean up empty spaces and double tags just in case
    content = content.replace(/(?:<site-header><\/site-header>\s*)+/g, '<site-header></site-header>\n');
    content = content.replace(/(?:<site-footer><\/site-footer>\s*)+/g, '<site-footer></site-footer>\n');

    fs.writeFileSync(path.join(dir, file), content, 'utf8');
});

console.log('Fixed broken SVGs and HTML DOM structure for Phase 2.');
