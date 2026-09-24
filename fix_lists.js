const fs = require('fs');
const css = `
/* Expertise List Fix */
.premium-expertise-card ul {
    list-style: none !important;
    padding: 0 !important;
    text-align: right !important;
    margin: 1.5rem 0 2rem 0 !important;
}
.premium-expertise-card ul li {
    margin-bottom: 1rem !important;
    display: flex !important;
    align-items: center !important;
    gap: 0.8rem !important;
    font-size: 1rem !important;
    color: #444 !important;
}
.premium-expertise-card ul li svg {
    font-size: 1.2rem !important;
    color: var(--gold) !important;
    margin: 0 !important;
    flex-shrink: 0 !important;
}
`;
fs.appendFileSync('c:\\Users\\M-ALANEED\\Desktop\\decoor\\css\\premium.css', css, 'utf8');
console.log('Expertise list fixes applied.');
