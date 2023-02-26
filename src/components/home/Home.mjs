import React, { Component } from 'react';
// import hadithData from './hadithData.json';
import hadithDataEn from './data/hadithDataEn.json';
import hadithDataTr from './data/hadithDataTr.json';
import hadithDataEs from './data/hadithDataEs.json';
import hadithDataUr from './data/hadithDataUrdu.json';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showButton: false,
      language: 'en',
      hadithData: hadithDataEn
    };
    // this.handleLanguageChange = this.handleLanguageChange.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrollY = window.scrollY;
    const showButton = scrollY > 400;
    this.setState({ showButton });
  };

  handleButtonClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

    handleLanguageChange = (event) => {
    const language = event.target.value;
    let hadithData;
    switch (language) {
      case 'en':
        hadithData = hadithDataEn;
        break;
      case 'tr':
        hadithData = hadithDataTr;
        break;
      case 'es':
        hadithData = hadithDataEs;
        break;
      case 'ur':
        hadithData = hadithDataUr;
        break;
      default:
        hadithData = hadithDataEn;
    }
    this.setState({ language, hadithData });
  }


  render() {
    // const { showButton } = this.state;
    const { showButton, language, hadithData } = this.state;

    return (
      <div className="container-fluid" style={{ padding: '60px' }}>
        <div className="row">
          <div className="col-md-3">
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-left">
              <ul className="navbar-nav flex-column" >
                {Object.keys(hadithData).map((topic, index) => (
                  <li key={index} className="nav-item">
                    <a className="nav-link" href={`#${topic}`} >{topic}</a>
                  </li>
                ))}
              </ul>
              
            </nav>

             <select className="form-select mt-3" aria-label="Hadith Language Selector" value={language} onChange={this.handleLanguageChange}>
                <option value="en">English</option>
                <option value="tr">Turkish</option>
                <option value="es">Spanish</option>
                <option value="ur">Urdu</option>
              </select>
            
          </div>
          <div className="col-md-9" style={{ paddingTop: '60px' }}>
            {Object.keys(hadithData).map((topic, index) => (
              <div key={index}>
                <h2 id={topic}>{topic}</h2>
                {hadithData[topic].map((hadith, index) => (
                  <div key={index} className="card mb-3">
                    <div className="card-header">
                      Hadith {hadith.id}: {hadith.topic}
                    </div>
                    <div className="card-body">
                      <p className="card-text">{hadith.text}</p>
                      <p className="card-text"><small className="text-muted">{hadith.source}</small></p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
            {showButton &&
              <button className="btn btn-primary" onClick={this.handleButtonClick} style={{ position: 'fixed', bottom: '10px', left: '10px' }}>
                Back to Top
              </button>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

/* Previous version, works fine!

import React, { Component } from 'react';
import hadithData from './hadithData.json';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showButton: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrollY = window.scrollY;
    const showButton = scrollY > 400;
    this.setState({ showButton });
  };

  handleButtonClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  render() {
    const { showButton } = this.state;

    return (
      <div className="container-fluid" style={{ padding: '60px' }}>
        <div className="row">
          <div className="col-md-3">
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-left">
              <ul className="navbar-nav flex-column" >
                {Object.keys(hadithData).map((topic, index) => (
                  <li key={index} className="nav-item">
                    <a className="nav-link" href={`#${topic}`} >{topic}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="col-md-9" style={{ paddingTop: '60px' }}>
            {Object.keys(hadithData).map((topic, index) => (
              <div key={index}>
                <h2 id={topic}>{topic}</h2>
                {hadithData[topic].map((hadith, index) => (
                  <div key={index} className="card mb-3">
                    <div className="card-header">
                      Hadith {hadith.id}: {hadith.topic}
                    </div>
                    <div className="card-body">
                      <p className="card-text">{hadith.text}</p>
                      <p className="card-text"><small className="text-muted">{hadith.source}</small></p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
            {showButton &&
              <button className="btn btn-primary" onClick={this.handleButtonClick} style={{ position: 'fixed', bottom: '10px', left: '10px' }}>
                Back to Top
              </button>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
*/





/*
import React, { Component } from 'react';
import hadithData from './hadithData.json';

class Home extends Component {
  render() {
    return (
      <div className="container-fluid" style={{ paddingTop: '60px' }}>
        <div className="row">
          <div className="col-md-3">
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-left">
              <ul className="navbar-nav flex-column">
                {Object.keys(hadithData).map((topic, index) => (
                  <li key={index} className="nav-item">
                    <a className="nav-link" href={`#${topic}`} >{topic}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="col-md-9" style={{ paddingTop: '60px' }}>
            {Object.keys(hadithData).map((topic, index) => (
              <div key={index}>
                <h2 id={topic}>{topic}</h2>
                {hadithData[topic].map((hadith, index) => (
                  <div key={index} className="card mb-3">
                    <div className="card-header">
                      Hadith {hadith.id}
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{hadith.topic}</h5>
                      <p className="card-text">{hadith.text}</p>
                      <p className="card-text"><small className="text-muted">{hadith.source}</small></p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
*/




/*
import React, { Component } from 'react';
import hadithData from './hadithData.json';

class Home extends Component {
  scrollToTopic = (event, topic) => {
    event.preventDefault();
    document.getElementById(topic).scrollIntoView({ behavior: 'smooth' });
  };

  render() {
    return (
      <div className="container-fluid" style={{ paddingTop: '60px' }}>
        <div className="row">
          <div className="col-md-3">
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-left">
              <ul className="navbar-nav">
                {Object.keys(hadithData).map((topic, index) => (
                  <li key={index} className="nav-item">
                    <a
                      className="nav-link"
                      href={`#${topic}`}
                      onClick={(event) => this.scrollToTopic(event, topic)}
                    >
                      {topic}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="col-md-9" style={{ paddingTop: '60px' }}>
            {Object.keys(hadithData).map((topic, index) => (
              <div key={index}>
                <h2 id={topic}>{topic}</h2>
                {hadithData[topic].map((hadith, index) => (
                  <div key={index} className="card mb-3">
                    <div className="card-header">
                      Hadith {hadith.id}: {hadith.topic}
                    </div>
                    <div className="card-body">
                      <p className="card-text">{hadith.text}</p>
                      <p className="card-text">
                        <small className="text-muted">{hadith.source}</small>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
*/

/*

import React, { Component } from 'react';
import hadithData from './hadithData.json';

class Home extends Component {
  render() {
    return (
      <div className="container-fluid" style={{ paddingTop: '60px' }}>
        <div className="row">
          <div className="col-md-3">
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-left">
              <ul className="navbar-nav" >
                {Object.keys(hadithData).map((topic, index) => (
                  <li key={index} className="nav-item">
                    <a className="nav-link" href={`#${topic}`} >{topic}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="col-md-9" style={{ paddingTop: '60px' }}>
            {Object.keys(hadithData).map((topic, index) => (
              <div key={index}>
                <h2 id={topic}>{topic}</h2>
                {hadithData[topic].map((hadith, index) => (
                  <div key={index} className="card mb-3">
                    <div className="card-header">
                      Hadith {hadith.id}: {hadith.topic}
                    </div>
                    <div className="card-body">
                      <p className="card-text">{hadith.text}</p>
                      <p className="card-text"><small className="text-muted">{hadith.source}</small></p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

*/


/*
import React, { useState, useEffect } from "react";
import hadiths from './hadiths.json';

const Home = () => {
  const [hadiths, setHadiths] = useState([]);

  useEffect(() => {
    fetch(hadiths)
      .then(response => response.json())
      .then(data => setHadiths(data));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <h3>Hadith Topics</h3>
          <ul className="nav flex-column">
            {hadiths.map(hadith => (
              <li className="nav-item" key={hadith.id}>
                <a
                  className="nav-link"
                  href={`#${hadith.id}`}
                  onClick={e => {
                    e.preventDefault();
                    document.getElementById(hadith.id).scrollIntoView();
                  }}
                >
                  {hadith.topic}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-9">
          {hadiths.map(hadith => (
            <div key={hadith.id} id={hadith.id}>
              <h3>{hadith.topic}</h3>
              <p>{hadith.text}</p>
              <p>{hadith.source}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
*/



/*
import React from "react";

const Home = () => {
  const hadiths = [
    {      
      id: 1,      
      title: "Faith and Worship",      
      data: [   
      { 
       id: 1, 
       text: "The Prophet (peace be upon him) said: 'Whoever believes in Allah and the Last Day should pray five times a day.'",                   source: "Sahih Bukhari, Book 2, Hadith 21", 
      },        
    {          
      id: 2,          
      text:"The Prophet (peace be upon him) said: 'The best of you is the one who learns the Quran and teaches it.'",
      source: "Sahih Bukhari, Book 3, Hadith 61",  },      
      ],
    },
    
    {
      id: 2,
      title: "Character and Ethics",
      data: [
        {
          id: 1,
          text:
            "The Prophet (peace be upon him) said: 'The most perfect believer in faith is the one who is best in moral character.'",
          source: "Sunan Ibn Majah, Book 1, Hadith 75",
        },
        {
          id: 2,
          text:
            "The Prophet (peace be upon him) said: 'Do not be people without minds of your own, saying that if others treat you well you will treat them well, and that if they do wrong you will do wrong. Instead, accustom yourselves to do good if people do good and not to do wrong if they do evil.'",
          source: "Sunan al-Tirmidhi, Book 47, Hadith 3315",
        },
      ],
    },
    {
      id: 3,
      title: "Family and Relationships",
      data: [
        {
          id: 1,
          text:
            "The Prophet (peace be upon him) said: 'The best of you is the one who is best to his family, and I am the best among you to my family.'",
          source: "Sunan Ibn Majah, Book 9, Hadith 1977",
        },
        {
          id: 2,
          text:
            "The Prophet (peace be upon him) said: 'The most perfect of believers in faith are those with the best character, who lower their wings and are kind and courteous, with family and strangers.'",
          source: "Sunan al-Tirmidhi, Book 47, Hadith 3662",
        },
      ],
    },
  ];

  return (
    <div className="container" className="lead text-muted sr-only list-group" style={{ padding: '60px 40px' }}>
      <div className="row">
        <div className="col-md-3">
          <h3>Hadith Topics</h3>
          <ul className="nav flex-column">
            {hadiths.map((hadith) => (
              <li className="nav-item" key={hadith.id}>
                <a
                  className="nav-link"
                  href={`#${hadith.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(hadith.id).scrollIntoView();
                  }}
                >
                  {hadith.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-9">
          {hadiths.map((hadith) => (
            <div key={hadith.id} id={hadith.id}>
              <h3>{hadith.title}</h3>
              <ul>
                {hadith.data.map((hadithData) => (
                  <li key={hadithData.id}>
                    {hadithData.text}
                    <br />
                    <span className="text-muted">{hadithData.source}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

}
export default Home;
*/





/*

// import React, { useState } from 'react';
// import './Home.css';

// const Home = () => {
//   const [count, setCount] = useState(0);
//   const [color, setColor] = useState('#000');

//   const handleClick = () => {
//     setCount(count + 1);
//   };

//   const handleHover = () => {
//     const colors = ['red', 'green', 'blue', 'purple', 'orange', 'pink'];
//     const randomColor = colors[Math.floor(Math.random() * colors.length)];
//     setColor(randomColor);
//   };

//   return (
//     <div className="container">
      <h1 className="title" style={{ color: color }}>
        Welcome to my project!
      </h1>
      <div className="counter">
        <p>Click Count: {count}</p>
        <button onClick={handleClick}>Click Me</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
      <div
        className="box"
        onMouseEnter={handleHover}
        onMouseLeave={() => setColor('#000')}
        style={{ backgroundColor: color }}
      >
        Hover Over Me
      </div>
      <div className="tree-container">
        <ul className="project-tree">
          <li className="project-tree-item">
            <span className="bullet">&#9679;</span>
            Project 1
          </li>
          <li className="project-tree-item">
            <span className="bullet">&#9679;</span>
            Project 2
          </li>
          <li className="project-tree-item">
            <span className="bullet">&#9679;</span>
            Project 3
          </li>
        </ul>
      </div>
    </div>
//   );
// };

// export default Home;

  */