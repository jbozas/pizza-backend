module.exports = (sequelize, DataTypes) => {
  const TicketDetail = sequelize.define('ticketdetail', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    pizza: {
      type: Sequelize.INTEGER,
      references: 'pizzas',
      referencesKey: 'id',
    }
  })

  TicketDetail.hasOne(Pizza);

  return TicketDetail
}
