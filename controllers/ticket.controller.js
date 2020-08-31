const db = require('../models')
const Ticket = db.ticket
const Op = db.Sequelize.Op

// Create and Save a new Ticket
exports.create = (req, res) => {
  console.log(req)

  // Create a
  // If there is no user logged in, assign a guestdetail
  if (!req.body.user) {
    const ticket = {
    deliveryCost: req.body.deliveryCost,
    //subtotal
    //total
    guestDetail: req.body.guestDetail,
    price: req.body.price,
    image: req.body.image,
    ticketDetail: req.body.ticketDetail,
  }
  }
  // Else, if there is a logged user
  else{
    const ticket = {
      deliveryCost: req.body.deliveryCost,
      //subtotal
      //total
      user: req.body.user,
      price: req.body.price,
      image: req.body.image,
      ticketDetail: req.body.ticketDetail,
  }
  }

  // Save Ticket in the database
  Ticket.create(ticket)
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

// Retrieve all Tickets from the database.
exports.findAll = (req, res) => {
  Ticket.findAll()
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

// Find a single Ticket with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Ticket.findByPk(id)
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
