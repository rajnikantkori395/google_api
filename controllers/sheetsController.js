const sheetsService = require("../services/googleSheetsService.js");

exports.getSheet = async (req, res) => {
  try {
    const { spreadsheetId, range } = req.params;
    const sheetData = await sheetsService.getSheetData(spreadsheetId, range);
    console.log(sheetData);
    const processedData = sheetsService.createObjectsArray(sheetData);
    res.json(processedData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createSheet = async (req, res) => {
  try {
    const { spreadsheetId, range } = req.params;
    console.log(req.body);
    const values = [Object.values(req.body)]; // array of arrays 
    console.log(values);
    await sheetsService.createSheetData(spreadsheetId, range, values);
    res.sendStatus(201);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateSheet = async (req, res) => {
  try {
    const { spreadsheetId, range } = req.params;
    // const { values } = req.body;
    const values = [Object.values(req.body)]; 
    await sheetsService.updateSheetData(spreadsheetId, range, values);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteSheet = async (req, res) => {
  try {
    const { spreadsheetId, range } = req.params;
    await sheetsService.deleteSheetData(spreadsheetId, range);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
