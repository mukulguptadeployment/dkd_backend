// models/User.js
import { DataTypes } from "sequelize";
import sequelize from "../dbConnect.js";

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  is_verified: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  phone_number: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  reffered_by: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: "Users", // Will be fine if table name is 'Users'
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
  source: {
    type: DataTypes.STRING,
    allowNull: true,
  }
}, {
  timestamps: true,
});

export default User;
