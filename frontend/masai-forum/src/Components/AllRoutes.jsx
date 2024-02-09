import React from 'react';

import LoginPage from '../Pages/Login';
import SignupPage from '../Pages/Signup';
import { Route, Routes } from 'react-router-dom';


function AllRoutes() {
    return (
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

      </Routes>
    );
  }
  
  export default AllRoutes;