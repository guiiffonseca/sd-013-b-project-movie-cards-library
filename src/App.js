import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Rating from './components/Rating';
import data from './data';

function App() {
  return (
    <div className="App">
      {/* Sua implementação deve ficar aqui. Remova essas duas linhas e mão na massa */}
      <Header />
      <MovieList movies={ data } />
      <Rating />
    </div>
  );
}

export default App;
