const projectList = []
// factory function to create object
const projectFactory = (title) => {
  const tasks = []
  return { title, tasks }
}


export function createObject(value) {
  projectList.push(projectFactory(value))
  console.log(projectList)
}