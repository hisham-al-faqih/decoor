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
        .phone-popup-title { margin: 0 0 16px 0; font-size: 1.2rem; color: #333; font-weight: bold; }
        .phone-popup-btn {
          display: flex; align-items: center; justify-content: center; gap: 12px;
          background: #f8f9fa; border: 2px solid #eaeaea; color: #333;
          padding: 12px; margin-bottom: 12px; border-radius: 8px;
          text-decoration: none; font-size: 1.2rem; font-weight: bold;
          transition: all 0.2s ease; direction: ltr;
        }
        .phone-popup-btn:hover { background: #eef2ff; border-color: #4f46e5; color: #4f46e5; }
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
          <a href="tel:${SiteConfig.phone2}" class="phone-popup-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
            ${SiteConfig.phone2}
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
