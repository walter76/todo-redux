function generateUUID () {
  let d = new Date().getTime()
  let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    let r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
  })
  return uuid
}

function doc2todo (doc) {
  return {
    id: doc.id,
    text: doc.text,
    completed: doc.completed
  }
}

function get (db, req, res) {
  db.collection('todos').find().toArray((err, results) => {
    if (err) {
      console.error('Unable to query database for todos. Reason: ')
      console.error(err)

      res.statusCode = 500
      res.statusMessage = 'Unable to query database for todos.'
      res.send()
      return
    }

    console.log('todos have been queried by the user.')
    res.send(results.map(doc2todo))
  })
}

function create (db, req, res) {
  let todo = {
    id: generateUUID(),
    text: req.body.text,
    completed: req.body.completed
  }

  db.collection('todos').insertOne(todo)
  .then(r => {
    console.log('a new todo has been saved to database: ')
    console.log(JSON.stringify(r.ops))

    res.json(doc2todo(r.ops[0]))
  })
}

function update (db, req, res) {
  db.collection('todos').updateOne(
    { id: req.body.id },
    { $set: {
      text: req.body.text, completed: req.body.completed
    }})
  .then(r => {
    console.log('the todo with id ' + req.body.id + ' was updated')

    db.collection('todos').findOne({'id': req.body.id})
    .then(doc => res.json(doc2todo(doc)))
  })
}

module.exports = (db, app) => {
  app.get('/api/todos', (req, res) => get(db, req, res))
  app.post('/api/todos', (req, res) => create(db, req, res))
  app.put('/api/todos', (req, res) => update(db, req, res))
}
