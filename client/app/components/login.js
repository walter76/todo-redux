import './login.scss'

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { login } from '../actions/user'

class LoginView extends React.Component {
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

    this.props.login({
      username: this.username.value.trim(),
      password: this.password.value.trim()
    })
    .then(() => this.props.history.push('/'))

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
        <div className='error'>{this.props.error}</div>
        <button className='login' type='submit'>Login</button>
        <span>or</span>&nbsp;<Link to='/register'>Register</Link>
      </form>
    )
  }
}

LoginView.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired,
  error: PropTypes.string
}

const mapStateToProps = (state, ownProps) => {
  return {
    error: state.user.error
  }
}

const Login = connect(
  mapStateToProps,
  { login }
)(LoginView)

export default Login
