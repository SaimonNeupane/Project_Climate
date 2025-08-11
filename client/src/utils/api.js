import axios from "axios";

const baseUrl = axios.create({
  baseURL: "http://192.168.1.109:5000",
});

export const memberAPI = (email) => {
  return baseUrl.post("/email/verify", { email: email });
};
export const volunteerAPI = (body) => {
  return baseUrl.post("/email/send", body);
};
