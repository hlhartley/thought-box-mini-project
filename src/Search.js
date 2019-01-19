import React, { Component } from 'react';

class Search extends Component {
    constructor() {
        super();
    }

        render() {
        return (
            <div className="search-container">
                <input className='search-input' placeholder='search ideas'></input><button className='search-btn'><i className="fas fa-search"></i></button>
            </div>
        );
        }
    }
  
export default Search;