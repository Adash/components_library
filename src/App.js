import React from 'react';
import { Router } from '@reach/router';
import Home from './Home';
import CollapsableMenu from './components/CollapsableMenu/CollapsableMenu';
// import AdvancedDropdownMenu from './components/AdvancedDropdownMenu';
// import Fireship from './components/Fireship';
// import Playground from './components/Playground';
import styled from 'styled-components';

const StyledRouter = styled(Router)`
  font-family: Arial, Helvetica, sans-serif;
`;

function App() {
  return (
    <div className="App">
      <StyledRouter>
        <Home path="/" />
        <CollapsableMenu path="/collapsablemenu" />
        {/* <AdvancedDropdownMenu path="/advanceddropdownmenu" />
        <Fireship path="/fireship" />
        <Playground path="/playground" /> */}
      </StyledRouter>
    </div>
  );
}

export default App;
