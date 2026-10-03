const fs = require('fs');
let c = fs.readFileSync('dakhiliya.html', 'utf8');

const repl = `<span>اتصل الآن</span></a>
          </div>
        </div>
      </section>

      <section class="section-padding">
        <div class="container text-center">
          <h2 class="fade-in">جدول المحتويات</h2>
          <details class="toc-details fade-in">
            <summary class="toc-summary">اضغط لعرض المحتويات</summary>
            <ul class="toc-list">
              <li class="toc-list-item">
                <a href="#interior-painter">صباغ دهان داخلي بالرياض</a>`;

c = c.replace(/<span>اتصل الآن<\/span><\/a>[\s\S]*?<li class="toc-list-item">/, repl + '\n              </li>\n              <li class="toc-list-item">');
fs.writeFileSync('dakhiliya.html', c);
console.log('Restored TOC structure in dakhiliya.html');
