module.exports = (app) => {
  const pizza = require('../controllers/pizza.controller.js')
  var router = require('express').Router()
  router.get('/aaa', pizza.create)
  router.get('/all-pizzas', pizza.findAll)
  app.use('/api/pizza', router)
}
