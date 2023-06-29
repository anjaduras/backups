import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Game.css';
import AlphabetData from '../alphabet.json';

function Game() {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const randomLetter = AlphabetData[Math.floor(Math.random() * AlphabetData.length)];
  const randomPicture = randomLetter.photo;
  const heart = 'images/heart.png';

  const randomLetters = AlphabetData
    .filter(letter => letter.letter !== randomLetter.letter)
    .sort(() => 0.5 - Math.random())
    .slice(0, 2);

  randomLetters.push(randomLetter);
  randomLetters.sort(() => 0.5 - Math.random());

  const correctAnswer = randomLetter.letter;

  const handleAnswerSelection = (answer) => {
    if (answer === correctAnswer) {
      setSelectedAnswer(answer);
      setScore(prevScore => prevScore + 1);
    } else {
      setSelectedAnswer(null);
    }
  };

  return (
    <div className='gameBody'>
      <Link to='/' className='backLink'>ZURÜCK</Link>
      <h1>GUESS THE SIGN!</h1>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
      </p>
      <br /><br /><br /><br />
      <img src={randomPicture} alt='Random Letter' className='gesture' />
      <br /><br /><br />
      <h3>What does this look like?</h3>
      {randomLetters.map((letter, index) => (
        <button
          key={index}
          className={`gameButton ${selectedAnswer === letter.letter ? 'selected' : ''}`}
          onClick={() => handleAnswerSelection(letter.letter)}
        >
          {letter.letter}
        </button>
      ))}
      {selectedAnswer !== null && (
        <p className={`feedback ${selectedAnswer === correctAnswer ? 'correct' : 'incorrect'}`}>
          {selectedAnswer === correctAnswer ? 'Correct!' : 'Incorrect!'}
        </p>
      )}
      <br />
      <p>Score: {score}</p>
      <img src={heart} alt='' width={70} />
      <img src={heart} alt='' width={70} />
      <img src={heart} alt='' width={70} />
    </div>
  );
}

export default Game;
