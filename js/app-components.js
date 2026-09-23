const SiteConfig = {
    name: "ديكورات ودهانات الرياض",
    phone: "0551614831",
    whatsapp: "https://wa.me/966551614831",
    instagram: "https://www.instagram.com/pillarsksa",
    snapchat: "https://www.snapchat.com/add/amd2400",
    developer: {
        name: "فريق ومضة سوفت",
        phone: "774426179",
        instagram: "https://www.instagram.com/wamda_soft"
    }
};

class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="premium-header">
            <div class="nav-container">
                <div class="logo-area">
                    <a href="index.html" class="logo" aria-label="الرئيسية">
                        <img src="images/logo.png" alt="شعار ${SiteConfig.name}">
                    </a>
                    <span class="company-name">${SiteConfig.name}</span>
                </div>
                
                <nav class="nav-menu">
                    <ul>
                        <li><a href="index.html">الرئيسية</a></li>
                        <li><a href="index.html#services">خدماتنا</a></li>
                        <li><a href="index.html#why-us">لماذا نحن</a></li>
                        <li><a href="index.html#projects">أعمالنا</a></li>
                    </ul>
                </nav>
                
                <div class="header-actions">
                    <a href="tel:${SiteConfig.phone}" class="btn-glass-phone">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" width="16"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                        <span dir="ltr">${SiteConfig.phone}</span>
                    </a>
                    <button class="nav-toggle" aria-label="القائمة">
                        <span></span><span></span><span></span>
                    </button>
                </div>
            </div>
        </header>
        `;
        
        const toggle = this.querySelector('.nav-toggle');
        const menu = this.querySelector('.nav-menu');
        if(toggle && menu) {
            toggle.addEventListener('click', () => {
                menu.classList.toggle('active');
            });
        }
    }
}

class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="footer">
            <div class="container">
                <div class="footer-content">
                    <div class="footer-section">
                        <div class="footer-logo">
                            <img src="images/logo.png" alt="شعار ${SiteConfig.name}">
                            <h2>${SiteConfig.name}</h2>
                        </div>
                        <p>نقدم لك أفضل حلول الديكور والدهانات الداخلية والخارجية بأعلى جودة وأيدي خبراء متمرسين.</p>
                        <div class="social-icons">
                            <a href="${SiteConfig.whatsapp}" target="_blank" aria-label="واتساب"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" width="18"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157.1zM223.9 439.6c-33.8 0-66.3-8.8-94.3-25.3l-6.7-4-69.8 18.3L72 381.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.1 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg></a>
                            <a href="${SiteConfig.instagram}" target="_blank" aria-label="انستغرام"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" width="18"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9 26.3 26.2 58 34.4 93.9 36.2 37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></a>
                            <a href="${SiteConfig.snapchat}" target="_blank" aria-label="سناب شات"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" width="18"><path d="M422.3 268.4c-9.7-5.9-24.3-10-39.7-10.9-16.7-1.1-27.1-1.6-32.9 1-3.6 1.7-5.3 4.3-5.3 7.8 0 2.2 1 4.7 2.9 7.4 3 4.5 9.7 11.4 19.9 20.8 14.5 13.5 28.5 29.8 41.5 48.7 12.3 17.9 18.5 35 18.5 50.8 0 17-7.2 31.8-21 42.9-11 8.8-24.2 13.5-38.3 13.5-9 0-21.7-2.3-37-6.5-12.7-3.5-25-6.5-35.8-9-11.4-2.7-19.9-4.2-24.6-4.2s-13.2 1.5-24.6 4.2c-10.8 2.5-23.1 5.5-35.8 9-15.3 4.2-28 6.5-37 6.5-14.1 0-27.3-4.7-38.3-13.5-13.8-11.1-21-25.9-21-42.9 0-15.8 6.2-32.9 18.5-50.8 13-18.9 27-35.2 41.5-48.7 10.2-9.4 16.9-16.3 19.9-20.8 1.9-2.7 2.9-5.2 2.9-7.4 0-3.5-1.7-6.1-5.3-7.8-5.8-2.6-16.2-2.1-32.9-1-15.4.9-30 5-39.7 10.9-11 6.7-20 8.3-26.8 5-7.5-3.6-11.3-10.1-11.3-19.5 0-11.5 8.7-24.1 26.2-38 12.1-9.6 25-17.9 37.9-24.6 5.8-3 9.4-7.2 10.7-12.4 1.2-4.5.3-9.5-2.6-14.5-2.2-3.7-5-7.8-8.2-12.1-7.2-9.7-15.5-21.1-21.3-32.9C6 142.1 2.2 125.1 2.2 108.8c0-29.3 11-54.7 32.3-74.7C55.7 14 80.9 4 109.9 4c2.8 0 5.6.1 8.2.4 20.2 2.2 39.4 9 56.6 20.3 12.4 8.2 24.5 17.5 35.8 27.5l13.5 12c13.5-12 25.6-21.3 35.8-27.5 17.2-11.3 36.4-18.1 56.6-20.3 2.6-.3 5.4-.4 8.2-.4 29 0 54.2 10 75.4 30.1 21.3 20 32.3 45.4 32.3 74.7 0 16.3-3.8 33.3-11.2 49.9-5.8 11.8-14.1 23.2-21.3 32.9-3.2 4.3-6 8.4-8.2 12.1-2.9 5-3.8 10-2.6 14.5 1.3 5.2 4.9 9.4 10.7 12.4 12.9 6.7 25.8 15 37.9 24.6 17.5 13.9 26.2 26.5 26.2 38 0 9.4-3.8 15.9-11.3 19.5-6.8 3.3-15.8 1.7-26.8-5z"/></svg></a>
                        </div>
                    </div>
                    <div class="footer-section">
                        <h3>تواصل معنا</h3>
                        <p><a href="tel:${SiteConfig.phone}" dir="ltr" style="text-decoration: none;">${SiteConfig.phone}</a></p>
                        <p>الرياض، المملكة العربية السعودية</p>
                    </div>
                    <div class="footer-section">
                        <h3>روابط سريعة</h3>
                        <ul>
                            <li><a href="index.html">الرئيسية</a></li>
                            <li><a href="index.html#services">خدماتنا</a></li>
                            <li><a href="index.html#projects">أعمالنا</a></li>
                            <li><a href="${SiteConfig.whatsapp}" target="_blank">تواصل معنا</a></li>
                        </ul>
                    </div>
                    <div class="footer-section map-container">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15220.734796332857!2d46.6753!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0x6335739c279a49c9!2sRiyadh%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae" 
                            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style="width: 100%; height: 100%; border: 0;"></iframe>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>جميع الحقوق محفوظة &copy; ${new Date().getFullYear()} | ${SiteConfig.name}</p>
                    <p class="developer">
                        <a href="${SiteConfig.developer.instagram}" target="_blank" rel="noopener">
                            <img src="images/logo.png" alt="ومضة سوفت"> تصميم وتطوير: ${SiteConfig.developer.name}
                        </a>
                    </p>
                </div>
            </div>
        </footer>
        `;
    }
}

class FloatingContact extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="floating-contact-lux">
            <a href="${SiteConfig.whatsapp}" target="_blank" rel="noopener" class="float-btn-lux whatsapp" aria-label="واتساب">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157.1zM223.9 439.6c-33.8 0-66.3-8.8-94.3-25.3l-6.7-4-69.8 18.3L72 381.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.1 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
            </a>
            <a href="tel:${SiteConfig.phone}" class="float-btn-lux phone" aria-label="اتصال">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
            </a>
        </div>
        `;
    }
}

customElements.define('site-header', SiteHeader);
customElements.define('site-footer', SiteFooter);
customElements.define('floating-contact', FloatingContact);
