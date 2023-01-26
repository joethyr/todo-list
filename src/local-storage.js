/* eslint-disable import/prefer-default-export */

const LOCAL_STORAGE_LIST_KEY = "project.list"
const list = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || []

function save() {
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(list))
}

export { list, save }