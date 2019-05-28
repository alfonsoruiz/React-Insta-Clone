import React from 'react';
import './Likes.css';
import PropTypes from 'prop-types';

const Likes = props => {
    return(
        <p className="post-likes">Likes {props.likes}</p>
    );
}

Likes.propTypes = {
    likes: PropTypes.number.isRequired
}

export default Likes;