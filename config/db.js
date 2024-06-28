import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`connected to databases${con.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
