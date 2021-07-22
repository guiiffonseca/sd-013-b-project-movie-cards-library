import React from 'react';

class MovieCard extends React.Component {
  render() {
    const movie = this.props.oneMovie;
    return (<div>{ movie.title }</div>)
  }
}

export default MovieCard;