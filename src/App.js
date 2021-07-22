import React from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Header from './components/Header';

class App extends React.Component {
  render() {
    const rating = 4.5;
    const movies = [
      {
        title: 'Movie Title 1',
        subtitle: 'Movie Subtitle 1',
        storyline: 'Movie Storyline 1',
        rating,
        imagePath: 'images/movie_1',
      },
      {
        title: 'Movie Title 2',
        subtitle: 'Movie Subtitle 2',
        storyline: 'Movie Storyline 2',
        rating,
        imagePath: 'images/movie_2',
      },
      {
        title: 'Movie Title 3',
        subtitle: 'Movie Subtitle 3',
        storyline: 'Movie Storyline 3',
        rating,
        imagePath: 'images/movie_3',
      },
    ];
    return (
      <div>
        <Header />
        {movies.map((movie, index) => (
          <>
            <MovieList movies={ movie } key={ index } />
            <hr />
          </>
        ))}

      </div>
    );
  }
}

export default App;
