const router = require("express").Router();
const { updateCompletedTask } = require("../controllers/updateTask");

router.patch("/update_completed_task", updateCompletedTask);
// patch는 변경사항에 대한 부분만 업데이트, put은 전체를 업데이트 한다.

module.exports = router;
