import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import MainLayout from './main-layout'
import LoginPage from './pages/login-page'

import TodoContent from './todo-content'
import Register from './register'

const AppView = ({ isLoggedIn }) => {
  return (
    <Router>
      <MainLayout>
        <Route exact path='/' render={() => {
          if (isLoggedIn) {
            return (<TodoContent />)
          }

          return (
            <Redirect to={{ pathname: '/login' }} />
          )
        }} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={LoginPage} />
      </MainLayout>
    </Router>
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
