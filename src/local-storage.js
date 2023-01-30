/* eslint-disable import/prefer-default-export */

const LOCAL_STORAGE_LIST_KEY = "task.lists"
const lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || []

function save(objs) {
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(objs))
}

export { lists, save }