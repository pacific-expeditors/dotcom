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

/***/ "./src/client.js":
/*!***********************!*\
  !*** ./src/client.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./assets/components.css */ \"./src/assets/components.css\");\n\nwindow.onload = function () {\n  animateVideoCta();\n  toggleMobileMenu();\n  showAgeVerification();\n  handleContactFormSubmission();\n  fadeInImages();\n};\n\n\nvar animateVideoCta = function animateVideoCta() {\n  var videoCta = document.querySelector('.video-cta');\n\n  if (videoCta) {\n    document.querySelector('.video-cta').style.transform = 'translateX(0%)';\n    document.querySelector('.video-cta').style.opacity = 1;\n  }\n};\n\nvar toggleMobileMenu = function toggleMobileMenu() {\n  document.querySelector('.mobile-menu-link').addEventListener('click', function (e) {\n    document.querySelector('.header-mobile').style.display = 'block';\n  });\n\n  document.querySelector('.close-icon-link').addEventListener('click', function (e) {\n    document.querySelector('.header-mobile').style.display = 'none';\n  });\n};\n\nvar showAgeVerification = function showAgeVerification() {\n  if (localStorage.getItem('isVerified')) {\n    document.querySelector('#modal').style.display = 'none';\n  } else {\n    document.querySelector('#modal').style.display = 'block';\n  }\n\n  document.querySelector('#modal a').addEventListener('click', function (e) {\n    localStorage.setItem('isVerified', true);\n    e.preventDefault();\n    document.querySelector('#modal').style.display = 'none';\n  });\n};\n\nvar fadeInImages = function fadeInImages() {\n  var controller = new ScrollMagic.Controller();\n  new ScrollMagic.Scene({\n    triggerElement: '.fade-in-obj'\n  }).setClassToggle('.fade-in-obj', 'fade-in').addTo(controller);\n};\n\nvar handleContactFormSubmission = function handleContactFormSubmission() {\n  if (document.querySelector('#form')) {\n    document.querySelector('#form').addEventListener('submit', function (e) {\n      e.preventDefault();\n      var selectors = {\n        name: 'input[name=\"name\"]',\n        email: 'input[name=\"email\"]',\n        phoneNumber: 'input[name=\"phoneNumber\"]',\n        company: 'input[name=\"company\"]',\n        location: 'input[name=\"location\"]',\n        msg: 'textarea[name=\"msg\"]'\n      };\n\n      var checkboxes = {\n        segments: 'input[name^=\"segments\"]:checked',\n        services: 'input[name^=\"services\"]:checked'\n      };\n\n      var request = {};\n      Object.keys(selectors).forEach(function (key) {\n        request[key] = document.querySelector(selectors[key]).value;\n      });\n\n      Object.keys(checkboxes).forEach(function (key) {\n        request[key] = [];\n\n        document.querySelectorAll(checkboxes[key]).forEach(function (checkbox) {\n          if (checkbox && checkbox.value) {\n            request[key].push(checkbox.value);\n          }\n        });\n\n        request[key] = request[key].join(', ');\n      });\n\n      fetch('/contact', {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json'\n        },\n        body: JSON.stringify(request)\n      }).then(function (res) {\n        return res.json();\n      }).then(function (res) {\n        document.querySelector('#msg').classList.remove('error');\n        document.querySelector('#msg').classList.add('success');\n        document.querySelector('#msg').innerHTML = 'Thank you for contacting us. We will get back to you shortly.';\n      }).catch(function (err) {\n        document.querySelector('#msg').classList.remove('success');\n        document.querySelector('#msg').classList.add('error');\n        document.querySelector('#msg').innerHTML = 'Something went wrong. Please try again.';\n      });\n    });\n  }\n};\n\n//# sourceURL=webpack:///./src/client.js?");

/***/ })

/******/ });