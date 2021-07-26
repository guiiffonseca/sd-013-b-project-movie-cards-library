import React from 'react';

class Movie extends React.Component {
  render() {
    const {movieInfo} = this. props

    return (
      <main>
        <div>{movieInfo.title}</div>
        <div>{movieInfo.subtitle}</div>
        <div>{movieInfo.storyline}</div>
        <div>{movieInfo.rating}</div>
        <div>{movieInfo.imagePath}</div>
      </main>
    );
  }

}

export default Movie;