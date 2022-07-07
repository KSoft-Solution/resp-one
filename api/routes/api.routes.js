const router = require("express").Router();

//product routes
const userRoute = require("./user.routes");

router.use("/user", userRoute);

module.exports = router;
