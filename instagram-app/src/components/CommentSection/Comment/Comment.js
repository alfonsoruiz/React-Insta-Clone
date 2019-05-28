import React from 'react';
import './Comment.css';
import PropTypes from 'prop-types';

const Comment = props => {
    return (
        <div className="comment">
            <p><span>{props.comment.username}</span>{props.comment.text}</p>
        </div>
    );
}

Comment.propTypes = {
    comment: PropTypes.shape({
        id: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        text: PropTypes.string
    }).isRequired
}

export default Comment;