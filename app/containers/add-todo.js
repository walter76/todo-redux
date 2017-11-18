import './add-todo.scss'

import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

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
          dispatch(addTodo(input.value))
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
AddTodo = connect()(AddTodo)

export default AddTodo
