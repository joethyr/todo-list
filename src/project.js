/* eslint-disable import/prefer-default-export */
import * as storage from "./local-storage"

// eslint-disable-next-line import/no-mutable-exports
let { lists } = storage

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

export { lists, projectFactory, updateList }