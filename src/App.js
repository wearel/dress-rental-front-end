import React from 'react';
import { BrowserRouter as Router,  Switch, Route } from "react-router-dom";
import './App.css';

import Login from "./Pages/user/Login";
import Register from "./Pages/user/Register";

function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
