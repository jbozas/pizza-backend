module.exports = (app) => {
  const user = require('../controllers/user.controller.js')
  var router = require('express').Router()
  router.get('/user-create', user.create)
  router.get('/user-findall', user.findAll)
  router.get('/user-find/pk', user.findOne)
  app.use('/api/pizza', router)
}
