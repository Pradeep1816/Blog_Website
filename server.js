import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import authRoute from "./routes/authRouter.js";
import postRoute from "./routes/postRoute.js";

// env config
dotenv.config();

// database connection
connectDB();
// Rest
const server = express();

// middleware
server.use(cors());
server.use(express.json());

//Router
server.use("/api/v1/auth", authRoute);
server.use("/api", postRoute);

server.get("/", (req, res) => {
  res.send("hii server");
});
const port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log(`erver is running on port ${port}`);
});
