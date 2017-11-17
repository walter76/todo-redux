import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import todoApp from './reducers'
import App from './components/App'

let store = createStore(todoApp)

store.dispatch({
  'type': 'ADD_TODO',
  'id': 1,
  'text': 'bla'
})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
