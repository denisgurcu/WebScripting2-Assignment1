// importing React with the hooks useState and useEffect, useState will help me store the favorites
// with the favs variable it will keep track of the movies that a user has marked as favorites and update real time
// useEffect will help me to fetch the data I uploaded in json.
import React, { useState, useEffect } from "react";

// my styling is in app.css, I am importing this here so when I refer to a div id below, it will use the style from here
import './App.css';

// these are my components, app.jsx is like the main component/root that I can structure the page. 
// it is like dividing my page into parts and then using app.jsx to put them all together and organize  
import DirectorSection from './components/DirectorSection';
import Header from './components/Header';

// I stored the data in a json file using arrays to group directors and their movies.
// The root is the directors, and it's array has name, style(CSS) and movies in it. 
// And the movies is another array, it has a poster, title, description and a link.
// this will loop through dynamically when rendered  
import data from './data.json';

// here I am initialize 2 states, fav is an array to store favorited movie titles by users
// And directors is an array to store the directors data loaded from json 
function App() {
  const [favs, setFavs] = useState([]);
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    // setting directors from JSON data
    setDirectors(data.directors);
  }, []);

  // here I am creating a if function that checked if the movie is favorited
  // it filters the favorited movies and if the movie the user clicked is in there
  // it will remove the fav
  // handlefavclick is like event listener so this function is attached to the fav clicking 
  const handleFavClick = (movieTitle) => {
    if (favs.includes(movieTitle)) {
      setFavs(favs.filter(fav => fav !== movieTitle));
    } else {
      setFavs([...favs, movieTitle]);
    }
  };

  // the return statement is used in react projects to render information, it has to be wrapped in a container
  return (
    <div>
      {/* rendering header component */}
      <Header /> 
      <div id="page-container">
        {/* this is the part where we go through each director in the directos array
        handleFavClick is for users to favorite the movies
        favs keep track of favorited movies 
        I am passing all these props that have been created to the DirectorSection so everything works as expected
        index help tell the order of the directors (aka, 0,1,2) so it needs to take it as the key to loop through them in order. */}
        {directors.map((director, index) => (
          <DirectorSection key={index} director={director} handleFavClick={handleFavClick} favs={favs} />
        ))}
      </div>
    </div>
  );
}

//app.jsx should be exported to render on the page
export default App;
