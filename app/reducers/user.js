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
      return { isLoggedIn: false }
    default:
      return state
  }
}

export default user
