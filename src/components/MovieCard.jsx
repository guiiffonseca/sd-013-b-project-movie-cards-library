import React from 'react';


class MovieCard extends React.Component {
  render() {
    const {key, subtitle, story, image, ratin} = this.props;
    return (
      <div className="movie-card">
        <img src = {image} alt = "Filme"></img>
        <h4>{key}</h4>
        <h5>{subtitle}</h5>
        <p>{story}</p>
        <p>{ratin}</p>
      </div>
    );
  }
}

export default MovieCard;
