import React, { Component } from 'react';
import input from './input.css';

class Search extends Component {

    state = {
        search : '',
    };

  changeSearch = (event) => {
    this.setState ( {
      search : event.target.value
    })
  }

 search = async event => {
    event.preventDefault();
    const url  = `https://api.github.com/users/${this.state.search}/repos`;
    const response = await fetch (url);
    if (response.status ===  404) return  false;
    const repositories = await response.json();
    this.props.setRepositories(repositories);
 }

 render() {
    return (
          <form className="input-container" onSubmit={this.search}>
              <img
                  className ='img-field'
                  src = "https://upload.wikimedia.org/wikipedia/commons/2/20/Google-Logo.svg"
              />
              <input
                  className = "search-field"
                  type = "text"
                  name = "search-field"
                  placeholder = "Search"
                  onChange = {this.changeSearch}
                  value = {this.state.search}/>
              <button> Pesquisar</button>
          </form>
    );
  }
}

export default Search;
