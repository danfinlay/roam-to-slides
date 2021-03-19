const roamJson = require('./roam.json');
const fs = require('fs');
const path = require('path');
const inPath = path.join(__dirname, 'template.html');
const template = fs.readFileSync(inPath).toString();
const outPath = path.join(__dirname, 'index.html');

const slides = []; // Slide[];

/**
 * interface Slide {
 *   title: string;
 *   children: string[];
 * }
 */

addSlides(roamJson, slides);
const html = slidesToHtml(slides);
const rendered = populateTemplate(template, html);
fs.writeFileSync(outPath, rendered);
console.log(slides.slice(0,4))

function addSlides (json, slides, title = null) {

    if (!Array.isArray(json)) return;
    json.forEach((slide) => {
        if (!('title' in slide) && !('children' in slide)) return;

        if (('title' in slide) && slide.children) {
            slides.push({
                title: slide.title,
            });
        }

        slides.push({
            title: slide.title || slide.string,
            children: slide?.children?.map(child => child.string)
        })
        addSlides(slide.children, slides);
    })
}

function slidesToHtml (slides) {
    let html = '<div class="slides">\n';
    slides.forEach((slide) => {
        html += slideToHtml(slide);
    });
    html += '<section>Questions?</section>\n'
    html += '</div>'
    return html;
}

function slideToHtml (slide) {
    if (typeof slide.title !== 'undefined' && !slide.children) {
        return `<section>${slide.title}</section>\n`
    }

    if (slide.title && slide.children) {
        return `<section>
            <h1>${slide.title}</h1>
            <ol>
            ${slide.children && slide.children
                .map((child, i) => child && `<li class="fragment">${child}</li>`)
            // .filter((a) => a)
                .join('')} 
          </ol>
        </section>`
    }
}

function populateTemplate (template, slides) {
    return template.replace('INSERT_SLIDES_HERE', slides);
}