// CAROLINA ROJAS COLLANTE
import React, { useState } from 'react';
import './Form.css'; 

function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="form-container">
      <form>
        <div className="form-group">
          <label>First Name</label>
          <input 
            type="text" 
            name="firstName" 
            value={formData.firstName} 
            onChange={handleChange} 
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input 
            type="text" 
            name="lastName" 
            value={formData.lastName} 
            onChange={handleChange} 
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input 
            type="password" 
            name="confirmPassword" 
            value={formData.confirmPassword} 
            onChange={handleChange} 
            className="form-input"
          />
        </div>
      </form>

      <div className="form-data">
        <h3>Your Form Data</h3>
        <p>First Name: {formData.firstName}</p>
        <p>Last Name: {formData.lastName}</p>
        <p>Email: {formData.email}</p>
        <p>Password: {formData.password}</p>
        <p>Confirm Password: {formData.confirmPassword}</p>
      </div>
    </div>
  );
}

export default Form;
