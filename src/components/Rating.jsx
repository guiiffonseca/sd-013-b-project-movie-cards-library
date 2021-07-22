import React from 'react';

class Ratings extends React.Component {
  render() {
    const rate = this.props.rate;
    return (
      <div className='rating'>
        { rate }
      </div>
    )
  }
}

export default Ratings;
