// models/Order.js
import { DataTypes } from "sequelize";
import sequelize from "../dbConnect.js";
import User from "./UserSchema.js";
import Address from "./AddressSchema.js";

const Order = sequelize.define("Order", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  order_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  order_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  total_amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("pending", "shipped", "delivered", "cancelled"),
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
  addressId: {
    type: DataTypes.INTEGER,
    allowNull: true, // SET NULL only works if this is true
    references: {
      model: Address,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
  payment_status: {
    type: DataTypes.ENUM("pending", "completed", "failed"),
    allowNull: false,
  },
  payment_method: {
    type: DataTypes.ENUM("credit_card", "debit_card", "paypal"),
    allowNull: false,
  },
  tracking_number: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  tracking_url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  products: {
    type: DataTypes.JSON, // You can refine this to include quantity, price, etc.
    allowNull: false,
  },
  delivery_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  timestamps: true,
});

export default Order;
