const fs = require('fs');
let css = fs.readFileSync('css/premium.css', 'utf8');
css = css.replace(/\.container h2 {\s*font-size: clamp\(2rem, 4vw, 2\.8rem\);\s*font-weight: 800;\s*color: var\(--dark\);\s*margin-bottom: 3rem;\s*position: relative;\s*display: inline-block;\s*}/g, 
`.container h2 {
    font-size: clamp(2rem, 4vw, 2.8rem);
    font-weight: 800;
    color: var(--dark);
    margin-bottom: 3rem;
    position: relative;
    display: block;
    width: fit-content;
    margin-inline: auto;
    text-align: center;
}`);

css = css.replace(/\.container h2::after {\s*content: '';\s*position: absolute;\s*bottom: -15px;\s*right: 0;/g, 
`.container h2::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);`);

fs.writeFileSync('css/premium.css', css);
console.log("H2 Fixed");
