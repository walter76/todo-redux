import { login as loginUser, register as registerUser } from './user.service'

export const hasLoggedIn = () => {
  return {
    type: 'HAS_LOGGED_IN'
  }
}

export const notLoggedIn = () => {
  return {
    type: 'NOT_LOGGED_IN'
  }
}

export const login = credentials => dispatch =>
  loginUser(credentials)
  .then(isLoggedIn => {
    if (isLoggedIn) {
      window.sessionStorage.setItem('isLoggedIn', true)
      return dispatch(hasLoggedIn())
    } else {
      return dispatch(notLoggedIn())
    }
  })

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

export const hasRegistered = (username) => {
  return {
    type: 'HAS_REGISTERED',
    username
  }
}

// TODO clean this up to return username returned from server
export const register = credentials => dispatch =>
  registerUser(credentials)
  .then(isRegistered => {
    if (isRegistered) {
      return dispatch(hasRegistered(credentials.username))
    }
  })
