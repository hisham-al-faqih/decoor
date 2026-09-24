const fs = require('fs');
const css = `
/* Header Nav Layout Fixes */
.nav-menu ul {
    display: flex !important;
    gap: 2rem !important;
    list-style: none !important;
    margin: 0 !important;
    padding: 0 !important;
    align-items: center !important;
}
.nav-menu ul li a {
    color: var(--white) !important;
    text-decoration: none !important;
    font-size: 1rem !important;
    font-weight: 500 !important;
    transition: var(--transition) !important;
}
.nav-menu ul li a:hover {
    color: var(--gold) !important;
}
@media (max-width: 992px) {
    .nav-menu ul {
        gap: 1rem !important;
    }
}
@media (max-width: 768px) {
    .nav-menu ul {
        flex-direction: column !important;
        gap: 1.5rem !important;
        align-items: flex-start !important;
    }
}
`;
fs.appendFileSync('c:\\Users\\M-ALANEED\\Desktop\\decoor\\css\\premium.css', css, 'utf8');
console.log('Nav layout fixed.');
