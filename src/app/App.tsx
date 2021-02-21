import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import Routes from 'components/Router';
import 'stylesheets/main.scss';
import CoreContextProvider from 'services/providers/coreContextProvider';
import BackdropContext from 'services/providers/backdropContextProvider';

function App() {
  return (
    <CoreContextProvider>
      <BackdropContext>
        <Router>
          <Routes />
        </Router>
      </BackdropContext>
    </CoreContextProvider>
  );
}

export default App;
