// models/Address.js
import { DataTypes } from "sequelize";
import sequelize from "../dbConnect.js";
import User from "./UserSchema.js"; // 👈 import the actual model

const Address = sequelize.define("Address", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  pincode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address_line_1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address_line_2: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: { // Sequelize adds association helpers automatically when named like this
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: User, // 👈 reference actual model
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
}, {
  timestamps: true,
});

export default Address;
