import React from 'react';
import './SearchInput.css';

const SearchInput = props => {
    return (
        <form onSubmit={props.filterPost}>
            <input
                className="search-input"
                type="text"
                value={props.searchQuery}
                placeholder="search"
                name="search"
                onChange={props.captureInput}
            />
        </form>
    );
}

export default SearchInput