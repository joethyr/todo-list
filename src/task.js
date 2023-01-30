/* eslint-disable import/prefer-default-export */

const taskFactory = (title, dueDate, priorityLevel) => {
  const id = Date.now().toString()
  const complete = false
  return { id, title, dueDate, priorityLevel, complete }
}

export { taskFactory }