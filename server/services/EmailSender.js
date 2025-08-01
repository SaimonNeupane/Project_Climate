import nodemailer from "nodemailer";
import { configDotenv } from "dotenv";

configDotenv();
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.APP_PASSWORD,
  },
});
async function sendMail(volunteerData) {
  const { name, email, age, inspiration } = volunteerData;

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; background-color: #f4f8f4; padding: 20px; border-radius: 10px; border: 1px solid #d4e5d4;">
      <h2 style="color: #2e7d32; text-align: center;">🌿 New Volunteer Request - Climate Care Network</h2>
      <p style="font-size: 16px; color: #333;">A new user has shown interest in volunteering. Here are their details:</p>
      
      <table style="width: 100%; border-collapse: collapse; font-size: 16px;">
        <tr>
          <td style="padding: 8px; font-weight: bold; color: #2e7d32;">Name:</td>
          <td style="padding: 8px;">${name}</td>
        </tr>
        <tr style="background-color: #eaf4ea;">
          <td style="padding: 8px; font-weight: bold; color: #2e7d32;">Email:</td>
          <td style="padding: 8px;">${email}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold; color: #2e7d32;">Age:</td>
          <td style="padding: 8px;">${age}</td>
        </tr>
        <tr style="background-color: #eaf4ea;">
          <td style="padding: 8px; font-weight: bold; color: #2e7d32;">Inspiration:</td>
          <td style="padding: 8px;">${inspiration}</td>
        </tr>
      </table>

      <p style="margin-top: 30px; font-size: 14px; color: #777;">
        This request was submitted via the Climate Care Network website.
      </p>
    </div>
  `;

  const mailOptions = {
    from: `"CCN Volunteer Form" <${process.env.GMAIL_USER}>`,
    to: "climatecarenetwork@gmail.com",
    subject: "🌍 New Volunteer Request - CCN",
    html: htmlContent,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    return info;
  } catch (err) {
    console.error("Error sending mail:", err);
    return;
  }
}

export default sendMail;
