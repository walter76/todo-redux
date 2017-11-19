const express = require('express')
const path = require('path')

const PORT = process.env.PORT || 5000

var app = express()

var todos = [
  { 'id': 100, 'text': 'something to do', 'completed': false },
  { 'id': 101, 'text': 'nothing to do', 'completed': true },
  { 'id': 102, 'text': 'something else to do', 'completed': false }
]

app.get('/api/todos', function(req, res, next) {
  res.send(todos)
})

app
  .use(express.static(path.join(__dirname, 'public')))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
