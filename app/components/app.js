import React from 'react'
import PropTypes from 'prop-types'

import MainLayout from './main-layout'
import Login from './login'
import TodoContent from './todo-content'

const App = ({ isLoggedIn, onLogin, onLogout }) => {
  if (!isLoggedIn) {
    return (
      <MainLayout>
        <Login onLogin={onLogin} />
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <TodoContent onLogout={onLogout} />
    </MainLayout>
  )
}

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired
}

export default App
