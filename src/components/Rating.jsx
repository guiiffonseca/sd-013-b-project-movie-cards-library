// implement Rating component here
import React from 'react';

class Rating extends React.Component {
  render() {
    // console.log(this.props)
    const { rating } = this.props;
    return (
      <div className="evalu">
        <p>Rating</p>
        <div>
          <h4 className="rating">{rating}</h4>
        </div>
      </div>
    );
  }
}

export default Rating;