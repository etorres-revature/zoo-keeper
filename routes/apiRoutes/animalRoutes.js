const router = require("express").Router();
const { filterByQuery, findByID } = require("../../utils/filter");
const { animals } = require("../../db/animals.json");

router.get("/animals", (req, res) => {
  let results = animals;
  if (req.query) {
    results = filterByQuery(req.query, results);
  }

  res.json(results);
});

router.get("/animals/:id", (req, res) => {
  const result = findByID(req.params.id, animals);
  if (result) {
    res.json(result);
  } else {
    res.status(404).send("result not found...");
  }
});

router.post("/animals", (req, res) => {});

module.exports = router;
