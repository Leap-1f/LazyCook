import { Schema, model, models } from "mongoose";

const foodSchema = new Schema({
  title: { type: String, required: true },
  ingredients: [{ name: String, quantity: String }],
  description: String,
  instructions: String,
  image: String,
  prepTime: String,
  cookTime: String,
  totalTime: String,
  createdAt: { type: Date, default: Date.now },
});

export const FoodModel = models.foods || model("foods", foodSchema);
