import React, { useState } from "react";
import "./styles/CommentForm.css";

const CommentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Comment:", formData);
    alert("Thanks for your feedback!");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="comment-form-container">
     <h3>Something missing /wrong ?</h3>
      <h3>Leave Your Comments</h3>
      <form onSubmit={handleSubmit} className="comment-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Comment or Suggestion"
          required
          rows="5"
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommentForm;
