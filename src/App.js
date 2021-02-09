import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './header/Header';
import Tender from './tender/Tender';
import Form from './form/Form';
import Login from './login/Login';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>

          <Route path="/busform">
            <Header />
            <Form name="Bus Number" />
          </Route>

          <Route path="/localTrainForm">
            <Header />
            <Form name="Train Number" />
          </Route>

          <Route path="/metroPillarForm">
            <Header />
            <Form name="Pillar Number"  />
          </Route>

          <Route path="/busStopForm">
            <Header />
            <Form name="Bus Stop Name" />
          </Route>

          <Route path="/login">
            <Header />
            <Login />
          </Route>

          <Route path="/">
            <Header />
          </Route>

        </Switch>
      </div>
    </Router>

  );
}

export default App;
