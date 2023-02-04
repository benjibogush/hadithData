


import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home.mjs";
import Signup from "./components/signup/Signup.mjs";
import Login from "./components/login/Login.mjs";
import Dashboard from "./components/dashboard/Dashboard.mjs";

class App extends Component {
  render() {
    return (
      <div>
          
        <BrowserRouter>
          <Home />
          {/* <Signup />
            <Login />
            <Dashboard/> */}
          <Routes>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
          </Routes>

        </BrowserRouter>
      </div>
    );
  }
}

export default App;