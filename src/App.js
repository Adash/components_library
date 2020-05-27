import React from 'react';
import { Router } from '@reach/router';
import Navbar from './Navbar';
import Home from './Home';
import CollapsableMenu from './components/CollapsableMenu/CollapsableMenu';
import './App.css';
import styled from 'styled-components';

const StyledRouter = styled(Router)`
  position: relative;
  top: 70px;
`;

function App() {
  return (
    <div className="App">
      <Navbar />
      <StyledRouter>
        <Home path="/" />
        <CollapsableMenu path="/collapsablemenu" />
      </StyledRouter>
    </div>
  );
}

export default App;
