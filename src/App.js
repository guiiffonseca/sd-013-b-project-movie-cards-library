import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <div className="movie-card-header">
        <Header />
      </div>
      <MovieList />
    </div>
  );
}

export default App;
