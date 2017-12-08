import './css/reset.css'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import todoApp from './reducers'
import App from './components/app'
import Register from './components/register'

import { fetchTodos } from './actions/todos'

const store = createStore(
  todoApp,
  applyMiddleware(
    thunkMiddleware
  )
)

store.dispatch(fetchTodos())

render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route exact path='/register' component={Register} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('app')
)
