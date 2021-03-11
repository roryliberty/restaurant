/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createHeader() {
    const header = document.createElement('header');
    header.className = 'header';

    const homeBtn = createBtn('home', 'Home');
    header.appendChild(homeBtn);

    const aboutBtn = createBtn('about', 'About');
    header.appendChild(aboutBtn);

    const menuBtn = createBtn('menu', 'Menu');
    header.appendChild(menuBtn);

    return header;
}

function createBtn(id, text) {
    const btn = document.createElement('button');
    btn.id = id;
    btn.className = 'tab';

    const span = document.createElement('span');
    span.textContent = text;

    btn.appendChild(span);

    return btn;
}

function createMain() {
    const main = document.createElement('div');
    main.id = 'main';


    const name = document.createElement('h1');
    name.innerText = 'One Guy\'s Fungi';
    main.appendChild(name);

    const tagline = document.createElement('h2');
    tagline.innerText = 'Where Time Travel is Tasty';
    main.appendChild(tagline);

    return main;
}

function loadPage() {
    const content = document.getElementById('content');

    const header = createHeader();
    content.appendChild(header);

    const main = createMain();
    content.appendChild(main);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createAbout() {


    const about = document.createElement('div');
    about.id = 'about';
    about.classList.add('active');

    const words = document.createElement('h2');
    words.innerText = 'This is the About page.';
    about.appendChild(words);

    return about;
}

function showAbout() {
    const content = document.getElementById('content');
    const about = createAbout();

    content.appendChild(about);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showAbout);

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _load_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);



init();

function switchPage() {
    const homeBtn = document.getElementById('home');
    const aboutBtn = document.getElementById('about');
    const menuBtn = document.getElementById('menu');

    homeBtn.addEventListener('click', _load_page__WEBPACK_IMPORTED_MODULE_0__.default);
    aboutBtn.addEventListener('click', _about_page__WEBPACK_IMPORTED_MODULE_1__.default);
}

function init() {
    (0,_load_page__WEBPACK_IMPORTED_MODULE_0__.default)();
    switchPage();
}
})();

/******/ })()
;