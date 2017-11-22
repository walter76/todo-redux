function createTodoController (database) {
  let db = database

  function generateUUID () {
    let d = new Date().getTime()
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      let r = (d + Math.random() * 16) % 16 | 0
      d = Math.floor(d / 16)
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
    })
    return uuid
  }

  function get (req, res, next) {
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
  }

  function create (req, res) {
    let todo = {
      'id': generateUUID(),
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
  }

  function update (req, res) {
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
  }

  function registerRoutes (app) {
    app.get('/api/todos', get)
    app.post('/api/todos', create)
    app.put('/api/todos', update)
  }

  return {
    'registerRoutes': registerRoutes
  }
}

module.exports = createTodoController
