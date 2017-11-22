const user = (state, action) => {
  if (state === undefined) {
    return {
      'isLoggedIn': (window.sessionStorage.getItem('isLoggedIn') === null)
        ? false : window.sessionStorage.getItem('isLoggedIn')
    }
  }

  switch (action.type) {
    case 'HAS_LOGGED_IN':
      return { 'isLoggedIn': true }
    case 'HAS_LOGGED_OUT':
      return { 'isLoggedIn': false }
    default:
      return state
  }
}

export default user
