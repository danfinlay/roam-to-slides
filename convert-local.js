const roamJson = require('./roam.json');
const fs = require('fs');
const path = require('path');
const inPath = path.join(__dirname, 'template.html');
const template = fs.readFileSync(inPath).toString();
const outPath = path.join(__dirname, 'index.html');
const { roamToSlideHtml } = require('./roam-to-slides');

/**
 * interface Slide {
 *   title: string;
 *   path: string;
 *   children: string[];
 * }
 */

const html = roamToSlideHtml(roamJson);
const rendered = populateTemplate(template, html);
fs.writeFileSync(outPath, rendered);

function populateTemplate (template, slides) {
    return template.replace('INSERT_SLIDES_HERE', slides);
}
