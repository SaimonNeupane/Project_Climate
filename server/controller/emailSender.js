import sendMail from "../services/EmailSender.js";
export const sendEmailForVolunteer = async (req, res, next) => {
  const { name, email, age, inspiration } = req.body;
  if (!name || !email || !age || !inspiration) {
    return res.status(400).json({
      status: "Fail",
      mesasge: "some field is missing",
    });
  }
  const response = await sendMail({ name, email, age, inspiration });

  return res.status(200).json({
    status: "success",
    message: response,
  });
};
