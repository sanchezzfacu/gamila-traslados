import mongoose from "mongoose";

export async function dbInit () {
  try {
    console.log("connecting to database ...")
    // const MONGO_URI = process.env.MONGO_DB as string;
    const MONGO_URI = "mongodb+srv://sanchezzfacu:41528175@gamila.0tm6o4s.mongodb.net/";
    const connection = mongoose.connect(MONGO_URI);

    return connection
  } catch (error) {
    console.error(error)
  }
}