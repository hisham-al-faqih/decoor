const fs = require('fs');
const indexHTML = fs.readFileSync('index.html', 'utf8');
const lines = indexHTML.split('\n');
lines.forEach((line, i) => {
  if (line.includes('btn-nav-cta')) {
    console.log(`Line ${i + 1}: ${line}`);
    console.log(`Context: \n${lines.slice(i-2, i+3).join('\n')}\n---`);
  }
});
