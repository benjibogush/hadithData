import React, { useState } from 'react';
import './dashboard.css';

const Dashboard = () => {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState('blue');
  const [dots, setDots] = useState([]);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  const handleHover = () => {
    setColor(prevColor => {
      return prevColor === 'blue' ? 'red' : 'blue';
    });
  };

  const generateDots = () => {
    const newDots = [];
    for (let i = 0; i < 5; i++) {
      const x = Math.floor(Math.random() * 500);
      const y = Math.floor(Math.random() * 500);
      newDots.push({ x, y });
    }
    setDots(newDots);
  };

  return (
    <div className="home-container">
      <h1 className="project-title">Welcome to Our Project</h1>
      <p>This is a demo of a stylish and accessible Home component that includes:</p>
      <ul>
        <li>A project introduction for impaired people</li>
        <li>A spinning active project tree</li>
        <li>A game of click counter</li>
        <li>Hover to color change game</li>
        <li>A race of a circular object against obstacles in a box</li>
      </ul>
      <div className="counter-container">
        <p>Counter: {counter}</p>
        <button onClick={handleClick}>Click me!</button>
      </div>
      <div className="color-container">
        <p>Color: {color}</p>
        <div className="color-change-area" onMouseEnter={handleHover} onMouseLeave={handleHover}></div>
      </div>
      <div className="box-container">
        <div className="box" onLoad={generateDots}>
          {dots.map(dot => (
            <div
              className="dot"
              style={{ left: `${dot.x}px`, top: `${dot.y}px` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;





// import React, { Component } from "react";
// import { Container } from "react-bootstrap";

// class Dashboard extends Component {
//   render() {
//     return (
//       <Container>
//         <h1>Dashboard</h1>
      
//       </Container>
//     );
//   }
// }

// export default Dashboard;