import React, { Component } from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movie from './data';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MovieList movie={ movie } />
      </div>
    );
  }
}
export default App;
