import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import list from './data';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ list } />
    </div>
  );
}

export default App;
