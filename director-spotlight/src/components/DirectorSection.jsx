import React from "react";
// used framer motion to avoid tailwind...this helped me create a hover effect that I usually achieve via CSS
// wanted to start with something simple and familir. For this to work, I installed it by "npm install framer-motion"
// same with ion icons, I installed it and can see in my dependencies, this is for the heart icon
import { motion } from "framer-motion";
import IonIcon from '@reacticons/ionicons';

//creating a function for my director section, this takes the props director (the info)
// handleFavClick (favorited movies) nad favs(an array of favorited items to help remove the fav later on)
 function DirectorSection({ director, handleFavClick, favs }) {
  return (
    // this is for the hover effect, got this from framer-motion's documentation, it needs to be wrapped in motion-div
    <motion.div 
      className={`director-section`} 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
    >
      <h2>{director.name}</h2>
      {/* //passing the director style that's been created */}
      <div className={`grid ${director.style}`}>
        {/* What's happenning here is: For every movie, set up a new JSX elemen like a <div>—inside the parentheses that come after the =>
        For example,  movie's poster, title, description, and a button that lets you favorite the movie, and wrap these all in motion div because I wanted my cards scale when hovered */}
        {director.movies.map((movie, index) => (
          <motion.div 
            className="grid-item" 
            key={index} 
            whileHover={{ scale: 1.05 }} 
            transition={{ duration: 0.2 }}
          >
            <img src={movie.src} alt={movie.title} className="poster" />
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <button onClick={() => handleFavClick(movie.title)} className="fav-button">
              <IonIcon 
              // this line is checking whether the movie's title is included in the favs array.
              // if it is included use the filled heart, if it is not use the outlined heart 
                name={favs.includes(movie.title) ? "heart" : "heart-outline"} 
                className="fav-icon" 
              />
            </button>
            {/* passing a Javascriptting expression instead of using https:// links as this is already a variable I defines, that's why it's in curly braclets  */}
            <a href={movie.link} className="read-more">Read More</a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// this needs to be exported so we can import and use it in other files. 
export default DirectorSection;
