/* ==================================================
# Background Image & Text Sliders
===================================================*/
/* --==== Background Images ====-- */
let commercial_slider = document.querySelector('#commercial');
let prev_icon = document.querySelector('.prev-icon'),
    next_icon = document.querySelector('.next-icon');

let images = ["49.jpg", "75.jpg", "82.jpg"],
    base = "assets/img/",
    secs = 8;
images.forEach(function (img) {
    // caches images, avoiding white flash between background replacements
    new Image().src = base + img;

    function backgroundSequence() {
        window.clearTimeout();
        let k = 0;
        prev_icon.addEventListener('click', () => {
            k--;
        })

        next_icon.addEventListener('click', () => {
            k++;
        })
        for (let i = 0; i < images.length; i++) {
            setTimeout(function () {
                commercial_slider.style.background = "center center linear-gradient(360deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(" + base + images[k] + ")";
                commercial_slider.style.backgroundSize = "cover";
                commercial_slider.style.backgroundAttachment = 'fixed';
                if ((k + 1) === images.length) { setTimeout(function () { backgroundSequence() }, (secs * 1000)) } else { k++; }
            }, (secs * 1000) * i)
        }
    }
    backgroundSequence();
});


/* --==== Headings ====-- */
let commercial_slider_heading = document.querySelector('#commercial h1');
let headings = ["Commmercial Services", "Residential Services", "Industrial Services"];
headings.forEach(() => {
    function headingSequence() {
        window.clearTimeout();
        let k = 0;
        for (let i = 0; i < headings.length; i++) {
            setTimeout(function () {
                commercial_slider_heading.innerHTML = headings[k]
                if ((k + 1) === paragraphs.length) { setTimeout(function () { headingSequence() }, (secs * 1000)) } else { k++; }
            }, (secs * 1000) * i)
        }
    }
    headingSequence();
})

/* --==== Paragraphs ====-- */
let commercial_slider_paragraph = document.querySelector('#commercial p');
let paragraphs = ["Installing, Testing and Commissioning of electrical systems for commercial buildings.", "Installing, Testing and Commissioning of electrical systems for residential buildings.", "Installing, Testing and Commissioning of electrical systems for industrial buildings."];
paragraphs.forEach(() => {
    function paragraphSequence() {
        window.clearTimeout();
        let k = 0;
        for (let i = 0; i < paragraphs.length; i++) {
            setTimeout(function () {
                commercial_slider_paragraph.innerHTML = paragraphs[k];
                if ((k + 1) === paragraphs.length) { setTimeout(function () { paragraphSequence() }, (secs * 1000)) } else { k++; }
            }, (secs * 1000) * i)
        }
    }
    paragraphSequence();
})
