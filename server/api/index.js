import express from "express";
import connectDatabase from "./db.js";
import { configDotenv } from "dotenv";
import emailChecker from "../routes/EmailRoute.js";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";

configDotenv();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("dev"));

connectDatabase();
app.get("/", (req, res) => {
  res.send("Server has started");
});
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the Climate Project API" });
});

app.use("/", emailChecker);

app.listen(5000, "0.0.0.0", () => {
  console.log("server currently running on port 5000");
});
