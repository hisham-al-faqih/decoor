const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\M-ALANEED\\Desktop\\decoor';

const urlMap = {
    'dakhiliya': 'https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?w=800&q=80',
    'khariijiya': 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80',
    'gypsum': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    'marble': 'https://images.unsplash.com/photo-1600607688969-a5bfcd64bd11?w=800&q=80',
    'wood': 'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?w=800&q=80',
    'chipboard': 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80',
    'fome': 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    'mirror': 'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=800&q=80',
    'wallpaper': 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&q=80',
    'roof': 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80',
    'renovation': 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
    'hero-bg': 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80',
    'logo.png': 'https://placehold.co/200x200/1a2930/c5a880.png?text=Logo',
    'project': 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80'
};

const getReplacement = (filename) => {
    if (filename.includes('logo')) return urlMap['logo.png'];
    if (filename.includes('hero-bg')) return urlMap['hero-bg'];
    
    for (let key of Object.keys(urlMap)) {
        if (filename.includes(key)) {
            // randomize a bit by adding some query param based on filename to get same image per filename but different across categories maybe?
            // Actually Unsplash with specific photo ID is fixed, which is good.
            return urlMap[key];
        }
    }
    // Default fallback
    return 'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=800&q=80';
};

const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Regex to match src="images/..." and replace the contents
    content = content.replace(/src=["']images\/([^"']+)["']/g, (match, filename) => {
        const replacement = getReplacement(filename);
        return `src="${replacement}"`;
    });
    
    // Also fix lazy loading. Ensure loading="lazy" exists on all images except hero
    content = content.replace(/<img(.*?)>/g, (match, attrs) => {
        if (!attrs.includes('loading=') && !match.includes('hero-bg') && !match.includes('logo')) {
            return `<img${attrs} loading="lazy">`;
        }
        return match;
    });

    fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Images replaced with Unsplash placeholders.');
