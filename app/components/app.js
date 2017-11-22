import './app.scss'

import React from 'react'

import Footer from './footer'
import VisibleTodoList from '../containers/visible-todo-list'
import AddTodo from '../containers/add-todo'

const App = ({ isLoggedIn, onLogin, onLogout }) => {
  console.log(isLoggedIn)

  if (!isLoggedIn) {
    return (
      <article>
        <h1>Dead-Simple ToDo App</h1>
        <button onClick={e => {
          e.preventDefault()
          onLogin()
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
      <button onClick={e => {
        e.preventDefault()
        onLogout()
      }}>Logout</button>
    </article>
  )
}

export default App
