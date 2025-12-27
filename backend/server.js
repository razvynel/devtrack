const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const authRoutes = require("./routes/auth");
const authMiddleware = require("./middleware/auth");

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("❌ MONGO_URI is not defined");
  process.exit(1);
}

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection with retry
const connectWithRetry = () => {
  console.log("⏳ Connecting to MongoDB...");
  mongoose
    .connect(MONGO_URI)
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch((err) => {
      console.error(
        "❌ MongoDB connection failed, retrying in 5s...",
        err.message
      );
      setTimeout(connectWithRetry, 5000);
    });
};

connectWithRetry();

// Routes
app.use("/auth", authRoutes);

app.get("/protected", authMiddleware, (req, res) => {
  res.json({ message: "Access granted", userId: req.userId });
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    dbState: mongoose.connection.readyState,
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Backend running on port ${PORT}`);
});

