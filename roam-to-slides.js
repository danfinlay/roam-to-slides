/**
 * interface Slide {
 *   title: string;
 *   path: string;
 *   children: string[];
 * }
 */

exports.roamToSlideHtml = function (roamGraph) {
    let slides = [];
    addSlides(roamGraph, []);
    const html = slidesToHtml(slides);
    return html;
}

function addSlides (json, slides, path = '') {
    if (!Array.isArray(json)) return;
    json.forEach((slide) => {
        if (!('title' in slide) && !('children' in slide)) return;

        if (('title' in slide) && slide.children) {
            slides.push({
                title: slide.title,
            });
        }

        slides.push({
            path,
            title: slide.title || slide.string,
            children: slide?.children?.map(child => child.string)
        })

        let updatedPath = path;
        if (slide.string) {
           updatedPath += ` > ${slide.string}`;
        } else if (slide.title) {
            updatedPath += slide.title;
        }
        addSlides(slide.children, slides, updatedPath);
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
        return `<section>${colorTags(slide.title)}</section>\n`
    }

    if (slide.title && slide.children) {
        return `<section>
            <p class="path">${colorTags(slide.path)}</p>
            <h2>${colorTags(slide.title)}</h2>
            <ul>
            ${slide.children && slide.children
                .map((child, i) => child && `<li class="fragment">${colorTags(child)}</li>`)
                .join('')} 
          </ul>
        </section>`
    }
}

function colorTags (text) {
    let output = text;
    while (output.indexOf('[[') !== -1 && output.indexOf(']]') !== -1) {
        output = output.replace('[[', '<a>');
        output = output.replace(']]', '</a>');
    }
    return output;
}
