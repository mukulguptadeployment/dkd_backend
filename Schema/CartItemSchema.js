// models/CartItemSchema.js
import { DataTypes } from "sequelize";
import sequelize from "../dbConnect.js";
import Cart from "./CartSchema.js";
import Product from "./ProductSchema.js";

const CartItem = sequelize.define("CartItem", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  cartId: {
    type: DataTypes.INTEGER,
    references: {
      model: Cart,
      key: "id",
    },
    onDelete: "CASCADE",
  },
  productId: {
    type: DataTypes.INTEGER,
    references: {
      model: Product,
      key: "id",
    },
    onDelete: "CASCADE",
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
}, {
  timestamps: true,
});

export default CartItem;
