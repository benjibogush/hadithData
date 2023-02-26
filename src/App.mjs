import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home/Home.mjs";

import Dashboard from "./components/dashboard/Dashboard.mjs";

import Overview from "./components/Overview/overview.mjs";
import Explanation from "./components/Explanation/explanation.mjs";
import Summary from "./components/Summary/summary.mjs";
import Onebar from "./components/Navbar/onebar.mjs";



class App extends Component {
  render() {
    return (
      <div>
          
        <BrowserRouter>
        
          <Onebar />
          
          <Routes>
            <Route exact path="/" element={<Home/> } />
            <Route path="/overview" element={<Overview />} />
            <Route path="/explanation" element={<Explanation />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/dashboard" element={<Dashboard/>} />
          </Routes>

        </BrowserRouter>

        
      </div>
    );
  }
}

export default App;