import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Quake.css';

const Quake = () => {
  const [quakes, setQuakes] = useState([]);
  const [filteredQuakes, setFilteredQuakes] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    getQuakes();
  }, []);

  const getQuakes = async () => {
    try {
      const response = await axios.get(
        'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson'
      );
      setQuakes(response.data.features);
      setFilteredQuakes(response.data.features.filter((quake) => quake.properties.mag >= 5));
    } catch (error) {
      console.error(error);
    }
  };

  const handleRefresh = () => {
    getQuakes();
  };

  const handleFilter = () => {
    setShowAll(false);
  };

  const handleShowAll = () => {
    setShowAll(true);
  };

  return (
    <div className="quake-container">
      <div className="quake-header">
        <h1>Recent Earthquakes</h1>
        <div className="quake-header-buttons">
          <button onClick={handleRefresh}>Refresh</button>
          <button onClick={handleFilter}>Filter Quakes >= 5</button>
          <button onClick={handleShowAll}>List All</button>
        </div>
      </div>
      <div className="quake-list">
        {showAll ? (
          quakes.map((quake) => (
            <div key={quake.id} className="quake-item">
              <h2>{quake.properties.place}</h2>
              <p>
                Magnitude: <strong>{quake.properties.mag}</strong>
              </p>
              <p>Time: {new Date(quake.properties.time).toLocaleString()}</p>
            </div>
          ))
        ) : (
          filteredQuakes.map((quake) => (
            <div key={quake.id} className="quake-item">
              <h2>{quake.properties.place}</h2>
              <p>
                Magnitude: <strong>{quake.properties.mag}</strong>
              </p>
              <p>Time: {new Date(quake.properties.time).toLocaleString()}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Quake;



















// import React, { useState, useEffect } from 'react';
// import './Quake.css';

// const Quake = () => {
//   const [earthquakes, setEarthquakes] = useState([]);
//   const [filteredQuakes, setFilteredQuakes] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [quakesPerPage, setQuakesPerPage] = useState(5);
//   const [magnitude, setMagnitude] = useState(5);
//   const [displayEarthquakes, setDisplayEarthquakes] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       const res = await fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson');
//       const data = await res.json();
//       setEarthquakes(data.features);
//       setDisplayEarthquakes(data.features.slice(0, quakesPerPage));
//       setLoading(false);
//     };
//     fetchData();
//   }, []);

//   const filterQuakes = (magnitude) => {
//     setMagnitude(magnitude);
//     setDisplayEarthquakes(
//       earthquakes.filter((earthquake) => earthquake.properties.mag >= magnitude).slice(0, quakesPerPage)
//     );
//   };

//   const handleLoadMore = () => {
//     let startIndex = currentPage * quakesPerPage;
//     let endIndex = startIndex + quakesPerPage;
//     setDisplayEarthquakes(earthquakes.slice(startIndex, endIndex));
//     setCurrentPage(currentPage + 1);
//   };

//   return (
//     <div className="quake-container">
//       <div className="quake-header">
//         <h2>Last 15 Quakes</h2>
//         <button className="refresh-button" onClick={refreshQuakes}>
//           Refresh
//         </button>
//         <button className="filter-button" onClick={() => filterQuakes(magnitude)}>
//           Filter Quakes > {magnitude}
//         </button>
//       </div>
//       {loading ? (
//         <div className="loading">Loading...</div>
//       ) : (
//         <ul className="quake-list">
//           {quakesToDisplay.map((earthquake) => (
//             <li key={earthquake.id} className="quake-item">
//               <div className={`quake-bullet magnitude-${earthquake.properties.mag}`} />
//               <p>
//                 <span className="quake-date">{new Date(earthquake.properties.time).toLocaleString()}</span>
//                 <br />
//                 <span className="quake-location">{earthquake.properties.place}</span>
//                 <br />
//                 <span className="quake-magnitude">Magnitude: {earthquake.properties.mag}</span>
//               </p>
//             </li>
//           ))}
//         </ul>
//       )}
//       <div className="quake-pagination">
//         {currentPage > 1 && (
//           <button onClick={() => setCurrentPage(currentPage - 1)}>
//             Prev
//           </button>
//         )}
//         <span className="quake-page-number">
//           Page {currentPage} of {Math.ceil(filteredQuakes.length / quakesPerPage)}
//         </span>
//         {currentPage < Math.ceil(filteredQuakes.length / quakesPerPage) && (
//           <button onClick={() => setCurrentPage(currentPage + 1)}>
//             Next
//           </button>
//         )}
//       </div>
//       {filteredQuakes.length > 0 && (
//         <button className="load-more-button" onClick={handleLoadMore}>
//           Load More
//         </button>
//       )}
//     </div>
//    );
// }


// export default Quake;







// import React, { useState, useEffect } from 'react';
// import './Quake.css';

// const Quake = () => {
//   const [earthquakes, setEarthquakes] = useState([]);
//   const [filteredQuakes, setFilteredQuakes] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [quakesPerPage, setQuakesPerPage] = useState(5);
//   const [magnitude, setMagnitude] = useState(5);
//   const [quakesToDisplay, setQuakesToDisplay] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       const res = await fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson');
//       const data = await res.json();
//       setEarthquakes(data.features);
//       setFilteredQuakes(data.features.filter((quake) => quake.properties.mag >= 5));
//       setLoading(false);
//     };
//     fetchData();
//   }, []);

//   const indexOfLastQuake = currentPage * quakesPerPage;
//   const indexOfFirstQuake = indexOfLastQuake - quakesPerPage;
//   const currentQuakes = filteredQuakes.slice(indexOfFirstQuake, indexOfLastQuake);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   const handleFilter = (e) => {
//     e.preventDefault();
//     setFilteredQuakes(earthquakes.filter((quake) => quake.properties.mag >= 5));
//   };

//   const refreshQuakes = async () => {
//     setLoading(true);
//     const res = await fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson');
//     const data = await res.json();
//     setEarthquakes(data.features);
//     setLoading(false);
//   };

//   const filterQuakes = (magnitude) => {
// setMagnitude(magnitude);
// setDisplayEarthquakes(
// earthquakes.filter((earthquake) => earthquake.properties.mag >= magnitude)
// );
// };

//   const handleLoadMore = () => {
// let startIndex = (currentPage * 15) - 15;
// let endIndex = currentPage * 15;
// setDisplayEarthquakes(earthquakes.slice(startIndex, endIndex));
// setCurrentPage(currentPage + 1);
// };

//  return (
//     <div className="quake-container">
//       <div className="quake-header">
//         <h2>Last 15 Quakes</h2>
//         <button className="refresh-button" onClick={refreshQuakes}>
//           Refresh
//         </button>
//         <button className="filter-button" onClick={filterQuakes}>
//           Filter Quakes > 5
//         </button>
//       </div>
//       {loading ? (
//         <div className="loading">Loading...</div>
//       ) : (
//         <ul className="quake-list">
//           {quakesToDisplay.map((earthquake) => (
//             <li key={earthquake.id} className="quake-item">
//               <div className={`quake-bullet magnitude-${earthquake.properties.mag}`} />
//               <p>
//                 <span className="quake-date">{new Date(earthquake.properties.time).toLocaleString()}</span>
//                 <br />
//                 <span className="quake-location">{earthquake.properties.place}</span>
//                 <br />
//                 <span className="quake-magnitude">Magnitude: {earthquake.properties.mag}</span>
//               </p>
//             </li>
//           ))}
//         </ul>
//       )}
//       <div className="quake-pagination">
//         {currentPage > 1 && (
//           <button onClick={() => setCurrentPage(currentPage - 1)}>
//             Prev
//           </button>
//         )}
//         <span className="quake-page-number">
//           Page {currentPage} of {Math.ceil(filteredQuakes.length / quakesPerPage)}
//         </span>
//         {currentPage < Math.ceil(filteredQuakes.length / quakesPerPage) && (
//           <button onClick={() => setCurrentPage(currentPage + 1)}>
//             Next
//           </button>
//         )}
     
//   </div>
//   </div>

//    );
// }

// export default Quake;




















// import React, { useState, useEffect } from 'react';
// import './Quake.css';

// function Quake() {
//   const [earthquakes, setEarthquakes] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       const res = await fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson');
//       const data = await res.json();
//       setEarthquakes(data.features.slice(0, 15));
//       setLoading(false);
//     };
//     fetchData();
//   }, []);

//   const refreshQuakes = async () => {
//     setLoading(true);
//     const res = await fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson');
//     const data = await res.json();
//     setEarthquakes(data.features.slice(0, 15));
//     setLoading(false);
//   };

//   return (
//     <div className="quake-container">
//       <div className="quake-header">
//         <h2>Last 15 Quakes</h2>
//         <button className="refresh-button" onClick={refreshQuakes}>
//           Refresh
//         </button>
//       </div>
//       {loading ? (
//         <div className="loading">Loading...</div>
//       ) : (
//         <ul className="quake-list">
//           {earthquakes.map((earthquake) => (
//             <li key={earthquake.id} className="quake-item">
//               <p>
//                 <span className="quake-date">{new Date(earthquake.properties.time).toLocaleString()}</span>
//                 <br />
//                 <span className="quake-location">{earthquake.properties.place}</span>
//                 <br />
//                 <span className="quake-magnitude">Magnitude: {earthquake.properties.mag}</span>
//               </p>
//             </li>
//           ))}
//         </ul>
//       )}
//       <div className="quake-picture">
//         <img src="https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson" alt="Latest Earthquake" />
//         <button className="refresh-picture-button" onClick={refreshQuakes}>
//           Refresh
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Quake;
