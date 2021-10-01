const express = require("express");
const { animals } = require("./db/animals.json");
const filterByQuery = require("./utils/filter");

const app = express();

const PORT = process.env.PORT || 3001;

app.get("/api/animals", (req, res) => {
  let results = animals;
  if (req.query) {
    results = filterByQuery(req.query, results);
  }
  res.json(results);
});

app.listen(PORT, () =>
  console.log(`Server is live at http://localhost:${PORT}`)
);
