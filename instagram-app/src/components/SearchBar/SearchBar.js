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
                <div className="logo-section">
                    <i className="fab fa-instagram"></i>
                    <h1>Instagram</h1>
                </div>
                <input placeholder="Search"/>
                <div className="user-controls">
                    <i className="far fa-compass"></i>
                    <i className="far fa-user"></i>
                    <i className="far fa-heart"></i>
                </div>
            </div>
        );
    }
}

export default SearchBar;