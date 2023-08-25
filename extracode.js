// Sample Code
// Create a new user(a single student data)

router.post("/add", async (req, res) => {
  let { name, age, rollnumber, email } = req.body;

  try {
    let data = new student({
      name,
      age,
      rollnumber,
      email,
    });
    let createdStudent = await data.save();
    console.log(createdStudent);
    res.status(201).json({
      status: "Success",
      data: {
        createdStudent,
      },
    });
  } catch (err) {
    console.log(err);
  }
});
// get method
// if i want to find just names or age or anything so i will use this code

const insertedStudents = await student.find().select("name");
const insertedStudent = await student.find().select("age");

// if we want to delete a single student data by its id
// delete-Method
router.delete("/delete-student/:id", async (req, res) => {
  try {
    const studentId = req.params.id;

    const deletedstudent = await student.findByIdAndDelete(
      "64e73b6326a4129662f63a8f"
    );

    if (!deletedstudent) {
      return res.status(404).json({ message: "student not found" });
    }

    res.json({ message: "Item deleted successfully", data: deletedstudent });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting item", error: error.message });
  }
});

// update the student data by its name
router.put("/update-student/:name", async (req, res) => {
  try {
    const studentName = req.params.name;
    const updatedData = req.body; // Updated data

    // Update the student by their name
    const updateResult = await student.updateOne(
      { name: studentName },
      { $set: updatedData }
    );

    res.json({ message: "student updated successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating student", error: error.message });
  }
});
