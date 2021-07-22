import React from 'react';
import './App.css';
import movies from './data';

function App() {
  return (
    <div className="App">
      {/* Sua implementação deve ficar aqui. Remova essas duas linhas e mão na massa */}
      <p>{movies[0].title}</p>
    </div>
  );
}

export default App;
