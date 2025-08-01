import { configDotenv } from "dotenv";
import User from "../models/email.js";

export const EmailValidator = async (req, res, next) => {
  try {
    const access_key = process.env.API_KEY;
    console.log(req.body);
    const { email } = req.body;
    const response = await fetch(
      `http://apilayer.net/api/check?access_key=${access_key}&email=${email}`
    );
    const data = await response.json();

    if (data.smtp_check) {
      const save = await User.create({
        email,
      });
      if (!save) {
        return res.status(400).json({
          status: "fail",
          message: "Couldnot save the email",
        });
      }
      return res.status(200).json({
        status: "success",
        message: "The email is verified",
      });
    } else {
      return res.status(400).json({
        status: "fail",
        message: "The email couldnot be verified",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
