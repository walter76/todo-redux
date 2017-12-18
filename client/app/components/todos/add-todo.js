import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import InlineError from '../messages/inline-error'

import { createTodo } from '../../actions/todos'

class AddTodo extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      data: {
        todo: ''
      },
      errors: {}
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onSubmit (e) {
    e.preventDefault()

    const { todo } = this.state.data

    if (!todo.trim()) {
      this.setState({
        errors: { todo: 'Please add a valid todo item before submitting.' }
      })
      return
    }

    this.props.dispatch(createTodo(todo.trim()))

    this.setState({
      data: { todo: '' },
      errors: {}
    })
  }

  onChange (e) {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    })
  }

  render () {
    const { data, errors } = this.state

    return (
      <section>
        <Form onSubmit={this.onSubmit}>
          <Form.Field error={!!errors.todo}>
            <input
              id='todo'
              name='todo'
              placeholder='My Next ToDo Item'
              value={data.todo}
              onChange={this.onChange}
            />
            {errors.todo && <InlineError text={errors.todo} />}
          </Form.Field>
          <Button primary>Add Todo</Button>
        </Form>
      </section>
    )
  }
}

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect()(AddTodo)
