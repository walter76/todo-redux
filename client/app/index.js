import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import todoApp from './reducers'
import App from './components/app'

import { fetchTodos } from './actions/todos'

const store = createStore(
  todoApp,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
)

store.dispatch(fetchTodos())

render(
  <Provider store={store}>
    <Router>
      <Route component={App} />
    </Router>
  </Provider>,
  document.getElementById('app')
)
