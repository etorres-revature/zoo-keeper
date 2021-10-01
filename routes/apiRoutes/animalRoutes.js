const router = require("express").Router();
const {
  filterByQuery,
  findByID,
  createNewAnimal,
  validateAnimal,
} = require("../../utils/filter");
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

router.post("/animals", (req, res) => {
  req.body.id = animals.length.toString();

  if (!validateAnimal(req.body)) {
    res
      .status(400)
      .send(
        "Your entry of this animal has not been properly formatted; please try again."
      );
  } else {
    const animal = createNewAnimal(req.body, animals);

    res.status(201).json(animal);
  }
});

module.exports = router;
