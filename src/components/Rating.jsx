import React from 'react';

class Rating extends React.Component {
  render() {
    const movies = this.props;
    return (
      <div className="rating">{ movies.rating }</div>
    );
  }
}

export default Rating;
