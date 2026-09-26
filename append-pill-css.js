const fs = require('fs');
let f = fs.readFileSync('css/premium.css', 'utf8');

f += `
/* ==========================================================================
   KEYWORD PILLS FIX (Removed # links)
   ========================================================================== */
.keyword-pill {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 50px;
    color: var(--white);
    font-size: 0.85rem;
    margin: 0.25rem;
    cursor: default;
}
`;

fs.writeFileSync('css/premium.css', f);
console.log('Appended keyword-pill to premium.css');
