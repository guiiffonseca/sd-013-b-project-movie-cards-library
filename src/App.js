import React from 'react';
import './App.css';
import Header from './components/Header'
import MovieList from './components/MovieList'
import data from './data.js';

function App() {
  const movies = data;
  return (
    <div className="App">
      <Header/>
      <MovieList allMovies={ movies } />
    </div>
  );
}

export default App;
