import './register.scss'

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { register } from '../actions/user'

const RegisterView = ({ onRegister, redirectToLogin }) => {
  if (redirectToLogin) {
    return (
      <Redirect to={{
        pathname: '/'
      }} />
    )
  }

  let username
  let password

  return (
    <form onSubmit={(e) => {
      e.preventDefault()

      onRegister({
        username: username.value,
        password: password.value
      })
    }}>
      <input
        className='register'
        ref={node => { username = node }}
        placeholder='Username'
        autoFocus
      /><br />
      <input
        className='register'
        ref={node => { password = node }}
        type='password'
        placeholder='Password'
      /><br />
      <div className='error' />
      <button className='register' type='submit'>Register</button>
    </form>
  )
}

RegisterView.propTypes = {
  onRegister: PropTypes.func.isRequired,
  redirectToLogin: PropTypes.bool.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    redirectToLogin: state.user.redirectToLogin
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onRegister: (credentials) => {
      dispatch(register(credentials))
    }
  }
}

const Register = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterView)

export default Register
