import * as types from './AlertTypes'

const alertReducer = (state, action) => {
  switch (action.type) {
    case types.SET_ALERT:
      return action.payload
    case types.REMOVE_ALERT:
      return null
    default:
      return state
  }
}

export default alertReducer