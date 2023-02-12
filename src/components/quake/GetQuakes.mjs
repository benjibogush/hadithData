

import { useState, useEffect } from 'react';
import axios from 'axios';
 const [quakes, setQuakes] = useState([]);
 const [filteredQuakes, setFilteredQuakes] = useState([]);

export function getQuakes(){
 

  useEffect(() => {
    const fetchQuakes = async () => {
      try {
        const response = await axios.get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson');
        setQuakes(response.data.features.slice(0, 15));
        setFilteredQuakes(response.data.features.filter(quake => quake.properties.mag > 5));
      } catch (error) {
        console.error(error);
      }
    };
    fetchQuakes();
  }, []);

  return {
    quakes,
    filteredQuakes
  };
}


export function refreshQuakes() {
  const refresh = () => {
    axios.get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson')
      .then(res => {
        setQuakes(res.data.features.slice(0, 15));
        setFilteredQuakes(res.data.features.filter(quake => quake.properties.mag > 5));
      })
      .catch(err => console.error(err));
  };

  return refresh;
}

