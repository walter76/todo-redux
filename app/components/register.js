import './register.scss'

import React from 'react'
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

Register = connect(
  mapStateToProps,
  mapDispatchToProps
)(Register)

export default Register
