/* eslint-disable import/prefer-default-export */
import * as project from "./project"
import * as task from "./task"
import * as storage from "./local-storage"

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
  project.lists.forEach(list => {
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

  const selectedProject = project.lists.find(list => list.id === selectedProjectId)
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
  storage.save(project.lists)
  render()
}

newProjectForm.addEventListener("submit", e => {
  e.preventDefault()
  const projectTitle = newProjectInput.value
  if (projectTitle == null || projectTitle === "") return
  const newProject = project.projectFactory(projectTitle)
  newProjectInput.value = null
  project.lists.push(newProject)
  console.log(project.lists)
  saveAndRender()
})

projectContainer.addEventListener("click", e => {
  if (e.target.classList.contains("list-group-item")) {
    selectedProjectId = e.target.dataset.listId
  }
  saveAndRender()
})

deleteProjectBtn.addEventListener("click", () => {
  project.updateList(selectedProjectId)
  selectedProjectId = null
  console.log(project.lists)
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
  const selectedProject = project.lists.find(list => list.id === selectedProjectId)
  const newTask = task.taskFactory(taskTitle, taskDate, taskPriority)
  newTaskInputTitle.value = null
  newTaskInputDate.value = null
  newTaskInputPriority.value = null
  selectedProject.tasks.push(newTask)
  saveAndRender()
})

// save when a task is checked
tasksContainer.addEventListener("click", e => {
  if (e.target.tagName.toLowerCase() === "input") {
    const selectedProject = project.lists.find(b => b.id === selectedProjectId)
    console.log(selectedProject)
    const selectedTask = selectedProject.tasks.find(i => i.id === e.target.id)
    selectedTask.complete = e.target.checked
    storage.save(project.lists)
  }
})

clearCompleteTasksBtn.addEventListener("click", e => {
  const selectedProject = project.lists.find(b => b.id === selectedProjectId)
  selectedProject.tasks = selectedProject.tasks.filter(task => !task.complete)
  saveAndRender()
})

export { render }