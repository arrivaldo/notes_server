import mongoose, { Mongoose } from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file


const connectToMongoDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://note:kAj28Yz67o6mNW8V@note-app.sghyo.mongodb.net/?retryWrites=true&w=majority&appName=note-app"
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB", error.message);
  }
};

export default connectToMongoDB;
