const fs = require('fs');

const file = 'c:\\Users\\M-ALANEED\\Desktop\\decoor\\index.html';
let html = fs.readFileSync(file, 'utf8');

const tagsHTML = `
            <a href="khariijiya.html">مظلات وسواتر</a>
            <a href="khariijiya.html">دهانات خارجية</a>
            <a href="dakhiliya.html">دهانات داخلية</a>
            <a href="gypsum.html">جبس بورد</a>
            <a href="marble.html">بديل الرخام</a>
            <a href="wood.html">بديل الخشب</a>
            <a href="wallpaper.html">ورق جدران</a>
            <a href="roof.html">عوازل أسطح</a>
            <a href="renovation.html">ترميمات</a>
            <a href="fome.html">ديكورات فوم</a>
`;

html = html.replace(/<div class="premium-explore-cloud"><\/div>/, `<div class="premium-explore-cloud">${tagsHTML}</div>`);

fs.writeFileSync(file, html, 'utf8');
console.log('Populated Explore section with actual useful links.');
