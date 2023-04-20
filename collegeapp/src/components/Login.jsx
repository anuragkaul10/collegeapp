import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit() {
    if (!password || !email) {
      setError(true);
      return false;
    }

    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      mode: "cors",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);

    if (result.password) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } else alert("please enter valid details");
  }
  return (
    <div className="main-sign">
      <section className="login-form">
        <form onSubmit={(event) => event.preventDefault()}>
          <h2>Login to your account</h2>
          <div className="form-group">
            <label htmlFor="username">Email:</label>
            <input type="text" id="email" name="email" placeholder="Enter your email" value={email} onChange={(event) => setEmail(event.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" value={password} onChange={(event) => setPassword(event.target.value)} required />
          </div>
          <button className="login-button" type="submit" onClick={handleSubmit}>
            Login
          </button>
        </form>
      </section>
    </div>
  );
};

export default Login;
