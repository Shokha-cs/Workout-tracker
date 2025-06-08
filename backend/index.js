const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.static("public"));
app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ message: "This message means backend working" });
});

app.listen(5000, () => {
  console.log(`Server is running on http://localhost:5000`);
});
