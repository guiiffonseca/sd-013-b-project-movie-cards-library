import React from 'react';

class MovieCard extends React.Component {
  render() {
    const movie = this.props.oneMovie;
    return (
      <div className='movie-card'>
        <img className='movie-card-image' src= { movie.imagePath }/>
        { movie.title }
      </div>
    )
  }
}

export default MovieCard;