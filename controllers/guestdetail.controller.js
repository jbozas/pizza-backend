const db = require('../models')
const GuestDetail = db.guestdetail
const Op = db.Sequelize.Op

// Create and Save a new GuestUser
exports.create = (req, res) => {
  console.log(req)
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
    return
  }

  // Create a new GuestUser
  const guestdetail = {
    name: req.body.name,
    address: req.body.address,
  }


  // Save GuestUser in the database
  User.create(guestdetail)
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

// Retrieve all GuestUsers from the database.
exports.findAll = (req, res) => {
  GuestDetail.findAll()
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

// Find a single GuestUser with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  GuestDetail.findByPk(id)
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
