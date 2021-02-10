import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './header/Header';
import MetroPillarForm from './form/MetroPillarForm';
import BusForm from './form/BusForm';
import TrainForm from './form/TrainForm';
import BusStandForm from './form/BusStandForm';
import Login from './login/Login';
import Signup from './signup/Signup';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>

          <Route path="/busform">
            <Header />
            <BusForm />
          </Route>

          <Route path="/localTrainForm">
            <Header />
            <TrainForm />
          </Route>

          <Route path="/metroPillarForm">
            <Header />
            <MetroPillarForm />
          </Route>

          <Route path="/busStopForm">
            <Header />
            <BusStandForm />
          </Route>

          <Route path="/login">
            <Header />
            <Login />
          </Route>

          <Route path="/signup">
            <Header />
            <Signup />
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
