import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Dashboard from './components/Dashboard/Dashboard';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/nueva-cuenta" component={NuevaCuenta}/>
        <Route exact path="/panel" component={Dashboard}/>
      </Switch>
    </Router>
  );
}

export default App;
