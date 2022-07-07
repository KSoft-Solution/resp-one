const router = require("express").Router();
const { getAllUser } = require("../controllers/user.controller");

router.get("/allUsers", getAllUser);

module.exports = router;
