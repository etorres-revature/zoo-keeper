const express = require("express");
const { animals } = require("./db/animals.json");

const app = express();

const PORT = process.env.PORT || 3001;

app.get("/api/animals", (req, res) => {
  res.json(animals);
});

app.listen(PORT, () =>
  console.log(`Server is live at http://localhost:${PORT}`)
);
