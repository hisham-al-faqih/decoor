const fs = require('fs');
let f = fs.readFileSync('css/premium.css', 'utf8');

f += `
/* ==========================================================================
   FINAL FIXES
   ========================================================================== */

/* 1. Solid Button for Expertise Cards (White Background) */
.btn-solid {
    background: var(--primary-color) !important;
    color: var(--white) !important;
    border: none !important;
    padding: 0.75rem 1.5rem !important;
    border-radius: 50px !important;
    font-size: 1rem !important;
    text-decoration: none;
    transition: var(--transition) !important;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}
.btn-solid:hover {
    background: var(--secondary-color) !important;
    transform: translateY(-2px);
}

/* 2. Why Choose Us Layout Fix */
.premium-feature-card {
    flex-direction: column !important;
    justify-content: flex-end !important;
}
.feature-card-bg-overlay {
    position: relative;
    z-index: 2;
    width: 100%;
    padding: 1.5rem;
    background: rgba(37, 34, 31, 0.85); /* Dark background for contrast */
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: var(--white);
    text-align: right; /* Ensure full Arabic text doesn't get clipped */
}
.feature-card-bg-overlay p {
    color: #e0e0e0;
    line-height: 1.6;
    margin-bottom: 0;
}

/* 3. Explore Section Redesign (Glassmorphism) */
.premium-explore-section {
    background: url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80') center/cover no-repeat fixed !important;
    position: relative;
    padding: 6rem 0;
}
.premium-explore-section::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(37, 34, 31, 0.4);
    backdrop-filter: blur(5px);
}
.premium-explore-section .container {
    position: relative;
    z-index: 2;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 24px;
    padding: 4rem 2rem;
    text-align: center;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}
.premium-explore-section h2 {
    color: var(--white);
    margin-bottom: 2rem;
    text-shadow: 0 2px 10px rgba(0,0,0,0.3);
}

/* Explore Cloud Pills */
.premium-explore-cloud {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
}
.premium-explore-cloud a {
    background: rgba(255, 255, 255, 0.15) !important;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3) !important;
    color: var(--white) !important;
    padding: 0.6rem 1.5rem !important;
    border-radius: 50px !important;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease !important;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
}
.premium-explore-cloud a:hover {
    background: var(--accent-color) !important;
    color: var(--primary-color) !important;
    border-color: var(--accent-color) !important;
    transform: translateY(-3px) scale(1.05);
}

/* Fix mobile menu padding */
@media (max-width: 992px) {
    .nav-container { padding: 0 1rem; }
    .premium-header { padding: 1rem 0; }
}
`;

fs.writeFileSync('css/premium.css', f);
console.log('Appended final CSS');
