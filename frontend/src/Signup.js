


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './SignupValidation';
import axios from 'axios';

function Signup() {
  const [values, setValues] = useState({
    fullname: '',
    username: '',
    password: ''
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if (Object.keys(errors).length === 0) {
      axios.post('http://localhost:8081/signup', values)
        .then(res => {
          navigate('/login');
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div className='d-flex justify-content-center align-item-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h1>Signup page</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='fullname'>Full Name:</label>
            <input type="text" value={values.fullname} onChange={handleInput} className='form-control rounded-0' placeholder='Enter your name' name='fullname' />
            {errors.fullname && <span className='text-danger'>{errors.fullname}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor='username'>Username:</label>
            <input type="text" value={values.username} onChange={handleInput} className='form-control rounded-0' placeholder='Enter your username' name='username' />
            {errors.username && <span className='text-danger'>{errors.username}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor='password'>Password:</label>
            <input type="password" value={values.password} onChange={handleInput} className='form-control rounded-0' placeholder='Enter your password' name='password' />
            {errors.password && <span className='text-danger'>{errors.password}</span>}
          </div>
          <button type='submit' className="btn btn-success w-100 rounded-0">Signup</button>
          <p>Already have an account?</p>
          <Link to="/login" className='btn btn-default border w-100 bg-secondary w-100 text-decoration-none'>Login</Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;