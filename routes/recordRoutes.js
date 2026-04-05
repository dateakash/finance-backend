const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const {
  createRecord,
  getRecords,
  deleteRecord,
} = require("../controllers/recordController");

router.post("/", auth, role("admin"), createRecord);
router.get("/", auth, role("analyst", "admin"), getRecords);
router.delete("/:id", auth, role("admin"), deleteRecord);

module.exports = router;