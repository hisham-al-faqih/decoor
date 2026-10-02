const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const criticalErrors = [];
const seoIssues = [];
const htmlIssues = [];

files.forEach(f => {
    const c = fs.readFileSync(f, 'utf8');
    const lines = c.split('\n');
    
    let inHead = false;
    let inBody = false;
    
    let titleCount = 0;
    let descCount = 0;
    let canonicalCount = 0;
    let hasSiteHeaderClosing = c.includes('</site-header>');
    
    lines.forEach((line, i) => {
        const l = line.toLowerCase();
        
        if (l.includes('<head>')) inHead = true;
        if (l.includes('</head>')) inHead = false;
        if (l.includes('<body') && !l.includes('</body>')) inBody = true;
        if (l.includes('</body>')) inBody = false;
        
        if (l.includes('<title>')) titleCount++;
        if (l.includes('name="description"')) descCount++;
        if (l.includes('rel="canonical"')) canonicalCount++;
        
        // Critical: SEO tags inside body
        // Only trigger if inBody is strictly true (we passed <body>)
        if (inBody) {
            if (
                l.includes('<title>') || 
                l.includes('<meta name="description"') || 
                l.includes('<meta property="og:') || 
                l.includes('<meta name="twitter:') || 
                l.includes('rel="canonical"') || 
                l.includes('application/ld+json')
            ) {
                criticalErrors.push({ file: f, line: i+1, problem: 'SEO tag inside <body>', raw: line.trim() });
            }
        }
        
        // HTML: Malformed site-header tag
        if (l.includes('ite-header>')) {
            htmlIssues.push({ file: f, issue: 'Malformed site-header (ite-header>)', line: i+1 });
        }
        
        if (l.includes('<site-header') && !hasSiteHeaderClosing) {
            htmlIssues.push({ file: f, issue: 'Missing </site-header>', line: i+1 });
        }
        
        if (l.includes('href="#"')) {
            htmlIssues.push({ file: f, issue: 'Empty href="#" link', line: i+1 });
        }
        
        if (l.includes('content="noindex"')) {
            seoIssues.push({ file: f, issue: 'Contains noindex directive' });
        }
        
        // Find duplicate images
        // We will do image analysis separately
    });
    
    if (titleCount > 1) seoIssues.push({ file: f, issue: 'Multiple <title> tags (' + titleCount + ')' });
    if (descCount > 1) seoIssues.push({ file: f, issue: 'Multiple Meta Descriptions (' + descCount + ')' });
    if (canonicalCount > 1) seoIssues.push({ file: f, issue: 'Multiple Canonicals (' + canonicalCount + ')' });
});

console.log('--- Critical Errors ---');
console.table(criticalErrors);

console.log('--- SEO Issues ---');
console.table(seoIssues);

console.log('--- HTML Issues ---');
console.table(htmlIssues);
