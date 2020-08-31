const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const db = require('./models')
db.sequelize.sync()

require('./routes/pizza.routes')(app)
require('./routes/ticket.routes')(app)
require('./routes/ticketdetail.routes')(app)
require('./routes/user.routes')(app)
require('./routes/guestdetail.routes')(app)

// set port, listen for requests
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
