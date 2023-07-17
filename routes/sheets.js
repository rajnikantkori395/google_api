const express = require("express");
const router = express.Router();
const sheetsController = require("../controllers/sheetsController");

router.get("/:spreadsheetId/:range?", sheetsController.getSheet);
router.post("/:spreadsheetId/:range?", sheetsController.createSheet);
router.put("/:spreadsheetId/:range?", sheetsController.updateSheet);
router.delete("/:spreadsheetId/:range?", sheetsController.deleteSheet);

module.exports = router;
