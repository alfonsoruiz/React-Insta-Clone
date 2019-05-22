import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {
            input: '',
        }
    }

    render() {
        return (
            <div className='search-bar'>
                <h1>Instagram</h1>
            </div>
        );
    }
}

export default SearchBar;