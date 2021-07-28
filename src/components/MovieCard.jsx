import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props;
    return (
      <img src={ imagePath } alt="Capa do filme" />
    );
  }
}

export default MovieCard;
