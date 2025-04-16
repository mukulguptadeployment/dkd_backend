import { DataTypes } from "sequelize";
import sequelize from "../dbConnect.js";
import User from "./UserSchema.js";

const Cart = sequelize.define("Cart", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: User,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
}, {
  timestamps: true,
});

export default Cart;
