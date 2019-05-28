import React from 'react';
import './PostHeader.css'
import PropTypes from 'prop-types';

    const PostHeader = props => {
        return (
            <header className="post-header">
                <img className="header-thumbnail" src={props.thumbnail} alt="header thumbnail" />
                <h1 className="user-name">{props.username}</h1>
            </header>
        );
    }

    PostHeader.propTypes = {
        username: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired
    }

export default PostHeader;