const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const extensionRouter = require("./routes/extensionListRouter");

app.use(express.json());
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use("/", extensionRouter);

// Connect first, then start server
(async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/extensions");
    console.log("MongoDB Connected!");

    app.listen(8000, "0.0.0.0", () => {
      console.log("Server started on port 8000");
    });
  } catch (err) {
    console.error("Mongo connect error:", err);
    process.exit(1);
  }
})();
