export function createUserService () {
  const userUri =
    window.location.protocol + '//' +
    window.location.host +
    '/api/user'

  function login (credentials) {
    return new Promise(
      (resolve, reject) => {
        window.fetch(userUri + '/login', {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json; charset=utf-8'
          },
          body: JSON.stringify(credentials)
        })
        .then(response => {
          if (response.status === 200) {
            resolve(true)
          } else if (response.status === 401) {
            resolve(false)
          }
        })
      }
    )
  }

  return {
    login: login
  }
}