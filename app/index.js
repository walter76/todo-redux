import './css/reset.css'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import todoApp from './reducers'
import App from './components/app'

import { createTodosService } from './reducers/todos.service'

let store = createStore(todoApp)

let todosService = createTodosService()
todosService.getAll()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
