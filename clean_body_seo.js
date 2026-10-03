const fs = require('fs');

const files = ['chipboard.html', 'fome.html', 'khariijiya.html'];

files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    
    // We want to delete the chunk of SEO metadata that is inside <body>
    // It looks like:
    // <title>...</title>
    // <meta name="description" ... />
    // <link rel="canonical" ... />
    // <script type="application/ld+json"> ... </script>
    
    // Let's use regex to find and remove this block if it's after <body>
    
    const bodyIndex = content.indexOf('<body');
    if (bodyIndex !== -1) {
        let headPart = content.substring(0, bodyIndex);
        let bodyPart = content.substring(bodyIndex);
        
        // Remove from bodyPart: title
        bodyPart = bodyPart.replace(/<title>[\s\S]*?<\/title>/gi, '');
        // Remove from bodyPart: meta description
        bodyPart = bodyPart.replace(/<meta[^>]+name="description"[^>]*>/gi, '');
        // Remove from bodyPart: canonical
        bodyPart = bodyPart.replace(/<link[^>]+rel="canonical"[^>]*>/gi, '');
        // Remove from bodyPart: application/ld+json
        bodyPart = bodyPart.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/gi, '');
        
        fs.writeFileSync(f, headPart + bodyPart);
        console.log(`Cleaned body SEO tags in ${f}`);
    }
});
