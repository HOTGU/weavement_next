import mongoose from "mongoose";

const connection = {};

async function dbConnect() {
  if (connection.isConnected) {
    console.log("❤️ 기존 DB 연결");
    return;
  }

  console.log("👌 새로 DB 연결");
  console.log(process.env.NODE_ENV);
  const db = await mongoose.connect(process.env.MONGO_URL);
  connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;
