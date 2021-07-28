import React from 'react';
import './App.css';
import MovieList from './components/MovieList';
import data from './data'

function App() {
  return (
    <MovieList movies={ data }/>
  );
}

export default App;
