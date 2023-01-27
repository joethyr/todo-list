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
const deleteProjectBtn = document.querySelector("[data-delete-project-btn]")
let selectedProject

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild)
  }
}

function render() {
  // <li class="list-group-item">Another Project</li>
  clearElement(projectContainer)
  _project__WEBPACK_IMPORTED_MODULE_0__.lists.forEach(list => {
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

function saveAndRender() {
  _local_storage__WEBPACK_IMPORTED_MODULE_1__.save(_project__WEBPACK_IMPORTED_MODULE_0__.lists)
  render()
}

newProjectForm.addEventListener("submit", e => {
  e.preventDefault()
  const projectTitle = newProjectInput.value
  if (projectTitle == null || projectTitle === "") return
  const newProject = _project__WEBPACK_IMPORTED_MODULE_0__.projectFactory(projectTitle)
  newProjectInput.value = null
  _project__WEBPACK_IMPORTED_MODULE_0__.lists.push(newProject)
  console.log(_project__WEBPACK_IMPORTED_MODULE_0__.lists)
  saveAndRender()
})

projectContainer.addEventListener("click", e => {
  if (e.target.classList.contains("list-group-item")) {
    selectedProject = e.target.dataset.listId
    saveAndRender()
  }
})

deleteProjectBtn.addEventListener("click", () => {
  _project__WEBPACK_IMPORTED_MODULE_0__.updateList(selectedProject)
  selectedProject = null
  console.log(_project__WEBPACK_IMPORTED_MODULE_0__.lists)
  saveAndRender()
})



/***/ }),

/***/ "./src/local-storage.js":
/*!******************************!*\
  !*** ./src/local-storage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lists": () => (/* binding */ lists),
/* harmony export */   "save": () => (/* binding */ save)
/* harmony export */ });
/* eslint-disable import/prefer-default-export */

const LOCAL_STORAGE_LIST_KEY = "task.lists"
const lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || []

function save(objs) {
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(objs))
}



/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lists": () => (/* binding */ lists),
/* harmony export */   "projectFactory": () => (/* binding */ projectFactory),
/* harmony export */   "updateList": () => (/* binding */ updateList)
/* harmony export */ });
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-storage */ "./src/local-storage.js");
/* eslint-disable import/prefer-default-export */


// eslint-disable-next-line import/no-mutable-exports
let { lists } = _local_storage__WEBPACK_IMPORTED_MODULE_0__

const projectFactory = (title) => {
  const id = Date.now().toString()
  const tasks = []

  return { title, id, tasks }
}

function updateList(selected) {
  lists = lists.filter(obj => obj.id !== selected)

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNvQztBQUNNOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSxtREFBcUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLEVBQUUsZ0RBQVksQ0FBQywyQ0FBYTtBQUM1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG9EQUFzQjtBQUMzQztBQUNBLEVBQUUsZ0RBQWtCO0FBQ3BCLGNBQWMsMkNBQWE7QUFDM0I7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EsRUFBRSxnREFBa0I7QUFDcEI7QUFDQSxjQUFjLDJDQUFhO0FBQzNCO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzREQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUMwQzs7QUFFMUM7QUFDQSxNQUFNLFFBQVEsRUFBRSwyQ0FBTzs7QUFFdkI7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsY0FBYztBQUNkOzs7Ozs7OztVQ3BCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDNEI7O0FBRTVCLHdDQUFVLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2NhbC1zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5pbXBvcnQgKiBhcyBwcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIlxuaW1wb3J0ICogYXMgc3RvcmFnZSBmcm9tIFwiLi9sb2NhbC1zdG9yYWdlXCJcblxuY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wcm9qZWN0c1wiKVxuY29uc3QgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbmV3LXByb2plY3QtZm9ybV1cIilcbmNvbnN0IG5ld1Byb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1uZXctcHJvamVjdC1pbnB1dF1cIilcbmNvbnN0IGRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZGVsZXRlLXByb2plY3QtYnRuXVwiKVxubGV0IHNlbGVjdGVkUHJvamVjdFxuXG5mdW5jdGlvbiBjbGVhckVsZW1lbnQoZWxlbWVudCkge1xuICB3aGlsZSAoZWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyKCkge1xuICAvLyA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW1cIj5Bbm90aGVyIFByb2plY3Q8L2xpPlxuICBjbGVhckVsZW1lbnQocHJvamVjdENvbnRhaW5lcilcbiAgcHJvamVjdC5saXN0cy5mb3JFYWNoKGxpc3QgPT4ge1xuICAgIGNvbnN0IGxpc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgbGlzdEVsZW1lbnQuZGF0YXNldC5saXN0SWQgPSBsaXN0LmlkXG4gICAgbGlzdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImxpc3QtZ3JvdXAtaXRlbVwiKVxuICAgIGxpc3RFbGVtZW50LmlubmVyVGV4dCA9IGxpc3QudGl0bGVcbiAgICBpZiAobGlzdC5pZCA9PT0gc2VsZWN0ZWRQcm9qZWN0KSB7XG4gICAgICBsaXN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgfVxuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdEVsZW1lbnQpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIHNhdmVBbmRSZW5kZXIoKSB7XG4gIHN0b3JhZ2Uuc2F2ZShwcm9qZWN0Lmxpc3RzKVxuICByZW5kZXIoKVxufVxuXG5uZXdQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGUgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gbmV3UHJvamVjdElucHV0LnZhbHVlXG4gIGlmIChwcm9qZWN0VGl0bGUgPT0gbnVsbCB8fCBwcm9qZWN0VGl0bGUgPT09IFwiXCIpIHJldHVyblxuICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdC5wcm9qZWN0RmFjdG9yeShwcm9qZWN0VGl0bGUpXG4gIG5ld1Byb2plY3RJbnB1dC52YWx1ZSA9IG51bGxcbiAgcHJvamVjdC5saXN0cy5wdXNoKG5ld1Byb2plY3QpXG4gIGNvbnNvbGUubG9nKHByb2plY3QubGlzdHMpXG4gIHNhdmVBbmRSZW5kZXIoKVxufSlcblxucHJvamVjdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJsaXN0LWdyb3VwLWl0ZW1cIikpIHtcbiAgICBzZWxlY3RlZFByb2plY3QgPSBlLnRhcmdldC5kYXRhc2V0Lmxpc3RJZFxuICAgIHNhdmVBbmRSZW5kZXIoKVxuICB9XG59KVxuXG5kZWxldGVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHByb2plY3QudXBkYXRlTGlzdChzZWxlY3RlZFByb2plY3QpXG4gIHNlbGVjdGVkUHJvamVjdCA9IG51bGxcbiAgY29uc29sZS5sb2cocHJvamVjdC5saXN0cylcbiAgc2F2ZUFuZFJlbmRlcigpXG59KVxuXG5leHBvcnQgeyByZW5kZXIgfSIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cblxuY29uc3QgTE9DQUxfU1RPUkFHRV9MSVNUX0tFWSA9IFwidGFzay5saXN0c1wiXG5jb25zdCBsaXN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oTE9DQUxfU1RPUkFHRV9MSVNUX0tFWSkpIHx8IFtdXG5cbmZ1bmN0aW9uIHNhdmUob2Jqcykge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShMT0NBTF9TVE9SQUdFX0xJU1RfS0VZLCBKU09OLnN0cmluZ2lmeShvYmpzKSlcbn1cblxuZXhwb3J0IHsgbGlzdHMsIHNhdmUgfSIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCAqIGFzIHN0b3JhZ2UgZnJvbSBcIi4vbG9jYWwtc3RvcmFnZVwiXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzXG5sZXQgeyBsaXN0cyB9ID0gc3RvcmFnZVxuXG5jb25zdCBwcm9qZWN0RmFjdG9yeSA9ICh0aXRsZSkgPT4ge1xuICBjb25zdCBpZCA9IERhdGUubm93KCkudG9TdHJpbmcoKVxuICBjb25zdCB0YXNrcyA9IFtdXG5cbiAgcmV0dXJuIHsgdGl0bGUsIGlkLCB0YXNrcyB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpc3Qoc2VsZWN0ZWQpIHtcbiAgbGlzdHMgPSBsaXN0cy5maWx0ZXIob2JqID0+IG9iai5pZCAhPT0gc2VsZWN0ZWQpXG5cbn1cblxuLy8gZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZSkge1xuLy8gICByZXR1cm4geyBpZDogRGF0ZS5ub3coKS50b1N0cmluZygpLCB0aXRsZSwgdGFza3M6IFtdIH1cbi8vIH1cblxuZXhwb3J0IHsgbGlzdHMsIHByb2plY3RGYWN0b3J5LCB1cGRhdGVMaXN0IH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGltcG9ydCAqIGFzIHByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiXG5pbXBvcnQgKiBhcyBkb20gZnJvbSBcIi4vZG9tXCJcblxuZG9tLnJlbmRlcigpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9