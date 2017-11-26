import React from 'react'
import PropTypes from 'prop-types'

const Login = ({ onLogin }) => {
  return (
    <button onClick={e => {
      e.preventDefault()
      onLogin()
    }}>Login</button>
  )
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired
}

export default Login
