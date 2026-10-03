const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const html = fs.readFileSync('index.html', 'utf8');
const script = fs.readFileSync('js/app-components.js', 'utf8');

const virtualConsole = new jsdom.VirtualConsole();
virtualConsole.sendTo(console);

const dom = new JSDOM(html, { runScripts: "dangerously", virtualConsole });
const window = dom.window;
const document = window.document;

try {
    const scriptEl = document.createElement('script');
    scriptEl.textContent = script;
    document.body.appendChild(scriptEl);
    
    // Check if PhonePopup is registered
    console.log('Is phone-popup defined?', !!window.customElements.get('phone-popup'));

    if (typeof window.openPhonePopup === 'function') {
        window.openPhonePopup(new window.Event('click'));
        
        setTimeout(() => {
            const popup = document.querySelector('phone-popup');
            if (popup) {
                const overlay = popup.querySelector('.phone-popup-overlay');
                console.log('Overlay classList:', overlay ? overlay.className : 'null');
            }
        }, 50);
    }
} catch (err) {
    console.error('Error during execution:', err);
}
