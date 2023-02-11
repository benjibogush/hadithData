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
    <div>
      <h2>Latest 15 Earthquakes:</h2>
      <ul>
        {earthquakes.map((earthquake, index) => (
          <li key={index}>
            Magnitude: {earthquake.properties.mag} |
            Place: {earthquake.properties.place}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quake;
