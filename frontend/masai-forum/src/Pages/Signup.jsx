import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const FormContainer = styled.div`
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 5%;
`;

const FormTitle = styled.h2`
  text-align: center;
`;

const FormField = styled.input`
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

function SignupPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    avatar: null,
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const userData = new FormData();
    userData.append('username', formData.username);
    userData.append('email', formData.email);
    userData.append('password', formData.password);

    try {
      const response = await axios.post('https://masaiforum.onrender.com/users/register', userData);
      console.log(response.data);
      // Redirect to login page or handle success message
    } catch (error) {
      console.error('Error signing up:', error);
      // Handle error
    }
  };

  return (
    <FormContainer>
      <FormTitle>Signup</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormField type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" required />
        <FormField type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <FormField type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
        <SubmitButton type="submit">Signup</SubmitButton>
      </form>
    </FormContainer>
  );
}

export default SignupPage;
