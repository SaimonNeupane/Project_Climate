import express from "express";
import mongoose from "mongoose";
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

await mongoose.connect(process.env.DATABSE_URL).then(() => {
  console.log("successfully connected to database");
});
app.get("/", (req, res) => {
  res.send("Server has started");
});

app.use("/email/", emailChecker);

app.listen(5000, () => {
  console.log("server currently running on port 5000");
});
