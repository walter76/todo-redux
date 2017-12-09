const user = (state, action) => {
  if (state === undefined) {
    if (window.sessionStorage.getItem('isLoggedIn') === null) {
      return {
        isLoggedIn: false,
        redirectToLogin: false
      }
    }

    let isLoggedIn = window.sessionStorage.getItem('isLoggedIn') === 'true'
    return {
      isLoggedIn: isLoggedIn,
      redirectToLogin: false
    }
  }

  switch (action.type) {
    case 'HAS_LOGGED_IN':
      return { isLoggedIn: true }
    case 'HAS_LOGGED_OUT':
      return {
        isLoggedIn: false,
        redirectToLogin: false
      }
    case 'NOT_LOGGED_IN':
      return {
        isLoggedIn: false,
        error: 'Unable to login the user.'
      }
    case 'REDIRECT_TO_LOGIN':
      return {
        isLoggedIn: false,
        redirectToLogin: true
      }
    default:
      return state
  }
}

export default user
