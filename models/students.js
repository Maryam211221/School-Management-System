const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  rollnumber: { type: String, required: true },
  email: { type: String, required: true },
});

const student = mongoose.model("students", studentSchema);

module.exports = student;
