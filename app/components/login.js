import './login.scss'

import React from 'react'
import PropTypes from 'prop-types'

class Login extends React.Component {
  constructor (props) {
    super(props)

    this.submit = this.submit.bind(this)
  }

  submit (e) {
    e.preventDefault()

    if (!this.username.value.trim()) {
      return
    }
    if (!this.password.value.trim()) {
      return
    }

    this.props.onLogin({
      username: this.username.value.trim(),
      password: this.password.value.trim()
    })

    this.username.value = ''
    this.password.value = ''
  }

  render () {
    return (
      <form onSubmit={this.submit}>
        <input
          className='login'
          ref={node => { this.username = node }}
          placeholder='Username'
          autoFocus
        /><br />
        <input
          className='login'
          ref={node => { this.password = node }}
          type='password'
          placeholder='Password'
        /><br />
        <button className='login' type='submit'>Login</button>
      </form>
    )
  }
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired
}

export default Login
