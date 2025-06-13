const express = require("express");
const cors = require("cors");
const path = require("node:path")


const app = express();

app.use(cors({ origin: "http://localhost:5173" }));

app.use((req, res, next) => {
  console.log("Request received:", req.method, req.url);
  next();
});

const quoteRoutes = require("./routes/quotes");
app.use("/api/quotes", quoteRoutes);

app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("/*path", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/dist", "index.html"));
});

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
