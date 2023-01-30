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
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local-storage */ "./src/local-storage.js");
/* eslint-disable import/prefer-default-export */




const projectContainer = document.querySelector("[data-projects")
const newProjectForm = document.querySelector("[data-new-project-form]")
const newProjectInput = document.querySelector("[data-new-project-input]")
const deleteProjectBtn = document.querySelector("[data-delete-project-btn]")
const projectDisplayContainer = document.querySelector("[data-project-display-container]")
const projectTitleElement = document.querySelector("[data-project-title]")
const tasksContainer = document.querySelector("[data-tasks]")
const taskTemplate = document.getElementById("task-template")
const newTaskForm = document.querySelector("[data-new-task-form]")
const newTaskInputTitle = document.querySelector("[data-new-task-input-title]")
const newTaskInputDate = document.querySelector("[data-new-task-input-date]")
const newTaskInputPriority = document.getElementById("inputPriorityLevel")
const clearCompleteTasksBtn = document.querySelector("[data-clear-completed-tasks-btn")
let selectedProjectId

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild)
  }
}

function renderLists() {
  _project__WEBPACK_IMPORTED_MODULE_0__.lists.forEach(list => {
    const listElement = document.createElement("li")
    listElement.dataset.listId = list.id
    listElement.classList.add("list-group-item")
    listElement.innerText = list.title
    if (list.id === selectedProjectId) {
      listElement.classList.add("active")
    }
    projectContainer.appendChild(listElement)
  })
}

function renderTasks(selectedProject) {
  selectedProject.tasks.forEach(e => {
    const taskElement = document.importNode(taskTemplate.content, true)
    const checkbox = taskElement.querySelector("input")
    checkbox.id = e.id
    checkbox.checked = e.complete
    const label = taskElement.querySelector("label")
    label.htmlFor = e.id
    label.append(e.title)
    const priorityLevel = taskElement.querySelector(".priority-task")
    priorityLevel.classList.add(`${e.priorityLevel}-priority-task`)
    priorityLevel.innerText = `${e.priorityLevel}`
    const dueDate = taskElement.querySelector(".task-date")
    dueDate.innerText = `${e.dueDate}`

    tasksContainer.appendChild(taskElement)
  })
}

function render() {
  clearElement(projectContainer)
  renderLists()

  const selectedProject = _project__WEBPACK_IMPORTED_MODULE_0__.lists.find(list => list.id === selectedProjectId)
  if (selectedProjectId == null) {
    projectDisplayContainer.style.display = "none"
  } else {
    projectDisplayContainer.style.display = "block"
    projectTitleElement.innerText = selectedProject.title
    clearElement(tasksContainer)
    renderTasks(selectedProject)
  }
}

function saveAndRender() {
  _local_storage__WEBPACK_IMPORTED_MODULE_2__.save(_project__WEBPACK_IMPORTED_MODULE_0__.lists)
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
    selectedProjectId = e.target.dataset.listId
  }
  saveAndRender()
})

deleteProjectBtn.addEventListener("click", () => {
  _project__WEBPACK_IMPORTED_MODULE_0__.updateList(selectedProjectId)
  selectedProjectId = null
  console.log(_project__WEBPACK_IMPORTED_MODULE_0__.lists)
  saveAndRender()
})

newTaskForm.addEventListener("submit", e => {
  e.preventDefault()
  const taskTitle = newTaskInputTitle.value
  if (taskTitle == null || taskTitle === "") return
  const taskDate = newTaskInputDate.value
  if (taskDate == null || taskDate === "") return
  const taskPriority = newTaskInputPriority.value
  if (taskPriority == null || taskPriority === "") return
  const selectedProject = _project__WEBPACK_IMPORTED_MODULE_0__.lists.find(list => list.id === selectedProjectId)
  const newTask = _task__WEBPACK_IMPORTED_MODULE_1__.taskFactory(taskTitle, taskDate, taskPriority)
  newTaskInputTitle.value = null
  newTaskInputDate.value = null
  newTaskInputPriority.value = null
  selectedProject.tasks.push(newTask)
  saveAndRender()
})

// save when a task is checked
tasksContainer.addEventListener("click", e => {
  if (e.target.tagName.toLowerCase() === "input") {
    const selectedProject = _project__WEBPACK_IMPORTED_MODULE_0__.lists.find(b => b.id === selectedProjectId)
    console.log(selectedProject)
    const selectedTask = selectedProject.tasks.find(i => i.id === e.target.id)
    selectedTask.complete = e.target.checked
    _local_storage__WEBPACK_IMPORTED_MODULE_2__.save(_project__WEBPACK_IMPORTED_MODULE_0__.lists)
  }
})

clearCompleteTasksBtn.addEventListener("click", e => {
  const selectedProject = _project__WEBPACK_IMPORTED_MODULE_0__.lists.find(b => b.id === selectedProjectId)
  selectedProject.tasks = selectedProject.tasks.filter(task => !task.complete)
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




/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskFactory": () => (/* binding */ taskFactory)
/* harmony export */ });
/* eslint-disable import/prefer-default-export */

const taskFactory = (title, dueDate, priorityLevel) => {
  const id = Date.now().toString()
  const complete = false
  return { id, title, dueDate, priorityLevel, complete }
}



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDb0M7QUFDTjtBQUNZOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLG1EQUFxQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGdCQUFnQjtBQUNuRCxpQ0FBaUMsZ0JBQWdCO0FBQ2pEO0FBQ0EsMkJBQTJCLFVBQVU7O0FBRXJDO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIsZ0RBQWtCO0FBQzVDO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSxnREFBWSxDQUFDLDJDQUFhO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsb0RBQXNCO0FBQzNDO0FBQ0EsRUFBRSxnREFBa0I7QUFDcEIsY0FBYywyQ0FBYTtBQUMzQjtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxFQUFFLGdEQUFrQjtBQUNwQjtBQUNBLGNBQWMsMkNBQWE7QUFDM0I7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZ0RBQWtCO0FBQzVDLGtCQUFrQiw4Q0FBZ0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGdEQUFrQjtBQUM5QztBQUNBO0FBQ0E7QUFDQSxJQUFJLGdEQUFZLENBQUMsMkNBQWE7QUFDOUI7QUFDQSxDQUFDOztBQUVEO0FBQ0EsMEJBQTBCLGdEQUFrQjtBQUM1QztBQUNBO0FBQ0EsQ0FBQzs7QUFFZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SWpCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDMEM7O0FBRTFDO0FBQ0EsTUFBTSxRQUFRLEVBQUUsMkNBQU87O0FBRXZCO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTs7QUFFQTs7QUFFNEM7Ozs7Ozs7Ozs7Ozs7OztBQ2xCNUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOzs7Ozs7OztVQ05BO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUM0Qjs7QUFFNUIsd0NBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2NhbC1zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5pbXBvcnQgKiBhcyBwcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIlxuaW1wb3J0ICogYXMgdGFzayBmcm9tIFwiLi90YXNrXCJcbmltcG9ydCAqIGFzIHN0b3JhZ2UgZnJvbSBcIi4vbG9jYWwtc3RvcmFnZVwiXG5cbmNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtcHJvamVjdHNcIilcbmNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW5ldy1wcm9qZWN0LWZvcm1dXCIpXG5jb25zdCBuZXdQcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbmV3LXByb2plY3QtaW5wdXRdXCIpXG5jb25zdCBkZWxldGVQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWRlbGV0ZS1wcm9qZWN0LWJ0bl1cIilcbmNvbnN0IHByb2plY3REaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXByb2plY3QtZGlzcGxheS1jb250YWluZXJdXCIpXG5jb25zdCBwcm9qZWN0VGl0bGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXByb2plY3QtdGl0bGVdXCIpXG5jb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10YXNrc11cIilcbmNvbnN0IHRhc2tUZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay10ZW1wbGF0ZVwiKVxuY29uc3QgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbmV3LXRhc2stZm9ybV1cIilcbmNvbnN0IG5ld1Rhc2tJbnB1dFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW5ldy10YXNrLWlucHV0LXRpdGxlXVwiKVxuY29uc3QgbmV3VGFza0lucHV0RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1uZXctdGFzay1pbnB1dC1kYXRlXVwiKVxuY29uc3QgbmV3VGFza0lucHV0UHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0UHJpb3JpdHlMZXZlbFwiKVxuY29uc3QgY2xlYXJDb21wbGV0ZVRhc2tzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWNsZWFyLWNvbXBsZXRlZC10YXNrcy1idG5cIilcbmxldCBzZWxlY3RlZFByb2plY3RJZFxuXG5mdW5jdGlvbiBjbGVhckVsZW1lbnQoZWxlbWVudCkge1xuICB3aGlsZSAoZWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyTGlzdHMoKSB7XG4gIHByb2plY3QubGlzdHMuZm9yRWFjaChsaXN0ID0+IHtcbiAgICBjb25zdCBsaXN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxuICAgIGxpc3RFbGVtZW50LmRhdGFzZXQubGlzdElkID0gbGlzdC5pZFxuICAgIGxpc3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJsaXN0LWdyb3VwLWl0ZW1cIilcbiAgICBsaXN0RWxlbWVudC5pbm5lclRleHQgPSBsaXN0LnRpdGxlXG4gICAgaWYgKGxpc3QuaWQgPT09IHNlbGVjdGVkUHJvamVjdElkKSB7XG4gICAgICBsaXN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgfVxuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdEVsZW1lbnQpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIHJlbmRlclRhc2tzKHNlbGVjdGVkUHJvamVjdCkge1xuICBzZWxlY3RlZFByb2plY3QudGFza3MuZm9yRWFjaChlID0+IHtcbiAgICBjb25zdCB0YXNrRWxlbWVudCA9IGRvY3VtZW50LmltcG9ydE5vZGUodGFza1RlbXBsYXRlLmNvbnRlbnQsIHRydWUpXG4gICAgY29uc3QgY2hlY2tib3ggPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIilcbiAgICBjaGVja2JveC5pZCA9IGUuaWRcbiAgICBjaGVja2JveC5jaGVja2VkID0gZS5jb21wbGV0ZVxuICAgIGNvbnN0IGxhYmVsID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcihcImxhYmVsXCIpXG4gICAgbGFiZWwuaHRtbEZvciA9IGUuaWRcbiAgICBsYWJlbC5hcHBlbmQoZS50aXRsZSlcbiAgICBjb25zdCBwcmlvcml0eUxldmVsID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmlvcml0eS10YXNrXCIpXG4gICAgcHJpb3JpdHlMZXZlbC5jbGFzc0xpc3QuYWRkKGAke2UucHJpb3JpdHlMZXZlbH0tcHJpb3JpdHktdGFza2ApXG4gICAgcHJpb3JpdHlMZXZlbC5pbm5lclRleHQgPSBgJHtlLnByaW9yaXR5TGV2ZWx9YFxuICAgIGNvbnN0IGR1ZURhdGUgPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGF0ZVwiKVxuICAgIGR1ZURhdGUuaW5uZXJUZXh0ID0gYCR7ZS5kdWVEYXRlfWBcblxuICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tFbGVtZW50KVxuICB9KVxufVxuXG5mdW5jdGlvbiByZW5kZXIoKSB7XG4gIGNsZWFyRWxlbWVudChwcm9qZWN0Q29udGFpbmVyKVxuICByZW5kZXJMaXN0cygpXG5cbiAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdC5saXN0cy5maW5kKGxpc3QgPT4gbGlzdC5pZCA9PT0gc2VsZWN0ZWRQcm9qZWN0SWQpXG4gIGlmIChzZWxlY3RlZFByb2plY3RJZCA9PSBudWxsKSB7XG4gICAgcHJvamVjdERpc3BsYXlDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gIH0gZWxzZSB7XG4gICAgcHJvamVjdERpc3BsYXlDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICAgIHByb2plY3RUaXRsZUVsZW1lbnQuaW5uZXJUZXh0ID0gc2VsZWN0ZWRQcm9qZWN0LnRpdGxlXG4gICAgY2xlYXJFbGVtZW50KHRhc2tzQ29udGFpbmVyKVxuICAgIHJlbmRlclRhc2tzKHNlbGVjdGVkUHJvamVjdClcbiAgfVxufVxuXG5mdW5jdGlvbiBzYXZlQW5kUmVuZGVyKCkge1xuICBzdG9yYWdlLnNhdmUocHJvamVjdC5saXN0cylcbiAgcmVuZGVyKClcbn1cblxubmV3UHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBlID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IG5ld1Byb2plY3RJbnB1dC52YWx1ZVxuICBpZiAocHJvamVjdFRpdGxlID09IG51bGwgfHwgcHJvamVjdFRpdGxlID09PSBcIlwiKSByZXR1cm5cbiAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3QucHJvamVjdEZhY3RvcnkocHJvamVjdFRpdGxlKVxuICBuZXdQcm9qZWN0SW5wdXQudmFsdWUgPSBudWxsXG4gIHByb2plY3QubGlzdHMucHVzaChuZXdQcm9qZWN0KVxuICBjb25zb2xlLmxvZyhwcm9qZWN0Lmxpc3RzKVxuICBzYXZlQW5kUmVuZGVyKClcbn0pXG5cbnByb2plY3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibGlzdC1ncm91cC1pdGVtXCIpKSB7XG4gICAgc2VsZWN0ZWRQcm9qZWN0SWQgPSBlLnRhcmdldC5kYXRhc2V0Lmxpc3RJZFxuICB9XG4gIHNhdmVBbmRSZW5kZXIoKVxufSlcblxuZGVsZXRlUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBwcm9qZWN0LnVwZGF0ZUxpc3Qoc2VsZWN0ZWRQcm9qZWN0SWQpXG4gIHNlbGVjdGVkUHJvamVjdElkID0gbnVsbFxuICBjb25zb2xlLmxvZyhwcm9qZWN0Lmxpc3RzKVxuICBzYXZlQW5kUmVuZGVyKClcbn0pXG5cbm5ld1Rhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBjb25zdCB0YXNrVGl0bGUgPSBuZXdUYXNrSW5wdXRUaXRsZS52YWx1ZVxuICBpZiAodGFza1RpdGxlID09IG51bGwgfHwgdGFza1RpdGxlID09PSBcIlwiKSByZXR1cm5cbiAgY29uc3QgdGFza0RhdGUgPSBuZXdUYXNrSW5wdXREYXRlLnZhbHVlXG4gIGlmICh0YXNrRGF0ZSA9PSBudWxsIHx8IHRhc2tEYXRlID09PSBcIlwiKSByZXR1cm5cbiAgY29uc3QgdGFza1ByaW9yaXR5ID0gbmV3VGFza0lucHV0UHJpb3JpdHkudmFsdWVcbiAgaWYgKHRhc2tQcmlvcml0eSA9PSBudWxsIHx8IHRhc2tQcmlvcml0eSA9PT0gXCJcIikgcmV0dXJuXG4gIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3QubGlzdHMuZmluZChsaXN0ID0+IGxpc3QuaWQgPT09IHNlbGVjdGVkUHJvamVjdElkKVxuICBjb25zdCBuZXdUYXNrID0gdGFzay50YXNrRmFjdG9yeSh0YXNrVGl0bGUsIHRhc2tEYXRlLCB0YXNrUHJpb3JpdHkpXG4gIG5ld1Rhc2tJbnB1dFRpdGxlLnZhbHVlID0gbnVsbFxuICBuZXdUYXNrSW5wdXREYXRlLnZhbHVlID0gbnVsbFxuICBuZXdUYXNrSW5wdXRQcmlvcml0eS52YWx1ZSA9IG51bGxcbiAgc2VsZWN0ZWRQcm9qZWN0LnRhc2tzLnB1c2gobmV3VGFzaylcbiAgc2F2ZUFuZFJlbmRlcigpXG59KVxuXG4vLyBzYXZlIHdoZW4gYSB0YXNrIGlzIGNoZWNrZWRcbnRhc2tzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgaWYgKGUudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJpbnB1dFwiKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdC5saXN0cy5maW5kKGIgPT4gYi5pZCA9PT0gc2VsZWN0ZWRQcm9qZWN0SWQpXG4gICAgY29uc29sZS5sb2coc2VsZWN0ZWRQcm9qZWN0KVxuICAgIGNvbnN0IHNlbGVjdGVkVGFzayA9IHNlbGVjdGVkUHJvamVjdC50YXNrcy5maW5kKGkgPT4gaS5pZCA9PT0gZS50YXJnZXQuaWQpXG4gICAgc2VsZWN0ZWRUYXNrLmNvbXBsZXRlID0gZS50YXJnZXQuY2hlY2tlZFxuICAgIHN0b3JhZ2Uuc2F2ZShwcm9qZWN0Lmxpc3RzKVxuICB9XG59KVxuXG5jbGVhckNvbXBsZXRlVGFza3NCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICBjb25zdCBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0Lmxpc3RzLmZpbmQoYiA9PiBiLmlkID09PSBzZWxlY3RlZFByb2plY3RJZClcbiAgc2VsZWN0ZWRQcm9qZWN0LnRhc2tzID0gc2VsZWN0ZWRQcm9qZWN0LnRhc2tzLmZpbHRlcih0YXNrID0+ICF0YXNrLmNvbXBsZXRlKVxuICBzYXZlQW5kUmVuZGVyKClcbn0pXG5cbmV4cG9ydCB7IHJlbmRlciB9XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5cbmNvbnN0IExPQ0FMX1NUT1JBR0VfTElTVF9LRVkgPSBcInRhc2subGlzdHNcIlxuY29uc3QgbGlzdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKExPQ0FMX1NUT1JBR0VfTElTVF9LRVkpKSB8fCBbXVxuXG5mdW5jdGlvbiBzYXZlKG9ianMpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTE9DQUxfU1RPUkFHRV9MSVNUX0tFWSwgSlNPTi5zdHJpbmdpZnkob2JqcykpXG59XG5cbmV4cG9ydCB7IGxpc3RzLCBzYXZlIH0iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5pbXBvcnQgKiBhcyBzdG9yYWdlIGZyb20gXCIuL2xvY2FsLXN0b3JhZ2VcIlxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLW11dGFibGUtZXhwb3J0c1xubGV0IHsgbGlzdHMgfSA9IHN0b3JhZ2VcblxuY29uc3QgcHJvamVjdEZhY3RvcnkgPSAodGl0bGUpID0+IHtcbiAgY29uc3QgaWQgPSBEYXRlLm5vdygpLnRvU3RyaW5nKClcbiAgY29uc3QgdGFza3MgPSBbXVxuXG4gIHJldHVybiB7IHRpdGxlLCBpZCwgdGFza3MgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaXN0KHNlbGVjdGVkKSB7XG4gIGxpc3RzID0gbGlzdHMuZmlsdGVyKG9iaiA9PiBvYmouaWQgIT09IHNlbGVjdGVkKVxuXG59XG5cbmV4cG9ydCB7IGxpc3RzLCBwcm9qZWN0RmFjdG9yeSwgdXBkYXRlTGlzdCB9XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5cbmNvbnN0IHRhc2tGYWN0b3J5ID0gKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eUxldmVsKSA9PiB7XG4gIGNvbnN0IGlkID0gRGF0ZS5ub3coKS50b1N0cmluZygpXG4gIGNvbnN0IGNvbXBsZXRlID0gZmFsc2VcbiAgcmV0dXJuIHsgaWQsIHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eUxldmVsLCBjb21wbGV0ZSB9XG59XG5cbmV4cG9ydCB7IHRhc2tGYWN0b3J5IH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGltcG9ydCAqIGFzIHByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiXG5pbXBvcnQgKiBhcyBkb20gZnJvbSBcIi4vZG9tXCJcblxuZG9tLnJlbmRlcigpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=