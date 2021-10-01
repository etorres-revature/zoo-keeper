const express = require("express");
const { animals } = require("./db/animals.json");
const { filterByQuery, findByID } = require("./utils/filter");

const app = express();

const PORT = process.env.PORT || 3001;

app.get("/api/animals", (req, res) => {
  let results = animals;
  if (req.query) {
    results = filterByQuery(req.query, results);
  }

  res.json(results);
});

app.get("/api/animals/:id", (req, res) => {
  const result = findByID(req.params.id, animals);
  if (result) {
    res.json(result);
  } else {
    res.status(404).send("result not found...");
  }
});

app.listen(PORT, () =>
  console.log(`Server is live at http://localhost:${PORT}`)
);
