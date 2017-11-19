import './css/reset.css'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import todoApp from './reducers'
import App from './components/app'

let store = createStore(todoApp)

function fetchTodosFromServer () {
  const todosUri =
    window.location.protocol + '//' +
    window.location.host +
    '/api/todos'

  let headers = new window.Headers()
  headers.append('content-type', 'application/json; charset=utf-8')

  let options = {
    method: 'GET',
    headers: headers,
    cache: 'default'
  }

  let request = new window.Request(todosUri, options)

  window.fetch(request)
  .then((response) => {
    if (!response.ok) {
      console.log('status: ', response.status)
      console.log(response.statusText)

      return {
        success: false,
        items: []
      }
    }

    return response.json()
  })
  .then((json) => {
    console.table(json)
  })
}

fetchTodosFromServer()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
