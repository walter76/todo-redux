import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { logout } from '../../actions/user'
import Footer from '../footer'
import VisibleTodoList from '../../containers/visible-todo-list'
import AddTodo from '../../containers/add-todo'

const TodoPage = ({ onLogout }) => {
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
