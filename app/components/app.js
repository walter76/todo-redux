import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import MainLayout from './main-layout'
import Login from './login'
import TodoContent from './todo-content'

const AppComponent = ({ isLoggedIn }) => {
  if (!isLoggedIn) {
    return (
      <MainLayout>
        <Login />
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <TodoContent />
    </MainLayout>
  )
}

AppComponent.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.user.isLoggedIn
  }
}

const App = connect(
  mapStateToProps
)(AppComponent)

export default App
