import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import MainLayout from './main-layout'
import Login from './login'
import TodoContent from './todo-content'

const AppView = ({ isLoggedIn }) => {
  let content = null
  if (isLoggedIn) {
    content = <TodoContent />
  } else {
    content = <Login />
  }

  return (
    <MainLayout>
      {content}
    </MainLayout>
  )
}

AppView.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.user.isLoggedIn
  }
}

const App = connect(
  mapStateToProps
)(AppView)

export default App
