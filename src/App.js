import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    console.log("button was clicked");
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>add animal</button>
      <div>Number of animals: {count}</div>
    </div>
  );
}

export default App;
