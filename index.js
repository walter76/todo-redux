const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 5000

let app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ 'extended': true }))

let nextId = 102
let todos = [
  { 'id': 100, 'text': 'something to do', 'completed': false },
  { 'id': 101, 'text': 'nothing to do', 'completed': true },
  { 'id': 102, 'text': 'something else to do', 'completed': false }
]

app.get('/api/todos', (req, res, next) => {
  res.send(todos)
})

app.post('/api/todos', (req, res) => {
  console.log('adding new todo: ' + req.body)

  const todo = {
    'id': ++nextId,
    'text': req.body.text,
    'completed': req.body.completed
  }
  todos.push(todo)

  res.json(todo)
})

app
  .use(express.static(path.join(__dirname, 'public')))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
