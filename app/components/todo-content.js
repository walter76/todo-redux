import React from 'react'
import PropTypes from 'prop-types'

import Footer from './footer'
import VisibleTodoList from '../containers/visible-todo-list'
import AddTodo from '../containers/add-todo'

const TodoContent = ({ onLogout }) => {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
      <button onClick={e => {
        e.preventDefault()
        onLogout()
      }}>Logout</button>
    </div>
  )
}

TodoContent.propTypes = {
  onLogout: PropTypes.func.isRequired
}

export default TodoContent
