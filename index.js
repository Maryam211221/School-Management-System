const express = require("express");

const app = express();
const port = 3000;
app.use(express.json());
const connection = require("./dependencies/connection.db");
const studentRoutes = require("./routes/student.routes");

app.use("/students", studentRoutes);

connection();
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
