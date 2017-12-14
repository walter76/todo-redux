import { post } from './common'

function userPost (action, payload) {
  const userUri =
    window.location.protocol + '//' +
    window.location.host +
    '/api/user'

  return post(userUri, action, payload)
}

export function login (credentials) {
  return new Promise(
    (resolve, reject) => {
      userPost('login', credentials)
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

export function register (credentials) {
  return new Promise(
    (resolve, reject) => {
      userPost('register', credentials)
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
