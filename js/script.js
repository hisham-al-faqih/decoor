document.addEventListener('DOMContentLoaded', () => {
    // Reveal Animations (Intersection Observer)
    const revealElements = document.querySelectorAll('.fade-in'); 
    // Wait, in CSS I added .reveal, but HTML still has .fade-in. I will use the observer for .fade-in and just add the .active class.
    
    // Actually, I can just use .fade-in that already exists in HTML and apply .active
    // The CSS for .fade-in is already defined in style.css or refactored.
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(el => revealObserver.observe(el));

    // Handle map loading
    const mapIframe = document.getElementById('map-iframe');
    if (mapIframe && mapIframe.dataset.src) {
        const mapObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                mapIframe.src = mapIframe.dataset.src;
                mapObserver.disconnect();
            }
        });
        mapObserver.observe(mapIframe);
    }
    
    // Handle FAQ toggles
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Close all other FAQs
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            });
            
            // Toggle current FAQ
            if (!isActive) {
                faqItem.classList.add('active');
                question.setAttribute('aria-expanded', 'true');
            }
        });
    });
});
