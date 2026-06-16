import React, { useState } from 'react';
import "./App.css";
const App = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="counter">
      <h1>Counter App</h1>
      <h2>Count: {count}</h2>

      <button className="btn" onClick={increment}>Increment</button>
      <button className="btn" onClick={decrement}>Decrement</button>
      <button className="btn" onClick={reset}>Reset</button>
    </div>
  );
};

export default App;