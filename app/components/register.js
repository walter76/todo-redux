import './register.scss'

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { register } from '../actions/user'

import MainLayout from './main-layout'

let Register = ({ onRegister, redirectToLogin }) => {
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
    <MainLayout>
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
    </MainLayout>
  )
}

Register.propTypes = {
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

export default Register = connect(
  mapStateToProps,
  mapDispatchToProps
)(Register)
