import React from 'react';
import './App.css';
import Header from './components/Header';
// import MovieList from './components/MovieList';
import movies from './data';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header />
        {/* <MovieList movies={movies} /> */}
        <div className='movie-list'>
          {movies.map(({ title, subtitle, storyline, rating, imagePath }) => {
            return (
              <section key={title} className='movie-card'>
                <div className='movie-card-body'>
                  <img src={imagePath} className='movie-card-image' />
                  <p className='movie-card-title'>{title}</p>
                  <p className='movie-card-subtitle'>{subtitle}</p>
                  <p className='movie-card-storyline'>{storyline}</p>
                  <div className='movie-card-raitng'>
                    Rating <p className='rating'> {rating}</p>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
