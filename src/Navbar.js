import React from 'react';
import styled from 'styled-components';
import 'styled-components/macro';
import { Link } from '@reach/router';

const StyledHeader = styled.header`
  position: fixed;
  height: 70px;
  width: 100%;
  background-color: #548687;
  color: #ffffc7;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled(Link)`
  font-size: 1.2rem;
  color: white;
  transition: color 300ms;
  &:hover {
    color: #fcaa67;
  }
`;

const StyledH2 = styled.h2`
  font-size: 1.6rem;
`;

const Navbar = () => (
  <StyledHeader className="App-header">
    <StyledH2>Components Library</StyledH2>
    <div
      css={`
        width: 60vw;
        display: flex;
        justify-content: space-between;
        margin-right: 10px;
      `}
    >
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/collapsablemenu">Collapsable Menu</StyledLink>
      <StyledLink to="/advanceddropdownmenu">Advanced Dropdown Menu</StyledLink>
      <StyledLink to="/fireship">Fireship</StyledLink>
      <StyledLink to="/playground">Playground</StyledLink>
    </div>
  </StyledHeader>
);

export default Navbar;
