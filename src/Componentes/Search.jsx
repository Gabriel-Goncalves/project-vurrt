import React from 'react';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      inputSearch: '',
      tagOnly: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleChange(event) {
    this.setState({ inputSearch: event.target.value }, ()=> {
      const { callback } = this.props;
      callback(this.state);
    });
  }

  handleCheck(event) {
    this.setState({ tagOnly: event.target.checked }, ()=> {
      const { callback } = this.props;
      callback(this.state);
    });
  }

  render() {
    return (
      <div className="search-component">
        <form className="form-search">
          <label htmlFor="input-search">
            <input
              type="text"
              name="inputSearch"
              placeholder="Search"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="tagOnly">
            <input type="checkbox" name="tagOnly" onChange={this.handleCheck} />
            Search in tags only
          </label>
        </form>
      </div>
    );
  }
}

export default Search;
