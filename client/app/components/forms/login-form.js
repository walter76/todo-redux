import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class LoginForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      data: {
        username: '',
        password: ''
      },
      errors: { }
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onSubmit (e) {
    e.preventDefault()

    const { username, password } = this.state.data
    let errors = {}

    if (!username.trim()) {
      errors.username = 'Please enter a valid username.'
    }
    if (!password.trim()) {
      errors.password = 'Please enter a valid password.'
    }

    if (Object.keys(errors)) {
      this.setState({ errors: errors })
      return
    }

    this.props.submit(this.state.data)
  }

  onChange (e) {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    })
  }

  render () {
    const { data, errors } = this.state

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name='username'
          className='login'
          placeholder='guest@guest.de'
          value={data.username}
          onChange={this.onChange}
          autoFocus
        /><br />
        {errors.username && <div>{errors.username}</div>}
        <input
          name='password'
          className='login'
          type='password'
          placeholder='secret'
          value={data.password}
          onChange={this.onChange}
        /><br />
        {errors.password && <div>{errors.password}</div>}
        <button className='login' type='submit'>Login</button>
        <span>or</span>&nbsp;<Link to='/register'>Register</Link>
      </form>
    )
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
}

export default LoginForm
