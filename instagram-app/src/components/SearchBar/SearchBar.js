import React from 'react';
import SearchInput from './SearchInput/SearchInput';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {
            search: '',
        }
    }

    captureInput = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div className='search-bar'>
                <div className="logo-section">
                    <i className="fab fa-instagram"></i>
                    <h1>Instagram</h1>
                </div>
                <SearchInput searchQuery={this.state.search} captureInput={this.captureInput}/>
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