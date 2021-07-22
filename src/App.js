import React from 'react';
import './App.css';
import Header from './components/Header';
import Movies from './components/MovieList';

function App() {
  return (
    <div className="App">
      {Header}
      {Movies}
    </div>
  );
}

export default App;
