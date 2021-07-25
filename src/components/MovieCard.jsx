// implement MovieCard component here
import React from "react";

const MovieCard = () => {
    let imagePath = 'images/movie_1';
    let title = 'Movie Title 1';
    let subtitle = 'Movie Subtitle 1';

    return <div>
        <img src={imagePath}></img>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
    </div>
}

export default MovieCard;