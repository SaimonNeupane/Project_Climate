import axios from "axios";

const baseUrl = axios.create({
  baseURL: "http://192.168.1.109:5000",
});

export const memberAPI = (email) => {
  return baseUrl.post("/verify", { email: email, role: "member" });
};
export const volunteerAPI = (body) => {
  return baseUrl.post("/send", { type: "volunteer", ...body });
};
export const subscriptionAPI = (email) => {
  return baseUrl.post("/verify", { email: email, role: "subscription" });
};
export const messageAPI = (body) => {
  return baseUrl.post("/send", { type: "message", ...body });
};
