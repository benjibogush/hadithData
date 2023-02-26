
import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

function Onebar() {
  return (
    <Navbar bg="light fixed-top">
      <Navbar.Brand>Welcome</Navbar.Brand>
      <Nav className="ml-auto">
        <Link to="/">
          <Button variant="light" className="nav-button">
            Home
          </Button>
        </Link>
        
         <Link to="/overview">
          <Button variant="light" className="nav-button">
            Overview
          </Button>
        </Link>
        <Link to="/explanation">
          <Button variant="light" className="nav-button">
            Explanation
          </Button>
        </Link>
        <Link to="/summary">
          <Button variant="light" className="nav-button">
            Summary
          </Button>
        </Link>
        <Link to="/dashboard">
          <Button variant="light" className="nav-button">
            Dashboard
          </Button>
        </Link>
      </Nav>
    </Navbar>
   
  );
}

export default Onebar;
  

/* <div>
      <Link to="/">Overview</Link>
      <Link to="/explanation">Explanation</Link>
      <Link to="/summary">Summary</Link>
    </div>

*/