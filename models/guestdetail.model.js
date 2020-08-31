module.exports = (sequelize, DataTypes) => {
  const GuestDetail = sequelize.define('guestdetail', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  })

  return GuestDetail
}
