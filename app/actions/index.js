import { createTodosService } from './todos.service'

let nextTodoId = 0
let todosService = createTodosService()

export const addTodo = text => {
  return {
    'type': 'ADD_TODO',
    'id': nextTodoId++,
    text
  }
}

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
      // have to do something here
      console.table(items)

      dispatch(receiveTodos(items))
    })
  }
}

export function createTodo (todo) {
  todosService.create(todo)
}
