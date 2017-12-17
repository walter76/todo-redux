import 'semantic-ui-css/semantic.min.css'

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Form, Button } from 'semantic-ui-react'
import InlineError from '../messages/inline-error'

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
      <Form onSubmit={this.onSubmit}>
        <Form.Field error={!!errors.username}>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            name='username'
            placeholder='guest@guest.de'
            value={data.username}
            onChange={this.onChange}
          />
          {errors.username && <InlineError text={errors.username} />}
        </Form.Field>
        <Form.Field error={!!errors.password}>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            placeholder='secret'
            value={data.password}
            onChange={this.onChange}
          />
          {errors.password && <InlineError text={errors.password} />}
        </Form.Field>
        <Button primary>Login</Button>
        <span>or</span>&nbsp;<Link to='/register'>Register</Link>
      </Form>
    )
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
}

export default LoginForm
