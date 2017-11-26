function createUserController () {
  const credentials = {
    username: 'demo',
    password: 'secret'
  }

  function login (req, res) {
    if (req.body.username === credentials.username &&
      req.body.password === credentials.password) {
      console.log('user ' + req.body.username + ' logged in')
      res.send()
      return
    }

    console.warn('could not login user ' + req.body.username)
    res.statusCode = 401
    res.send()
  }

  function registerRoutes (app) {
    app.post('/api/user/login', login)
  }

  return {
    registerRoutes: registerRoutes
  }
}

module.exports = createUserController
