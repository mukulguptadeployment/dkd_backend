import express from "express";
import createUserTable from "../../Schema/UserSchema.js";
import User from "../../Schema/UserSchema.js";
import { sendWeclomeMail } from "../../helpers/mailer.js";

const app = express.Router();

app.get("/", async (req, res) => {
  const isTableCreated = await createUserTable();
  res.json({
    message: isTableCreated
      ? "User Table Created"
      : "Error in Creation please check log",
  });
});

app.post("/login", (req, res) => {});

app.post("/sign-up", (req, res) => {
  console.log(">>>>>>>>");
  User.create({
    name: req.body.name,
    email: req.body.email,
    phone_number: req.body.phone_number,
    password: req.body.password,
    reffered_by: req?.body?.reffered_by ?? null,
    source: req.body.source ?? null,
  })
    .then((user) => {
      // Send welcome email
      sendWeclomeMail(user.email, user.name);
      res.status(201).json({ message: "User created successfully", user });
    })
    .catch((error) => {
      res.status(500).json({ message: "Error creating user", error });
    });
});

export default app;
