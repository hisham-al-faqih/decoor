const SiteConfig = {
  name: "القمة للدهانات والديكورات والترميمات",
  phone: "0554595628",
  phone2: "0547465053",
  whatsapp: "https://wa.me/966547465053",
  instagram: "https://www.instagram.com/pillarsksa",
  snapchat: "https://www.snapchat.com/add/amd2400",
  developer: {
    name: "فريق ومضة سوفت",
    phone: "774426179",
    instagram: "https://www.instagram.com/wamda_soft",
  },
};

class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header class="premium-header">
            <div class="nav-container">
                <a href="index.html" class="logo" aria-label="الرئيسية">
                    <img src="images/logo.webp" alt="${SiteConfig.name}">
                </a>
                <nav class="nav-menu" id="mainNavMenu">
                  <ul>
    <li><a href="index.html">الرئيسية</a></li>
    <li><a href="index.html#services">خدماتنا</a></li>
    <li><a href="index.html#why-us">لماذا نحن</a></li>
    <li><a href="index.html#projects">أعمالنا</a></li>
    
</ul>
                </nav>
                <div class="nav-actions">
                    <a href="javascript:void(0)" class="btn-nav-cta" onclick="window.openContactPopup(event)">تواصل معنا</a>
                    <button class="nav-toggle" aria-label="القائمة" id="navToggleBtn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
        <style>
          /* ====== تنسيقات الهيدر الأساسية ====== */
          .premium-header {
            width: 100%;
            max-width: 1100px;
            background: rgba(37, 34, 31, 0.6);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(181, 154, 116, 0.3);
            border-radius: 50px;
            padding: 0.5rem 1.5rem;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
            display: flex;
            align-items: center;
            box-sizing: border-box;
            position: relative;
          }
          .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            gap: 10px;
          }
          .logo img {
            height: 45px;
            width: auto;
            max-width: 100%;
            object-fit: contain;
          }
          .nav-menu ul {
            display: flex;
            gap: 2rem;
            list-style: none;
            margin: 0;
            padding: 0;
            align-items: center;
          }
          .nav-menu ul li a {
            color: #EAE7E0;
            text-decoration: none;
            font-size: 1rem;
            font-weight: 500;
            transition: color 0.3s ease;
            white-space: nowrap;
          }
          .nav-menu ul li a:hover {
            color: #B59A74;
          }
          .nav-actions {
            display: flex;
            align-items: center;
            gap: 10px;
          }
          .btn-nav-cta {
            padding: 0.6rem 1.8rem;
            border-radius: 50px;
            background: rgba(255, 255, 255, 0.15);
            border: 1px solid rgba(255, 255, 255, 0.3);
            color: #fff;
            font-weight: 600;
            text-decoration: none;
            font-size: 0.95rem;
            transition: all 0.3s ease;
            white-space: nowrap;
          }
          .btn-nav-cta:hover {
            background: #B59A74;
            border-color: #B59A74;
          }
          .nav-toggle {
            display: none;
            background: transparent;
            border: none;
            cursor: pointer;
            flex-direction: column;
            gap: 5px;
            padding: 5px;
          }
          .nav-toggle span {
            display: block;
            width: 28px;
            height: 3px;
            background: #EAE7E0;
            border-radius: 3px;
            transition: all 0.3s ease;
          }

          /* ====== تنسيقات site-header ====== */
          site-header {
            position: absolute;
            top: 20px;
            left: 0;
            right: 0;
            width: 100%;
            z-index: 1000;
            display: flex;
            justify-content: center;
            padding: 0 15px;
            box-sizing: border-box;
          }

          /* ====== التجاوب مع الهواتف ====== */
          @media (max-width: 992px) {

            .nav-toggle {
              display: flex !important;
            }
              .btn-nav-cta {
  display: inline-flex !important;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
  white-space: nowrap;
}
            .nav-menu {
              position: absolute !important;
              top: 100% !important;
              left: 0 !important;
              right: 0 !important;
              width: 100% !important;
              background: #25221F !important;
              flex-direction: column !important;
              display: none !important;
              padding: 1.5rem 1rem !important;
              border-radius: 20px !important;
              margin-top: 10px !important;
              box-shadow: 0 10px 30px rgba(0,0,0,0.3) !important;
              box-sizing: border-box !important;
              z-index: 9999 !important;
            }
            .nav-menu.active {
              display: flex !important;
            }
            .nav-menu ul {
              flex-direction: column !important;
              gap: 1rem !important;
              align-items: center !important;
              width: 100% !important;
              padding: 0 !important;
              margin: 0 !important;
            }
            .nav-menu ul li {
              width: 100% !important;
              text-align: center !important;
              list-style: none !important;
            }
            .nav-menu ul li a {
              display: block !important;
              padding: 0.8rem 0 !important;
              font-size: 1.1rem !important;
              color: #EAE7E0 !important;
              text-decoration: none !important;
            }
            
          }
          @media (max-width: 768px) {
            .premium-header {
              padding: 0.4rem 1rem;
              border-radius: 40px;
            }
            .logo img {
              height: 35px;
            }
            site-header {
              top: 10px;
              padding: 0 10px;
            }
          }
        </style>
        `;

    const toggle = this.querySelector("#navToggleBtn");
    const menu = this.querySelector("#mainNavMenu");
    if (toggle && menu) {
      toggle.addEventListener("click", (e) => {
        e.stopPropagation();
        menu.classList.toggle("active");
      });
      // إغلاق القائمة عند النقر على أي رابط
      this.querySelectorAll(".nav-menu a").forEach((link) => {
        link.addEventListener("click", () => {
          menu.classList.remove("active");
        });
      });
      // إغلاق القائمة عند النقر خارجها
      document.addEventListener("click", (e) => {
        if (!menu.contains(e.target) && !toggle.contains(e.target)) {
          menu.classList.remove("active");
        }
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
                            <img src="images/logo.webp" alt="شعار ${SiteConfig.name}" style="height: 60px; margin-bottom: 1.5rem; filter: brightness(0) invert(1);">
                        <p>نقدم لك أفضل حلول الديكور والدهانات الداخلية والخارجية بأعلى جودة وأيدي خبراء متمرسين.</p>
                        <div class="social-icons" style="display: flex; gap: 10px; margin-top: 1.5rem; justify-content: center;">
                           <!-- WhatsApp -->
<a href="${SiteConfig.whatsapp}" target="_blank" rel="noopener noreferrer"
   aria-label="واتساب"
   style="width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; background-color: #25D366; color: #FFFFFF; text-decoration: none;">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" width="18" aria-hidden="true">
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157.1zM223.9 439.6c-33.8 0-66.3-8.8-94.3-25.3l-6.7-4-69.8 18.3L72 381.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.1 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
  </svg>
</a>

<!-- Instagram -->
<a href="${SiteConfig.instagram}" target="_blank" rel="noopener noreferrer"
   aria-label="انستغرام"
   style="width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; background-color: #E4405F; color: #FFFFFF; text-decoration: none;">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" width="18" aria-hidden="true">
    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9 26.3 26.2 58 34.4 93.9 36.2 37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
  </svg>
</a>

<!-- Snapchat -->
<a href="${SiteConfig.snapchat}" target="_blank" rel="noopener noreferrer"
   aria-label="سناب شات"
   style="width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; background-color: #FFFC00; color: #000000; text-decoration: none;">
  <svg xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 448 512"
       fill="currentColor"
       style="width: 22px; height: 22px;"
       aria-hidden="true">
    <path d="M427.5 329.8c-1.4-3-4-5-7.3-5.3-29.2-3.1-51.5-27-51.5-56.1 0-14 5.3-27.5 14.5-37.4 3-3.2 3.6-7.8 1.4-11.7-4.1-7.2-27.7-45.7-88.7-77.9C293.7 89.2 258.9 32 224 32c-34.9 0-69.7 57.2-71.9 109.5-61 32.2-84.6 70.7-88.7 77.9-2.2 3.9-1.6 8.5 1.4 11.7 9.2 9.9 14.5 23.4 14.5 37.4 0 29.1-22.3 53-51.5 56.1-3.3 .3-5.9 2.3-7.3 5.3s-1 6.5 1 9l25.8 31.9c13.8 17.1 33.3 28.5 54.7 32 9.5 1.6 19.3 2.1 29 1.4 20.6-1.5 38.6 12 43 32.1 2.3 10.6 8.1 19.8 16.5 26.5 7.8 6.2 17.6 9.6 27.6 9.6 10 0 19.8-3.4 27.6-9.6 8.4-6.7 14.2-15.9 16.5-26.5 4.4-20.1 22.4-33.6 43-32.1 9.7 .7 19.5 .2 29-1.4 21.4-3.5 40.9-14.9 54.7-32l25.8-31.9c2.1-2.5 2.5-6 1-9z"/>
  </svg>
</a>

                </div>
                    </div>
                    <div class="footer-section">
                        <h3>تواصل معنا</h3>
<p>
  <a href="tel:${SiteConfig.phone}" dir="ltr" style="text-decoration: none;">
    ${SiteConfig.phone}
  </a>
</p>
                        <p>الرياض، المملكة العربية السعودية</p>
                    </div>
                    <div class="footer-section">
                        <h3>روابط سريعة</h3>
                        <ul style="list-style: none; padding: 0;">
                            <li><a href="index.html" style="text-decoration: none;">الرئيسية</a></li>
                            <li><a href="index.html#services" style="text-decoration: none;">خدماتنا</a></li>
                            <li><a href="index.html#projects" style="text-decoration: none;">أعمالنا</a></li>
                            <li><a href="${SiteConfig.whatsapp}" target="_blank" style="text-decoration: none;">تواصل معنا</a></li>
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
                        <a href="${SiteConfig.developer.instagram}" target="_blank" rel="noopener" style="text-decoration: none; display: flex; align-items: center; gap: 8px; justify-content: center;">
                            <img src="images/ws.webp" alt="ومضة سوفت" style="height: 24px; filter: brightness(0) invert(1);"> برمجة وتطوير: ${SiteConfig.developer.name}
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
            <a href="javascript:void(0)" onclick="window.openPhonePopup(event)" class="float-btn-lux phone" aria-label="اتصل بنا">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
            </a>
        </div>
    `;
  }
}
customElements.define("floating-contact", FloatingContact);

class PhonePopup extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        .phone-popup-overlay {
          position: fixed; top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.5); z-index: 999999; display: none;
          align-items: center; justify-content: center; backdrop-filter: blur(3px);
          opacity: 0; transition: opacity 0.3s ease; direction: rtl;
        }
        .phone-popup-overlay.show { display: flex; opacity: 1; }
        .phone-popup-content {
          background: #fff; padding: 24px; border-radius: 16px;
          width: 90%; max-width: 320px; text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15); direction: rtl;
          transform: scale(0.9); transition: transform 0.3s ease;
        }
        .phone-popup-overlay.show .phone-popup-content { transform: scale(1); }
        .phone-popup-title { margin: 0 0 16px 0; font-size: 1.2rem; color: #2D2C2A; font-weight: bold; }
        .phone-popup-btn {
          display: flex; align-items: center; justify-content: center; gap: 12px;
          background: #f8f9fa; border: 2px solid #eaeaea; color: #333;
          padding: 12px; margin-bottom: 12px; border-radius: 8px;
          text-decoration: none; font-size: 1.2rem; font-weight: bold;
          transition: all 0.2s ease; direction: ltr;
        }
        .phone-popup-btn:hover { background: #F7F5F0; border-color: #B59A74; color: #B59A74; }
        .phone-popup-btn svg { width: 20px; height: 20px; fill: currentColor; }
        .phone-popup-close {
          background: none; border: none; color: #888; font-size: 0.9rem;
          cursor: pointer; margin-top: 8px; text-decoration: underline;
        }
      </style>
      <div class="phone-popup-overlay" onclick="window.closePhonePopup(event)">
        <div class="phone-popup-content" onclick="event.stopPropagation()">
          <h3 class="phone-popup-title">اختر رقم الاتصال</h3>
          <a href="tel:${SiteConfig.phone}" class="phone-popup-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
            ${SiteConfig.phone}
          </a>
          
          <button class="phone-popup-close" onclick="window.closePhonePopup(event)">إلغاء</button>
        </div>
      </div>
    `;
  }
}
customElements.define("phone-popup", PhonePopup);

window.openPhonePopup = function(e) {
  if (e) e.preventDefault();
  let popup = document.querySelector('phone-popup');
  if (!popup) {
    popup = document.createElement('phone-popup');
    document.body.appendChild(popup);
  }
  // Let the browser render the element first before adding the show class to trigger the CSS transition
  setTimeout(() => {
    const overlay = popup.querySelector('.phone-popup-overlay');
    if (overlay) overlay.classList.add('show');
  }, 10);
};

window.closePhonePopup = function(e) {
  if (e) e.preventDefault();
  const overlay = document.querySelector('.phone-popup-overlay.show');
  if (overlay) {
    overlay.classList.remove('show');
    // Remove the element after transition ends
    setTimeout(() => {
      const popup = document.querySelector('phone-popup');
      if (popup) popup.remove();
    }, 300);
  }
};

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    window.closePhonePopup();
  }
});


class ContactPopup extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        .contact-popup-overlay {
          position: fixed; top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.5); z-index: 999999; display: none;
          align-items: center; justify-content: center; backdrop-filter: blur(3px);
          opacity: 0; transition: opacity 0.3s ease; direction: rtl;
        }
        .contact-popup-overlay.show { display: flex; opacity: 1; }
        .contact-popup-content {
          background: #fff; padding: 24px; border-radius: 16px;
          width: 90%; max-width: 340px; text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15); direction: rtl;
          transform: scale(0.9); transition: transform 0.3s ease;
        }
        .contact-popup-overlay.show .contact-popup-content { transform: scale(1); }
        .contact-popup-title { margin: 0 0 20px 0; font-size: 1.3rem; color: #2D2C2A; font-weight: bold; }
        .contact-popup-btn {
          display: flex; align-items: center; justify-content: flex-start; gap: 16px;
          background: #f8f9fa; border: 2px solid #eaeaea; color: #333;
          padding: 12px 20px; margin-bottom: 12px; border-radius: 8px;
          text-decoration: none; font-size: 1.1rem; font-weight: bold;
          transition: all 0.2s ease; direction: ltr; text-align: left;
        }
        .contact-popup-btn:hover { background: #F7F5F0; border-color: #B59A74; color: #B59A74; }
        
        /* WhatsApp specifically */
        .contact-popup-btn.btn-wa:hover { background: #e6f7ec; border-color: #25d366; color: #25d366; }
        .contact-popup-btn.btn-wa svg { fill: #25d366; }
        
        /* Instagram specifically */
        .contact-popup-btn.btn-ig:hover { background: #fdf5f7; border-color: #e1306c; color: #e1306c; }
        .contact-popup-btn.btn-ig svg { fill: url(#ig-grad); }
        
        /* Snapchat specifically */
        .contact-popup-btn.btn-snap:hover { background: #fffce6; border-color: #fffc00; color: #333; }
        .contact-popup-btn.btn-snap svg { fill: #fffc00; stroke: #333; stroke-width: 15px; }

        .contact-popup-btn svg { width: 24px; height: 24px; fill: currentColor; }
        
        .contact-popup-close {
          background: none; border: none; color: #888; font-size: 0.95rem;
          cursor: pointer; margin-top: 12px; text-decoration: underline; padding: 10px;
        }
      </style>
      
      <!-- Defs for Instagram Gradient -->
      <svg width="0" height="0">
        <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#fd5949" />
          <stop offset="50%" stop-color="#d6249f" />
          <stop offset="100%" stop-color="#285AEB" />
        </linearGradient>
      </svg>

      <div class="contact-popup-overlay" onclick="window.closeContactPopup(event)">
        <div class="contact-popup-content" onclick="event.stopPropagation()">
          <h3 class="contact-popup-title">تواصل معنا</h3>
          
          <a href="tel:${SiteConfig.phone}" class="contact-popup-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
            ${SiteConfig.phone}
          </a>
          
          <a href="${SiteConfig.whatsapp}" target="_blank" rel="noopener" class="contact-popup-btn btn-wa">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157.1zM223.9 439.6c-33.8 0-66.3-8.8-94.3-25.3l-6.7-4-69.8 18.3L72 381.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.1 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
            ${SiteConfig.phone2}
          </a>
          
          <a href="${SiteConfig.instagram}" target="_blank" rel="noopener" class="contact-popup-btn btn-ig">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
            Instagram
          </a>
          
          <a href="${SiteConfig.snapchat}" target="_blank" rel="noopener" class="contact-popup-btn btn-snap">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M427.5 329.8c-1.4-3-4-5-7.3-5.3-29.2-3.1-51.5-27-51.5-56.1 0-14 5.3-27.5 14.5-37.4 3-3.2 3.6-7.8 1.4-11.7-4.1-7.2-27.7-45.7-88.7-77.9C293.7 89.2 258.9 32 224 32c-34.9 0-69.7 57.2-71.9 109.5-61 32.2-84.6 70.7-88.7 77.9-2.2 3.9-1.6 8.5 1.4 11.7 9.2 9.9 14.5 23.4 14.5 37.4 0 29.1-22.3 53-51.5 56.1-3.3 .3-5.9 2.3-7.3 5.3s-1 6.5 1 9l25.8 31.9c13.8 17.1 33.3 28.5 54.7 32 9.5 1.6 19.3 2.1 29 1.4 20.6-1.5 38.6 12 43 32.1 2.3 10.6 8.1 19.8 16.5 26.5 7.8 6.2 17.6 9.6 27.6 9.6 10 0 19.8-3.4 27.6-9.6 8.4-6.7 14.2-15.9 16.5-26.5 4.4-20.1 22.4-33.6 43-32.1 9.7 .7 19.5 .2 29-1.4 21.4-3.5 40.9-14.9 54.7-32l25.8-31.9c2.1-2.5 2.5-6 1-9z"/></svg>
            Snapchat
          </a>

          <button class="contact-popup-close" onclick="window.closeContactPopup(event)">إغلاق</button>
        </div>
      </div>
    `;
  }
}
customElements.define("contact-popup", ContactPopup);

window.openContactPopup = function(e) {
  if (e) e.preventDefault();
  let p = document.querySelector('contact-popup');
  if (!p) {
    p = document.createElement('contact-popup');
    document.body.appendChild(p);
  }
  setTimeout(() => {
    const overlay = p.querySelector('.contact-popup-overlay');
    if (overlay) overlay.classList.add('show');
  }, 10);
};

window.closeContactPopup = function(e) {
  if (e) e.preventDefault();
  const p = document.querySelector('contact-popup');
  if (p) {
    const overlay = p.querySelector('.contact-popup-overlay');
    if (overlay) {
      overlay.classList.remove('show');
      setTimeout(() => p.remove(), 300);
    }
  }
};

customElements.define("site-header", SiteHeader);
customElements.define("site-footer", SiteFooter);
