import { GalleryImage } from './GalleryImage';

export class GalleryTab {
    constructor(element, images) {
        this.element = element;
        this.tag = this.element.getAttribute('data-tag');
        this.images = images;

        this.eventListeners();
    }

    eventListeners() {
        this.element.onclick = () => {
            if (this.tag === 'all') {
                GalleryImage.showAll();
                return;
            }
            GalleryImage.hideAll();

            this.images.forEach((el) => {
                this.tag === el.tag ? el.show() : null;
            });
        }
    }

    static getElements(selector = '.gallery__image-wrapper') {
        let DOMElements = document.querySelectorAll(selector),
          objects = [];

        DOMElements.forEach((el) => {
            objects.push(new GalleryImage(el))
        });

        return objects
    }
}