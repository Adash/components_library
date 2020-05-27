import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

const StyledHeader = styled.header`
  position: fixed;
  height: 70px;
  width: 100%;
  background-color: darkgray;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Navbar = () => (
  <StyledHeader className="App-header">
    <p>Components Library</p>
    <div>
      <Link to="/">Home</Link>
      <Link to="/collapsablemenu">Collapsable Menu</Link>
    </div>
  </StyledHeader>
);

export default Navbar;
