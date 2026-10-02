const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

let report = [];

files.forEach(f => {
    const c = fs.readFileSync(f, 'utf8');
    
    // Title
    const titleMatch = c.match(/<title>(.*?)<\/title>/is);
    const title = titleMatch ? titleMatch[1].trim() : 'MISSING';
    
    // Description
    const descMatch = c.match(/<meta[^>]+name="description"[^>]+content="([^"]+)"/is);
    const desc = descMatch ? descMatch[1].trim() : 'MISSING';
    
    // Canonical
    const canMatch = c.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/is);
    const canonical = canMatch ? canMatch[1].trim() : 'MISSING';
    
    // OG URL
    const ogMatch = c.match(/<meta[^>]+property="og:url"[^>]+content="([^"]+)"/is);
    const ogUrl = ogMatch ? ogMatch[1].trim() : 'MISSING';

    // JSON-LD
    const jsonMatch = c.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/is);
    let jsonld = 'MISSING';
    if (jsonMatch) {
        try {
            const parsed = JSON.parse(jsonMatch[1]);
            jsonld = parsed['@type'] || 'Valid JSON, No Type';
        } catch(e) {
            jsonld = 'INVALID JSON';
        }
    }
    
    report.push({
        page: f,
        title: title !== 'MISSING',
        desc: desc !== 'MISSING',
        canonical: canonical,
        ogUrl: ogUrl,
        jsonld: jsonld
    });
});

console.table(report);
