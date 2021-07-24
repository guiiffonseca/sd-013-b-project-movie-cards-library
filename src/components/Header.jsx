import React from 'react';

/* Defini-se uma classe com um nome de Header(cabeçalho) que renderiza e retorna as tags <header> e <h1>.
Com isso, está sendo criado o cabeçalhdo do projeto e com o texto "Movie Cards Library". */
class Header extends React.Component {
  render() {
    return (
      <header className="movie-card-header">
        <h1 className="page-title">
          Movie Cards Library
        </h1>
      </header>
    );
  }
}
export default Header;
