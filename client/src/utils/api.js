import axios from "axios";

const baseUrl = axios.create({
  baseURL: "http://localhost:5000",
});

export const memberAPI = (email) => {
  return baseUrl.post("/email/verify", { email: email });
};
export const volunteerAPI = (body) => {
  return baseUrl.post("/email/send", body);
};
