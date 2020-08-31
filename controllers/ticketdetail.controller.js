const db = require('../models')
const TicketDetail = db.ticketDetail
const Op = db.Sequelize.Op

// Create and Save a new Ticket Detail
exports.create = (req, res) => {
  console.log(req)
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
    return
  }

  const ticketDetail = {
    pizza: req.body.pizza,
    quantity: req.body.quantity,
    price: req.body.price,
  }

  // Save Ticket Detail in the database
  TicketDetail.create(ticketDetail)
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

// Retrieve all Tickets Detail from the database.
exports.findAll = (req, res) => {
  TicketDetail.findAll()
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

// Find a single Ticket Detail with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  TicketDetail.findByPk(id)
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
