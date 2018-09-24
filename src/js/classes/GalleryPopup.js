export class GalleryPopup {

    constructor(selector = '.popup') {
        this.element = document.querySelector(selector);

        this.eventListeners();
    }

    eventListeners() {
        let closeButton = this.element.querySelectorAll('.popup__close');
        closeButton.onclick = () => {
            this.hide();
        }
    }
    
    show(src) {
        if (src.length === 0) return;
        this.element.querySelector('img').setAttribute('src', src);
        this.element.classList.contains('hidden') ? this.element.classList.remove('hidden') : null;
    }

    hide() {
        this.element.classList.contains('hidden') ? this.element.classList.add('hidden') : null;
        this.element.querySelector('img').setAttribute('src', '');
    }
}