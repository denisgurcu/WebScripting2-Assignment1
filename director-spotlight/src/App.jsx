import React, { useState, useEffect } from "react";
import './App.css';
import DirectorSection from './components/DirectorSection';
import Header from './components/Header';

// Import JSON data
import data from './data.json';

function App() {
  const [favs, setFavs] = useState([]);
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    // Set directors from JSON data
    setDirectors(data.directors);
  }, []);

  const handleFavClick = (movieTitle) => {
    if (favs.includes(movieTitle)) {
      setFavs(favs.filter(fav => fav !== movieTitle));
    } else {
      setFavs([...favs, movieTitle]);
    }
  };

  return (
    <div>
      <Header /> 
      <div id="page-container">
        {directors.map((director, index) => (
          <DirectorSection key={index} director={director} handleFavClick={handleFavClick} favs={favs} />
        ))}
      </div>
    </div>
  );
}

export default App;
