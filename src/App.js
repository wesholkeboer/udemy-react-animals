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
    <div>
      <button onClick={handleClick}>add animal</button>
      <div>{renderedAnimals}</div>
      {/* {animals.map((animal) => {
        return <AnimalShow type={animal} />;
      })} */}
    </div>
  );
}

export default App;
