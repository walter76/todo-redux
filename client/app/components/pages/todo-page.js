import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { logout } from '../../actions/user'
import AddTodo from '../todos/add-todo'
import FilteredTodoList from '../todos/filtered-todo-list'
import Footer from '../footer'

const TodoPage = ({ onLogout }) => {
  return (
    <div>
      <AddTodo />
      <FilteredTodoList />
      <Footer />
      <button onClick={e => {
        e.preventDefault()
        onLogout()
      }}>Logout</button>
    </div>
  )
}

TodoPage.propTypes = {
  onLogout: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return { }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLogout: () => {
      dispatch(logout())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoPage)
