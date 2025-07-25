import express from "express";
import { createUser } from "../src/controller/userController.js";
import userRoutes from "../src/routes/userRoutes.js";
import { configDotenv } from "dotenv";
import connectDb from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import authRoutes from "../src/routes/authRoutes.js";
import cookieParser from "cookie-parser";
import constant from "./config/constant.js";
import cors from "cors";

configDotenv();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// const express = require('express')

connectDb();

app.get("/test", (req, res) => {
  res.cookie("name", "adit", {
    maxAge: 5 * 1000,
    httpOnly: true,
  });
  res
    .status(200)
    .send(
      "<b><a style='color: white; background: black; padding: 2px'>Hello</a>, Welcome to my app!</b>"
    );
});

app.get("/api/clear-cookie", (req, res) => {
  res.clearCookie("name", {
    maxAge: 1 * 50 * 1000,
    httpOnly: true,
  });
  res.status(200).send("cookie cleared");
});

app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);
app.use("/api/auth", authRoutes);

const port = constant.PORT;
app.listen(4000, () => {
  console.log(`The port is running in the${port}`);
});
