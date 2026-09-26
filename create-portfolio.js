const fs = require('fs');
let index = fs.readFileSync('index.html', 'utf8');

// Extract header up to </header>... Wait, app-components handles header and footer!
// I'll just extract up to <main>
let headMatch = index.match(/<html[\s\S]*?<main>/);
let footMatch = index.match(/<\/main>[\s\S]*?<\/html>/);

let projectsMatch = index.match(/<section id="projects"[\s\S]*?<\/section>/);

if (headMatch && footMatch && projectsMatch) {
    let newProjects = projectsMatch[0].replace('id="projects"', 'id="portfolio-page"');
    // Remove the 'عرض جميع الأعمال' button
    newProjects = newProjects.replace(/<div class="latest-work-cta">[\s\S]*?<\/div>/, '');
    
    let html = headMatch[0] + '\n' + newProjects + '\n' + footMatch[0];
    fs.writeFileSync('portfolio.html', html);
    console.log('Created portfolio.html');
} else {
    console.log('Failed to match');
}
