import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "HOSPITAL-MANAGEMENT",
    });
    console.log("database connected");
  } catch (error) {
    console.error("database connection error" + error);
  }
};
