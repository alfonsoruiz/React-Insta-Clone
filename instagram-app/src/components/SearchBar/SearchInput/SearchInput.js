import React from 'react';
import './SearchInput.css';

const SearchInput = props => {
    return (
        <input
            className="search-input"
            type="text"
            value={props.searchQuery}
            placeholder="search"
            name="search"
            onChange={props.captureInput}
        />
    );
}

export default SearchInput