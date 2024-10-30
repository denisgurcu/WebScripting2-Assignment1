import React, { useState } from "react";
import './App.css';
import DirectorSection from './components/DirectorSection';
import Header from './components/Header';
import Pulp from './img/pulp.png';
import KillBill from './img/killbill.png';
import Inglourious from './img/inglourious.png';
import Irreversable from './img/irreversable.png';
import Void from './img/void.png';
import Climax from './img/climax.png';
import Dazed from './img/dazed.png';
import Before from './img/before.png';
import Boyhood from './img/boyhood.png';
import Lost from './img/lost.png';
import Virgin from './img/virgin.png';
import Marie from './img/marie.png';

const directors = [
  {
    name: 'Quentin Tarantino',
    style: 'tarantino-style',
    movies: [ // Array of movie objects for Tarantino
      { src: Pulp, title: 'Pulp Fiction', description: 'A story about the intersecting lives of various criminals. Wild, quirky, and full of surprises.', link: 'https://www.imdb.com/title/tt0110912/' },
      { src: KillBill, title: 'Kill Bill', description: 'A bride seeks vengeance against her former teammates who betrayed her. Stylish action at its best.', link: 'https://www.imdb.com/title/tt0266697/' },
      { src: Inglourious, title: 'Inglourious Basterds', description: 'Set during WWII, a group of Jewish-American soldiers plot to kill Nazi leaders. Bold and intense.', link: 'https://www.imdb.com/title/tt0361748/' },
    ],
  },     
 
  {
    name: 'Gaspar Noé',
    style: 'noe-style',
    movies: [ // Array of movie objects for Noe
      { src: Irreversable, title: 'Irreversible', description: 'A harrowing tale told in reverse, exploring love, vengeance, and the dark side of humanity.', link: 'https://www.imdb.com/title/tt0290673/' },
      { src: Void, title: 'Enter The Void', description: 'A journey through the neon-lit streets of Tokyo as a drug dealer experiences life after death.', link: 'https://www.imdb.com/title/tt1190536/' },
      { src: Climax, title: 'Climax', description: 'A group of dancers descends into chaos and madness at a party.', link: 'https://www.imdb.com/title/tt5074362/' },
    ],
  },
  
  {
    name: 'Richard Linklater',
    style: 'linklater-style', 
    movies: [ // Array of movie objects for Linklater
      { src: Dazed, title: 'Dazed and Confused', description: 'A nostalgic look at the last day of school in 1976 Texas, featuring a variety of teenage characters.', link: 'https://www.imdb.com/title/tt0106677/' },
      { src: Before, title: 'Before Sunrise', description: 'A romantic drama about two strangers who meet on a train and explore Vienna together.', link: 'https://www.imdb.com/title/tt0112471/' },
      { src: Boyhood, title: 'Dazed and Confused', description: 'A groundbreaking coming-of-age film that follows a boys life from childhood to adulthood over twelve years.', link: 'https://www.imdb.com/title/tt1065073/' },
    ],
  }, 

  {
    name: 'Sofia Copolla',
    style: 'copolla-style', 
    movies: [ // Array of movie objects for Linklater
      { src: Lost, title: 'Lost in Translation', description: 'Two lonely souls form an unlikely bond in vibrant Tokyo, navigating cultural disconnection and personal isolation.', link: 'https://www.imdb.com/title/tt0335266/' },
      { src: Virgin, title: 'The Virgin Suicides', description: 'A haunting and thought-provoking exploration of the lives of five sisters and their profound impact on the suburban neighborhood around them.', link: 'https://www.imdb.com/title/tt0159097/' },
      { src: Marie, title: 'Marie Antoinette', description: 'A visually stunning portrayal of the iconic queen, balancing opulence and isolation in the lavish court of Versailles.', link: 'https://www.imdb.com/title/tt0422720/' },
    ],
  }, 
];

function App() {
  const [favs, setFavs] = useState([]);

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