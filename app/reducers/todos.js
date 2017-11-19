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
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {'id': todo.id, 'text': todo.text, 'completed': !todo.completed}
          : todo
      )
    case 'RECEIVE_TODOS':
      return action.items
    default:
      return state
  }
}

export default todos
