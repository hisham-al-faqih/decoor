const fs = require('fs');
const glob = require('fs').readdirSync('.');
const htmlFiles = glob.filter(f => f.endsWith('.html'));

const results = [];

htmlFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    
    // Title
    const titleMatch = content.match(/<title>([^<]*)<\/title>/i);
    const title = titleMatch ? titleMatch[1].trim() : 'غير موجود';

    // Meta Description
    const descMatch = content.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["'][^>]*>/i) ||
                      content.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["'][^>]*>/i);
    const desc = descMatch ? descMatch[1].trim() : 'غير موجود';

    // H1
    const h1Match = content.match(/<h1[^>]*>([^<]*)<\/h1>/i);
    const h1 = h1Match ? h1Match[1].trim() : 'غير موجود';

    // Canonical
    const canonicalMatch = content.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["'][^>]*>/i) ||
                           content.match(/<link[^>]*href=["']([^"']*)["'][^>]*rel=["']canonical["'][^>]*>/i);
    const canonical = canonicalMatch ? canonicalMatch[1].trim() : 'غير موجود';

    // Meta Robots
    const robotsMatch = content.match(/<meta[^>]*name=["']robots["'][^>]*content=["']([^"']*)["'][^>]*>/i) ||
                        content.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']robots["'][^>]*>/i);
    const robots = robotsMatch ? robotsMatch[1].trim() : 'غير موجود';

    // Open Graph
    const ogMatch = content.match(/<meta[^>]*property=["']og:title["']/i);
    const hasOG = ogMatch ? 'نعم' : 'لا';

    // Twitter Card
    const twMatch = content.match(/<meta[^>]*name=["']twitter:card["']/i);
    const hasTwitter = twMatch ? 'نعم' : 'لا';

    // JSON-LD
    const jsonLdMatch = content.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/i);
    let jsonLdStatus = 'لا';
    let jsonLdTypes = [];
    if (jsonLdMatch) {
        jsonLdStatus = 'نعم';
        try {
            const parsed = JSON.parse(jsonLdMatch[1]);
            if (parsed['@type']) {
                jsonLdTypes.push(parsed['@type']);
            }
        } catch(e) {}
    }

    results.push({
        file, title, desc, h1, canonical, robots, hasOG, hasTwitter, jsonLdStatus, jsonLdTypes
    });
});

console.log(JSON.stringify(results, null, 2));
