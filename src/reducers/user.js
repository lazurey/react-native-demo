const initialState = {
  login: false
}

export default function userReducer(state = initialState, action = {}) {
  return action.payload || state
}
