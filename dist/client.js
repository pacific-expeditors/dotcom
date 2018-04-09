/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/components.css":
/*!***********************************!*\
  !*** ./src/assets/components.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/assets/components.css?");

/***/ }),

/***/ "./src/assets/home.css":
/*!*****************************!*\
  !*** ./src/assets/home.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/assets/home.css?");

/***/ }),

/***/ "./src/client.js":
/*!***********************!*\
  !*** ./src/client.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./assets/components.css */ \"./src/assets/components.css\");\n\n__webpack_require__(/*! ./assets/home.css */ \"./src/assets/home.css\");\n\nwindow.onload = function () {\n  toggleMobileMenu();\n  showAgeVerification();\n  fadeInImages();\n};\n\nvar toggleMobileMenu = function toggleMobileMenu() {\n  document.querySelector('.mobile-menu-link').addEventListener('click', function (e) {\n    document.querySelector('.header-mobile').style.display = 'block';\n  });\n\n  document.querySelector('.close-icon-link').addEventListener('click', function (e) {\n    document.querySelector('.header-mobile').style.display = 'none';\n  });\n};\n\nvar showAgeVerification = function showAgeVerification() {\n  if (localStorage.getItem('isVerified')) {\n    document.querySelector('#modal').style.display = 'none';\n  } else {\n    document.querySelector('#modal').style.display = 'block';\n  }\n\n  document.querySelector('#modal a').addEventListener('click', function (e) {\n    localStorage.setItem('isVerified', true);\n    e.preventDefault();\n    document.querySelector('#modal').style.display = 'none';\n  });\n};\n\nvar fadeInImages = function fadeInImages() {\n  var ids = ['#world-class-supply-chain-support', '#relationships-that-drive-success', '#consulting', '#distribution', '#it-starts-with-leadership', '#a-vision-for-success-in-cannabis'];\n\n  ids.forEach(function (id) {\n    new ScrollMagic.Scene({\n      triggerElement: id\n    }).setClassToggle('.invisible', 'visible').addTo(new ScrollMagic.Controller());\n  });\n};\n\n//# sourceURL=webpack:///./src/client.js?");

/***/ })

/******/ });