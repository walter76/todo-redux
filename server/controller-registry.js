function ControllerRegistry () {
  let creators = []
  let controllers = []

  function add (controllerCreator) {
    creators.push(controllerCreator)
  }

  function registerRoutes (app) {
    controllers.forEach(controller => {
      controller.registerRoutes(app)
    })
  }

  function run (app) {
    creators.forEach(creator => {
      controllers.push(creator())
    })

    registerRoutes(app)
  }

  return {
    add: add,
    run: run
  }
}

module.exports = ControllerRegistry
