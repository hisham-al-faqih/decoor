const fs = require('fs');

// Fix app-components.js
let app = fs.readFileSync('js/app-components.js', 'utf8');
app = app.replace(/<button class="nav-toggle"[^>]*>[\s\S]*?<\/button>/, `<button class="nav-toggle" aria-label="القائمة">
                        <span style="display: block; width: 30px; height: 3px; background: #fff; border-radius: 3px; margin-bottom: 5px;"></span>
                        <span style="display: block; width: 30px; height: 3px; background: #fff; border-radius: 3px; margin-bottom: 5px;"></span>
                        <span style="display: block; width: 30px; height: 3px; background: #fff; border-radius: 3px;"></span>
                    </button>`);
fs.writeFileSync('js/app-components.js', app);

// Fix premium.css
let css = fs.readFileSync('css/premium.css', 'utf8');

// Fix header
css = css.replace(/max-width: 1200px;\s*background:/g, 'max-width: 1100px;\n    background:');
css = css.replace(/padding: 0\.8rem 2rem !important;\s*box-shadow: 0 20px 40px rgba\(0,0,0,0\.2\) !important;/g, 'padding: 0.5rem 1.5rem !important;\n    box-shadow: 0 20px 40px rgba(0,0,0,0.2) !important;\n    display: flex;\n    align-items: center;');

// Fix hero clamp font size
css = css.replace(/font-size: clamp\(3rem, 5vw, 4\.5rem\) !important;\s*font-weight: 800 !important;\s*color: var\(--white\) !important;\s*line-height: 1\.2 !important;/g, 
`font-size: clamp(2.2rem, 4vw, 3.5rem) !important;
    font-weight: 800 !important;
    color: var(--white) !important;
    line-height: 1.5 !important;`);

css = css.replace(/color: rgba\(247, 244, 239, 0\.9\) !important;\s*margin-bottom: 3rem !important;\s*line-height: 1\.8 !important;/g, 
`color: rgba(247, 244, 239, 0.9) !important;
    margin-bottom: 3rem !important;
    line-height: 1.8 !important;
    max-width: 600px;
    margin-inline: auto;`);

fs.writeFileSync('css/premium.css', css);

console.log("Fixes applied successfully.");
