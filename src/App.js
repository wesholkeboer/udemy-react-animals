import "./App.css";
import { useState } from "react";
import AnimalShow from "./AnimalShow";

const getRandomAnimal = () => {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];

  return animals[Math.floor(Math.random() * animals.length)];
};

function App() {
  const [animals, setAnimals] = useState([]);
  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };
  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div className='app'>
      <button onClick={handleClick}>add animal</button>
      <div className='animal-list'>{renderedAnimals}</div>
      {/* {animals.map((animal) => {
        return <AnimalShow type={animal} />;
      })} */}
    </div>
  );
}

export default App;
