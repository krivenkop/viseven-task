'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var GalleryTab = exports.GalleryTab = function () {
    function GalleryTab(element, images) {
        _classCallCheck(this, GalleryTab);

        this.element = element;
        this.tag = this.element.getAttribute('data-tag');
        this.images = images;
        console.log(this.element);

        this.eventListeners();
    }

    _createClass(GalleryTab, [{
        key: 'eventListeners',
        value: function eventListeners() {
            var _this = this;

            this.element.onclick = function () {
                console.log('tab ' + _this.tag + ' clicked');
                if (_this.tag === 'all') {
                    GalleryImage.showAll();
                    return;
                }
                GalleryImage.hideAll();

                _this.images.forEach(function (el) {
                    _this.tag === el.tag ? el.show() : null;
                });
            };
        }
    }], [{
        key: 'getElements',
        value: function getElements() {
            var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.gallery__image-wrapper';

            var DOMElements = document.querySelectorAll(selector),
              objects = [];

            DOMElements.forEach(function (el) {
                objects.push(new GalleryImage(el));
            });

            return objects;
        }
    }]);

    return GalleryTab;
}();

var GalleryImage = exports.GalleryImage = function () {
    function GalleryImage(element, popup) {
        var selector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.gallery__image-wrapper';

        _classCallCheck(this, GalleryImage);

        this.element = element;
        this.popup = popup;
        this.selector = selector;
        this.tag = this.element.getAttribute('data-tag');

        this.eventListeners();
    }

    _createClass(GalleryImage, [{
        key: 'eventListeners',
        value: function eventListeners() {
            var _this2 = this;

            this.element.onclick = function () {
                _this2.popup.show(_this2.element.querySelector('img').getAttribute('src'));
            };
        }
    }, {
        key: 'show',
        value: function show() {
            this.element.classList.contains('hidden') ? this.element.classList.remove('hidden') : null;
        }
    }], [{
        key: 'hideAll',
        value: function hideAll() {
            var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.gallery__image-wrapper';

            var DOMElements = document.querySelectorAll(selector);

            DOMElements.forEach(function (el) {
                el.classList.contains('hidden') ? el.classList.add('hidden') : null;
            });
        }
    }, {
        key: 'showAll',
        value: function showAll() {
            var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.gallery__image-wrapper';

            var DOMElements = document.querySelectorAll(selector);

            DOMElements.forEach(function (el) {
                el.classList.contains('hidden') ? el.classList.add('hidden') : null;
            });
        }
    }, {
        key: 'getElements',
        value: function getElements() {
            var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.gallery__image-wrapper';
            var popup = arguments[1];

            var DOMElements = document.querySelectorAll(selector),
              objects = [];

            DOMElements.forEach(function (el) {
                objects.push(new GalleryImage(el, popup));
            });

            return objects;
        }
    }]);

    return GalleryImage;
}();

var GalleryPopup = exports.GalleryPopup = function () {
    function GalleryPopup() {
        var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.popup';

        _classCallCheck(this, GalleryPopup);

        this.element = document.querySelector(selector);

        this.eventListeners();
    }

    _createClass(GalleryPopup, [{
        key: 'eventListeners',
        value: function eventListeners() {
            var _this3 = this;

            var closeButton = this.element.querySelectorAll('.popup__close');
            closeButton.onclick = function () {
                _this3.hide();
            };
        }
    }, {
        key: 'show',
        value: function show(src) {
            if (src.length === 0) return;
            this.element.querySelector('img').setAttribute('src', src);
            this.element.classList.contains('hidden') ? this.element.classList.remove('hidden') : null;
        }
    }, {
        key: 'hide',
        value: function hide() {
            this.element.classList.contains('hidden') ? this.element.classList.add('hidden') : null;
            this.element.querySelector('img').setAttribute('src', '');
        }
    }]);

    return GalleryPopup;
}();

var images  =  GalleryImage.getElements(),
      popup =  new GalleryPopup(),
      tabs  =  GalleryTab.getElements();