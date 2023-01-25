import * as project from "./project"


function resetForm(form) {
  document.querySelector(form).reset();
}
function renderProjectList(value) {
  const projectList = document.querySelector(".project-list-group")
  const listElement = document.createElement("li")
  listElement.classList.add("list-group-item", "project-item")
  listElement.innerHTML = `${value}`
  listElement.addEventListener("click", (e) => {
    console.log(e.target.textContent) // the p that was clicked
  })
  projectList.appendChild(listElement)
}
// might need to reuse this for task form submission
document.getElementById("add-project-field").addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
  }
});

function validateInput(value) {
  return !/\w{3,}/gi.test(value)
}

function createProject() {
  const { value } = document.querySelector(".new-project");
  if (validateInput(value)) {
    alert("Please enter more than three characters")
    return
  }
  resetForm("#project-form")
  project.createObject(value)
  renderProjectList(value)
}

// when project button is clicked
function clickButtonProject() {
  const projectBtn = document.querySelector(".btn-create-project")
  projectBtn.addEventListener("click", createProject)
}

function clickProjectList() {
  const projectItem = document.querySelector(".project-item")
  projectItem.addEventListener("click", (e) => {
    console.log(e.target) // the p that was clicked
  })
}

export function eventListeners() {
  clickButtonProject()
}