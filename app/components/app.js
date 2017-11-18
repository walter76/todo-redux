import './app.scss'

import React from 'react'

import Footer from './Footer'
import VisibleTodoList from '../containers/VisibleTodoList'
import AddTodo from '../containers/add-todo'

const App = () => (
  <article>
    <h1>Dead-Simple ToDo App</h1>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </article>
)

export default App
