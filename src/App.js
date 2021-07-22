import React from 'react';
import './App.css';
import data from './data';
import MovieList from './components/MovieList';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList data={ data } />
    </div>
  );
}

export default App;
