export class GalleryImage {
    constructor(element, popup, selector = '.gallery__image-wrapper') {
        this.element = element;
        this.popup = popup;
        this.selector = selector;
        this.tag = this.element.getAttribute('data-tag');

        this.eventListeners();
    }

    eventListeners() {
        this.element.onclick = () => {
            this.popup.show(this.element.querySelector('img').getAttribute('src'));
        }
    }

    show() {
        this.element.classList.contains('hidden') ? this.element.classList.remove('hidden') : null;
    }

    static hideAll(selector = '.gallery__image-wrapper') {
        let DOMElements = document.querySelectorAll(selector);

        DOMElements.forEach((el) => {
            el.classList.contains('hidden') ? el.classList.add('hidden') : null;
        });
    }

    static showAll(selector = '.gallery__image-wrapper') {
        let DOMElements = document.querySelectorAll(selector);

        DOMElements.forEach((el) => {
            el.classList.contains('hidden') ? el.classList.add('hidden') : null;
        });
    }

    static getElements(selector = '.gallery__image-wrapper', popup) {
        let DOMElements = document.querySelectorAll(selector),
          objects = [];

        DOMElements.forEach((el) => {
            objects.push(new GalleryImage(el, popup))
        });

        return objects
    }
}