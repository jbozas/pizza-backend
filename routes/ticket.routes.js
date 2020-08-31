module.exports = (app) => {
  const ticket = require('../controllers/ticket.controller.js')
  var router = require('express').Router()
  router.get('/ticket-create', ticket.create)
  router.get('/ticket-findall', ticket.findAll)
  router.get('/ticket-find/:pk', ticket.findOne)
  app.use('/api/pizza', router)
}
