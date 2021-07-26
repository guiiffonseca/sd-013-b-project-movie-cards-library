// implement MovieCard component here
import React from "react";
import Rating from "./Rating"

const MovieCard = (props) => {
    let movies = props.movie
    let imagePath = movies.imagePath;
    let title = movies.title;
    let subtitle = movies.subtitle;
    let storyline = movies.storyline;
    let rating = movies.rating;

    return <div>
        <img src={imagePath}></img>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Rating rating={rating} />
    </div>
}

export default MovieCard;