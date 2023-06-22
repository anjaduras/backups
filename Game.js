import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Game.css';
import AlphabetData from '../alphabet.json';

function Game() {
  const randomLetter = AlphabetData[Math.floor(Math.random() * AlphabetData.length)];
  const randomPicture = randomLetter.photo;
  const heart = "images/heart.png";

  // Generate an array of random letters excluding the correct letter
  const randomLetters = AlphabetData
    .filter(letter => letter.letter !== randomLetter.letter)
    .sort(() => 0.5 - Math.random())
    .slice(0, 2);

  // Add the correct letter to the randomLetters array
  randomLetters.push(randomLetter);

  // Shuffle the randomLetters array to display buttons in random order
  randomLetters.sort(() => 0.5 - Math.random());

  return (
    <div className='gameBody'>
      <Link to="/" className='backLink'>ZURÜCK</Link>
      <h1>GUESS THE SIGN!</h1>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores</p>
      <br /> <br /> <br /> <br />
      <img src={randomPicture} alt="Random Letter" className='gesture' />
      <br /> <br /> <br />
      <h3>What does this look like?</h3>
      {randomLetters.map((letter, index) => (
        <button key={index} className='gameButton'>{letter.letter}</button>
      ))}
      <br /> <br /> <br /> <br /> <br /> <br />
      <img src={heart} alt="" width={70} />
      <img src={heart} alt="" width={70} />
      <img src={heart} alt="" width={70} />
    </div>
  );
}

export default Game;
