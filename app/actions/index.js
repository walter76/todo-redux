import { createTodosService } from './todos.service'

let todosService = createTodosService()

export const setVisibilityFilter = filter => {
  return {
    'type': 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = id => {
  return {
    'type': 'TOGGLE_TODO',
    id
  }
}

export const receiveTodos = items => {
  return {
    'type': 'RECEIVE_TODOS',
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
    'type': 'ADD_TODO',
    'id': todo.id,
    'text': todo.text,
    'completed': todo.completed
  }
}

export function createTodo (text) {
  return dispatch => {
    todosService.create({
      'id': -1,
      'text': text,
      'completed': false
    })
    .then(todo => {
      dispatch(addTodo(todo))
    })
  }
}
