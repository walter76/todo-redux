import './css/reset.css'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import todoApp from './reducers'
import App from './components/app'

import { fetchTodos, createTodo } from './actions'

const store = createStore(
  todoApp,
  applyMiddleware(
    thunkMiddleware
  )
)

store.dispatch(fetchTodos())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
