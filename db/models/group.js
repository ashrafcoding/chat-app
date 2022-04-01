const Sequelize = require("sequelize");
const db = require("../db");

const Group = db.define("group", {
  groupName: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  ownerId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  photoUrl: {
    type: Sequelize.STRING
  },
});

module.exports = Group;
