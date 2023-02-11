import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quake = () => {
  const [quakes, setQuakes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [latestImage, setLatestImage] = useState('');

  useEffect(() => {
    const fetchQuakes = async () => {
      setLoading(true);
      const res = await axios.get('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&limit=15');
      setQuakes(res.data.features);
      setLoading(false);
    };
    fetchQuakes();
  }, []);

  useEffect(() => {
    const fetchLatestImage = async () => {
      const res = await axios.get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_hour.geojson');
      setLatestImage(res.data.features[0].properties.url);
    };
    fetchLatestImage();
  }, []);

  const refreshQuakes = async () => {
    setLoading(true);
    const res = await axios.get('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&limit=15');
    setQuakes(res.data.features);
    setLoading(false);
  };

  return (
    <div className="quake-container">
      <h1>Last 15 Quakes</h1>
      <button onClick={refreshQuakes}>Refresh Quakes</button>
      {loading && <div className="loading">Loading...</div>}
      <ul>
        {quakes.map(quake => (
          <li key={quake.id}>
            <p>
              <span style={{ fontWeight: 'bold' }}>Date/Time:</span> {new Date(quake.properties.time).toLocaleString()}
            </p>
            <p>
              <span style={{ fontWeight: 'bold' }}>Location:</span> {quake.properties.place}
            </p>
            <p>
              <span style={{ fontWeight: 'bold' }}>Magnitude:</span> {quake.properties.mag}
            </p>
          </li>
        ))}
      </ul>
      <div className="quake-image">
        <h1>Latest Earthquake picture</h1>
        <img src={latestImage} alt="Latest earthquake" />
        <button onClick={refreshQuakes}>Refresh Quakes</button>
      </div>
    </div>
  );
};

export default Quake;
