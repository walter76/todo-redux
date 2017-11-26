import React from 'react'
import PropTypes from 'prop-types'

import MainLayout from './main-layout'
import Footer from './footer'
import VisibleTodoList from '../containers/visible-todo-list'
import AddTodo from '../containers/add-todo'

const App = ({ isLoggedIn, onLogin, onLogout }) => {
  if (!isLoggedIn) {
    return (
      <MainLayout>
        <button onClick={e => {
          e.preventDefault()
          onLogin()
        }}>Login</button>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
      <button onClick={e => {
        e.preventDefault()
        onLogout()
      }}>Logout</button>
    </MainLayout>
  )
}

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired
}

export default App
