const fs = require('fs');
let f = fs.readFileSync('index.html', 'utf8');

let cards = f.split('premium-expertise-card');
cards.shift(); 
cards.forEach((card, i) => {
    let m = card.match(/<a[^>]*>.*?<\/a>/g);
    if(m) {
        console.log(`Card ${i+1} buttons:`, m);
    }
});
