function resetForm(form) {
  document.querySelector(form).reset();
}
function renderProjectList(value) {
  const projectList = document.querySelector(".project-list-group")
  const listElement = document.createElement("li")
  listElement.classList.add("list-group-item", "project-item")
  listElement.innerHTML = `${value}`
  projectList.appendChild(listElement)
}

function createProjectList() {
  const projectBtn = document.querySelector(".btn-create-project")
  projectBtn.addEventListener("click", () => {
    const { value } = document.querySelector(".new-project");
    if (!/\w{3,}/gi.test(value)) {
      alert("Please enter more than three characters")
      return;
    }
    resetForm("#project-form")
    renderProjectList(value)
  })
}


export function eventListeners() {
  createProjectList()
}

