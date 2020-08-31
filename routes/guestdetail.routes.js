module.exports = (app) => {
  const guestdetail = require('../controllers/guestdetail.controller.js')
  var router = require('express').Router()
  router.get('/guestdetail-create', guestdetail.create)
  router.get('/guestdetail-findall', guestdetail.findAll)
  router.get('/guestdetail-find/pk', guestdetail.findOne)
  app.use('/api/pizza', router)
}
