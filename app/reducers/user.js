const user = (state, action) => {
  if (state === undefined) {
    return {
      'isLoggedIn': !!window.sessionStorage.isLoggedIn
    }
  }

  switch (action.type) {
    case 'HAS_LOGGED_IN':
      return { 'isLoggedIn': true }
    default:
      return state
  }
}

export default user
