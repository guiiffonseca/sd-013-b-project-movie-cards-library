import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';
// import Rating from './components/Rating';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <MovieList movies={ movies } />
      </div>
    </div>
  );
}

export default App;
