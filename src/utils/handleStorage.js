const storage = window.localStorage

export function getStorage(whichMenu) {
  return storage.getItem(whichMenu)
}

export function setStorage(whichMenu, content) {
  storage.setItem(whichMenu, content)
}

export function removeStorage(whichMenu) {
  storage.removeItem(whichMenu)
}
