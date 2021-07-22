import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props;
    return (
      <section className='movie-card'>
        <h1>
          {title}
          {subtitle}
        </h1>
        <p>{storyline}</p>
        
        <p>{rating}</p>



      </section>
    )
  }
}

export default MovieCard;
