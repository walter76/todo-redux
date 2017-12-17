import './login-page.scss'

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import LoginForm from '../forms/login-form'
import { login } from '../../actions/user'

class LoginPage extends React.Component {
  constructor (props) {
    super(props)

    this.submit = this.submit.bind(this)
  }

  submit (data) {
    this.props.login({
      username: data.username.trim(),
      password: data.password.trim()
    })
    .then(() => this.props.history.push('/'))
  }

  render () {
    return (
      <LoginForm submit={this.submit} />
    )
  }
}

LoginPage.propTypes = {
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

export default connect(mapStateToProps, { login })(LoginPage)
