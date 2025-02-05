// Import required packages
const express = require("express");
const fs = require("fs");
const XLSX = require("xlsx");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, "students.xlsx");

app.use(express.json());

// Utility to read Excel file
function readStudents() {
  if (!fs.existsSync(DATA_FILE)) return [];
  const workbook = XLSX.readFile(DATA_FILE);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  return XLSX.utils.sheet_to_json(sheet);
}

// Utility to write data to Excel file
function writeStudents(data) {
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet(data);
  XLSX.utils.book_append_sheet(workbook, worksheet, "Students");
  XLSX.writeFile(workbook, DATA_FILE);
}

// GET endpoint to fetch all students
app.get("/students", (req, res) => {
  try {
    const students = readStudents();
    res.json({ success: true, data: students });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error reading students." });
  }
});

// POST endpoint to create a new student
app.post("/students", (req, res) => {
  try {
    const { id, name, gender, gpa } = req.body;
    if (!id || !name || !gender || gpa === undefined) {
      return res.status(400).json({ success: false, message: "All fields are required." });
    }

    const students = readStudents();
    students.push({ id, name, gender, gpa });
    writeStudents(students);

    res.status(201).json({ success: true, message: "Student added successfully." });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error writing student data." });
  }
});

// DELETE endpoint to remove a student by ID
app.delete("/students/:id", (req, res) => {
  try {
    const { id } = req.params;
    let students = readStudents();
    const initialLength = students.length;
    students = students.filter(student => student.id !== id);

    if (students.length === initialLength) {
      return res.status(404).json({ success: false, message: "Student not found." });
    }

    writeStudents(students);
    res.json({ success: true, message: "Student removed successfully." });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error deleting student." });
  }
});

// PUT endpoint to update a student by ID
app.put("/students/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { name, gender, gpa } = req.body;
    if (!name && !gender && gpa === undefined) {
      return res.status(400).json({ success: false, message: "At least one field is required to update." });
    }

    let students = readStudents();
    const studentIndex = students.findIndex(student => student.id === id);

    if (studentIndex === -1) {
      return res.status(404).json({ success: false, message: "Student not found." });
    }

    const updatedStudent = { ...students[studentIndex], name, gender, gpa };
    students[studentIndex] = updatedStudent;
    writeStudents(students);

    res.json({ success: true, message: "Student updated successfully.", data: updatedStudent });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error updating student." });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});