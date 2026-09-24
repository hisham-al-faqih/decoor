const fs = require('fs');

const css = `
/* Fix Floating Contact padding issue */
.float-btn-lux {
    padding: 0 !important; /* Override the 1rem 2.5rem padding */
    width: 60px !important;
    height: 60px !important;
    border-radius: 50% !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
}
.floating-contact-lux {
    position: fixed !important;
    bottom: 30px !important;
    left: 30px !important;
    display: flex !important;
    flex-direction: column !important;
    gap: 15px !important;
    z-index: 9999 !important;
}
@media (max-width: 768px) {
    .floating-contact-lux {
        bottom: 20px !important;
        left: 20px !important;
    }
    .float-btn-lux {
        width: 50px !important;
        height: 50px !important;
    }
    .float-btn-lux svg {
        width: 24px !important;
        height: 24px !important;
    }
}
`;
fs.appendFileSync('c:\\Users\\M-ALANEED\\Desktop\\decoor\\css\\premium.css', css, 'utf8');
console.log('Floating contact button fixes applied.');
