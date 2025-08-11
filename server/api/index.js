import express from "express";
import connectDatabase from "../db.js";
import { configDotenv } from "dotenv";
import emailChecker from "../routes/EmailRoute.js";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import serverless from "serverless-http";

configDotenv();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("dev"));

connectDatabase();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the Climate Project API" });
});

app.use("/", emailChecker);

// ✅ For Vercel — must be the default export
export default serverless(app);

// ✅ For Local
// if (process.env.NODE_ENV !== "production") {
//   const PORT = process.env.PORT || 5000;
//   app.listen(PORT, () => {
//     console.log(`Server running locally on port ${PORT}`);
//   });
// }
