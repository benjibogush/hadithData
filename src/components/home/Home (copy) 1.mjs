import React from 'react';
import './Home.css';

class Home extends React.Component {
  state = {
    projects: [
      { name: 'Project 1', active: false },
      { name: 'Project 2', active: false },
      { name: 'Project 3', active: false },
      { name: 'Project 4', active: false },
    ],
    currentProject: null,
    clickCount: 0,
  }

  selectProject = (index) => {
    this.setState(prevState => {
      const projects = prevState.projects.map((project, i) => {
        if (i === index) {
          return { ...project, active: true };
        }
        return { ...project, active: false };
      });

      return { projects, currentProject: projects[index].name };
    });
  }

  handleClick = () => {
    this.setState(prevState => ({
      clickCount: prevState.clickCount + 1,
    }));
  }

  render() {
    return (
      <div className="home">
        <h2>Project Introduction</h2>
        <p>Welcome to our project manager! Here you can find a list of all our current projects and see which one is active.</p>
        <h2>Project Tree</h2>
        <ul>
          {this.state.projects.map((project, index) => (
            <li
              key={index}
              className={`project-item ${project.active ? 'active' : ''}`}
              onClick={() => this.selectProject(index)}
            >
              {project.name}
            </li>
          ))}
        </ul>
        <p>Current active project: {this.state.currentProject || 'None'}</p>
        <button onClick={this.handleClick}>Click me!</button>
        <p>Click count: {this.state.clickCount}</p>
      </div>
    );
  }
}

export default Home;
