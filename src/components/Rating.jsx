// implement Rating component here
import React from 'react';

const Rating = (props) => {
    let rating = props.rating
    return (
        <div className="rating">
            {rating}
        </div>
    )
}

export default Rating;