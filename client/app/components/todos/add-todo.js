import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { createTodo } from '../../actions/todos'

class AddTodo extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      data: {
        todo: ''
      }
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onSubmit (e) {
    e.preventDefault()

    const { todo } = this.state.data

    if (!todo.trim()) {
      return
    }

    this.props.dispatch(createTodo(todo.trim()))

    this.setState({
      data: { todo: '' }
    })
  }

  onChange (e) {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    })
  }

  render () {
    const { todo } = this.state.data

    return (
      <section>
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <input
              id='todo'
              name='todo'
              placeholder='My Next ToDo Item'
              value={todo}
              onChange={this.onChange}
            />
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
