const router = require("express").Router();

router.use(require("./animalRoutes"))
router.use(requier("./zookeeperRoutes"))

module.exports = router;