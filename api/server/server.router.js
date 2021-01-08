const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
  login,addReport
} = require("./server.controller");

router.post("/login", login);
router.post("/report",checkToken, addReport);

module.exports = router;
