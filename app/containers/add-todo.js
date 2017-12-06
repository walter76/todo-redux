import './add-todo.scss'

import React from 'react'
import { connect } from 'react-redux'
import { createTodo } from '../actions/todos'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <section>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(createTodo(input.value))
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
          placeholder='My Next ToDo Item'
          autoFocus
        />
        <button type='submit'>
          Add Todo
        </button>
      </form>
    </section>
  )
}

export default AddTodo = connect()(AddTodo)
