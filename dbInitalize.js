import User from "./Schema/UserSchema.js";
import Address from "./Schema/AddressSchema.js";    
import Order from "./Schema/OrderSchema.js";
import sequelize from "./dbConnect.js";
import Cart from "./Schema/CartSchema.js";
import CartItem from "./Schema/CartItemSchema.js";
import Product from "./Schema/ProductSchema.js";

// User -> Address
User.hasMany(Address, { foreignKey: "userId", onDelete: "CASCADE" });
Address.belongsTo(User, { foreignKey: "userId" });

// User -> Order
User.hasMany(Order, { foreignKey: "userId", onDelete: "CASCADE" });
Order.belongsTo(User, { foreignKey: "userId" });

// Address -> Order
Address.hasMany(Order, { foreignKey: "addressId", onDelete: "SET NULL" });
Order.belongsTo(Address, { foreignKey: "addressId" });

// Cart -> CartItems (One-to-Many)
Cart.hasMany(CartItem, { foreignKey: "cartId", onDelete: "CASCADE" });
CartItem.belongsTo(Cart, { foreignKey: "cartId" });

// Product -> CartItems (One-to-Many)
Product.hasMany(CartItem, { foreignKey: "productId", onDelete: "CASCADE" });
CartItem.belongsTo(Product, { foreignKey: "productId" });


const dbInitialize = async () => {
  try {
    // Sync all models with the database
    await sequelize.sync({ alter: true });
    console.log("✅ All models synchronized successfully.");
  } catch (error) {
    console.error("❌ Failed to sync database:", error);
  }
};

dbInitialize();
