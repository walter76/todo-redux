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

app
  .use(express.static(path.join(__dirname, 'public')))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
