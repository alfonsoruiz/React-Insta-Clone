import React from 'react';
import SearchInput from './SearchInput/SearchInput';
import './SearchBar.css';

const SearchBar = props => {
    return (
        <div className='search-bar'>
            <div className="logo-section">
                <i className="fab fa-instagram"></i>
                <h1>Instagram</h1>
            </div>
            <SearchInput captureInput={props.captureInput} filterPost={props.filterPost} search={props.search} />
            <div className="user-controls">
                <i className="far fa-compass"></i>
                <i className="far fa-user"></i>
                <i className="far fa-heart"></i>
            </div>
        </div>
    );

}
export default SearchBar;