// implement Header component here
import React from 'react';

class Header extends React.Component {
  render() {
    const pageTitle = 'Movie Cards Library';
    return (
      <header className="movie-card-header">
        <h1 className="page-title">{ pageTitle }</h1>
      </header>
    );
  }
}

export default Header;
