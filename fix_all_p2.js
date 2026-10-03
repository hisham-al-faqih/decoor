const fs = require('fs');

const domainFiles = ['chipboard.html', 'dakhiliya.html', 'wallpaper.html'];
domainFiles.forEach(f => {
    let c = fs.readFileSync(f, 'utf8');
    c = c.replace(/https:\/\/riyadh-decor\.com/g, 'https://riya-decor.vercel.app');
    fs.writeFileSync(f, c);
});
console.log('Domain fixed for chipboard, dakhiliya, wallpaper.');

const moveFiles = ['chipboard.html', 'fome.html', 'khariijiya.html'];
moveFiles.forEach(f => {
    let c = fs.readFileSync(f, 'utf8');
    const bodyIndex = c.indexOf('<body');
    if (bodyIndex !== -1) {
        let headPart = c.substring(0, bodyIndex);
        let bodyPart = c.substring(bodyIndex);
        
        const titleMatch = bodyPart.match(/<title>[\s\S]*?<\/title>/i);
        const descMatch = bodyPart.match(/<meta[^>]+name="description"[^>]*>/i);
        const canonMatch = bodyPart.match(/<link[^>]+rel="canonical"[^>]*>/i);
        const jsonMatch = bodyPart.match(/<script type="application\/ld\+json">[\s\S]*?<\/script>/i);
        
        if (titleMatch) bodyPart = bodyPart.replace(titleMatch[0], '');
        if (descMatch) bodyPart = bodyPart.replace(descMatch[0], '');
        if (canonMatch) bodyPart = bodyPart.replace(canonMatch[0], '');
        if (jsonMatch) bodyPart = bodyPart.replace(jsonMatch[0], '');
        
        let toInject = '';
        if (titleMatch && !headPart.includes('<title>')) toInject += titleMatch[0] + '\n';
        if (descMatch && !headPart.includes('name="description"')) toInject += descMatch[0] + '\n';
        if (canonMatch && !headPart.includes('rel="canonical"')) toInject += canonMatch[0] + '\n';
        if (jsonMatch && !headPart.includes('application/ld+json')) toInject += jsonMatch[0] + '\n';
        
        headPart = headPart.replace('</head>', toInject + '</head>');
        
        fs.writeFileSync(f, headPart + bodyPart);
        console.log(`Moved SEO tags to head for ${f}`);
    }
});
