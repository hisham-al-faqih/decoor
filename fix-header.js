const fs = require('fs');
let f = fs.readFileSync('js/app-components.js', 'utf8');

f = f.replace(/style="display: flex; justify-content: space-between; align-items: center; width: 100%;"/g, '');
f = f.replace(/style="display: flex; gap: 2rem; list-style: none; margin: 0; padding: 0;"/g, '');
f = f.replace(/<div style="display: flex; gap: 1rem; align-items: center;">/g, '<div class="nav-actions">');
f = f.replace(/style="padding: 0.6rem 1.8rem; border-radius: 50px; background: rgba\\(255,255,255,0.15\\); border: 1px solid rgba\\(255,255,255,0.3\\); color: #fff; font-weight: 600; text-decoration: none;"/g, '');
f = f.replace(/style="display: block; width: 30px; height: 3px; background: #fff; border-radius: 3px; margin-bottom: 5px;"/g, '');
f = f.replace(/style="display: block; width: 30px; height: 3px; background: #fff; border-radius: 3px;"/g, '');

fs.writeFileSync('js/app-components.js', f);
console.log('Fixed app-components.js inline styles');
