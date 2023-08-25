const express = require("express");
const student = require("../models/students");
const router = express.Router();

// create multiple students data and save in database
router.post("/add-students", async (req, res) => {
  try {
    const { name, age, rollnumber, email } = req.body; // Array of items

    // Insert the array of documents into the collection
    const insertedStudents = await student.insertMany(req.body);

    res.json({
      message: "students inserted successfully",
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error inserting students", error: error.message });
  }
});

// Get method
// how to get data from data base
router.get("/get-students", async (req, res) => {
  try {
    const insertedStudents = await student.find(); // Retrieve all students from database

    res.json({ data: insertedStudents });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error getting students", error: error.message });
  }
});
// Delete Method

// delete multple student data
router.delete("/delete-students", async (req, res) => {
  try {
    const deletionCriteria = req.body; // Criteria for deleting students

    // Delete students based on the provided criteria
    const deletionResult = await student.deleteMany(deletionCriteria);

    res.json({
      message: "Students deleted successfully",
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting students", error: error.message });
  }
});

// update-method
router.put("/update-student/:id", async (req, res) => {
  try {
    const studentId = req.params.id;
    const updatedData = req.body; // Updated data

    // Update the student by its ID
    const updateResult = await student.updateOne(
      { _id: studentId },
      { $set: updatedData }
    );

    res.json({ message: "student updated successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating student", error: error.message });
  }
});

module.exports = router;
