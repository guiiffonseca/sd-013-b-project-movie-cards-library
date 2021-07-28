import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    return (
     <div className="movie-card">
       <img src={ imagePath }className="movie-card-image" />
       <h4 className="movie-card-title">{ title }</h4>
       <h5 className="movie-card-subtitle">{ subtitle }</h5>
       <p className="movie-card-storyline">{ storyline}</p>
       <div className="movie-card-rating">
          <Rating rating={ rating }/>
       </div>
     </div>
    );
  }
}

export default MovieCard;
