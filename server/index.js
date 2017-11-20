const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

const PORT = process.env.PORT || 5000
const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/ds-todo-db'

let app = express()

app.use(express.static(path.join(__dirname, '../public')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ 'extended': true }))

let nextId = 0
let db

app.get('/api/todos', (req, res, next) => {
  db.collection('todos').find().toArray((err, results) => {
    if (err) {
      return console.log(err)
    }

    res.send(results.map(todo => {
      return {
        'id': todo.id,
        'text': todo.text,
        'completed': todo.completed
      }
    }))
  })
})

app.post('/api/todos', (req, res) => {
  let todo = {
    'id': ++nextId,
    'text': req.body.text,
    'completed': req.body.completed
  }

  db.collection('todos').insertOne(todo)
  .then(r => {
    console.log('saved to database')
    console.log(JSON.stringify(r.ops))

    res.json({
      'id': r.ops[0].id,
      'text': r.ops[0].text,
      'completed': r.ops[0].completed
    })
  })
})

app.put('/api/todos', (req, res) => {
  db.collection('todos').updateOne(
    { 'id': req.body.id },
    { $set: {
      'text': req.body.text, 'completed': req.body.completed
  }})
  .then(r => {
    db.collection('todos').findOne({'id': req.body.id})
    .then(doc => {
      res.json({
        'id': doc.id,
        'text': doc.text,
        'completed': doc.completed
      })
    })
  })
})

MongoClient.connect(MONGODB_URI, (err, database) => {
  if (err) {
    return console.log(err)
  }

  db = database

  // we need a better solution for the ids, especially if we are running multi-
  // user, but for now this should do it
  db.collection('todos').find().toArray((err, results) => {
    results.forEach(todo => {
      nextId = (todo.id > nextId) ? todo.id : nextId })
  })

  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
})
