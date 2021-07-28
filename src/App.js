import React from 'react';
import './App.css';
import movies from './data';
import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  return (
    <>
      <Header />
      <MovieList movies={ movies } />
    </>
  );
}

export default App;
