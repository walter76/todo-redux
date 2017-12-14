import './register.scss'

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { register } from '../actions/user'

const RegisterView = ({ register, history }) => {
  let username
  let password

  return (
    <form onSubmit={(e) => {
      e.preventDefault()

      register({
        username: username.value,
        password: password.value
      }).then(() => history.push('/login'))
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
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  register: PropTypes.func.isRequired
}

const Register = connect(
  null,
  { register }
)(RegisterView)

export default Register
