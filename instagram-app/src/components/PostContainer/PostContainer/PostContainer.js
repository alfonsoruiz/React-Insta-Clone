import React from 'react';
import Post from '../Post/Post';
import PropTypes from 'prop-types';
import './PostContainer.css';

const PostContainer = props => {
    return (
        <div className="post-container">
            {props.post.map(item => (
                <Post key={item.id} post={item} />
            ))}
        </div>
    );
};

PostContainer.propTypes = {
    post: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default PostContainer;