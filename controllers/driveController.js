const { google } = require('googleapis');
const fs = require('fs');

// Service account credentials
const credentials = require('../credentials/credential.json');

// Google Drive API configuration
const SCOPES = ['https://www.googleapis.com/auth/drive'];
const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: SCOPES,
});
const drive = google.drive({ version: 'v3', auth });

// Controller methods for interacting with Google Drive
const driveController = {
  uploadFile: async (req, res) => {
    try {
        console.log("inside upload try");
      const { filePath, mimeType, folderId } = req.body;

      const fileMetadata = {
        name: 'MyFile', // Specify the desired name for the uploaded file
        parents: [folderId], // Specify the folder ID where the file should be uploaded
      };

      const media = {
        mimeType,
        body: fs.createReadStream(filePath),
      };

      const response = await drive.files.create({
        requestBody: fileMetadata,
        media,
      });

      res.status(200).json(response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
      res.status(500).json({ error: 'Error uploading file' });
    }
  },
};

module.exports = driveController;
