import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [news, setNews] = useState([]);
  const [weather, setWeather] = useState({});
  const [guestText, setGuestText] = useState('');

  useEffect(() => {
    async function fetchData() {
      const newsResponse = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey={your-api-key}');
      const weatherResponse = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=your-city&appid={your-api-key}`);
      const newsJson = await newsResponse.json();
      const weatherJson = await weatherResponse.json();
      setNews(newsJson.articles.slice(0, 5));
      setWeather(weatherJson);
    }
    fetchData();
  }, []);

  const handleGuestText = (e) => {
    setGuestText(e.target.value);
  };

  // Create an empty array to store masked guest text entries
const maskedEntries = [];

// Function to mask text into 128bit
function maskText(text) {
  // Use any encryption or hash function to mask the text into 128 bit
  const maskedText = someEncryptionOrHashFunction(text);
  return maskedText;
}

// Function to handle the submission of guest text
function handleGuestTextSubmit(text) {
  // Mask the text before storing it
  const maskedText = maskText(text);

  // Push the masked text into the maskedEntries array
  maskedEntries.push(maskedText);

  // Store the maskedEntries array into a JSON file
  fs.writeFileSync("maskedEntries.json", JSON.stringify(maskedEntries));
}

  // const handleGuestTextSubmit = (e) => {
  //   e.preventDefault();
  //   // TODO: store guestText in a fake database
  //   setGuestText('');
  // };

  return (
    <div className="dashboard">
      <h1 className="welcome-message">Welcome!</h1>
      <div className="cursor-tail"></div>
      <h2>Top 5 News:</h2>
      <ul className="news-list">
        {news.map((article, index) => (
          <li key={index}>
            <a href={article.url}>{article.title}</a>
          </li>
        ))}
      </ul>
      <h2>Weather Report:</h2>
      <p>{weather.weather ? weather.weather[0].description : 'Loading...'}</p>
      <h2>Guest Text Box:</h2>
      <form onSubmit={handleGuestTextSubmit}>
        <textarea value={guestText} onChange={handleGuestText} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Dashboard;
