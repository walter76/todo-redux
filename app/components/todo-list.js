import './todo-list.scss'

import React from 'react'
import PropTypes from 'prop-types'
import Todo from './todo'

const TodoList = ({ todos, onTodoClick }) => (
  <section>
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo)} />
      ))}
    </ul>
    <div className='hint'>*) Click on a item to cross it off your list.</div>
  </section>
)

TodoList.propTypes = {
  'todos': PropTypes.arrayOf(
    PropTypes.shape({
      'id': PropTypes.string.isRequired,
      'completed': PropTypes.bool.isRequired,
      'text': PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  'onTodoClick': PropTypes.func.isRequired
}

export default TodoList
