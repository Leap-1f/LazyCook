import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../database";
import { FoodModel } from "../models/food.model";
export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    await connectToDatabase();
    const food = await FoodModel.create({
      title: req.body,
      ingredients: req.body,
      description: req.body,
      instructions: req.body,
      image: req.body,
      prepTime: req.body,
      cookTime: req.body,
      totalTime: req.body,
    });
    return NextResponse.json({
      message: `Food added successfully:${food}`,
    });
  } catch (error) {
    console.error("Error POST request:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
};
