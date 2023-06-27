
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import LoginValidation from './LoginValidation';

function Login() {
  const [values, setValues] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
  event.preventDefault();
  setErrors(LoginValidation(values));

  if (Object.keys(errors).length === 0) {
    const { username, password } = values;

    axios.post('http://localhost:8081/login', { username, password })
      .then((res) => {
        if (res.data.success === 'otheruser') {
          navigate('/home');
        } else if (res.data.success === 'staff') {
          navigate('/staff');
        } else {
          alert('Invalid role');
        }
      })
      .catch((err) => console.log(err));
  }
};
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h1>Login page</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              value={values.username}
              onChange={handleInput}
              className="form-control rounded-0"
              placeholder="Enter your username"
            />
            {errors.username && <span className="text-danger">{errors.username}</span>}
          </div>

          <div className="mb-3">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleInput}
              className="form-control rounded-0"
              placeholder="Enter your password"
            />
            {errors.password && <span className="text-danger">{errors.password}</span>}
          </div>

          <button type="submit" className="btn btn-success w-100 rounded-0">
            Login
          </button>
          <p>Don't have an account?</p>
          <Link to="/signup" className="btn btn-default border w-100 bg-secondary text-decoration-none">
            Create Account
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;






