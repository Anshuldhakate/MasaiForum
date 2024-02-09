import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('https://masaiforum.onrender.com/users/login', formData);
      console.log(response.data);
      // Redirect to feed page or handle success message
    } catch (error) {
      console.error('Error logging in:', error);
      // Handle error
    }
  };

  return (
    <DIV>
      <form onSubmit={handleSubmit}>

        <div className="container">
            <div className="imag">
              <img src="https://s3-alpha-sig.figma.com/img/741a/304e/6aeb4d492404ee3b62a8dafddbe2b5d0?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MEHVykDkxbmv9uhykU06aEiSY1ESXlBACD2kiqj9ctMZQIH16QSlA6PW~wQW1DYWu5AzznCQbVi4KbFTML2M~RM84SwMHcqBet63SJEbgq7R1W8cnpLMDHJu4eSpPepTWsj044970qKgU1ezURBOrsndZRGqj6~J7t~hjke4cJ6rw8c0eIvYu~ZUGl2NjK6KEXJ0-9CvWFEHAeM2A5DX0KPDRWeMNQDrl5qN1Pw7I5wHh0A~c~r4sIwdqq2FnTgRBYsTC3iOYohbPARKJECq6FxJy2~0EY0qH9EI24M7CCm43nUgkl6JmEf6T52Z023U8pV9LMVg5uhFJ4xeytj7mQ__" alt="img" />
            </div>

            <div className="text">
                <h2>MASAI FORUM</h2>
                <h3>Nice to see you again</h3>
                <p>Login</p>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Email or Phone number' /><br />
                <p>Password</p>
                <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder='Enter password' /><br />
                <button type="submit" className='sign'>Sign In</button><br />
                <button className='google'>Signin with Google</button> <br />
                <p>Don't have account?</p>
                <Link to="/signup">Signup</Link>    
            </div>
        </div>
      </form>
    </DIV>
  );
}

export default LoginPage;

const DIV= styled.div`
    .container{
        display: flex;
        width: Fixed (1,440px);
        height: Fixed (900.5px);
        top: -1024px;
        left: -3202px;
        border: 1px solid black;

    }

    .container img{
        width: 860px;
        height: 500.5px;
        rotate: -180;
        border: 1px solid black;
    }
    .text{
        width: Fill (360px);
        height: Hug (560.5px);
        gap: 48px;
        padding-left: 4%;
    }
    .text h2{
        width: 200px;
        height: 20px;
        font-family: Roboto;
        font-size: 24px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 0.30000001192092896px;
        text-align: center;


    }
    .text h3{
        width: 360px;
        height: 28px;
        font-family: Poppins;
        font-size: 20px;
        font-weight: 600;
        line-height: 28px;
        letter-spacing: 0px;
        text-align: left;
    }
    .text p{
        text-align: start;
    }
    .text input{
        width: 90%;
        height: 5%;
        background-color: #e8e6e6;
        border: none;
        color: black;
    }
    .sign{
        width: 90%;
        margin: auto;
        height: 5%;
        margin-top: 5%;
        background-color:#007AFF;
        color: white;

    }
    .google{
        width: 90%;
        margin: auto;
        height: 5%;
        margin-top: 5%;
        background-color:black;
        color: white;

    }

`


