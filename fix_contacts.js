const fs = require('fs');
const path = require('path');

// 1. Fix app-components.js
const appComponentsPath = path.join(__dirname, 'js', 'app-components.js');
let appComponents = fs.readFileSync(appComponentsPath, 'utf8');

// Replace the two float-btn-lux phone links in FloatingContact with one
const floatingBtnRegex = /<a href="tel:\$\{SiteConfig\.phone2\}" class="float-btn-lux phone" aria-label="[^"]+">[\s\S]*?<\/a>\s*<a href="tel:\$\{SiteConfig\.phone\}" class="float-btn-lux phone" aria-label="[^"]+">[\s\S]*?<\/a>/;
const replacementFloat = `<a href="javascript:void(0)" onclick="window.openPhonePopup(event)" class="float-btn-lux phone" aria-label="اتصل بنا">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
            </a>`;
appComponents = appComponents.replace(floatingBtnRegex, replacementFloat);

// Append the PhonePopup component if not already there
if (!appComponents.includes('PhonePopup')) {
    appComponents += `
class PhonePopup extends HTMLElement {
  connectedCallback() {
    this.innerHTML = \`
      <style>
        .phone-popup-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.5);
          z-index: 9999;
          display: none;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(3px);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .phone-popup-overlay.show {
          display: flex;
          opacity: 1;
        }
        .phone-popup-content {
          background: #fff;
          padding: 24px;
          border-radius: 16px;
          width: 90%;
          max-width: 320px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
          direction: rtl;
          transform: scale(0.9);
          transition: transform 0.3s ease;
        }
        .phone-popup-overlay.show .phone-popup-content {
          transform: scale(1);
        }
        .phone-popup-title {
          margin: 0 0 16px 0;
          font-size: 1.2rem;
          color: #333;
          font-weight: bold;
        }
        .phone-popup-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          background: #f8f9fa;
          border: 2px solid #eaeaea;
          color: #333;
          padding: 12px;
          margin-bottom: 12px;
          border-radius: 8px;
          text-decoration: none;
          font-size: 1.2rem;
          font-weight: bold;
          transition: all 0.2s ease;
          direction: ltr;
        }
        .phone-popup-btn:hover {
          background: #eef2ff;
          border-color: #4f46e5;
          color: #4f46e5;
        }
        .phone-popup-btn svg {
          width: 20px;
          height: 20px;
          fill: currentColor;
        }
        .phone-popup-close {
          background: none;
          border: none;
          color: #888;
          font-size: 0.9rem;
          cursor: pointer;
          margin-top: 8px;
          text-decoration: underline;
        }
      </style>
      <div class="phone-popup-overlay" onclick="window.closePhonePopup(event)">
        <div class="phone-popup-content" onclick="event.stopPropagation()">
          <h3 class="phone-popup-title">اختر رقم الاتصال</h3>
          <a href="tel:\${SiteConfig.phone}" class="phone-popup-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
            \${SiteConfig.phone}
          </a>
          <a href="tel:\${SiteConfig.phone2}" class="phone-popup-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
            \${SiteConfig.phone2}
          </a>
          <button class="phone-popup-close" onclick="window.closePhonePopup(event)">إلغاء</button>
        </div>
      </div>
    \`;
  }
}
customElements.define("phone-popup", PhonePopup);

window.openPhonePopup = function(e) {
  if(e) e.preventDefault();
  let popup = document.querySelector('phone-popup');
  if (!popup) {
    popup = document.createElement('phone-popup');
    document.body.appendChild(popup);
  }
  setTimeout(() => {
    const overlay = popup.querySelector('.phone-popup-overlay');
    if (overlay) overlay.classList.add('show');
  }, 10);
};

window.closePhonePopup = function(e) {
  if(e) e.preventDefault();
  const overlay = document.querySelector('.phone-popup-overlay.show');
  if (overlay) {
    overlay.classList.remove('show');
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
`;
}
fs.writeFileSync(appComponentsPath, appComponents);
console.log('Updated app-components.js');

// 2. Fix HTML files
const htmlFiles = fs.readdirSync(__dirname).filter(f => f.endsWith('.html'));

const duplicateTelRegex = /<a href="tel:[^"]+" class="([^"]+)">[\s\S]*?<\/a>\s*<a href="tel:[^"]+" class="([^"]+)">[\s\S]*?<\/a>/;

htmlFiles.forEach(f => {
    let htmlContent = fs.readFileSync(path.join(__dirname, f), 'utf8');
    
    // Check if it has duplicate tel links
    if (duplicateTelRegex.test(htmlContent)) {
        htmlContent = htmlContent.replace(duplicateTelRegex, (match, class1, class2) => {
            return `<a href="javascript:void(0)" onclick="window.openPhonePopup(event)" class="${class1}"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="currentColor" style="width: 1em; vertical-align: -0.125em"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg><span>اتصل الآن</span></a>`;
        });
        fs.writeFileSync(path.join(__dirname, f), htmlContent);
        console.log(\`Updated HTML file: \${f}\`);
    }
});
