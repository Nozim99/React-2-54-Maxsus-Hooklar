import logo from './logo.svg';
import './App.css';
import usePrevious from './hook/usePrevious';
import React, {useState} from 'react';
import { useLocalStorage } from './hook/useLoaclStorage';

function App() {
  const [count, setCount] = useLocalStorage(0, 'count');
  const prevCount = usePrevious(count)

  return (
    <div className="App">
      <h1>Maxsus hooklar</h1>
      <p>Current: {count}</p>
      <p>Previous: {prevCount}</p>
      <button onClick={()=>setCount(count+1)}>Click</button>
    </div>
  );
}

export default App;
