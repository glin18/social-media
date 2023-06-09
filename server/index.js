import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import { registerUser } from "./controllers/auth.js";
import authRoutes from "./routes/auth.js";
import { createPost } from "./controllers/posts.js";
import { verifyToken } from "./middleware/auth.js";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/posts.js";

// We are using ES6 modules instead of CommonJS because of the type: module in package.json
// Therefore, we need to redfine __filename and __dirname
const __filename = fileURLToPath(import.meta.url);
// The above code works because ESM provides a new, standardized global called import.meta.url.
// It’s available in all browsers and Node when running module code. It returns something like:
// "file:///path/to/the/current/file.js"
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();

// For POST and PUT requests
// Middleware to help deal with incoming data in the body of the request
app.use(express.json());
// express.json() allows you to recognize the incoming request object as a json object
app.use(express.urlencoded({ extended: true }));
// express.urlencoded allows you to recognize the incoming request object as a string or arrays

// app.use(helmet());
// app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// Serves static files in express
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

// Routes with files
app.post("/auth/register", registerUser);
app.post("/post/create", verifyToken, createPost);

app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/post", postRoutes);

// Mongoose Setup
const PORT = process.env.PORT || 8001;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log("LISTENING ON PORT " + PORT);
    });
  })
  .catch((err) => console.log(err));
