const fs = require('fs');

let c = fs.readFileSync('js/app-components.js', 'utf8');

// Remove the old PhonePopup class and functions
const startIdx = c.indexOf('class PhonePopup');
if (startIdx !== -1) {
    c = c.substring(0, startIdx);
}

// Ensure no old window.openPhonePopup remains
const openIdx = c.indexOf('window.openPhonePopup');
if (openIdx !== -1) {
    c = c.substring(0, openIdx);
}

// Append the new bulletproof implementation
const bulletproofCode = `
window.openPhonePopup = function(e) {
  if (e) e.preventDefault();
  
  let overlay = document.getElementById('phone-popup-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'phone-popup-overlay';
    overlay.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); z-index: 999999; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(3px); opacity: 0; transition: opacity 0.3s ease; direction: rtl;';
    
    // Add click to close
    overlay.onclick = function(event) {
        if (event.target === overlay) window.closePhonePopup(event);
    };

    overlay.innerHTML = \`
      <div style="background: #fff; padding: 24px; border-radius: 16px; width: 90%; max-width: 320px; text-align: center; box-shadow: 0 10px 30px rgba(0,0,0,0.15); transform: scale(0.9); transition: transform 0.3s ease;" id="phone-popup-content">
        <h3 style="margin: 0 0 16px 0; font-size: 1.2rem; color: #333; font-weight: bold;">اختر رقم الاتصال</h3>
        
        <a href="tel:\${SiteConfig.phone}" style="display: flex; align-items: center; justify-content: center; gap: 12px; background: #f8f9fa; border: 2px solid #eaeaea; color: #333; padding: 12px; margin-bottom: 12px; border-radius: 8px; text-decoration: none; font-size: 1.2rem; font-weight: bold; direction: ltr;" onmouseover="this.style.borderColor='#4f46e5'; this.style.color='#4f46e5'; this.style.background='#eef2ff'" onmouseout="this.style.borderColor='#eaeaea'; this.style.color='#333'; this.style.background='#f8f9fa'">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="width: 20px; height: 20px; fill: currentColor;"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
          \${SiteConfig.phone}
        </a>
        
        <a href="tel:\${SiteConfig.phone2}" style="display: flex; align-items: center; justify-content: center; gap: 12px; background: #f8f9fa; border: 2px solid #eaeaea; color: #333; padding: 12px; margin-bottom: 12px; border-radius: 8px; text-decoration: none; font-size: 1.2rem; font-weight: bold; direction: ltr;" onmouseover="this.style.borderColor='#4f46e5'; this.style.color='#4f46e5'; this.style.background='#eef2ff'" onmouseout="this.style.borderColor='#eaeaea'; this.style.color='#333'; this.style.background='#f8f9fa'">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="width: 20px; height: 20px; fill: currentColor;"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
          \${SiteConfig.phone2}
        </a>
        
        <button onclick="window.closePhonePopup(event)" style="background: none; border: none; color: #888; font-size: 0.9rem; cursor: pointer; margin-top: 8px; text-decoration: underline;">إلغاء</button>
      </div>
    \`;
    document.body.appendChild(overlay);
  }
  
  // Show it
  overlay.style.display = 'flex';
  setTimeout(() => {
    overlay.style.opacity = '1';
    const content = overlay.querySelector('#phone-popup-content');
    if (content) content.style.transform = 'scale(1)';
  }, 10);
};

window.closePhonePopup = function(e) {
  if (e) e.preventDefault();
  const overlay = document.getElementById('phone-popup-overlay');
  if (overlay) {
    overlay.style.opacity = '0';
    const content = overlay.querySelector('#phone-popup-content');
    if (content) content.style.transform = 'scale(0.9)';
    
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 300);
  }
};

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    window.closePhonePopup();
  }
});
`;

fs.writeFileSync('js/app-components.js', c + bulletproofCode, 'utf8');
console.log('Injected bulletproof vanilla JS popup!');
