const fs = require('fs');

const css = `
/* Global Typography Safeguards */
h2 {
    font-size: clamp(1.8rem, 3.5vw, 2.5rem) !important;
    line-height: 1.3 !important;
}
h3 {
    font-size: clamp(1.3rem, 2.5vw, 1.6rem) !important;
}
.hero-content {
    max-width: 800px !important;
    margin: 0 auto !important; /* Center the content box if needed */
    text-align: right !important; /* Keep RTL alignment */
}
@media (min-width: 992px) {
    .hero-content {
        margin-right: 5% !important; /* Push to the right like the reference image */
        margin-left: auto !important;
    }
}
.hero-description {
    max-width: 600px !important;
}
`;
fs.appendFileSync('c:\\Users\\M-ALANEED\\Desktop\\decoor\\css\\premium.css', css, 'utf8');
console.log('Global typography safeguards applied.');
