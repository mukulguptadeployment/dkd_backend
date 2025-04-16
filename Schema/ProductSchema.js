// models/Product.js
import { DataTypes } from "sequelize";
import sequelize from "../dbConnect.js";

const Product = sequelize.define("Product", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sale_price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  actual_price: {
    type: DataTypes.INTEGER, // changed from STRING
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  short_description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  images: {
    type: DataTypes.TEXT, // stores JSON string of image URLs
    allowNull: false,
  },
  colour: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  size: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  brand_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sub_category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  is_topseller: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  size_chart: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,
});

export default Product;
