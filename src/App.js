import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <div>count : {count}</div>
      <button onClick={increase}>증가</button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        {' '}
        초기화
      </button>
    </div>
  );
}

export default App;
