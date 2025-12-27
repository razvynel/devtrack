const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("❌ MONGO_URI is not defined");
  process.exit(1);
}

// middleware
app.use(cors());
app.use(express.json());

// retry logic
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

// health
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    dbState: mongoose.connection.readyState,
  });
});

app.listen(PORT, () => {
  console.log(`✅ Backend running on port ${PORT}`);
});

