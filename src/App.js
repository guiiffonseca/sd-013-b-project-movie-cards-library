import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Rating from './components/Rating';

function App() {
  const movies = ['Hasta la vista', 'Volta aqui comigo'];
  return (
    <div className="App">
      <Header />
      <MovieList movies={ movies } />
      <Rating />
    </div>
  );
}

export default App;
