const fs = require('fs');

function checkFile(file) {
  if (!fs.existsSync(file)) return;
  const code = fs.readFileSync(file, 'utf8');
  const regex = /\.btn-nav-cta[\s\S]{0,100}/g;
  const matches = code.match(regex);
  if (matches) {
    console.log(`=== MATCHES IN ${file} ===`);
    matches.forEach(m => console.log(m));
  }
}

checkFile('css/premium.css');
checkFile('index.html');
checkFile('css/premium-override.css');
