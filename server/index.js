const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const createTodoController = require('./todo-controller')
const createUserController = require('./user-controller')

const PORT = process.env.PORT || 5000
const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/ds-todo-db'

let app = express()

app.use(express.static(path.join(__dirname, '../public')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ 'extended': true }))

MongoClient.connect(MONGODB_URI, (err, database) => {
  if (err) {
    return console.log(err)
  }

  let todoController = createTodoController(database)
  todoController.registerRoutes(app)

  let userController = createUserController()
  userController.registerRoutes(app)

  app.listen(PORT, () => console.log(`Listening on ${PORT}`))
})
