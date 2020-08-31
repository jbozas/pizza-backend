module.exports = (app) => {
  const ticketdetail = require('../controllers/ticketdetail.controller.js')
  var router = require('express').Router()
  router.get('/ticketdetail-create', ticketdetail.create)
  router.get('/ticketdetail-findall', ticketdetail.findAll)
  router.get('/ticketdetail-find/pk', ticketdetail.findOne)
  app.use('/api/pizza', router)
}
