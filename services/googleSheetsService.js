const { google } = require("googleapis");

const auth = new google.auth.GoogleAuth({
  keyFile: "../credentials/credentials.json", // Replace with path to your credentials.json
  scopes: [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive",
  ],
});

// const client = auth.getClient();
const sheets = google.sheets({ version: "v4", auth });

exports.getSheetData = async (spreadsheetId, range) => {
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: range || "Sheet1",
  });
  return response.data;
};

exports.createSheetData = async (spreadsheetId, range, values) => {
  const response = await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: range || "Sheet1",
    valueInputOption: "RAW",
    resource: {
      values,
    },
  });
  return response.data;
};

exports.updateSheetData = async (spreadsheetId, range, values) => {
  const response = await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: range || "Sheet1",
    valueInputOption: "RAW",
    resource: {
      values,
    },
  });
  return response.data;
};

exports.deleteSheetData = async (spreadsheetId, range) => {
  const response = await sheets.spreadsheets.values.clear({
    spreadsheetId,
    range: range || "Sheet1",
  });
  return response.data;
};

exports.createObjectsArray = (data) => {
  // let keys = [
  //   "name",
  //   "email",
  //   "phone",
  //   "field4",
  //   "field5",
  //   "field6",
  //   "field7",
  //   "field8",
  //   "field9",
  //   "field10",
  // ];
  let keys = data.values[0];
  let objects = [];

  for (let i = 1; i < data.values.length; i++) {
    let entry = data.values[i];
    let obj = {};

    for (let j = 0; j < entry.length; j++) {
      let key = keys[j] || "field" + (j + 1);
      let value = entry[j];
      obj[key] = value;
    }
    objects.push(obj);
  }

  return {
    range: data.range,
    majorDimension: data.majorDimension,
    values: objects,
  };
};
