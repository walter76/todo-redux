function doc2todo (doc) {
  return {
    username: doc.username,
    password: doc.password
  }
}

function login (db, req, res) {
  db.collection('user').findOne({
    username: req.body.username
  })
  .then(doc => {
    if (doc !== null && doc.password === req.body.password) {
      console.log('user ' + req.body.username + ' logged in')
      res.send()
      return
    }

    console.warn('could not login user ' + req.body.username)
    res.statusCode = 401
    res.send()
  })
}

function register (db, req, res) {
  let user = {
    username: req.body.username,
    password: req.body.password
  }

  db.collection('user').insertOne(user)
  .then(r => {
    console.log('a new user has been saved to database: ')
    console.log(JSON.stringify(r.ops))

    res.json(doc2todo(r.ops[0]))
  })
}

module.exports = (db, app) => {
  app.post('/api/user/login', (req, res) => login(db, req, res))
  app.post('/api/user/register', (req, res) => register(db, req, res))
}
