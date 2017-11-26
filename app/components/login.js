import React from 'react'
import PropTypes from 'prop-types'

const Login = ({ onLogin }) => {
  let username
  let password

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        if (!username.value.trim()) {
          return
        }
        if (!password.value.trim()) {
          return
        }
        let cred = {
          username: username.value,
          password: password.value
        }
        onLogin(cred)
        username.value = ''
        password.value = ''
      }}
    >
      <input
        ref={node => {
          username = node
        }}
        placeholder='Username'
        autoFocus
      /><br />
      <input
        ref={node => {
          password = node
        }}
        type='password'
        placeholder='Password'
      /><br />
      <button type='submit'>Login</button>
    </form>
  )
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired
}

export default Login
