import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import todoApp from './reducers'
import App from './components/app'

import { fetchTodos } from './actions/todos'

const store = createStore(
  todoApp,
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware
    )
  )
)

store.dispatch(fetchTodos())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
