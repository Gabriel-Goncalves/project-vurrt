import React from 'react';
import Header from '../Componentes/Header';
import Search from '../Componentes/Search';
import TollsList from '../Componentes/TollsList';

class Home extends React.Component {

  constructor() {
      super();
      this.state = {
        tagOnly: false,
        inputSearch: '',
      }
      this.updateState = this.updateState.bind(this);
  }

  updateState(searchState) {
    const { tagOnly, inputSearch } = searchState;
    this.setState({
        tagOnly,
        inputSearch,
    })
  }

  render() {
    return (
      <div>
        <Header />
        <main className="main-content">
          <Search callback={ this.updateState } />
          <TollsList />
        </main>
      </div>
    );
  }
}

export default Home;
