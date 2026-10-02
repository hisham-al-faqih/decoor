const fs = require('fs');
const glob = require('fs').readdirSync('.');

// 1. Process all HTML files
const htmlFiles = glob.filter(f => f.endsWith('.html'));
let modifiedHtmlCount = 0;
let modifiedHtmlFiles = [];

htmlFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    if (content.includes('riyadh-decor.com')) {
        // Replace absolute URLs that start with https://riyadh-decor.com
        // or just the domain string itself in meta tags
        content = content.replace(/https:\/\/riyadh-decor\.com/g, 'https://riya-decor.vercel.app');
        fs.writeFileSync(file, content);
        modifiedHtmlCount++;
        modifiedHtmlFiles.push(file);
    }
});

console.log('Modified HTML Files:', modifiedHtmlFiles);

// 2. Process sitemap.xml
let sitemapContent = fs.readFileSync('sitemap.xml', 'utf8');
let sitemapModified = false;

// Remove decoor.html from sitemap
if (sitemapContent.includes('decoor.html')) {
    sitemapContent = sitemapContent.replace(/<url>[\s\n]*<loc>[^<]*decoor\.html<\/loc>[\s\n]*<\/url>/i, '');
    sitemapModified = true;
}

// Replace any riyadh-decor.com just in case
if (sitemapContent.includes('riyadh-decor.com')) {
    sitemapContent = sitemapContent.replace(/https:\/\/riyadh-decor\.com/g, 'https://riya-decor.vercel.app');
    sitemapModified = true;
}

if (sitemapModified) {
    fs.writeFileSync('sitemap.xml', sitemapContent);
    console.log('Modified sitemap.xml');
}

// 3. Process robots.txt
let robotsContent = fs.readFileSync('robots.txt', 'utf8');
if (robotsContent.includes('riyadh-decor.com')) {
    robotsContent = robotsContent.replace(/https:\/\/riyadh-decor\.com/g, 'https://riya-decor.vercel.app');
    fs.writeFileSync('robots.txt', robotsContent);
    console.log('Modified robots.txt');
}

// 4. Delete decoor.html
if (fs.existsSync('decoor.html')) {
    fs.unlinkSync('decoor.html');
    console.log('Deleted decoor.html');
}

// Check sitemap links count
const finalSitemap = fs.readFileSync('sitemap.xml', 'utf8');
const matchLinks = finalSitemap.match(/<loc>/g);
console.log('Final sitemap links count:', matchLinks ? matchLinks.length : 0);

