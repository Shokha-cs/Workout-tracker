const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const quoteRoutes = require("./routes/quotes");
app.use("/api/quotes", quoteRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
