import React from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import SessionLog from './pages/SessionLog';
import Resources from './pages/Resources';
import { Route } from 'react-router-dom';
import FooterPage from './components/FooterPage';

function App() {
  return (
    <>
      <NavBar />
      <Route exact path='/' component={Home} />
      <Route path='/session-log' component={SessionLog} />
      <Route path='/Resources' component={Resources} />
      <FooterPage />
    </>
  );
}

export default App;
