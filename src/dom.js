/* eslint-disable import/prefer-default-export */
import * as project from "./project"
import * as storage from "./local-storage"

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
  project.lists.forEach(list => {
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
    selectedProject = e.target.dataset.listId
    saveAndRender()
  }
})

deleteProjectBtn.addEventListener("click", () => {
  project.updateList(selectedProject)
  selectedProject = null
  console.log(project.lists)
  saveAndRender()
})

export { render }