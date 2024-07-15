import express from "express";
import connectDB from "./database/db.js";
import mongoose from "mongoose";
import router from "./routes/TodoRouters.js "

const app = express();
const PORT = 5000;

//db connection
connectDB();

// Middleware
app.use(express.json());

//api endpoints
app.use("/api/save", router);


app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running successfully on PORT ${PORT}`);
});
