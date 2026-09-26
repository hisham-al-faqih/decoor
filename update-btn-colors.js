const fs = require('fs');
let f = fs.readFileSync('css/premium.css', 'utf8');

// Replace dark colors with gold colors for buttons
f = f.replace(/background: var\(--secondary-color\) !important;/g, 'background: var(--accent-color) !important;'); // Just ensure it's not primary
// Wait, I already changed it to --secondary-color in task-600

// Add .btn-outline-dark
f += `
/* ==========================================================================
   BUTTON COLORS (Harmonious, Not Black)
   ========================================================================== */
.btn-outline-dark {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    padding: 0.75rem 1.5rem !important;
    border-radius: 50px !important;
    font-size: 1rem !important;
    font-weight: 600;
    text-decoration: none;
    border: 2px solid var(--accent-color) !important;
    color: var(--primary-color) !important; /* Dark text for contrast */
    background: transparent !important;
    transition: var(--transition) !important;
}
.btn-outline-dark:hover {
    background: var(--accent-color) !important;
    color: var(--white) !important;
}

.btn-solid {
    background: var(--accent-color) !important; /* Gold */
    color: var(--white) !important;
    border: none !important;
    padding: 0.75rem 1.5rem !important;
    border-radius: 50px !important;
    font-size: 1rem !important;
    font-weight: 600;
    text-decoration: none;
    transition: var(--transition) !important;
    box-shadow: 0 4px 15px rgba(200, 176, 138, 0.4);
}
.btn-solid:hover {
    background: var(--secondary-color) !important;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(200, 176, 138, 0.6);
}

/* Ensure original premium buttons use gold too if not glass */
.btn-premium:not(.glass-btn) {
    background: var(--accent-color) !important;
    color: var(--white) !important;
    border: none !important;
}
.btn-premium:not(.glass-btn):hover {
    background: var(--secondary-color) !important;
}
`;

fs.writeFileSync('css/premium.css', f);
console.log('Updated button colors to gold/harmonious');
