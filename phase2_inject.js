const fs = require('fs');

const seoData = {
  "chipboard.html": {
    "title": "ديكورات بديل الشيبورد الفاخرة بالرياض | ديكورات ودهانات الرياض",
    "description": "معلم تركيب بديل الشيبورد بالرياض. تنفيذ ديكورات عصرية للمنازل والمكاتب وحلول مقاومة للرطوبة بتصاميم فريدة وأسعار تنافسية.",
    "h1": "ديكورات بديل الشيبورد الفاخرة بالرياض",
    "img": "https://riya-decor.vercel.app/images/badil-chipboard-hero.webp"
  },
  "dakhiliya.html": {
    "title": "دهانات داخلية فاخرة بالرياض | معلم دهانات محترف | ديكورات ودهانات الرياض",
    "description": "معلم دهانات داخلية بالرياض متخصص في دهان الشقق والفلل بأفضل الأصباغ والتشطيبات لضمان جودة عالية تدوم طويلاً.",
    "h1": "دهانات داخلية فاخرة بالرياض",
    "img": "https://riya-decor.vercel.app/images/dakhiliya-hero.webp"
  },
  "fome.html": {
    "title": "ديكورات فوم ثلاثية الأبعاد بالرياض | معلم فوم محترف | ديكورات ودهانات الرياض",
    "description": "معلم ديكور فوم بالرياض متخصص في تركيب ديكورات الفوم ثلاثية الأبعاد للجدران والأسقف بأحدث التصاميم العصرية وبدقة متناهية.",
    "h1": "ديكورات فوم ثلاثية الأبعاد بالرياض",
    "img": "https://riya-decor.vercel.app/images/fome-hero.webp"
  },
  "gypsum.html": {
    "title": "أسقف جبس بورد عصرية بالرياض | معلم جبس | ديكورات ودهانات الرياض",
    "description": "معلم محترف في تركيب وتصميم أسقف جبس بورد بالرياض. نقدم ديكورات جبس مخفية، أسقف مستعارة، وأسقف جبس مزدوجة بتصاميم حديثة.",
    "h1": "أسقف جبس بورد عصرية بالرياض",
    "img": "https://riya-decor.vercel.app/images/gypsum-hero.webp"
  },
  "khariijiya.html": {
    "title": "مقاول دهانات خارجية احترافية بالرياض | ديكورات ودهانات الرياض",
    "description": "مقاول دهانات خارجية بالرياض متخصص في دهن واجهات الفلل والمباني باستخدام دهانات عازلة للحرارة والطقس لضمان حماية كاملة ومظهر جذاب.",
    "h1": "مقاول دهانات خارجية احترافية بالرياض",
    "img": "https://riya-decor.vercel.app/images/khariijiya-hero.webp"
  },
  "marble.html": {
    "title": "بديل الرخام الفاخر في الرياض | تركيب بديل رخام | ديكورات ودهانات الرياض",
    "description": "نقدم أجود أنواع بديل الرخام الصناعي للمنازل والمنشآت في الرياض. استمتع بجمال الرخام الطبيعي بمتانة فائقة وأسعار تنافسية لتكسية الجدران والمطابخ.",
    "h1": "بديل الرخام الفاخر في الرياض",
    "img": "https://riya-decor.vercel.app/images/marble-hero.webp"
  },
  "mirror.html": {
    "title": "تركيب مرايات ديكورية فاخرة بالرياض | ديكورات ودهانات الرياض",
    "description": "متخصصون في تركيب مرايات ديكورية آمنة وجدران عصرية في الرياض. تصميم وتركيب مرايات جدارية كبيرة تعطي اتساعاً وفخامة للأماكن.",
    "h1": "تركيب مرايات ديكورية فاخرة بالرياض",
    "img": "https://riya-decor.vercel.app/images/mirror-hero.webp"
  },
  "renovation.html": {
    "title": "ترميمات وتشطيبات شاملة بالرياض | مقاول ترميم | ديكورات ودهانات الرياض",
    "description": "مقاول ترميمات بالرياض متخصص في تجديد الفلل والشقق، إعادة تأهيل المباني، تشطيبات عصرية، وتجديد المطابخ والحمامات بأعلى معايير الجودة.",
    "h1": "ترميمات تشطيبات شاملة بالرياض",
    "img": "https://riya-decor.vercel.app/images/renovation-hero.webp"
  },
  "roof.html": {
    "title": "عزل أسطح بالرياض | معلم عزل حراري ومائي | ديكورات ودهانات الرياض",
    "description": "متخصص في عزل الأسطح حرارياً ومائياً للفلل والشقق بالرياض. نقدم خدمات العزل البيتوميني والمائي وإصلاح التسربات بأسعار تنافسية وخبرة عالية.",
    "h1": "عزل أسطح بالرياض | معلم عزل حراري ومائي",
    "img": "https://riya-decor.vercel.app/images/roof-hero.webp"
  },
  "wallpaper.html": {
    "title": "ورق جدران فاخر بالرياض | معلم تركيب ورق حائط | ديكورات ودهانات الرياض",
    "description": "متخصص في تركيب ورق جدران فاخر وثلاثي الأبعاد بالرياض. نوفر تصاميم حصرية وورق جدران مقاوم للرطوبة يناسب كافة الغرف والصالات.",
    "h1": "ورق جدران فاخر بالرياض",
    "img": "https://riya-decor.vercel.app/images/wallpaper-hero.webp"
  },
  "wood.html": {
    "title": "بديل الخشب المتين بالرياض | تركيب خشب WPC و PVC | ديكورات ودهانات الرياض",
    "description": "نقدم بديل الخشب الفاخر بالرياض (WPC و PVC) لتكسية الجدران والأسقف. حلول مقاومة للحريق والرطوبة مثالية لتجميل المطابخ، الحدائق والصالات.",
    "h1": "بديل الخشب المتين بالرياض",
    "img": "https://riya-decor.vercel.app/images/wood-hero.webp"
  }
};

let filesModified = 0;
let newTitles = 0;
let newDesc = 0;
let newCanon = 0;
let newJsonLd = 0;

for (const [file, data] of Object.entries(seoData)) {
    let content = fs.readFileSync(file, 'utf8');
    const canonicalUrl = `https://riya-decor.vercel.app/${file}`;
    
    const headEndIndex = content.indexOf('</head>');
    if (headEndIndex === -1) continue;

    let injection = '\n';

    // 1. Title
    if (!content.includes('<title>')) {
        injection += `    <title>${data.title}</title>\n`;
        newTitles++;
    }

    // 2. Meta Description
    if (!content.includes('name="description"')) {
        injection += `    <meta name="description" content="${data.description}" />\n`;
        newDesc++;
    }

    // 3. Canonical
    if (!content.includes('rel="canonical"')) {
        injection += `    <link rel="canonical" href="${canonicalUrl}" />\n`;
        newCanon++;
    }

    // 4. JSON-LD
    if (!content.includes('application/ld+json')) {
        const jsonLd = {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": data.h1,
            "description": data.description,
            "provider": {
                "@type": "LocalBusiness",
                "name": "ديكورات ودهانات الرياض",
                "telephone": "0551614831",
                "url": "https://riya-decor.vercel.app/"
            },
            "url": canonicalUrl,
            "areaServed": {
                "@type": "City",
                "name": "الرياض"
            }
        };
        injection += `    <script type="application/ld+json">\n${JSON.stringify(jsonLd, null, 2)}\n    </script>\n`;
        newJsonLd++;
    }

    // Also update OG tags if they have generic content (like from previous phase)
    content = content.replace(/<meta\s+property="og:title"\s+content="[^"]*"/, `<meta property="og:title" content="${data.title}"`);
    content = content.replace(/<meta\s+property="og:description"\s+content="[^"]*"/, `<meta property="og:description" content="${data.description}"`);
    content = content.replace(/<meta\s+name="twitter:title"\s+content="[^"]*"/, `<meta name="twitter:title" content="${data.title}"`);
    content = content.replace(/<meta\s+name="twitter:description"\s+content="[^"]*"/, `<meta name="twitter:description" content="${data.description}"`);


    if (injection.trim() !== '') {
        content = content.substring(0, headEndIndex) + injection + content.substring(headEndIndex);
        fs.writeFileSync(file, content);
        filesModified++;
    } else {
        // Just writing if OG updated
        fs.writeFileSync(file, content);
    }
}

console.log(`Modified: ${filesModified} files`);
console.log(`Added Titles: ${newTitles}`);
console.log(`Added Descriptions: ${newDesc}`);
console.log(`Added Canonicals: ${newCanon}`);
console.log(`Added JSON-LD: ${newJsonLd}`);
