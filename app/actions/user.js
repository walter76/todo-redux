import { login as loginUser } from './user.service'

export const hasLoggedIn = () => {
  return {
    type: 'HAS_LOGGED_IN'
  }
}

export function login (credentials) {
  return dispatch => {
    loginUser(credentials)
    .then(isLoggedIn => {
      if (isLoggedIn) {
        window.sessionStorage.setItem('isLoggedIn', true)
        dispatch(hasLoggedIn())
        return
      }

      console.log('Could not login user.')
    })
  }
}

export const hasLoggedOut = () => {
  return {
    type: 'HAS_LOGGED_OUT'
  }
}

export function logout () {
  return dispatch => {
    window.sessionStorage.setItem('isLoggedIn', false)
    dispatch(hasLoggedOut())
  }
}
