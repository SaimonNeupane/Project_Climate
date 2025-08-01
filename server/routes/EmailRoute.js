import { Router } from "express";
import { EmailValidator } from "../controller/emailValidator.js";
import { sendEmailForVolunteer } from "../controller/emailSender.js";
const router = Router();

router.post("/verify", EmailValidator);
router.post("/send", sendEmailForVolunteer);

export default router;
