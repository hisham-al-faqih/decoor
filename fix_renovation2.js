const fs = require('fs');

const lines = fs.readFileSync('renovation.html', 'utf8').split('\n');

// 1. We know the clean body content is between lines 128 (inside the second <main>) and 693 (the closing </main>)
// Wait, line 125 is <site-header></site-header>
// line 126 is <main>
// line 127 is <!-- المحتوى هنا -->
// line 128 is <main>
// line 692 is </main>
// line 694 is <site-footer></site-footer>
// line 695 is <floating-contact></floating-contact>
// line 696 is <script src="js/script.js" defer></script>

const contentInsideMain = lines.slice(129, 692).join('\n');

const newHTML = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <title>ترميمات وتشطيبات شاملة بالرياض | مقاول ترميم | ديكورات ودهانات الرياض</title>
  <meta name="description" content="مقاول ترميمات بالرياض متخصص في تجديد الفلل والشقق، إعادة تأهيل المباني، تشطيبات عصرية، وتجديد المطابخ والحمامات بأعلى معايير الجودة." />
  <link rel="canonical" href="https://riya-decor.vercel.app/renovation.html" />
  
  <meta property="og:type" content="website" />
  <meta property="og:title" content="ترميمات وتشطيبات شاملة بالرياض | مقاول ترميم | ديكورات ودهانات الرياض" />
  <meta property="og:description" content="مقاول ترميمات بالرياض متخصص في تجديد الفلل والشقق، إعادة تأهيل المباني، تشطيبات عصرية، وتجديد المطابخ والحمامات بأعلى معايير الجودة." />
  <meta property="og:url" content="https://riya-decor.vercel.app/renovation.html" />
  
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="ترميمات وتشطيبات شاملة بالرياض | مقاول ترميم | ديكورات ودهانات الرياض" />
  <meta name="twitter:description" content="مقاول ترميمات بالرياض متخصص في تجديد الفلل والشقق، إعادة تأهيل المباني، تشطيبات عصرية، وتجديد المطابخ والحمامات بأعلى معايير الجودة." />
  
  <link rel="icon" type="image/webp" href="images/logo.webp" />

  <style>:not(:defined) { visibility: hidden; }</style>
  <link rel="stylesheet" href="css/fonts.css">
  <link rel="stylesheet" href="css/style.css?v=1790730779088">
  <link rel="stylesheet" href="css/premium.css?v=1790752291159">
  <script src="js/app-components.js" defer></script>
  <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "ترميمات تشطيبات شاملة بالرياض",
  "description": "مقاول ترميمات بالرياض متخصص في تجديد الفلل والشقق، إعادة تأهيل المباني، تشطيبات عصرية، وتجديد المطابخ والحمامات بأعلى معايير الجودة.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "ديكورات ودهانات الرياض",
    "telephone": "0551614831",
    "url": "https://riya-decor.vercel.app/"
  },
  "url": "https://riya-decor.vercel.app/renovation.html",
  "areaServed": {
    "@type": "City",
    "name": "الرياض"
  }
}
  </script>
</head>
<body>
  <site-header></site-header>
  
  <main>
${contentInsideMain}
  </main>

  <site-footer></site-footer>
  <floating-contact></floating-contact>
  <script src="js/script.js" defer></script>
</body>
</html>`;

fs.writeFileSync('renovation.html', newHTML);
console.log('renovation.html fixed successfully.');
