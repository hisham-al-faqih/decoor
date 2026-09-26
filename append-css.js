const fs = require('fs');
let f = fs.readFileSync('css/premium.css', 'utf8');

f += `
/* ==========================================================================
   MOBILE RESPONSIVE HEADER FIXES
   ========================================================================== */
.premium-header {
    width: 100%;
    z-index: 1000;
}
.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}
.nav-menu ul {
    display: flex;
    gap: 2rem;
    list-style: none;
    margin: 0;
    padding: 0;
}
.nav-actions {
    display: flex;
    gap: 1rem;
    align-items: center;
}
.nav-toggle {
    display: none;
    background: transparent;
    border: none;
    cursor: pointer;
    flex-direction: column;
    gap: 5px;
}
.nav-toggle span {
    display: block;
    width: 30px;
    height: 3px;
    background: var(--white);
    border-radius: 3px;
    transition: var(--transition);
}

@media (max-width: 992px) {
    .nav-toggle {
        display: flex;
    }
    .nav-menu {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: var(--dark);
        flex-direction: column;
        display: none;
        padding: 1rem 0;
        border-top: 1px solid rgba(255,255,255,0.1);
    }
    .nav-menu.active {
        display: flex;
    }
    .nav-menu ul {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
    .btn-nav-cta {
        display: none; /* Hide on mobile to save space, or style it properly */
    }
}
`;

fs.writeFileSync('css/premium.css', f);
console.log('Appended mobile fixes to premium.css');
