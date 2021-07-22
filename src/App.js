import React from 'react';

import Header from './components/Header';

import './App.css';
import movieData from './data';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movieData={ movieData } />
    </div>
  );
}

export default App;
