const User = require('./user.model.js')
console.log(User)
module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define('ticket', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('NOW()'),
    },
    deliveryCost: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    subtotal: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user: {
      type: DataTypes.INTEGER,
      references: 'users', // <<< Note, its table's name, not object name
      referencesKey: 'id', // <<< Note, its a column name
      allowNull: true,
    },
    guestDetail: {
      type: DataTypes.INTEGER,
      references: 'guestdetails', // <<< Note, its table's name, not object name
      referencesKey: 'id', // <<< Note, its a column name
      allowNull: true,
    },
    ticketDetail: {
      type: DataTypes.INTEGER,
      references: 'ticketdetails',
      referencesKey: 'id',
    }
  })

  // Ticket.hasOne(User);
  // Ticket.hasMany(TicketDetail);
  // Ticket.hasOne(GuestDetail);

  return Ticket
}
