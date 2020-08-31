const db = require('../models')
const User = db.user
const Op = db.Sequelize.Op

// Create and Save a new User
exports.create = (req, res) => {
  console.log(req)

  // Create a new User
  const user = {
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
    address: req.body.address,
  }


  // Save User in the database
  User.create(user)
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

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
  User.findAll()
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

// Find a single User with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {}

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {}

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {}

// Find all published Tutorials
exports.findAllPublished = (req, res) => {}
