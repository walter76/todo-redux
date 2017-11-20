const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          'id': action.id,
          'text': action.text,
          'completed': action.completed
        }
      ]
    case 'TODO_UPDATED':
      return state.map(todo =>
        (todo.id === action.todo.id) ? action.todo : todo
      )
    case 'RECEIVE_TODOS':
      return action.items
    default:
      return state
  }
}

export default todos
