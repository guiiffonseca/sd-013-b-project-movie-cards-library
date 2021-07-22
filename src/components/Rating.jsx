import React, { Component } from 'react';

class Rating extends Component {
  render() {
    const { rating } = this.props;
    return (
      <div className='rating'>{ rating }</div>
    )
  }
}

export default Rating;
