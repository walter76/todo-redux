const user = (state, action) => {
  if (state === undefined) {
    if (window.sessionStorage.getItem('isLoggedIn') === null) {
      return {
        isLoggedIn: false
      }
    }

    let isLoggedIn = window.sessionStorage.getItem('isLoggedIn') === 'true'
    return {
      isLoggedIn: isLoggedIn
    }
  }

  switch (action.type) {
    case 'HAS_LOGGED_IN':
      return { isLoggedIn: true }
    case 'HAS_LOGGED_OUT':
      return {
        isLoggedIn: false
      }
    case 'NOT_LOGGED_IN':
      return {
        isLoggedIn: false,
        error: 'Unable to login the user.'
      }
    case 'HAS_REGISTERED':
      return {
        isLoggedIn: false,
        username: action.username
      }
    default:
      return state
  }
}

export default user
