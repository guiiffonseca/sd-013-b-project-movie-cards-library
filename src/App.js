import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieCard from './components/MovieCard';
// import MovieList from './components/MovieList';
import movies from './data';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header />
        {/* <MovieList movies={movies} /> */}
        <div className='movie-list'>
          {movies.map(({ title, subtitle, storyline, rating, imagePath }) => (
            <MovieCard
              key={title}
              title={title}
              subtitle={subtitle}
              storyline={storyline}
              rating={rating}
              imagePath={imagePath}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
