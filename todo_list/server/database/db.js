import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ushagotame000:mongoose000@cluster0.j9omzp5.mongodb.net/Todo_Db?retryWrites=true&w=majority"
    );
    console.log("DB connected");
  } catch (err) {
    console.error("DB connection error: ", err);
    process.exit(1);
  }
};

export default connectDB;
