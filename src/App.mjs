


import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home.mjs";
import Signup from "./components/signup/Signup.mjs";
import Login from "./components/login/Login.mjs";
import Dashboard from "./components/dashboard/Dashboard.mjs";
import Navbar from "./components/navbar/Navbar.mjs"

class App extends Component {
  render() {
    return (
      <div>
          
        <BrowserRouter>
          {/* 
           <Home />
            */}
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home/> } />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
          </Routes>

        </BrowserRouter>

        
      </div>
    );
  }
}

export default App;