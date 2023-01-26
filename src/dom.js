/* eslint-disable import/prefer-default-export */
import * as project from "./project"
import * as storage from "./local-storage"


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
  project.list.forEach(list => {
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
  const newProject = project.projectFactory(projectTitle)
  newProjectInput.value = null
  project.list.push(newProject)
  console.log(project.list)
  storage.save()
  render()
})

projectContainer.addEventListener("click", e => {
  if (e.target.classList.contains("list-group-item")) {
    selectedProject = e.target.dataset.listId
    render()
  }
})

export { render }