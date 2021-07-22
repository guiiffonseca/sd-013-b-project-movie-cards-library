import React from 'react';

class MovieCart extends React.Component {
  render() {
    return (
      <h1>{this.props.data.subtitle}</h1>
    )
  }
}

export default MovieCart;
