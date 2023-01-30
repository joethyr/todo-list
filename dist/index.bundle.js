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



          /***/
}),

/***/ "./src/local-storage.js":
/*!******************************!*\
  !*** ./src/local-storage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

          __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lists": () => (/* binding */ lists),
/* harmony export */   "save": () => (/* binding */ save)
            /* harmony export */
});
          /* eslint-disable import/prefer-default-export */

          const LOCAL_STORAGE_LIST_KEY = "task.lists"
          const lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || []

          function save(objs) {
            localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(objs))
          }



          /***/
}),

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
            /* harmony export */
});
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



          /***/
}),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

          __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskFactory": () => (/* binding */ taskFactory)
            /* harmony export */
});
          /* eslint-disable import/prefer-default-export */

          const taskFactory = (title, dueDate, priorityLevel) => {
            const id = Date.now().toString()
            const complete = false
            return { id, title, dueDate, priorityLevel, complete }
          }



          /***/
})

        /******/
});
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
    /******/
}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
    /******/
};
/******/
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
  /******/
}
/******/
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for (var key in definition) {
/******/ 				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
                  /******/
}
                /******/
}
              /******/
};
            /******/
})();
/******/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
  /******/
})();
/******/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      /******/
}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
    /******/
};
  /******/
})();
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
<<<<<<< HEAD
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
  // import alertMe from "./alert";

  // function component() {
  //   const element = document.createElement("div");
  //   const btn = document.createElement("button");

  //   btn.innerHTML = "test module output!";
  //   btn.onclick = alertMe;
  //   element.appendChild(btn);
  // }
  // document.body.appendChild(component());




  (0, _dom__WEBPACK_IMPORTED_MODULE_0__.eventListeners)()

=======
// import * as project from "./project"


_dom__WEBPACK_IMPORTED_MODULE_0__.render()
>>>>>>> develop
})();

/******/ }) ()
  ;
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFvQzs7O0FBR3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLE1BQU07QUFDbkM7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxjQUFjLEdBQUc7QUFDakI7O0FBRUE7QUFDQSxVQUFVLFFBQVE7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsa0RBQW9CO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOzs7QUFHTztBQUNQO0FBQ0E7QUFDQTs7Ozs7O1VDWEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFc0M7QUFDQzs7QUFFdkMsb0RBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBwcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIlxuXG5cbmZ1bmN0aW9uIHJlc2V0Rm9ybShmb3JtKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZm9ybSkucmVzZXQoKTtcbn1cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RMaXN0KHZhbHVlKSB7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWxpc3QtZ3JvdXBcIilcbiAgY29uc3QgbGlzdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgbGlzdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImxpc3QtZ3JvdXAtaXRlbVwiLCBcInByb2plY3QtaXRlbVwiKVxuICBsaXN0RWxlbWVudC5pbm5lckhUTUwgPSBgJHt2YWx1ZX1gXG4gIGxpc3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnRleHRDb250ZW50KSAvLyB0aGUgcCB0aGF0IHdhcyBjbGlja2VkXG4gIH0pXG4gIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKGxpc3RFbGVtZW50KVxufVxuLy8gbWlnaHQgbmVlZCB0byByZXVzZSB0aGlzIGZvciB0YXNrIGZvcm0gc3VibWlzc2lvblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdC1maWVsZFwiKS5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGV2ZW50KSA9PiB7XG4gIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZUlucHV0KHZhbHVlKSB7XG4gIHJldHVybiAhL1xcd3szLH0vZ2kudGVzdCh2YWx1ZSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCgpIHtcbiAgY29uc3QgeyB2YWx1ZSB9ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctcHJvamVjdFwiKTtcbiAgaWYgKHZhbGlkYXRlSW5wdXQodmFsdWUpKSB7XG4gICAgYWxlcnQoXCJQbGVhc2UgZW50ZXIgbW9yZSB0aGFuIHRocmVlIGNoYXJhY3RlcnNcIilcbiAgICByZXR1cm5cbiAgfVxuICByZXNldEZvcm0oXCIjcHJvamVjdC1mb3JtXCIpXG4gIHByb2plY3QuY3JlYXRlT2JqZWN0KHZhbHVlKVxuICByZW5kZXJQcm9qZWN0TGlzdCh2YWx1ZSlcbn1cblxuLy8gd2hlbiBwcm9qZWN0IGJ1dHRvbiBpcyBjbGlja2VkXG5mdW5jdGlvbiBjbGlja0J1dHRvblByb2plY3QoKSB7XG4gIGNvbnN0IHByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1jcmVhdGUtcHJvamVjdFwiKVxuICBwcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVQcm9qZWN0KVxufVxuXG5mdW5jdGlvbiBjbGlja1Byb2plY3RMaXN0KCkge1xuICBjb25zdCBwcm9qZWN0SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1pdGVtXCIpXG4gIHByb2plY3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KSAvLyB0aGUgcCB0aGF0IHdhcyBjbGlja2VkXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmVudExpc3RlbmVycygpIHtcbiAgY2xpY2tCdXR0b25Qcm9qZWN0KClcbn0iLCJjb25zdCBwcm9qZWN0TGlzdCA9IFtdXG4vLyBmYWN0b3J5IGZ1bmN0aW9uIHRvIGNyZWF0ZSBvYmplY3RcbmNvbnN0IHByb2plY3RGYWN0b3J5ID0gKHRpdGxlKSA9PiB7XG4gIGNvbnN0IHRhc2tzID0gW11cbiAgcmV0dXJuIHsgdGl0bGUsIHRhc2tzIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT2JqZWN0KHZhbHVlKSB7XG4gIHByb2plY3RMaXN0LnB1c2gocHJvamVjdEZhY3RvcnkodmFsdWUpKVxuICBjb25zb2xlLmxvZyhwcm9qZWN0TGlzdClcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGltcG9ydCBhbGVydE1lIGZyb20gXCIuL2FsZXJ0XCI7XG5cbi8vIGZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcbi8vICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbi8vICAgYnRuLmlubmVySFRNTCA9IFwidGVzdCBtb2R1bGUgb3V0cHV0IVwiO1xuLy8gICBidG4ub25jbGljayA9IGFsZXJ0TWU7XG4vLyAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnRuKTtcbi8vIH1cbi8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpO1xuXG5pbXBvcnQgeyBldmVudExpc3RlbmVycyB9IGZyb20gXCIuL2RvbVwiXG5pbXBvcnQgeyBwcm9qZWN0TGlzdCB9IGZyb20gXCIuL3Byb2plY3RcIlxuXG5ldmVudExpc3RlbmVycygpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDb0M7QUFDTjtBQUNZOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLG1EQUFxQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGdCQUFnQjtBQUNuRCxpQ0FBaUMsZ0JBQWdCO0FBQ2pEO0FBQ0EsMkJBQTJCLFVBQVU7O0FBRXJDO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIsZ0RBQWtCO0FBQzVDO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSxnREFBWSxDQUFDLDJDQUFhO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsb0RBQXNCO0FBQzNDO0FBQ0EsRUFBRSxnREFBa0I7QUFDcEIsY0FBYywyQ0FBYTtBQUMzQjtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxFQUFFLGdEQUFrQjtBQUNwQjtBQUNBLGNBQWMsMkNBQWE7QUFDM0I7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZ0RBQWtCO0FBQzVDLGtCQUFrQiw4Q0FBZ0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGdEQUFrQjtBQUM5QztBQUNBO0FBQ0E7QUFDQSxJQUFJLGdEQUFZLENBQUMsMkNBQWE7QUFDOUI7QUFDQSxDQUFDOztBQUVEO0FBQ0EsMEJBQTBCLGdEQUFrQjtBQUM1QztBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2SUQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUMwQzs7QUFFMUM7QUFDQSxNQUFNLFFBQVEsRUFBRSwyQ0FBTzs7QUFFdkI7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7Ozs7Ozs7VUNOQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDNEI7O0FBRTVCLHdDQUFVLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2NhbC1zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5pbXBvcnQgKiBhcyBwcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIlxuaW1wb3J0ICogYXMgdGFzayBmcm9tIFwiLi90YXNrXCJcbmltcG9ydCAqIGFzIHN0b3JhZ2UgZnJvbSBcIi4vbG9jYWwtc3RvcmFnZVwiXG5cbmNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtcHJvamVjdHNcIilcbmNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW5ldy1wcm9qZWN0LWZvcm1dXCIpXG5jb25zdCBuZXdQcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbmV3LXByb2plY3QtaW5wdXRdXCIpXG5jb25zdCBkZWxldGVQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWRlbGV0ZS1wcm9qZWN0LWJ0bl1cIilcbmNvbnN0IHByb2plY3REaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXByb2plY3QtZGlzcGxheS1jb250YWluZXJdXCIpXG5jb25zdCBwcm9qZWN0VGl0bGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXByb2plY3QtdGl0bGVdXCIpXG5jb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10YXNrc11cIilcbmNvbnN0IHRhc2tUZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay10ZW1wbGF0ZVwiKVxuY29uc3QgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbmV3LXRhc2stZm9ybV1cIilcbmNvbnN0IG5ld1Rhc2tJbnB1dFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW5ldy10YXNrLWlucHV0LXRpdGxlXVwiKVxuY29uc3QgbmV3VGFza0lucHV0RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1uZXctdGFzay1pbnB1dC1kYXRlXVwiKVxuY29uc3QgbmV3VGFza0lucHV0UHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0UHJpb3JpdHlMZXZlbFwiKVxuY29uc3QgY2xlYXJDb21wbGV0ZVRhc2tzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWNsZWFyLWNvbXBsZXRlZC10YXNrcy1idG5cIilcbmxldCBzZWxlY3RlZFByb2plY3RJZFxuXG5mdW5jdGlvbiBjbGVhckVsZW1lbnQoZWxlbWVudCkge1xuICB3aGlsZSAoZWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyTGlzdHMoKSB7XG4gIHByb2plY3QubGlzdHMuZm9yRWFjaChsaXN0ID0+IHtcbiAgICBjb25zdCBsaXN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxuICAgIGxpc3RFbGVtZW50LmRhdGFzZXQubGlzdElkID0gbGlzdC5pZFxuICAgIGxpc3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJsaXN0LWdyb3VwLWl0ZW1cIilcbiAgICBsaXN0RWxlbWVudC5pbm5lclRleHQgPSBsaXN0LnRpdGxlXG4gICAgaWYgKGxpc3QuaWQgPT09IHNlbGVjdGVkUHJvamVjdElkKSB7XG4gICAgICBsaXN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgfVxuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdEVsZW1lbnQpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIHJlbmRlclRhc2tzKHNlbGVjdGVkUHJvamVjdCkge1xuICBzZWxlY3RlZFByb2plY3QudGFza3MuZm9yRWFjaChlID0+IHtcbiAgICBjb25zdCB0YXNrRWxlbWVudCA9IGRvY3VtZW50LmltcG9ydE5vZGUodGFza1RlbXBsYXRlLmNvbnRlbnQsIHRydWUpXG4gICAgY29uc3QgY2hlY2tib3ggPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIilcbiAgICBjaGVja2JveC5pZCA9IGUuaWRcbiAgICBjaGVja2JveC5jaGVja2VkID0gZS5jb21wbGV0ZVxuICAgIGNvbnN0IGxhYmVsID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcihcImxhYmVsXCIpXG4gICAgbGFiZWwuaHRtbEZvciA9IGUuaWRcbiAgICBsYWJlbC5hcHBlbmQoZS50aXRsZSlcbiAgICBjb25zdCBwcmlvcml0eUxldmVsID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmlvcml0eS10YXNrXCIpXG4gICAgcHJpb3JpdHlMZXZlbC5jbGFzc0xpc3QuYWRkKGAke2UucHJpb3JpdHlMZXZlbH0tcHJpb3JpdHktdGFza2ApXG4gICAgcHJpb3JpdHlMZXZlbC5pbm5lclRleHQgPSBgJHtlLnByaW9yaXR5TGV2ZWx9YFxuICAgIGNvbnN0IGR1ZURhdGUgPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGF0ZVwiKVxuICAgIGR1ZURhdGUuaW5uZXJUZXh0ID0gYCR7ZS5kdWVEYXRlfWBcblxuICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tFbGVtZW50KVxuICB9KVxufVxuXG5mdW5jdGlvbiByZW5kZXIoKSB7XG4gIGNsZWFyRWxlbWVudChwcm9qZWN0Q29udGFpbmVyKVxuICByZW5kZXJMaXN0cygpXG5cbiAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdC5saXN0cy5maW5kKGxpc3QgPT4gbGlzdC5pZCA9PT0gc2VsZWN0ZWRQcm9qZWN0SWQpXG4gIGlmIChzZWxlY3RlZFByb2plY3RJZCA9PSBudWxsKSB7XG4gICAgcHJvamVjdERpc3BsYXlDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gIH0gZWxzZSB7XG4gICAgcHJvamVjdERpc3BsYXlDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICAgIHByb2plY3RUaXRsZUVsZW1lbnQuaW5uZXJUZXh0ID0gc2VsZWN0ZWRQcm9qZWN0LnRpdGxlXG4gICAgY2xlYXJFbGVtZW50KHRhc2tzQ29udGFpbmVyKVxuICAgIHJlbmRlclRhc2tzKHNlbGVjdGVkUHJvamVjdClcbiAgfVxufVxuXG5mdW5jdGlvbiBzYXZlQW5kUmVuZGVyKCkge1xuICBzdG9yYWdlLnNhdmUocHJvamVjdC5saXN0cylcbiAgcmVuZGVyKClcbn1cblxubmV3UHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBlID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IG5ld1Byb2plY3RJbnB1dC52YWx1ZVxuICBpZiAocHJvamVjdFRpdGxlID09IG51bGwgfHwgcHJvamVjdFRpdGxlID09PSBcIlwiKSByZXR1cm5cbiAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3QucHJvamVjdEZhY3RvcnkocHJvamVjdFRpdGxlKVxuICBuZXdQcm9qZWN0SW5wdXQudmFsdWUgPSBudWxsXG4gIHByb2plY3QubGlzdHMucHVzaChuZXdQcm9qZWN0KVxuICBjb25zb2xlLmxvZyhwcm9qZWN0Lmxpc3RzKVxuICBzYXZlQW5kUmVuZGVyKClcbn0pXG5cbnByb2plY3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibGlzdC1ncm91cC1pdGVtXCIpKSB7XG4gICAgc2VsZWN0ZWRQcm9qZWN0SWQgPSBlLnRhcmdldC5kYXRhc2V0Lmxpc3RJZFxuICB9XG4gIHNhdmVBbmRSZW5kZXIoKVxufSlcblxuZGVsZXRlUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBwcm9qZWN0LnVwZGF0ZUxpc3Qoc2VsZWN0ZWRQcm9qZWN0SWQpXG4gIHNlbGVjdGVkUHJvamVjdElkID0gbnVsbFxuICBjb25zb2xlLmxvZyhwcm9qZWN0Lmxpc3RzKVxuICBzYXZlQW5kUmVuZGVyKClcbn0pXG5cbm5ld1Rhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBjb25zdCB0YXNrVGl0bGUgPSBuZXdUYXNrSW5wdXRUaXRsZS52YWx1ZVxuICBpZiAodGFza1RpdGxlID09IG51bGwgfHwgdGFza1RpdGxlID09PSBcIlwiKSByZXR1cm5cbiAgY29uc3QgdGFza0RhdGUgPSBuZXdUYXNrSW5wdXREYXRlLnZhbHVlXG4gIGlmICh0YXNrRGF0ZSA9PSBudWxsIHx8IHRhc2tEYXRlID09PSBcIlwiKSByZXR1cm5cbiAgY29uc3QgdGFza1ByaW9yaXR5ID0gbmV3VGFza0lucHV0UHJpb3JpdHkudmFsdWVcbiAgaWYgKHRhc2tQcmlvcml0eSA9PSBudWxsIHx8IHRhc2tQcmlvcml0eSA9PT0gXCJcIikgcmV0dXJuXG4gIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3QubGlzdHMuZmluZChsaXN0ID0+IGxpc3QuaWQgPT09IHNlbGVjdGVkUHJvamVjdElkKVxuICBjb25zdCBuZXdUYXNrID0gdGFzay50YXNrRmFjdG9yeSh0YXNrVGl0bGUsIHRhc2tEYXRlLCB0YXNrUHJpb3JpdHkpXG4gIG5ld1Rhc2tJbnB1dFRpdGxlLnZhbHVlID0gbnVsbFxuICBuZXdUYXNrSW5wdXREYXRlLnZhbHVlID0gbnVsbFxuICBuZXdUYXNrSW5wdXRQcmlvcml0eS52YWx1ZSA9IG51bGxcbiAgc2VsZWN0ZWRQcm9qZWN0LnRhc2tzLnB1c2gobmV3VGFzaylcbiAgc2F2ZUFuZFJlbmRlcigpXG59KVxuXG4vLyBzYXZlIHdoZW4gYSB0YXNrIGlzIGNoZWNrZWRcbnRhc2tzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgaWYgKGUudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJpbnB1dFwiKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdC5saXN0cy5maW5kKGIgPT4gYi5pZCA9PT0gc2VsZWN0ZWRQcm9qZWN0SWQpXG4gICAgY29uc29sZS5sb2coc2VsZWN0ZWRQcm9qZWN0KVxuICAgIGNvbnN0IHNlbGVjdGVkVGFzayA9IHNlbGVjdGVkUHJvamVjdC50YXNrcy5maW5kKGkgPT4gaS5pZCA9PT0gZS50YXJnZXQuaWQpXG4gICAgc2VsZWN0ZWRUYXNrLmNvbXBsZXRlID0gZS50YXJnZXQuY2hlY2tlZFxuICAgIHN0b3JhZ2Uuc2F2ZShwcm9qZWN0Lmxpc3RzKVxuICB9XG59KVxuXG5jbGVhckNvbXBsZXRlVGFza3NCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICBjb25zdCBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0Lmxpc3RzLmZpbmQoYiA9PiBiLmlkID09PSBzZWxlY3RlZFByb2plY3RJZClcbiAgc2VsZWN0ZWRQcm9qZWN0LnRhc2tzID0gc2VsZWN0ZWRQcm9qZWN0LnRhc2tzLmZpbHRlcih0YXNrID0+ICF0YXNrLmNvbXBsZXRlKVxuICBzYXZlQW5kUmVuZGVyKClcbn0pXG5cbmV4cG9ydCB7IHJlbmRlciB9IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuXG5jb25zdCBMT0NBTF9TVE9SQUdFX0xJU1RfS0VZID0gXCJ0YXNrLmxpc3RzXCJcbmNvbnN0IGxpc3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShMT0NBTF9TVE9SQUdFX0xJU1RfS0VZKSkgfHwgW11cblxuZnVuY3Rpb24gc2F2ZShvYmpzKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKExPQ0FMX1NUT1JBR0VfTElTVF9LRVksIEpTT04uc3RyaW5naWZ5KG9ianMpKVxufVxuXG5leHBvcnQgeyBsaXN0cywgc2F2ZSB9IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuaW1wb3J0ICogYXMgc3RvcmFnZSBmcm9tIFwiLi9sb2NhbC1zdG9yYWdlXCJcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1tdXRhYmxlLWV4cG9ydHNcbmxldCB7IGxpc3RzIH0gPSBzdG9yYWdlXG5cbmNvbnN0IHByb2plY3RGYWN0b3J5ID0gKHRpdGxlKSA9PiB7XG4gIGNvbnN0IGlkID0gRGF0ZS5ub3coKS50b1N0cmluZygpXG4gIGNvbnN0IHRhc2tzID0gW11cblxuICByZXR1cm4geyB0aXRsZSwgaWQsIHRhc2tzIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGlzdChzZWxlY3RlZCkge1xuICBsaXN0cyA9IGxpc3RzLmZpbHRlcihvYmogPT4gb2JqLmlkICE9PSBzZWxlY3RlZClcblxufVxuXG5leHBvcnQgeyBsaXN0cywgcHJvamVjdEZhY3RvcnksIHVwZGF0ZUxpc3QgfSIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cblxuY29uc3QgdGFza0ZhY3RvcnkgPSAodGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5TGV2ZWwpID0+IHtcbiAgY29uc3QgaWQgPSBEYXRlLm5vdygpLnRvU3RyaW5nKClcbiAgY29uc3QgY29tcGxldGUgPSBmYWxzZVxuICByZXR1cm4geyBpZCwgdGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5TGV2ZWwsIGNvbXBsZXRlIH1cbn1cblxuZXhwb3J0IHsgdGFza0ZhY3RvcnkgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gaW1wb3J0ICogYXMgcHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCJcbmltcG9ydCAqIGFzIGRvbSBmcm9tIFwiLi9kb21cIlxuXG5kb20ucmVuZGVyKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
>>>>>>> develop
