import React from 'react';

class MovieCard extends React.Component {
  render() {
    const movie = this.props.oneMovie;
    return (
      <div className='movie-card'>
        <img className='movie-card-image' src= { movie.imagePath }/>
        <h4 className='movie-card-title'>{ movie.title }</h4>
        <h5 className='movie-card-subtitle'>{ movie.subtitle }</h5>
        <p className='movie-card-subtitle'>{ movie.storyline }</p>
      </div>
    )
  }
}

export default MovieCard;