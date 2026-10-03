const fs = require('fs');

let content = fs.readFileSync('renovation.html', 'utf8');

// The file is a mess of 3 concatenated documents.
// We will extract:
// 1. The title, description, canonical, OG, Twitter, JSON-LD from the file.
// 2. The main content of the page (from <main> to </main>).

const titleMatch = content.match(/<title>[\s\S]*?<\/title>/i);
const descMatch = content.match(/<meta[^>]+name="description"[^>]*>/i);
const canonMatch = content.match(/<link[^>]+rel="canonical"[^>]*>/i);
const ogMatches = content.match(/<meta[^>]+property="og:[^>]*>/ig) || [];
const twitterMatches = content.match(/<meta[^>]+name="twitter:[^>]*>/ig) || [];
const jsonldMatch = content.match(/<script type="application\/ld\+json">[\s\S]*?<\/script>/i);

const mainMatch = content.match(/<main>([\s\S]*?)<\/main>/i);
let mainContent = mainMatch ? mainMatch[1] : '';

// Rebuild the clean HTML
let cleanHTML = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="keywords" content="ترميمات الرياض, مقاول ترميم, تشطيبات فلل, تجديد حمامات, دهانات" />
  <meta name="robots" content="index, follow" />
  <meta name="author" content="ديكورات ودهانات الرياض" />
  <meta name="language" content="ar" />

  ${titleMatch ? titleMatch[0] : ''}
  ${descMatch ? descMatch[0] : ''}
  ${canonMatch ? canonMatch[0] : ''}

  ${ogMatches.join('\n  ')}
  
  ${twitterMatches.join('\n  ')}

  <link rel="icon" type="image/webp" href="images/logo.webp" />

  <style>:not(:defined) { visibility: hidden; }</style>
  <link rel="stylesheet" href="css/fonts.css">
  <link rel="stylesheet" href="css/style.css?v=1790730779088">
  <link rel="stylesheet" href="css/premium.css?v=1790752291159">
  <script src="js/app-components.js" defer></script>
  
  ${jsonldMatch ? jsonldMatch[0] : ''}
</head>
<body>
  <site-header></site-header>
  
  <main>
    ${mainContent}
  </main>

  <site-footer></site-footer>
  <floating-contact></floating-contact>
  <script src="js/script.js" defer></script>
</body>
</html>
`;

fs.writeFileSync('renovation.html', cleanHTML);
console.log('renovation.html rebuilt successfully.');
