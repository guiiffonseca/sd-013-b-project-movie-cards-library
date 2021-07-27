import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import './App.css';
import movies from './data';
import MovieCard from './components/MovieCard';

function App() {
  return (
    <div className="App">
      {movies.map(({ title, subtitle, storyline, rating, imagePath }) => (
        <MovieCard
          key={ title }
          subtitle={ subtitle }
          storyline={ storyline }
          rating={ rating }
          imagePath={ imagePath }
        />
      ))}
      <Header />
      <MovieList movies={ movies } title={ movies.title } />

    </div>
  );
}

export default App;
