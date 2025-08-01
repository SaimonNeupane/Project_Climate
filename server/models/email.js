import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  email: {
    type: String,
    unique: true,
  },
});

const User = mongoose.model("User", schema);

export default User;
