const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

// CORS for dev only — you can relax or update this for deployment
app.use(cors({ origin: "*" }));

// Middleware
app.use(express.json());

// Serve static frontend files (after build)
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// API routes
const quoteRoutes = require("./routes/quotes");
app.use("/api/quotes", quoteRoutes);

// Catch-all route for SPA
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
