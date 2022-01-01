import * as types from './GithubTypes'

const githubReducer = (state, action) => {
  switch (action.type) {
    case types.GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      }
    case types.SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case types.CLEAR_USERS:
      return {
        ...state,
        users: [],
      }
    default:
      return state
  }
}

export default githubReducer