import mongoose from "mongoose";
import dbConnect from "./dbConnect";

export const dbConnectMiddleware = async (req, res, next) => {
  // if (!global.mongoose) {
  //   console.log(`👌db 새로연결`);
  //   global.mongoose = await mongoose.connect(process.env.MONGO_URL);
  // }
  // console.log(`👌db 연결성공`);
  await dbConnect();
  next();
};
