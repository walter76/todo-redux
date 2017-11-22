import './app.scss'

import React from 'react'

import Footer from './footer'
import VisibleTodoList from '../containers/visible-todo-list'
import AddTodo from '../containers/add-todo'

const App = ({ isLoggedIn, onClick }) => {
  if (!isLoggedIn) {
    return (
      <article>
        <h1>Dead-Simple ToDo App</h1>
        <button onClick={e => {
          e.preventDefault()
          onClick()
        }}>Login</button>
      </article>
    )
  }

  return (
    <article>
      <h1>Dead-Simple ToDo App</h1>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </article>
  )
}

export default App
