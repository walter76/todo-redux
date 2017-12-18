import React from 'react'
import { connect } from 'react-redux'
import { createTodo } from '../../actions/todos'
import { Form, Button } from 'semantic-ui-react'

const AddTodoView = ({ dispatch }) => {
  let input

  return (
    <section>
      <Form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(createTodo(input.value))
          input.value = ''
        }}
      >
        <Form.Field>
          <input
            id='todo'
            name='todo'
            ref={node => {
              input = node
            }}
            placeholder='My Next ToDo Item'
          />
        </Form.Field>
        <Button primary>Add Todo</Button>
      </Form>
    </section>
  )
}

const AddTodo = connect()(AddTodoView)

export default AddTodo
