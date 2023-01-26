/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-storage */ "./src/local-storage.js");
/* eslint-disable import/prefer-default-export */




const projectContainer = document.querySelector("[data-projects")
const newProjectForm = document.querySelector("[data-new-project-form]")
const newProjectInput = document.querySelector("[data-new-project-input]")
let selectedProject

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild)
  }
}

function render() {
  // <li class="list-group-item">Another Project</li>
  clearElement(projectContainer)
  _project__WEBPACK_IMPORTED_MODULE_0__.list.forEach(list => {
    const listElement = document.createElement("li")
    listElement.dataset.listId = list.id
    listElement.classList.add("list-group-item")
    listElement.innerText = list.title
    if (list.id === selectedProject) {
      listElement.classList.add("active")
    }
    projectContainer.appendChild(listElement)
  })
}

newProjectForm.addEventListener("submit", e => {
  e.preventDefault()
  const projectTitle = newProjectInput.value
  if (projectTitle == null || projectTitle === "") return
  const newProject = _project__WEBPACK_IMPORTED_MODULE_0__.projectFactory(projectTitle)
  newProjectInput.value = null
  _project__WEBPACK_IMPORTED_MODULE_0__.list.push(newProject)
  console.log(_project__WEBPACK_IMPORTED_MODULE_0__.list)
  _local_storage__WEBPACK_IMPORTED_MODULE_1__.save()
  render()
})

projectContainer.addEventListener("click", e => {
  if (e.target.classList.contains("list-group-item")) {
    selectedProject = e.target.dataset.listId
    render()
  }
})



/***/ }),

/***/ "./src/local-storage.js":
/*!******************************!*\
  !*** ./src/local-storage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "list": () => (/* binding */ list),
/* harmony export */   "save": () => (/* binding */ save)
/* harmony export */ });
/* eslint-disable import/prefer-default-export */

const LOCAL_STORAGE_LIST_KEY = "project.list"
const list = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || []

function save() {
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(list))
}



/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "list": () => (/* binding */ list),
/* harmony export */   "projectFactory": () => (/* binding */ projectFactory)
/* harmony export */ });
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-storage */ "./src/local-storage.js");
/* eslint-disable import/prefer-default-export */


const { list } = _local_storage__WEBPACK_IMPORTED_MODULE_0__

const projectFactory = (title) => {
  const id = Date.now().toString()
  const tasks = []

  return { title, id, tasks }
}

// function createProject(title) {
//   return { id: Date.now().toString(), title, tasks: [] }
// }



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
// import * as project from "./project"


_dom__WEBPACK_IMPORTED_MODULE_0__.render()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNvQztBQUNNOzs7QUFHMUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGtEQUFvQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG9EQUFzQjtBQUMzQztBQUNBLEVBQUUsK0NBQWlCO0FBQ25CLGNBQWMsMENBQVk7QUFDMUIsRUFBRSxnREFBWTtBQUNkO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoREQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQzBDOztBQUUxQyxRQUFRLE9BQU8sRUFBRSwyQ0FBTzs7QUFFeEI7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDs7QUFFQTtBQUNBLGNBQWM7QUFDZDs7Ozs7Ozs7VUNkQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDNEI7O0FBRTVCLHdDQUFVLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2NhbC1zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5pbXBvcnQgKiBhcyBwcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIlxuaW1wb3J0ICogYXMgc3RvcmFnZSBmcm9tIFwiLi9sb2NhbC1zdG9yYWdlXCJcblxuXG5jb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXByb2plY3RzXCIpXG5jb25zdCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1uZXctcHJvamVjdC1mb3JtXVwiKVxuY29uc3QgbmV3UHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW5ldy1wcm9qZWN0LWlucHV0XVwiKVxubGV0IHNlbGVjdGVkUHJvamVjdFxuXG5mdW5jdGlvbiBjbGVhckVsZW1lbnQoZWxlbWVudCkge1xuICB3aGlsZSAoZWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyKCkge1xuICAvLyA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW1cIj5Bbm90aGVyIFByb2plY3Q8L2xpPlxuICBjbGVhckVsZW1lbnQocHJvamVjdENvbnRhaW5lcilcbiAgcHJvamVjdC5saXN0LmZvckVhY2gobGlzdCA9PiB7XG4gICAgY29uc3QgbGlzdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICBsaXN0RWxlbWVudC5kYXRhc2V0Lmxpc3RJZCA9IGxpc3QuaWRcbiAgICBsaXN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibGlzdC1ncm91cC1pdGVtXCIpXG4gICAgbGlzdEVsZW1lbnQuaW5uZXJUZXh0ID0gbGlzdC50aXRsZVxuICAgIGlmIChsaXN0LmlkID09PSBzZWxlY3RlZFByb2plY3QpIHtcbiAgICAgIGxpc3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICB9XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0RWxlbWVudClcbiAgfSlcbn1cblxubmV3UHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBlID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IG5ld1Byb2plY3RJbnB1dC52YWx1ZVxuICBpZiAocHJvamVjdFRpdGxlID09IG51bGwgfHwgcHJvamVjdFRpdGxlID09PSBcIlwiKSByZXR1cm5cbiAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3QucHJvamVjdEZhY3RvcnkocHJvamVjdFRpdGxlKVxuICBuZXdQcm9qZWN0SW5wdXQudmFsdWUgPSBudWxsXG4gIHByb2plY3QubGlzdC5wdXNoKG5ld1Byb2plY3QpXG4gIGNvbnNvbGUubG9nKHByb2plY3QubGlzdClcbiAgc3RvcmFnZS5zYXZlKClcbiAgcmVuZGVyKClcbn0pXG5cbnByb2plY3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibGlzdC1ncm91cC1pdGVtXCIpKSB7XG4gICAgc2VsZWN0ZWRQcm9qZWN0ID0gZS50YXJnZXQuZGF0YXNldC5saXN0SWRcbiAgICByZW5kZXIoKVxuICB9XG59KVxuXG5leHBvcnQgeyByZW5kZXIgfSIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cblxuY29uc3QgTE9DQUxfU1RPUkFHRV9MSVNUX0tFWSA9IFwicHJvamVjdC5saXN0XCJcbmNvbnN0IGxpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKExPQ0FMX1NUT1JBR0VfTElTVF9LRVkpKSB8fCBbXVxuXG5mdW5jdGlvbiBzYXZlKCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShMT0NBTF9TVE9SQUdFX0xJU1RfS0VZLCBKU09OLnN0cmluZ2lmeShsaXN0KSlcbn1cblxuZXhwb3J0IHsgbGlzdCwgc2F2ZSB9IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuaW1wb3J0ICogYXMgc3RvcmFnZSBmcm9tIFwiLi9sb2NhbC1zdG9yYWdlXCJcblxuY29uc3QgeyBsaXN0IH0gPSBzdG9yYWdlXG5cbmNvbnN0IHByb2plY3RGYWN0b3J5ID0gKHRpdGxlKSA9PiB7XG4gIGNvbnN0IGlkID0gRGF0ZS5ub3coKS50b1N0cmluZygpXG4gIGNvbnN0IHRhc2tzID0gW11cblxuICByZXR1cm4geyB0aXRsZSwgaWQsIHRhc2tzIH1cbn1cblxuLy8gZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZSkge1xuLy8gICByZXR1cm4geyBpZDogRGF0ZS5ub3coKS50b1N0cmluZygpLCB0aXRsZSwgdGFza3M6IFtdIH1cbi8vIH1cblxuZXhwb3J0IHsgbGlzdCwgcHJvamVjdEZhY3RvcnkgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gaW1wb3J0ICogYXMgcHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCJcbmltcG9ydCAqIGFzIGRvbSBmcm9tIFwiLi9kb21cIlxuXG5kb20ucmVuZGVyKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=