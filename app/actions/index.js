import { createTodosService } from './todos.service'
import { login as loginUser } from './user.service'

let todosService = createTodosService()

export const hasLoggedIn = () => {
  return {
    type: 'HAS_LOGGED_IN'
  }
}

export function login (credentials) {
  return dispatch => {
    loginUser(credentials)
    .then(isLoggedIn => {
      if (isLoggedIn) {
        window.sessionStorage.setItem('isLoggedIn', true)
        dispatch(hasLoggedIn())
        return
      }

      console.log('Could not login user.')
    })
  }
}

export const hasLoggedOut = () => {
  return {
    type: 'HAS_LOGGED_OUT'
  }
}

export function logout () {
  return dispatch => {
    window.sessionStorage.setItem('isLoggedIn', false)
    dispatch(hasLoggedOut())
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const todoUpdated = todo => {
  return {
    type: 'TODO_UPDATED',
    todo
  }
}

export const receiveTodos = items => {
  return {
    type: 'RECEIVE_TODOS',
    items
  }
}

export function fetchTodos () {
  return dispatch => {
    todosService.getAll()
    .then(({success, items}) => {
      dispatch(receiveTodos(items))
    })
  }
}

export const addTodo = todo => {
  return {
    type: 'ADD_TODO',
    id: todo.id,
    text: todo.text,
    completed: todo.completed
  }
}

export function createTodo (text) {
  return dispatch => {
    todosService.create({
      id: -1,
      text: text,
      completed: false
    })
    .then(todo => {
      dispatch(addTodo(todo))
    })
  }
}

export function updateTodo (todo) {
  return dispatch => {
    todosService.update(todo)
    .then(todo => {
      dispatch(todoUpdated(todo))
    })
  }
}
