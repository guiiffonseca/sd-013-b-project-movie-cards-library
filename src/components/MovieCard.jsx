import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props;
    return (
      <section className='movie-card'>
        <img src={imagePath} alt={title} />
        <div className='movie-card-body'>
          <h4 className='movie-card-title'>{title}</h4>
          <h5 className='movie-card-subtitle'>{subtitle}</h5>
          <p className='movie-card-storyline'>{storyline}</p>
        </div>
        <Rating rating={rating} />
      </section>
    );
  }
}

export default MovieCard;
