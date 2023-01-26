/* eslint-disable import/prefer-default-export */
import * as storage from "./local-storage"

const { list } = storage

const projectFactory = (title) => {
  const id = Date.now().toString()
  const tasks = []

  return { title, id, tasks }
}

// function createProject(title) {
//   return { id: Date.now().toString(), title, tasks: [] }
// }

export { list, projectFactory }