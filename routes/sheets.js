const express = require("express");
const router = express.Router();
const sheetsController = require("../controllers/sheetsController");
const driveController = require('../controllers/driveController');

router.get("/:spreadsheetId/:range?", sheetsController.getSheet);
router.post("/:spreadsheetId/:range?", sheetsController.createSheet);
router.put("/:spreadsheetId/:range?", sheetsController.updateSheet);
router.delete("/:spreadsheetId/:range?", sheetsController.deleteSheet);
router.post('/upload', driveController.uploadFile);

module.exports = router;
