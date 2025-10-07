import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import { json, urlencoded } from "express";
import { protect } from "./middleware/auth.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

// Auth routes
app.use("/api/auth", authRoutes);

// Sample protected route
app.get("/api/profile", protect, (req, res) => {
  res.json({
    message: "This is a protected route",
    user: req.user, // logged-in user info from token
  });
});

// Centralized error handler
app.use(errorHandler);

export default app;
