import { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'
import * as types from './GithubTypes'

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false
  }
  const [state, dispatch] = useReducer(githubReducer, initialState)

  const searchUsers = async (text) => {
    setLoading()

    const params = new URLSearchParams({
      q: text
    })

    const res = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`
      }
    })
    const { items } = await res.json()
    dispatch({
      type: types.GET_USERS,
      payload: items
    })
  }

  const clearUsers = () => dispatch({type: types.CLEAR_USERS})
  const setLoading = () => dispatch({type: types.SET_LOADING})

  return <GithubContext.Provider
    value={{
      users: state.users,
      loading: state.loading,
      searchUsers,
      clearUsers
    }}
  >
    {children}
  </GithubContext.Provider>
}


export default GithubContext