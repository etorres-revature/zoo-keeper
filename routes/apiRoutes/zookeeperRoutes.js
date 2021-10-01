const router = require("express").Router();
const {
  filterByQuery,
  findByID,
  createNewZookeeper,
  validateZookeeper,
} = require("../../utils/zookeeperFuncs");
const { zookeepers } = require("../../db/zookeepers.json");

router.get("/zookeepers", (req, res) => {
  let results = zookeepers;

  if (req.query) {
    results = filterByQuery(req.query, results);
  }

  res.json(results);
});

router.get("/zookeepers/:id", (req, res) => {
  const result = findByID(req.params.id, zookeepers);

  if (result) {
    res.json(result);
  } else {
    res.status(404).send("result not found...");
  }
});

router.post("/zookeepers", (req, res) => {
  req.body.id = zookeepers.length.toString();

  if (!validateZookeeper(req.body)) {
    res
      .status(400)
      .send(
        "Your entry of this animal has not been properly formatted; please try again."
      );
  } else {
    const zookeeper = createNewZookeeper(req.body, zookeepers);

    res.json(zookeeper);
  }
});

module.exports = router;
