// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {

  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props;
    return(
      <div>
        <img src= { imagePath } />
        <h4> { title } </h4>
        <h5></h5>
      </div>
    );
  }
}

export default MovieCard;