const express = require("express");
const cors = require("cors");

const app = express();

// Enable CORS for all routes and origins (for dev)
app.use(cors());

// If you want to restrict to your frontend only:
// app.use(cors({ origin: 'http://localhost:5173' }));

// Your routes
const quotesRouter = require("./routes/quotes");
app.use("/api/quotes", quotesRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
