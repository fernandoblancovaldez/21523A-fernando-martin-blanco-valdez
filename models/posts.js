const { sequelize, DataTypes } = require("../database");

const postModel = sequelize.define("posts", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull: false },
  content: { type: DataTypes.STRING, allowNull: false },
  imgUrl: { type: DataTypes.STRING, allowNull: false },
  date: {
    type: DataTypes.DATE,
    defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
  },
});

sequelize
  .sync({ force: true })
  .then(() => console.log("Modelos Sincronizados"));

module.exports = postModel;
