class GalleryTab {
    constructor(element, images, selector = '.tabs__item-wrapper') {
        this.element = element;
        this.tag = this.element.querySelector('button').dataset.tag;
        this.images = images;
        this.selector = selector;

        this.eventListeners();
    }

    eventListeners() {
        this.element.onclick = () => {

            if (this.tag === 'all') {
                GalleryImage.showAll();
                this.setActive();
                return;
            }
            GalleryImage.hideAll();

            this.images.forEach((el) => {
                let tags = el.tag.split(',').map((el) => {
                    return el.trim()
                });
                if (tags.includes(this.tag))
                    el.show();
            });

            this.setActive();
        }
    }


    setActive() {
        let DOMElements = Array.from(document.querySelectorAll(this.selector)),
            button = this.element.querySelector('button');

        DOMElements.forEach((el) => {
            let button = el.querySelector('button');
            if (this.element !== el && button.classList.contains('active'))
                button.classList.remove('active')
        });

        if (!button.classList.contains('active')) button.classList.add('active');
    }

    static getElements(images, selector = '.tabs__item-wrapper') {
        let DOMElements = document.querySelectorAll(selector),
          objects = [];

        DOMElements.forEach((el) => {
            objects.push(new GalleryTab(el, images))
        });

        return objects
    }
}

class GalleryImage {
    constructor(element, popup, selector = '.images__item') {
        this.element = element;
        this.popup = popup;
        this.selector = selector;
        this.tag = this.element.querySelector('img').dataset.tag;

        this.eventListeners();
    }

    eventListeners() {
        this.element.onclick = () => {
            this.popup.show(this.element.querySelector('img').dataset.src);
        }
    }

    show() {
        if (this.element.classList.contains('hidden')) this.element.classList.remove('hidden');
    }

    static hideAll(selector = '.images__item') {
        let DOMElements = Array.from(document.querySelectorAll(selector));

        DOMElements.forEach((el) => {
            if (!el.classList.contains('hidden')) el.classList.add('hidden');
        });
    }

    static showAll(selector = '.images__item') {
        let DOMElements = document.querySelectorAll(selector);

        DOMElements.forEach((el) => {
            if (el.classList.contains('hidden')) el.classList.remove('hidden');
        });
    }

    static getElements(popup, selector = '.images__item') {
        let DOMElements = Array.from(document.querySelectorAll(selector)),
          objects = [];

        DOMElements.forEach((el) => {
            objects.push(new GalleryImage(el, popup));
        });

        return objects
    }
}

class GalleryPopup {

    constructor(selector = '.popup') {
        this.element = document.querySelector(selector);

        this.eventListeners();
    }

    eventListeners() {
        let closeButton = this.element.querySelector('.popup__close');
        closeButton.onclick = () => {
            this.hide();
        }
    }

    show(src) {
        if (src.length === 0) return;
        this.element.querySelector('img').setAttribute('src', src);
        if (this.element.classList.contains('hidden')) this.element.classList.remove('hidden');
    }

    hide() {
        if (!this.element.classList.contains('hidden')) this.element.classList.add('hidden');
        this.element.querySelector('img').setAttribute('src', '');
    }
}

let popup  = new GalleryPopup(),
    images = GalleryImage.getElements(popup),
    tabs   = GalleryTab.getElements(images);