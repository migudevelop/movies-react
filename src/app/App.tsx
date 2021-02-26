import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from 'components/Router';
import 'stylesheets/main.scss';
import CoreContextProvider from 'services/providers/coreContextProvider';
import CommonContext from 'services/providers/commonContextProvider';

function App() {
  return (
    <CoreContextProvider>
      <CommonContext>
        <Router>
          <Routes />
        </Router>
      </CommonContext>
    </CoreContextProvider>
  );
}

export default App;
