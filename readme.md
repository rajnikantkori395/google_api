
Before you can use this API, you'll need the following:

    Node.js and npm installed on your machine.
    A Google account with access to Google Sheets.
    Enable the Google Sheets API and obtain credentials for your application. Refer to the Google Sheets API documentation for instructions on how to set up credentials.

Getting Started

    Clone this repository to your local machine or download the source code.

    Install the required dependencies by running the following command in the project directory:
-----------------------

npm install
----------------------

    npm start

    The API will be running on http://localhost:9000 by default.

API Endpoints

The following endpoints are available for interacting with the Google Sheet:

    GET /sheets/:spreadsheetId/:range? - Retrieve all rows from the Google Sheet.
    POST /sheets/:spreadsheetId/:range? - Add a new row to the Google Sheet. The request body should contain the row data in JSON format.
    PUT /sheets/:spreadsheetId/:range? - Update a specific row in the Google Sheet based on the row ID. The request body should contain the updated row data in JSON format.
    DELETE /sheets/:spreadsheetId/:range? - Delete a specific row from the Google Sheet based on the row ID.


In Google Sheets, you can specify ranges using a specific format that consists of the sheet name, followed by an exclamation mark (!), and then the range itself. Here's the format for different types of ranges:

    Single Cell:
        Format: sheet_name!A1
        Example: Sheet1!A1

    Multiple Cells (Rectangular range):
        Format: sheet_name!A1:B10
        Example: Sheet1!A1:B10

    Entire Column:
        Format: sheet_name!A:A
        Example: Sheet1!A:A

    Entire Row:
        Format: sheet_name!1:1
        Example: Sheet1!1:1

    Multiple Non-adjacent Ranges:
        Format: sheet_name!A1:B10,E1:F10
        Example: Sheet1!A1:B10,E1:F10

You can also use named ranges to refer to specific ranges in your spreadsheet. To create a named range, select the range of cells, go to the "Data" menu, choose "Named ranges," and specify a name for the range. Once you've created a named range, you can use its name in formulas or when referencing cells.

Remember to replace sheet_name with the actual name of the sheet in your Google Sheets document.