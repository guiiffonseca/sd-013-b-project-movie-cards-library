import React, { Component } from 'react';

export default class MovieCard extends Component {
  render() {
    const {movie:{title, subtitle, storyline, imagePath, rating}}=this.props;
    console.log(this.props);
    return (
      <div>
        <h1>{title}</h1>
      </div>
    );
  }
}
