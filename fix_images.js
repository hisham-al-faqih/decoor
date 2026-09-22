const fs = require('fs');

let css = fs.readFileSync('css/style.css', 'utf8');

// Fix image rendering
css = css.replace(/project-item img{width:100%;height:100%;object-fit:cover;/gi, 'project-item img{width:100%;height:100%;object-fit:cover;object-position:center;');
css = css.replace(/project-card-new img{width:100%;height:300px;object-fit:contain}/gi, 'project-card-new img{width:100%;aspect-ratio:4/3;height:auto;object-fit:cover;object-position:center}');
css = css.replace(/service-card-image img{width:100%;height:250px;object-fit:contain;/gi, 'service-card-image img{width:100%;aspect-ratio:16/9;height:auto;object-fit:cover;object-position:center;');

// Fix FOUC properly: instead of injecting into <head> via JS and waiting for component to define,
// we add fallback directly to CSS for the tag itself. (already done in previous script).
// Let's also check if Web Components script is deferred, maybe we should remove type="module" or load it in <head> for faster FOUC resolution.
// Actually, `type="module"` in <head> or at end of body executes after parsing.
// The best way to avoid FOUC for Web Components is to have them statically in HTML. The user explicitly requested "فصل الـ Header... استخدم Include... أو البنية المناسبة للمشروع الحالي... لا تقم بتحويل المشروع إلى PHP...". 
// To make it PERFECT without FOUC, I will write a script to inject the actual HTML of the Header and Footer into every HTML file statically. This eliminates Web Components entirely, achieving instant loading (0 FOUC, 0 Layout Shift) and perfect SEO! This is the ultimate "Static Site" approach (like a mini SSG).

fs.writeFileSync('css/style.css', css, 'utf8');
console.log('CSS optimized for images.');
