const { parse, stringify } = JSON

export const setStorage = (key, value) => {
  if(!window) return
  localStorage.setItem(key, stringify(value))
  return
}

export const getStorage = key => {
  if(!window) return
  return parse(localStorage.getItem(key))
}

export const removeItemFromStorage = key => {
  if(!window) return
  localStorage.removeItem(key)
}