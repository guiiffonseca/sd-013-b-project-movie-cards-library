import React from 'react';  
import Rating from './Rating';   

class MovieCard extends React.Component {
  
  render() {
    const  { title, subtitle, storyline, imagePath, rating }  = this.props;
    return (
      <section className= 'movie-card'>
        <img className= 'movie-card-image' src={ imagePath } alt={ title } />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
        <Rating 
          rating ={ rating }/>
      </section> 

    )

  };
};

export default MovieCard;