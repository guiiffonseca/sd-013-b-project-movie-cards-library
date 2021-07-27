import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props;

    return (
      <div>
        <img src={ imagePath } alt="" />
        <h2>{ title }</h2>
        <p>{ subtitle }</p>
        <p>{ storyline }</p>
        <p>{ rating }</p>
      </div>
    );
  }
}

export default MovieCard;
