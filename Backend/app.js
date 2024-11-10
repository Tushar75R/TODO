import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./Database/connectDB.js";
import { errorMiddleware } from "./util/ErrorHandler.js";
import route from "./routes/route.js";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();
connectDB();
app.use(express.json());
app.use(cookieParser());
app.get("/", (req, res) => {
  return res.status(200).json({ message: "Home Route" });
});

app.use("/api", route);

app.use(errorMiddleware);
app.listen(process.env.PORT || 3100, () => {
  console.log(`Server running on port ${process.env.PORT || 3100}`);
});
