import dotenv from "dotenv";
import path from "path";
import express from "express";
import userRouter from "./routes/UserRoute/userRouter.js";
import sequelize from "./dbConnect.js";
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
    
const __dirname = dirname(fileURLToPath(import.meta.url));

dotenv.config();
const PORT = process.env.PORT || 8000;

try {
  await sequelize.authenticate();
  console.log("✅ Database connected successfully!");
} catch (error) {
  console.error("❌ Database connection failed:", error);
}


const app = express();

app.use(express.json());

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
  console.log("Server is up and running........", PORT);
});
