import React, { useState, useEffect } from "react";
import axios from "axios";

// Styles
import "./Quake.css";

const API_URL = "https://earthquake.usgs.gov/fdsnws/event/1/query";

// Fetch latest 15 quakes from USGS
const fetchQuakes = async () => {
  const res = await axios.get(API_URL, {
    params: {
      format: "geojson",
      limit: 15,
    },
  });
  return res.data.features;
};

// Filter quakes based on magnitude
export const filterQuakes = (quakes, mag) => {
  return quakes.filter((quake) => quake.properties.mag > mag);
};

// Display quakes in groups of 5
export const displayQuakes = (quakes, activePage) => {
  const startIndex = (activePage - 1) * 5;
  const endIndex = startIndex + 5;
  return quakes.slice(startIndex, endIndex);
};

// Pagination component
export const Pagination = ({ quakes, activePage, setActivePage }) => {
  const pageCount = Math.ceil(quakes.length / 5);

  const handleClick = (page) => {
    setActivePage(page);
  };

  return (
    <div className="pagination">
      {activePage !== 1 && (
        <button onClick={() => handleClick(activePage - 1)}>Prev</button>
      )}
      {Array.from({ length: pageCount }, (_, i) => {
        const page = i + 1;
        return (
          <button
            key={page}
            onClick={() => handleClick(page)}
            className={activePage === page ? "active" : ""}
          >
            {page}
          </button>
        );
      })}
      {activePage !== pageCount && (
        <button onClick={() => handleClick(activePage + 1)}>Next</button>
      )}
    </div>
  );
};

// Main Quake component
export const Quake = () => {
  const [quakes, setQuakes] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [minMag, setMinMag] = useState(0);

  useEffect(() => {
    fetchQuakes().then(setQuakes);
  }, []);

  const filteredQuakes = filterQuakes(quakes, minMag);
  const displayedQuakes = displayQuakes(filteredQuakes, activePage);

  return (
    <div style={{ marginTop: "60px" }}>
      <h2>Latest 15 Quakes</h2>
      <button onClick={() => setQuakes(fetchQuakes)}>Refresh List</button>
      <button onClick={() => setMinMag(5)}>Filter Quakes > 5</button>
      <div className="quakes">
        {displayedQuakes.map((quake, i) => {
          const magnitude
