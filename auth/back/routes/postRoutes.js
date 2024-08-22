const router = require("express").Router();
const { postTask } = require("../controllers/postTask");
const { postUser } = require("../controllers/postUser");

router.post("/post_task", postTask);
router.post("/register", postUser);

module.exports = router;
