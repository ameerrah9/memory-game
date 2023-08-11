import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Grid from './Components/Grid';
import { cardImages } from './Components/Images';

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisable] = useState(false);

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="App">
      <Header turns={turns} onShuffle={shuffleCards}/>
      <Grid cards={cards} choiceOne={choiceOne} choiceTwo={choiceTwo} disabled={disabled} handleChoice={handleChoice} />
    </div>
  );
}

export default App;
