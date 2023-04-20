import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [form, setForm] = useState({});
  const navigate = useNavigate();
  //
  //
  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  //
  //
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/signup", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
    const data = await response.json();
    console.log(data);
    //
    //
    if (data.password) {
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/");
    } else alert("please enter valid details");
  };
  return (
    <div className="main-sign">
      <section className="signup-form">
        <form onSubmit={handleSubmit}>
          <h2>Sign up for an account</h2>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" placeholder="Enter your username" onChange={handleForm} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" onChange={handleForm} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" onChange={handleForm} required />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm your password" onChange={handleForm} required />
          </div>
          <button className="signup-button" type="submit">
            Sign Up
          </button>
        </form>
      </section>
    </div>
  );
}

export default SignUp;
