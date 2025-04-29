import React, { useState } from "react";
import "./StudentLoginForm.css"; 

export default function StudentLoginForm() {
  const [formData, setFormData] = useState({
    name: "",
    matric: "",
    level: "",
    course: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    alert("Form submitted!");
  };

  return (
    <div className="form-container">
      <form className="form-box" onSubmit={handleSubmit}>
        <h2>Student Login Form</h2>

        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Matric Number:
          <input
            type="text"
            name="matric"
            value={formData.matric}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Level:
          <input
            type="text"
            name="level"
            value={formData.level}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Course:
          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}