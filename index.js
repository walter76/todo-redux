const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 5000

let app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ 'extended': true }))

let nextId = 0
let todos = []

app.get('/api/todos', (req, res, next) => {
  res.send(todos)
})

app.post('/api/todos', (req, res) => {
  const todo = {
    'id': ++nextId,
    'text': req.body.text,
    'completed': req.body.completed
  }
  todos.push(todo)

  console.log('new todo added: ' + JSON.stringify(todo))

  res.json(todo)
})

app.put('/api/todos', (req, res) => {
  todos = todos.map(todo => {
    if (todo.id === req.body.id) {
      return {
        'id': todo.id,
        'text': req.body.text,
        'completed': req.body.completed
      }
    }

    return todo
  })

  let updated = todos.find(todo => todo.id === req.body.id)

  console.log('todo updated: ' + JSON.stringify(updated))

  res.json(updated)
})

app
  .use(express.static(path.join(__dirname, 'public')))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
