// implement Rating component here
import React from 'react';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return <span>{`Rating ${rating}`}</span>;
  }
}

export default Rating;
