const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));


app.use((req, res, next) => {
  console.log("Request received:", req.method, req.url);
  next();
});

const quoteRoutes = require("./routes/quotes"); 
app.use("/api/quotes", quoteRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
