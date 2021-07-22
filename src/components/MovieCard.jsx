import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props;
    return (
      <section className='movie-card'>
        <div className='movie-card-body'>
          <img src={imagePath} className='movie-card-image' alt='' />
          <p className='movie-card-title'>{title}</p>
          <p className='movie-card-subtitle'>{subtitle}</p>
          <p className='movie-card-storyline'>{storyline}</p>
          <div className='movie-card-raitng'>
            Rating <p className='rating'> {rating}</p>
          </div>
        </div>
      </section>
    );
  }
}

export default MovieCard;
