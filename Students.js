import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const response = await axios.get("https://your-api-url.com/students");
    setStudents(response.data.data);
  };

  const deleteStudent = async (id) => {
    await axios.delete(`https://your-api-url.com/students/${id}`);
    fetchStudents();
  };

  return (
    <div>
      <h2>Student List</h2>
      <Link to="/create">Add New Student</Link>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} - {student.gender} - {student.gpa}
            <button onClick={() => deleteStudent(student.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Students;
