const router = require("express").Router();
const homeRoutes = require("./home-routes.js");
const dashRoutes = require("./dashboard-routes");
const apiRoutes = require("./api/");

router.use("/api", apiRoutes);
router.use("/dashboard", dashRoutes);
router.use("/", homeRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
