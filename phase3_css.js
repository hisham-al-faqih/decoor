const fs = require('fs');

const css = `
/* ==========================================================================
   PHASE 3: HOMEPAGE PREMIUM SECTIONS
   ========================================================================== */

/* --- Typography & Basics --- */
.section-padding {
    padding: 6rem 0 !important;
}
.container h2 {
    font-size: clamp(2rem, 4vw, 2.8rem);
    font-weight: 800;
    color: var(--dark);
    margin-bottom: 3rem;
    position: relative;
    display: inline-block;
}
/* Vertical or Horizontal Accent */
.container h2::after {
    content: '';
    position: absolute;
    bottom: -15px;
    right: 0;
    width: 60px;
    height: 4px;
    background: var(--gold);
    border-radius: 2px;
}

/* --- 1. Expertise Section (Glass Cards) --- */
.premium-expertise-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}
.premium-expertise-card {
    background: var(--white);
    border: 1px solid rgba(0,0,0,0.05);
    border-radius: 24px;
    padding: 2.5rem 2rem;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0,0,0,0.02);
    transition: var(--transition);
    position: relative;
    overflow: hidden;
}
.premium-expertise-card::before {
    content: '';
    position: absolute;
    top: 0; right: 0; width: 100%; height: 100%;
    background: linear-gradient(135deg, rgba(200, 176, 138, 0.1) 0%, transparent 100%);
    opacity: 0;
    transition: var(--transition);
}
.premium-expertise-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.08);
    border-color: rgba(200, 176, 138, 0.3);
}
.premium-expertise-card:hover::before {
    opacity: 1;
}
.premium-expertise-card svg, .premium-expertise-card i, .premium-expertise-card .feature-icon {
    font-size: 3.5rem;
    color: var(--gold);
    margin-bottom: 1.5rem;
    display: inline-block;
}
.premium-expertise-card h3 {
    font-size: 1.4rem;
    color: var(--dark);
    margin-bottom: 1rem;
    font-weight: 700;
}
.premium-expertise-card p {
    color: #666;
    line-height: 1.7;
    margin: 0;
}

/* --- 2. Editorial Services Grid (Image-First) --- */
.editorial-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 400px;
    gap: 1.5rem;
}
/* Asymmetric Layout */
.editorial-card:first-child {
    grid-column: span 2;
}
@media (max-width: 992px) {
    .editorial-grid { grid-template-columns: repeat(2, 1fr); }
    .editorial-card:first-child { grid-column: span 2; }
}
@media (max-width: 768px) {
    .editorial-grid { grid-template-columns: 1fr; grid-auto-rows: 350px; }
    .editorial-card:first-child { grid-column: span 1; }
}

.editorial-card {
    position: relative;
    border-radius: 30px;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}
.editorial-image {
    position: absolute;
    inset: 0;
    width: 100%; height: 100%;
}
.editorial-image img {
    width: 100%; height: 100%;
    object-fit: cover;
    transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}
.editorial-card:hover .editorial-image img {
    transform: scale(1.08);
}
/* Warm Overlay */
.editorial-card::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(37,34,31,0.95) 0%, rgba(37,34,31,0.4) 50%, transparent 100%);
    pointer-events: none;
}
.editorial-content {
    position: relative;
    z-index: 2;
    padding: 2.5rem;
    width: 100%;
    color: var(--white);
    transform: translateY(10px);
    transition: transform 0.4s ease;
}
.editorial-card:hover .editorial-content {
    transform: translateY(0);
}
.editorial-content h3 {
    font-size: 1.6rem;
    margin-bottom: 0.8rem;
    color: var(--white);
}
.editorial-content p {
    color: rgba(255,255,255,0.8);
    font-size: 1rem;
    margin-bottom: 1.5rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.glass-btn {
    padding: 0.6rem 1.5rem !important;
    font-size: 0.95rem !important;
    backdrop-filter: blur(10px) !important;
    -webkit-backdrop-filter: blur(10px) !important;
    background: rgba(255,255,255,0.1) !important;
    border: 1px solid rgba(255,255,255,0.3) !important;
    border-radius: 30px !important;
    color: var(--white) !important;
    text-decoration: none;
    display: inline-block;
    transition: var(--transition);
}
.glass-btn:hover {
    background: var(--gold) !important;
    border-color: var(--gold) !important;
    color: var(--white) !important;
}

/* --- 3. Premium Why Us (Feature Showcase) --- */
.premium-why-us-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}
.premium-feature-card {
    position: relative;
    border-radius: 24px;
    overflow: hidden;
    height: 400px;
    display: flex;
    align-items: flex-end;
    padding: 2rem;
    /* Inline background images exist on these divs from old code */
    background-size: cover !important;
    background-position: center !important;
}
.premium-feature-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(37,34,31,0.5);
    transition: var(--transition);
}
.premium-feature-card:hover::before {
    background: rgba(37,34,31,0.7);
}
.premium-feature-card h3 {
    position: relative;
    z-index: 2;
    color: var(--white);
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}
.premium-feature-card p {
    position: relative;
    z-index: 2;
    color: rgba(255,255,255,0.85);
    font-size: 1rem;
    margin: 0;
}

/* --- 4. Portfolio (Latest Projects) --- */
.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1.5rem;
}
.portfolio-card {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    aspect-ratio: 4/3;
    display: flex;
    align-items: flex-end;
    cursor: pointer;
}
.portfolio-card img {
    position: absolute;
    inset: 0;
    width: 100%; height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
}
.portfolio-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(37,34,31,0.9) 0%, rgba(37,34,31,0.1) 100%);
    opacity: 0.8;
    transition: var(--transition);
}
.portfolio-card:hover img {
    transform: scale(1.05);
}
.portfolio-card:hover .portfolio-overlay {
    opacity: 1;
}
.portfolio-info {
    position: relative;
    z-index: 2;
    padding: 2rem;
    width: 100%;
}
.portfolio-info h4 {
    color: var(--white);
    font-size: 1.3rem;
    margin-bottom: 0.3rem;
}
.portfolio-info p {
    color: var(--gold);
    font-size: 0.9rem;
    margin: 0;
}
.portfolio-arrow {
    position: absolute;
    top: 2rem; left: 2rem; /* RTL so it's top left */
    z-index: 2;
    width: 45px; height: 45px;
    border-radius: 50%;
    background: rgba(255,255,255,0.1);
    backdrop-filter: blur(5px);
    display: flex; align-items: center; justify-content: center;
    color: var(--white);
    transform: scale(0);
    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.portfolio-arrow svg {
    width: 20px; height: 20px;
    /* Since it's RTL, arrow points left */
    transform: rotate(180deg); 
}
.portfolio-card:hover .portfolio-arrow {
    transform: scale(1);
}

/* --- 5. FAQ (Compact Accordion) --- */
.faq-section {
    background: var(--white) !important;
}
.faq-container {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.faq-item {
    background: var(--offwhite) !important;
    border: 1px solid rgba(0,0,0,0.03) !important;
    border-radius: 16px !important;
    box-shadow: none !important;
    overflow: hidden;
    transition: var(--transition);
}
.faq-item:hover {
    border-color: rgba(200,176,138,0.3) !important;
}
.faq-question {
    padding: 1.5rem 2rem !important;
    font-size: 1.1rem !important;
    color: var(--dark) !important;
    font-weight: 700 !important;
    position: relative;
}
.faq-question::after {
    content: '+' !important;
    font-family: inherit !important;
    font-size: 1.5rem !important;
    font-weight: 300 !important;
    color: var(--gold) !important;
    transform: none !important;
    position: absolute;
    left: 2rem;
}
.faq-item.active .faq-question::after {
    content: '\\2013' !important; /* Minus sign */
}
.faq-answer {
    padding: 0 2rem !important;
}
.faq-answer p {
    color: #555;
    line-height: 1.7;
    margin-bottom: 1.5rem;
}

/* --- 6. Explore / Keywords (Glass Tags) --- */
.premium-explore-section {
    background: var(--dark) !important;
}
.premium-explore-section h2 {
    color: var(--white) !important;
    text-align: center;
    width: 100%;
}
.premium-explore-section h2::after {
    left: 50%;
    transform: translateX(-50%);
    right: auto;
}
.premium-explore-cloud {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin-top: 3rem;
}
.premium-explore-cloud a {
    padding: 0.8rem 1.8rem;
    border-radius: 50px;
    background: rgba(255,255,255,0.05) !important;
    border: 1px solid rgba(255,255,255,0.1) !important;
    color: var(--white) !important;
    font-size: 0.95rem;
    text-decoration: none;
    transition: var(--transition);
    backdrop-filter: blur(5px);
}
.premium-explore-cloud a:hover {
    background: var(--gold) !important;
    border-color: var(--gold) !important;
    color: var(--dark) !important;
    transform: translateY(-3px);
}
`;

fs.appendFileSync('c:\\Users\\M-ALANEED\\Desktop\\decoor\\css\\premium.css', css, 'utf8');
console.log('Appended Phase 3 CSS to premium.css');
