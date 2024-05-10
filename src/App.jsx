import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className="continer">
      <h1>Counter</h1>
      <div className="text">Count = {count}</div>
      <div className="btns">
        <button onClick={() => setCount(count-1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount (count+1)}>Increment</button>
      </div>
    </div>
      
    </>
  )
}

export default App
