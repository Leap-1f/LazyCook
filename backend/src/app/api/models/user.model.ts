import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  _id: { type: String, required: true },
  tenant: { type: String, required: true },
  connection: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  debug: { type: Boolean, default: false },
  is_signup: { type: Boolean, default: false },
  usePasskey: { type: Boolean, default: false },
});

export const UserModel = models.users || model("users", userSchema);
