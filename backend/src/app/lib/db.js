import mongoose from "mongoose";
global.mongoose = {
  conn: null,
  model: null,
};

export async function dbConnect() {
  if (global.mongoose.conn && global.mongoose) {
    console.log("MongoDB connection already established");
    return global.mongoose.conn;
  } else {
    const conString = process.env.DATABASE_URL;
    const promise = mongoose.connect(conString, {
      autoIndex: true,
    });
    global.mongoose = {
      conn: await promise,
      promise,
    };
    console.log("MongoDB connection established");
    return await promise;
  }
}
