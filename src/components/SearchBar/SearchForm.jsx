import React, { Component } from 'react';
import T from 'prop-types';

class SearchForm extends Component {
  static propTypes = {
    updateQuery: T.func.isRequired,
  };

  state = {
    searchQuery: '',
  };

  handleChange = (e) => {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.updateQuery(this.state.searchQuery)
  };

  render() {
    return (
      <form className="search-form" onSubmit={ this.handleSubmit }>
        <button type="submit" className="search-form__button">
          <span className="search-form__button-label">Поиск</span>
        </button>
        <input
          onChange={ this.handleChange }
          name="searchQuery"
          className="search-form__input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Введите то, что хотите найти..."
        />
      </form>
    )
  }
}

export default SearchForm;