import mongoose from 'mongoose';

const mongoURI: string = `${process.env.MONGODB_URI}` || "";

export async function initDB() {
  try {
      await mongoose.connect(mongoURI);
      console.log("MongoDB connected");
  } catch (error) {
      console.error("MongoDB connection error:", error);
  }
}

