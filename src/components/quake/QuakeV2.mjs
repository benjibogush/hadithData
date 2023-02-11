import React, { useState, useEffect } from 'react';
import moment from 'moment';

const Quake = () => {
  const [earthquakes, setEarthquakes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson'
      );
      const data = await response.json();
      setEarthquakes(data.features.slice(0, 15));
    }
    fetchData();
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '60px 0' }}>
      <div style={{ width: '60%' }}>
        <h2 style={{ fontWeight: "bold" }}>Latest 15 Earthquakes:</h2>
        <ul style={{ listStyleType: "none" }}>
          {earthquakes.map((earthquake, index) => (
            <li key={index} style={{ backgroundColor: "#f2f2f2", padding: "10px" }}>
              <p><span style={{ fontWeight: "bold" }}>Magnitude:</span> {earthquake.properties.mag}</p>
              <p><span style={{ fontWeight: "bold" }}>Place:</span> {earthquake.properties.place}</p>
              <p><span style={{ fontWeight: "bold" }}>Time:</span> {moment(earthquake.properties.time).format('llll')}</p>
            </li>
          ))}
        </ul>
      </div>
      <div style={{ width: '40%', paddingLeft: '30px' }}>
        {/* Add code for the map here */}
      </div>
    </div>
  );
};

export default Quake;
