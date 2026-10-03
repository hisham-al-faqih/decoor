const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const html = fs.readFileSync('index.html', 'utf8');
const script = fs.readFileSync('js/app-components.js', 'utf8');

const dom = new JSDOM(html, { runScripts: "dangerously" });
const window = dom.window;
const document = window.document;

// Execute the app-components.js inside the JSDOM context
try {
    const scriptEl = document.createElement('script');
    scriptEl.textContent = script;
    document.body.appendChild(scriptEl);
    
    // Simulate a click on the hero button
    const heroBtn = document.querySelector('.hero-btn');
    console.log('Hero button onclick attribute:', heroBtn.getAttribute('onclick'));
    
    // Trigger it
    if (typeof window.openPhonePopup === 'function') {
        console.log('window.openPhonePopup is defined.');
        window.openPhonePopup(new window.Event('click'));
        
        setTimeout(() => {
            const popup = document.querySelector('phone-popup');
            if (popup) {
                console.log('Popup created!');
                console.log(popup.innerHTML.substring(0, 200));
            } else {
                console.log('Popup NOT created!');
            }
        }, 50);
    } else {
        console.log('window.openPhonePopup is undefined!');
    }
} catch (err) {
    console.error('Error during execution:', err);
}
