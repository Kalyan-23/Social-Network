import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import commentRoute from "./routes/comment.routes.js";
import friendRoute from "./routes/friendRequests.routes.js";
import postRoute from "./routes/post.routes.js";
import saves from "./routes/saves.routes.js";
import userRoute from "./routes/user.routes.js";
import storyRoute from "./routes/story.routes.js";
import notificationRoute from "./routes/notification.routes.js";

const app = express();

const allowedOrigins = (process.env.CORS_ORIGIN || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

const allowAllOrigins =
  allowedOrigins.length === 0 || allowedOrigins.includes("*");

app.use(
  cors({
    origin(origin, callback) {
      // Allow requests without an origin header, like Postman or server-to-server calls.
      if (!origin || allowAllOrigins) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      console.log("Blocked by CORS:", origin);
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ limit: "16kb", extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

app.use("/api/comments", commentRoute);
app.use("/api/friendRequests", friendRoute);
app.use("/api/notifications", notificationRoute);
app.use("/api/posts", postRoute);
app.use("/api/saves", saves);
app.use("/api/user", userRoute);
app.use("/api/story", storyRoute);

app.use((err, req, res, next) => {
  console.error("Error:", err.message);

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    statusCode,
    message: err.message || "Internal server error",
    errors: err.errors || [],
  });
});

export { app };
