import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = () => {};

  return (
    <div>
      <h2>Sign-In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">
            <strong>Email</strong>
          </label>
          <input
            type="email"
            placeholder="Enter Your Email..."
            name="email"
            className="form-control"
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="password">
            <strong>Password</strong>
          </label>
          <input
            type="password"
            placeholder="Enter Your Password..."
            name="password"
            className="form-control"
            onChange={(e) => setValues({ ...values, password: e.target.value })}
          />
        </div>
        <button type="submit" className="btn">
          Sign In
        </button>
        <p>Agree to our Terms and Policies</p>
        <Link to="/register">Create Account</Link>
      </form>
    </div>
  );
};

export default Login;
