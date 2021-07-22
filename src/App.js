import { render } from 'enzyme';
import React from 'react';
import './App.css';
import Header from './components/Header';
import Data from './data';
import MovieList from './components/MovieList';

function App() {
  render(); {
    return (
      <div className="App">
        <Header />
        <MovieList />
      </div>
    );
  }
}

export default App;
