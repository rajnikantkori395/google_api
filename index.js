const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sheetsRouter = require("./routes/sheets");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// app.use("/", (req, res) => {
//   res.json({
//     message: "Hello from express server APP",
//   });
// });
app.use("/api/sheets", sheetsRouter);
// Handle all other routes
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
