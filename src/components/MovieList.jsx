// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

const MovieList = (movies) => {
    const movies = this.props;

    return (
        <div className="movie-list">
            <MovieCard/>
        </div>
    )
}

export default MovieList;