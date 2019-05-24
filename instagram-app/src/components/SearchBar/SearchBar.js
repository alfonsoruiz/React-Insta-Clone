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
                    <i class="fab fa-instagram"></i>
                    <h1>Instagram</h1>
                </div>
                <input placeholder="Search"/>
                <div className="user-controls">
                    <i class="far fa-compass"></i>
                    <i class="far fa-user"></i>
                    <i class="far fa-heart"></i>
                </div>
            </div>
        );
    }
}

export default SearchBar;