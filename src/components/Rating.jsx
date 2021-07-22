import React from 'react';

class Rating extends React.Component {
  render() {
    const {rate} = this.props;
    return (
      <p className='rating'>{rate}</p>
    );
  }
}


export default Rating;
