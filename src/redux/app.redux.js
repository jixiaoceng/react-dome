const TOKEN = 'TOKEN'

// 初始化
const initState = {
    token: ''
}

// reducer
export function app (state = initState, action) {
  switch (action.type) {
    case TOKEN:
      return { ...state, token: TOKEN }
    default:
      return state
  }
}

// action
export function setToken () {
  return { type: TOKEN }
}