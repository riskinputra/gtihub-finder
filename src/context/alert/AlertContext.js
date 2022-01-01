import { createContext, useReducer } from 'react'

import alertReducer from './AlertReducer'
import * as types from './AlertTypes'

const AlertContext = createContext()

export const AlertProvider = ({ children }) => {
  const initialState = null

  const [state, dispatch] = useReducer(alertReducer, initialState)

  const setAlert = (msg, type) => {
    dispatch({
      type: types.SET_ALERT,
      payload: { msg, type }
    })

    setTimeout(() => dispatch({ type: types.REMOVE_ALERT }), 3000)
  }

  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  )
}

export default AlertContext
