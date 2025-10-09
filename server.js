const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, (0.0.0.0) => {
  console.log(`🚀 Web Game running at http://0.0.0.0:${PORT}`);
});
