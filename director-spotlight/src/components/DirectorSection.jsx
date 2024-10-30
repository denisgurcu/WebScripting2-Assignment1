import React from "react";
import { motion } from "framer-motion";

function DirectorSection({ director, handleFavClick, favs }) {
  return (
    <motion.div 
      className={`director-section`} 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
    >
      <h2>{director.name}</h2>
      <div className={`grid ${director.style}`}>
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
              {favs.includes(movie.title) ? "★ Unfavorite" : "☆ Favorite"}
            </button>
            <a href={movie.link} className="read-more">Read More</a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default DirectorSection;

