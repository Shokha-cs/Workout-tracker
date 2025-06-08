const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));

app.use((req, res, next) => {
  console.log("Request received:", req.method, req.url);
  next();
});

app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.use("/api/quotes", require("./routes/quotes"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
