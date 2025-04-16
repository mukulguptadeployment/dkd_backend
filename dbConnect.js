import dotenv from "dotenv";
import { Sequelize } from "sequelize";
dotenv.config();

// EXTRACTING CREDENTIALS FROM ENVIORNMENT
const database_name = process.env.DB_database;
const username = process.env.DB_UserName;
const password = process.env.DB_Password;
const DB_PORT = process.env.DB_port;
console.log(database_name, "DB name");

// Connection
const sequelize = new Sequelize(database_name, username, password, {
  host: process.env.DB_host,
  port: DB_PORT || 3306,
  dialect: "mysql",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  logging: true,
});

export default sequelize;
