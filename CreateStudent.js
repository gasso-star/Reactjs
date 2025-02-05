import React, { useState } from "react";
import axios from "axios";

const CreateStudent = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "female",
    email: "",
    gpa: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      alert("Invalid Email");
      return;
    }
    await axios.post("https://your-api-url.com/students", formData);
    window.location.href = "/";
  };

  const validateEmail = (email) => {
    return /^[\\w-.]+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$/.test(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Student</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Gender:</label>
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>GPA:</label>
        <input
          type="number"
          name="gpa"
          value={formData.gpa}
          onChange={handleChange}
        />
      </div>
      <button type="submit" disabled={!formData.name}>
        Create
      </button>
    </form>
  );
};

export default CreateStudent;
