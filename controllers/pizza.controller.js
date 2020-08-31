const db = require('../models')
const Pizza = db.pizza
const Op = db.Sequelize.Op

// Create and Save a new Pizza
exports.create = (req, res) => {
  console.log(req)
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
    return
  }

  //Create a Pizza
  const pizza = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image,
  }

  // Save Pizza in the database
  Pizza.create(pizza)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the Tutorial.',
      })
    })
}

// Retrieve all Pizzas from the database.
exports.findAll = (req, res) => {
  Pizza.findAll()
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving tutorials.',
      })
    })
}

// Find a single Tutorial with an id
exports.findOne = (req, res) => {}

// Update a Tutorial by the id in the request
exports.update = (req, res) => {}

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {}

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {}

// Find all published Tutorials
exports.findAllPublished = (req, res) => {}
