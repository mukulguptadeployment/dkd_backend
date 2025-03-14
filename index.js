require("dotenv").config();
const path = require("path");
const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");
const userRouter = require("./routes/UserRoute/userRouter");

// EXTRACTING CREDENTIALS FROM ENVIORNMENT
const database_name = process.env.DB_NAME;
const username = process.env.DB_UserName;
const password = process.env.DB_Password;
const PORT = process.env.PORT || 8000;

// Connection
const sequelize = new Sequelize(database_name, username, password, {
  host: "localhost",
  dialect: "mysql", // Change to 'postgres', 'sqlite', or 'mssql' if needed
});

async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected successfully!");
  } catch (error) {
    console.error("❌ Database connection failed:", error);
  }
};

const app = express();

app.get("/data.js", (req, res) => {
  res.sendFile(path.join(__dirname, "/static/data.js"));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/static/page.html"));
});

app.use("/api/user", userRouter);

app.use("/api/products", (req, res) => {
  res.json({ message: "Product route is working" });
});

// Starting server
app.listen(PORT, () => {
  console.log("Server is up and running........");
});
