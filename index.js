const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sheetsRouter = require("./routes/sheets");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/sheets", sheetsRouter);
// Handle all other routes
app.use((req, res) => {
  res.status(404).json({
    error: "This is a Home Route, no data here.",
    available_routes: `GET /sheets/:spreadsheetId/:range? - Retrieve all rows from the Google Sheet.
  POST /sheets/:spreadsheetId/:range? - Add a new row to the Google Sheet. The request body should contain the row data in JSON format.
  PUT /sheets/:spreadsheetId/:range? - Update a specific row in the Google Sheet based on the row ID. The request body should contain the updated row data in JSON format.
  DELETE /sheets/:spreadsheetId/:range? - Delete a specific row from the Google Sheet based on the row ID.`,
  });
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
