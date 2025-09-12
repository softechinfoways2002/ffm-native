require("dotenv").config();
const app = require("./src/app");
const connectToDb = require("./src/database/db");

// Connect to database
connectToDb();

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
