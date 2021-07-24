import React from 'react';
import movies from '../data';

class Rating extends React.Component {
  render() {
    return (
      <div className="rating">
        { movies[0].rating }
      </div>
    );
  }
}

export default Rating;
