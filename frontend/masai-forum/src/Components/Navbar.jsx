import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #333;
  display: flex;
  justify-content: first baseline;
  color: wheat;
`;

const NavLinks = styled.div`
  margin-top: 2%;
  margin-left: 30%;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #555;
  }
`;

function Navbar() {
  return (
    <NavbarContainer>
        <h1>Masai-Forum</h1>
      <NavLinks>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Signup</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
}

export default Navbar;
